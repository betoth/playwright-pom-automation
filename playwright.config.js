/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true, // Determine if tests should run in headless mode
    viewport: { width: 1280, height: 720 }, // Set the default viewport size for tests
    ignoreHTTPSErrors: true, // Ignore HTTPS errors for test URLs
    trace: 'on-first-retry', // Capture a trace when a test fails on the first retry
    screenshot: 'only-on-failure', // Capture screenshots only if the test fails
    actionTimeout: 10000, // Timeout for individual actions (10 seconds)
    video: 'retain-on-failure', // Retain video recording when a test fails
  },
  reporter: [
    ['html', { open: 'never' }], // Generate an HTML report but do not open it automatically
  ],
  timeout: 20000, // Set a global timeout that can be configured via an environment variable (default: 20 seconds)
  retries: 2, // Number of retries for failed tests
  testDir: './tests', // Directory containing the test files
  workers: 2, // Limit the number of concurrent workers
}

module.exports = config
