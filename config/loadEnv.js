const path = require('path')
const dotenv = require('dotenv')

/**
 * Loads the .env file and validates required environment variables.
 * Throws an error if any required variable is missing.
 */
function loadEnv() {
  const envPath = path.resolve('.env')
  dotenv.config({ path: envPath })

  // List of required environment variables
  const requiredEnvVars = [
    'BASE_URL',
    'LOGIN_PAGE_PATH',
    'INVENTORY_PAGE_PATH',
    'CART_PAGE_PATH',
    'STANDARD_USER_PASSWORD',
    'LOCKED_OUT_USER_PASSWORD',
    'PROBLEM_USER_PASSWORD',
    'PERFORMANCE_GLITCH_USER_PASSWORD',
    'ERROR_USER_PASSWORD',
    'VISUAL_USER_PASSWORD',
  ]

  /**
   * Validates that all required environment variables are defined.
   * Throws an error if any variable is missing.
   */
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Environment variable ${varName} is not defined.`)
    }
  })
}

loadEnv()

module.exports = process.env
