const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../pages/loginPage')
const users = require('../../data/users')
const { URLS } = require('../../config/constants')

test.describe('Login Tests', () => {
  let loginPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
  })

  /**
   * Test for the standard user login.
   */
  test('Login with standard user', async ({ page }) => {
    const { standardUser } = users

    await loginPage.navigate()
    await loginPage.login(standardUser.username, standardUser.password)

    await expect(page).toHaveURL(URLS.INVENTORY_PAGE)
  })

  /**
   * Test for the locked out user login.
   */
  test('Login with locked out user', async () => {
    const { lockedOutUser } = users

    await loginPage.navigate()
    await loginPage.login(lockedOutUser.username, lockedOutUser.password)

    const errorMessage = await loginPage.getErrorMessage()
    expect(errorMessage).toContain('Sorry, this user has been locked out.')
  })

  /**
   * Test for the problem user login.
   */
  test('Login with problem user', async ({ page }) => {
    const { problemUser } = users

    await loginPage.navigate()
    await loginPage.login(problemUser.username, problemUser.password)

    await expect(page).toHaveURL(URLS.INVENTORY_PAGE)
  })
})
