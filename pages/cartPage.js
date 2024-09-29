const { BasePage } = require('./basePage')

class CartPage extends BasePage {
  constructor(page) {
    super(page)
    this.CART_ITEMS = '.cart_item'
    this.ITEM_NAME = '.inventory_item_name'
  }

  /**
   * Gets the count of items in the cart page.
   * @returns {Promise<number>} The number of cart items.
   */
  async getCartItemCountInCartPage() {
    const cartItems = await this.page.$$(this.CART_ITEMS)
    return cartItems.length
  }

  /**
   * Checks if a specific product is in the cart.
   * @param {string} productName - The name of the product to check.
   * @returns {Promise<boolean>} True if the product is in the cart, false otherwise.
   */
  async isProductInCart(productName) {
    const products = await this.page.$$eval(
      `${this.CART_ITEMS} ${this.ITEM_NAME}`,
      (items) => items.map((item) => item.textContent.trim())
    )

    return products.includes(productName)
  }
}

module.exports = { CartPage }
