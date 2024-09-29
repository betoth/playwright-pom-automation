const { LoginPage } = require('../../pages/loginPage')
const { InventoryPage } = require('../../pages/inventoryPage')
const { MenuPage } = require('../../pages/menuPage')

class TestHelper {
  constructor(page) {
    this.page = page
    this.loginPage = new LoginPage(page)
    this.inventoryPage = new InventoryPage(page)
    this.menuPage = new MenuPage(page)
  }

  /**
   * Logs in to the application using the provided username and password.
   * @param {string} username - The username for login.
   * @param {string} password - The password for login.
   */
  async login(username, password) {
    await this.loginPage.navigate()
    await this.loginPage.login(username, password)

    await this.page.waitForSelector(this.inventoryPage.INVENTORY_ITEM)
  }

  /**
   * Resets the application status by interacting with the menu.
   */
  async resetAppStatus() {
    await this.menuPage.resetAppStatus()
  }

  /**
   * Logs out of the application by interacting with the menu.
   */
  async logout() {
    await this.menuPage.logout()
  }

  /**
   * Resets the application state and logs out of the application.
   */
  async resetAppAndLogout() {
    await this.resetAppStatus()
    await this.logout()
  }
}

module.exports = { TestHelper }
