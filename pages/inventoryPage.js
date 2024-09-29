const { BasePage } = require('./basePage')

class InventoryPage extends BasePage {
  constructor(page) {
    super(page)

    this.ADD_TO_CART_BUTTON = 'button[id^="add-to-cart-"]'
    this.CART_ICON = '.shopping_cart_link'
    this.INVENTORY_ITEM = '.inventory_item'
  }

  /**
   * Adds a product to the cart by clicking the "Add to Cart" button for the specified product.
   * @param {string} productName - The name of the product to add to the cart.
   */
  async addProductToCart(productName) {
    const productSelector = `${this.INVENTORY_ITEM}:has-text("${productName}") ${this.ADD_TO_CART_BUTTON}`
    await this.page.waitForSelector(productSelector)
    await this.page.click(productSelector)
  }

  /**
   * Navigates to the cart page by clicking the cart icon.
   */
  async navigateToCart() {
    await this.page.waitForSelector(this.CART_ICON)
    await this.page.click(this.CART_ICON)
  }
}

module.exports = { InventoryPage }
