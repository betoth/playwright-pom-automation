const { PASSWORDS } = require('../config/constants')

/**
 * User credentials for testing.
 * Exports an object containing user credentials for different types of users.
 */
module.exports = {
  standardUser: {
    username: 'standard_user',
    password: PASSWORDS.STANDARD_USER, // Password loaded from constants
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: PASSWORDS.LOCKED_OUT_USER,
  },
  problemUser: {
    username: 'problem_user',
    password: PASSWORDS.PROBLEM_USER,
  },
  performanceGlitchUser: {
    username: 'performance_glitch_user',
    password: PASSWORDS.PERFORMANCE_GLITCH_USER,
  },
  errorUser: {
    username: 'error_user',
    password: PASSWORDS.ERROR_USER,
  },
  visualUser: {
    username: 'visual_user',
    password: PASSWORDS.VISUAL_USER,
  },
}
