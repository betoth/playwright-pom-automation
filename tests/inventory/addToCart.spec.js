const { test, expect } = require('@playwright/test')
const { TestHelper } = require('../helpers/testHelper')
const { CartPage } = require('../../pages/cartPage')
const products = require('../../data/products')

test.describe('Add to Cart Tests', () => {
  let testHelper
  let inventoryPage
  let cartPage

  test.beforeEach(async ({ page }) => {
    testHelper = new TestHelper(page)
    inventoryPage = testHelper.inventoryPage
    cartPage = new CartPage(page)

    // Logs in with the standard user and ensures the inventory page is loaded.
    await testHelper.login('standard_user', 'secret_sauce')
  })

  test('Successfully add one product to cart', async () => {
    const productName = products.sauceLabsBackpack

    await inventoryPage.addProductToCart(productName)
    await inventoryPage.navigateToCart()

    const cartItemCount = await cartPage.getCartItemCountInCartPage()
    expect(cartItemCount).toBe(1)

    const isProductInCart = await cartPage.isProductInCart(productName)
    expect(isProductInCart).toBe(true)
  })

  test.afterEach(async () => {
    // Resets the application state and logs out the user after each test.
    await testHelper.resetAppAndLogout()
  })
})
