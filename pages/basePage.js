class BasePage {
  constructor(page) {
    this.page = page
  }

  /**
   * Navigates to the specified URL.
   * @param {string} url - The URL to navigate to.
   */
  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'load' })
  }

  /**
   * Clicks on the specified selector.
   * @param {string} selector - The selector to click.
   */
  async click(selector) {
    await this.waitForVisible(selector)
    await this.page.click(selector)
  }

  /**
   * Fills an input field with text.
   * @param {string} selector - The selector of the input field.
   * @param {string} text - The text to fill in the input field.
   */
  async fill(selector, text) {
    await this.waitForVisible(selector)
    await this.page.fill(selector, text)
  }

  /**
   * Returns the text of a selector.
   * @param {string} selector - The selector to get text from.
   * @returns {Promise<string>} The text content of the selector.
   */
  async getText(selector) {
    await this.waitForVisible(selector)
    return await this.page.textContent(selector)
  }

  /**
   * Checks if an element is visible.
   * @param {string} selector - The selector to check.
   * @returns {Promise<boolean>} True if the element is visible, false otherwise.
   */
  async isVisible(selector) {
    return await this.page.isVisible(selector)
  }

  /**
   * Waits for the selector to be visible.
   * @param {string} selector - The selector to wait for.
   */
  async waitForVisible(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' })
  }

  /**
   * Waits for the selector to be invisible.
   * @param {string} selector - The selector to wait for.
   */
  async waitForInvisible(selector) {
    await this.page.waitForSelector(selector, { state: 'hidden' })
  }

  /**
   * Gets the value of an input field.
   * @param {string} selector - The selector of the input field.
   * @returns {Promise<string>} The value of the input field.
   */
  async getInputValue(selector) {
    await this.waitForVisible(selector)
    return await this.page.inputValue(selector)
  }

  /**
   * Validates if a specific URL has loaded.
   * @param {string} url - The URL to wait for.
   */
  async waitForUrl(url) {
    await this.page.waitForURL(url)
  }
}

module.exports = { BasePage }
