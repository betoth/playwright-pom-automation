const { BasePage } = require('./basePage')
const { URLS } = require('../config/constants')

class LoginPage extends BasePage {
  constructor(page) {
    super(page)
    this.url = URLS.LOGIN_PAGE

    this.USERNAME_INPUT = '#user-name'
    this.PASSWORD_INPUT = '#password'
    this.LOGIN_BUTTON = '#login-button'
    this.ERROR_MESSAGE = 'h3[data-test="error"]'
  }

  /**
   * Navigates to the login page.
   */
  async navigate() {
    await super.navigate(this.url)
  }

  /**
   * Logs in with the specified username and password.
   * @param {string} username - The username for login.
   * @param {string} password - The password for login.
   */
  async login(username, password) {
    await this.fill(this.USERNAME_INPUT, username)
    await this.fill(this.PASSWORD_INPUT, password)
    await this.click(this.LOGIN_BUTTON)
  }

  /**
   * Retrieves the error message displayed on the login page.
   * @returns {Promise<string>} The error message text.
   */
  async getErrorMessage() {
    return await this.getText(this.ERROR_MESSAGE)
  }
}

module.exports = { LoginPage }
