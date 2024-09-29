const { BasePage } = require('./basePage')
const { URLS } = require('../config/constants')

class MenuPage extends BasePage {
  constructor(page) {
    super(page)
    this.OPEN_MENU_BUTTON = '#react-burger-menu-btn'
    this.CLOSE_MENU_BUTTON = '#react-burger-cross-btn'
    this.RESET_BUTTON = '#reset_sidebar_link'
    this.LOGOUT_BUTTON = '#logout_sidebar_link'
  }

  /**
   * Opens the menu by clicking the menu button.
   */
  async openMenu() {
    await this.page.click(this.OPEN_MENU_BUTTON)
    await this.page.waitForSelector(this.CLOSE_MENU_BUTTON, {
      state: 'visible',
    })
  }

  /**
   * Closes the menu by clicking the close button.
   */
  async closeMenu() {
    await this.page.waitForSelector(this.CLOSE_MENU_BUTTON, {
      state: 'visible',
    })
    await this.page.click(this.CLOSE_MENU_BUTTON)
    await this.page.waitForSelector(this.CLOSE_MENU_BUTTON, { state: 'hidden' })
  }

  /**
   * Resets the application state by clicking the reset button in the menu.
   */
  async resetAppStatus() {
    await this.openMenu()
    await this.page.click(this.RESET_BUTTON)
    await this.closeMenu()
  }

  /**
   * Logs out the current user by clicking the logout button.
   */
  async logout() {
    await this.openMenu()
    await this.page.click(this.LOGOUT_BUTTON)
    await this.page.waitForURL(URLS.BASE_URL)
  }
}

module.exports = { MenuPage }
