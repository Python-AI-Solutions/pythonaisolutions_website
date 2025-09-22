/**
 * Integration test that actually starts the server and validates it works
 * This catches real runtime errors that mocked tests miss
 * 
 * These tests are OPTIONAL by default to avoid port conflicts in CI/local environments.
 * 
 * To run these tests:
 * - Set RUN_INTEGRATION_TESTS=true environment variable
 * - Or run: RUN_INTEGRATION_TESTS=true npm test
 * 
 * Why these are optional:
 * - Port conflicts are common (especially port 3000)
 * - E2E tests already cover the same functionality
 * - They're slower and less reliable than unit tests
 * - Useful mainly for debugging server startup issues
 */
import { spawn, ChildProcess } from 'child_process'
import { promisify } from 'util'

const sleep = promisify(setTimeout)

// Determine if integration tests should run
const SHOULD_RUN_INTEGRATION_TESTS = 
  process.env.RUN_INTEGRATION_TESTS === 'true' ||
  process.env.RUN_ALL_TESTS === 'true'

// Skip message for clarity
const SKIP_MESSAGE = `
Integration tests are skipped by default to avoid port conflicts.
To run them: RUN_INTEGRATION_TESTS=true npm test
These tests verify server startup but E2E tests provide similar coverage.
`

// Use conditional describe based on environment
const describeIntegration = SHOULD_RUN_INTEGRATION_TESTS ? describe : describe.skip

describeIntegration('Server Integration', () => {
  let serverProcess: ChildProcess | null = null

  // Log when tests are running
  if (SHOULD_RUN_INTEGRATION_TESTS) {
    beforeAll(() => {
      console.log('\n🧪 Running optional integration tests...')
      console.log('   These tests start an actual dev server.')
      console.log('   If they fail due to port conflicts, you can safely skip them.\n')
    })
  }

  afterEach(async () => {
    // Cleanup server process
    if (serverProcess) {
      try {
        // Kill the process group to ensure all child processes are terminated
        if (serverProcess.pid) {
          process.kill(-serverProcess.pid, 'SIGTERM')
        } else {
          serverProcess.kill('SIGTERM')
        }
      } catch (e) {
        // Process might already be dead
      }
      
      // Wait a bit for cleanup
      await sleep(2000)
      
      // Force kill if still running
      try {
        if (serverProcess.killed === false) {
          serverProcess.kill('SIGKILL')
        }
      } catch (e) {
        // Process already dead
      }
      
      serverProcess = null
    }
    // Give the OS time to release the port
    await sleep(1000)
  }, 30000) // 30 second timeout for cleanup

  test('dev server should start without runtime errors', async () => {
    const timeout = 60000 // 60 seconds - Next.js can be slow to start

    return new Promise<void>((resolve, reject) => {
      let serverReady = false
      let output = ''
      let errorOutput = ''
      let timeoutId: NodeJS.Timeout

      // Set overall timeout
      timeoutId = setTimeout(() => {
        if (!serverReady) {
          reject(
            new Error(
              `Test timeout after ${timeout}ms. Server output:\n${output}\nErrors:\n${errorOutput}`,
            ),
          )
        }
      }, timeout)

      // Start the dev server - let Next.js pick its own port
      serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: 'pipe',
        env: { 
          ...process.env, 
          NODE_ENV: 'development'
        },
        // Create new process group for better cleanup
        detached: process.platform !== 'win32'
      })

      // Collect stdout
      serverProcess.stdout?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk

        // More flexible server ready detection
        if (!serverReady && (
          chunk.includes('Ready') ||
          chunk.includes('ready') ||
          chunk.includes('started server') ||
          chunk.includes('Local:') ||
          chunk.includes('✓') && chunk.includes('Ready')
        )) {
          serverReady = true
          clearTimeout(timeoutId)
          
          // Give it a moment to fully stabilize
          setTimeout(() => {
            // Check if process is still alive
            if (serverProcess && !serverProcess.killed) {
              resolve()
            } else {
              reject(new Error('Server process died after starting'))
            }
          }, 2000)
        }
      })

      // Collect stderr
      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        errorOutput += chunk
        
        // Check for actual fatal errors (not warnings or port retries)
        if (
          chunk.includes('Error:') && 
          !chunk.includes('Warning:') && 
          !chunk.includes('EADDRINUSE') && // Ignore port conflicts - Next.js will retry
          !chunk.includes('Port') &&
          !chunk.includes('trying') &&
          !chunk.includes('Deprecation')
        ) {
          clearTimeout(timeoutId)
          reject(new Error(`Fatal server error: ${chunk.trim()}`))
        }
      })

      // Handle process errors
      serverProcess.on('error', (error) => {
        clearTimeout(timeoutId)
        reject(new Error(`Failed to start server: ${error.message}`))
      })

      // Handle unexpected exit
      serverProcess.on('exit', (code) => {
        if (code !== 0 && code !== null && !serverReady) {
          clearTimeout(timeoutId)
          reject(
            new Error(`Server exited with code ${code}. Output:\n${output}\nErrors:\n${errorOutput}`),
          )
        }
      })
    })
  }, 65000) // 65 second timeout for the test itself

  test('server handles missing image error gracefully', async () => {
    const timeout = 60000 // 60 seconds

    return new Promise<void>((resolve, reject) => {
      let serverReady = false
      let output = ''
      let errorOutput = ''
      let hasImageError = false
      let timeoutId: NodeJS.Timeout

      timeoutId = setTimeout(() => {
        if (!serverReady) {
          reject(new Error(`Server failed to start within ${timeout}ms`))
        } else if (!hasImageError) {
          // No image error detected, which is good
          resolve()
        }
      }, timeout)

      // Start the dev server
      serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: 'pipe',
        env: { 
          ...process.env, 
          NODE_ENV: 'development'
        },
        detached: process.platform !== 'win32'
      })

      serverProcess.stdout?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk

        if (!serverReady && (
          chunk.includes('Ready') ||
          chunk.includes('started server') ||
          chunk.includes('Local:')
        )) {
          serverReady = true
          // Wait a bit to see if any runtime errors occur
          setTimeout(() => {
            if (!hasImageError) {
              clearTimeout(timeoutId)
              resolve()
            }
          }, 5000)
        }
      })

      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        errorOutput += chunk
        
        // Check specifically for the image error we're trying to avoid
        if (
          chunk.includes('missing required "width"') ||
          chunk.includes('Image with src') && chunk.includes('missing')
        ) {
          hasImageError = true
          clearTimeout(timeoutId)
          reject(new Error(`Runtime image error detected: ${chunk.trim()}`))
        }
      })

      serverProcess.on('error', (error) => {
        clearTimeout(timeoutId)
        reject(new Error(`Failed to start server: ${error.message}`))
      })

      serverProcess.on('exit', (code) => {
        if (code !== 0 && code !== null && !serverReady) {
          clearTimeout(timeoutId)
          reject(new Error(`Server exited with code ${code}`))
        }
      })
    })
  }, 65000)
})

// Print skip message when tests are skipped
if (!SHOULD_RUN_INTEGRATION_TESTS) {
  describe('Server Integration (Skipped)', () => {
    test('ℹ️  Integration tests are optional', () => {
      console.log(SKIP_MESSAGE)
      expect(true).toBe(true)
    })
  })
}