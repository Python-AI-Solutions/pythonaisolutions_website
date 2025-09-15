/**
 * Integration test that actually starts the server and validates it works
 * This catches real runtime errors that mocked tests miss
 */
import { spawn, ChildProcess } from 'child_process'
import { promisify } from 'util'

const sleep = promisify(setTimeout)

describe('Server Integration', () => {
  let serverProcess: ChildProcess

  afterEach(async () => {
    if (serverProcess) {
      serverProcess.kill('SIGTERM')
      await sleep(3000) // Give it more time to shut down
    }
  }, 10000) // 10 second timeout for cleanup

  test('dev server should start without runtime errors', async () => {
    const timeout = 30000 // 30 seconds

    return new Promise<void>((resolve, reject) => {
      let serverReady = false
      let output = ''
      let timeoutId: NodeJS.Timeout

      // Set overall timeout
      timeoutId = setTimeout(() => {
        reject(
          new Error(
            `Test timeout after ${timeout}ms. Server output: ${output}`,
          ),
        )
      }, timeout)

      // Start the dev server
      serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'development' },
      })

      // Collect all output
      serverProcess.stdout?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk

        // More flexible server ready detection
        if (
          chunk.includes('Ready in') ||
          chunk.includes('Local:') ||
          chunk.includes('ready - started server')
        ) {
          serverReady = true
          clearTimeout(timeoutId)
          resolve()
        }
      })

      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk

        // Check for the specific runtime errors we're trying to catch
        if (
          chunk.includes('missing required "width"') ||
          chunk.includes('Unhandled Runtime Error') ||
          chunk.includes('Error: ')
        ) {
          clearTimeout(timeoutId)
          reject(new Error(`Runtime error detected: ${chunk.trim()}`))
        }
      })

      serverProcess.on('error', (error) => {
        clearTimeout(timeoutId)
        reject(new Error(`Failed to start server: ${error.message}`))
      })

      serverProcess.on('exit', (code) => {
        if (code !== 0 && code !== null) {
          clearTimeout(timeoutId)
          reject(
            new Error(`Server exited with code ${code}. Output: ${output}`),
          )
        }
      })
    })
  }, 35000) // 35 second timeout for the test itself

  test('server should serve testimonials page without errors', async () => {
    const startTime = Date.now()
    const timeout = 45000 // 45 seconds

    return new Promise<void>((resolve, reject) => {
      let serverReady = false
      let output = ''
      let timeoutId: NodeJS.Timeout

      // Set overall timeout
      timeoutId = setTimeout(() => {
        reject(
          new Error(
            `Test timeout after ${timeout}ms. Server output: ${output}`,
          ),
        )
      }, timeout)

      serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'development' },
      })

      serverProcess.stdout?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk
        if (
          chunk.includes('Ready in') ||
          chunk.includes('Local:') ||
          chunk.includes('ready - started server')
        ) {
          serverReady = true
        }
      })

      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk
        if (
          chunk.includes('missing required') ||
          chunk.includes('Unhandled Runtime Error') ||
          chunk.includes('Error: ')
        ) {
          clearTimeout(timeoutId)
          reject(new Error(`Runtime error: ${chunk}`))
        }
      })

      const checkHomepage = async () => {
        if (serverReady) {
          try {
            const response = await fetch('http://localhost:3000')
            if (response.ok) {
              const html = await response.text()

              // Check that client logos are actually rendered (more specific than testimonials)
              const hasClients =
                html.includes('OpenTeams') ||
                html.includes('Justice Innovation Lab') ||
                html.includes('PyTorch Ignite') ||
                html.includes('Providing trusted services globally')

              if (hasClients) {
                clearTimeout(timeoutId)
                resolve()
              } else {
                clearTimeout(timeoutId)
                reject(
                  new Error('Homepage loaded but client section not found'),
                )
              }
            } else {
              clearTimeout(timeoutId)
              reject(
                new Error(`Server responded with status ${response.status}`),
              )
            }
          } catch (error) {
            if (Date.now() - startTime < timeout - 5000) {
              // Leave 5s buffer
              await sleep(2000) // Wait longer between retries
              checkHomepage()
            } else {
              clearTimeout(timeoutId)
              reject(new Error(`Failed to check homepage: ${error}`))
            }
          }
        } else if (Date.now() - startTime < timeout - 5000) {
          await sleep(2000) // Wait longer between checks
          checkHomepage()
        } else {
          clearTimeout(timeoutId)
          reject(
            new Error(`Server not ready after ${timeout}ms. Output: ${output}`),
          )
        }
      }

      // Wait a bit before starting checks
      setTimeout(() => {
        checkHomepage()
      }, 3000)
    })
  }, 60000) // 60 second timeout for the test itself
})
