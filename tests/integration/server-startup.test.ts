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
      await sleep(1000) // Give it time to shut down
    }
  })

  test('dev server should start without runtime errors', async () => {
    const timeout = 20000 // 20 seconds

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

        if (chunk.includes('Ready in') || chunk.includes('Local:')) {
          serverReady = true
        }
      })

      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk

        // Check for the specific runtime errors we're trying to catch
        if (
          chunk.includes('missing required "width"') ||
          chunk.includes('Unhandled Runtime Error')
        ) {
          clearTimeout(timeoutId)
          reject(new Error(`Runtime error detected: ${chunk.trim()}`))
        }
      })

      serverProcess.on('error', (error) => {
        clearTimeout(timeoutId)
        reject(new Error(`Failed to start server: ${error.message}`))
      })

      // Simple check - if server starts without immediate errors, that's success
      setTimeout(() => {
        if (serverReady && !serverProcess.killed) {
          clearTimeout(timeoutId)
          resolve()
        } else if (!serverProcess.killed) {
          // Give it a bit more time
          setTimeout(() => {
            if (output.includes('Ready in') || output.includes('Local:')) {
              clearTimeout(timeoutId)
              resolve()
            }
          }, 2000)
        }
      }, 8000) // Check after 8 seconds
    })
  }, 25000) // 25 second timeout for the test itself

  test('server should serve testimonials page without errors', async () => {
    const startTime = Date.now()
    const timeout = 30000

    return new Promise<void>((resolve, reject) => {
      let serverReady = false
      let output = ''

      serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: 'pipe',
        env: { ...process.env, NODE_ENV: 'development' },
      })

      serverProcess.stdout?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk
        if (chunk.includes('Ready in') || chunk.includes('Local:')) {
          serverReady = true
        }
      })

      serverProcess.stderr?.on('data', (data) => {
        const chunk = data.toString()
        output += chunk
        if (
          chunk.includes('missing required') ||
          chunk.includes('Unhandled Runtime Error')
        ) {
          reject(new Error(`Runtime error: ${chunk}`))
        }
      })

      const checkHomepage = async () => {
        if (serverReady) {
          try {
            const response = await fetch('http://localhost:3000')
            if (response.ok) {
              const html = await response.text()

              // Check that testimonials are actually rendered
              const hasTestimonials =
                html.includes('OpenTeams') ||
                html.includes('Justice Innovation Lab') ||
                html.includes('testimonial')

              if (hasTestimonials) {
                resolve()
              } else {
                reject(new Error('Homepage loaded but testimonials not found'))
              }
            } else {
              reject(
                new Error(`Server responded with status ${response.status}`),
              )
            }
          } catch (error) {
            if (Date.now() - startTime < timeout) {
              await sleep(1000)
              checkHomepage()
            } else {
              reject(new Error(`Failed to check homepage: ${error}`))
            }
          }
        } else if (Date.now() - startTime < timeout) {
          await sleep(1000)
          checkHomepage()
        } else {
          reject(new Error(`Server not ready after ${timeout}ms`))
        }
      }

      checkHomepage()
    })
  }, 45000)
})
