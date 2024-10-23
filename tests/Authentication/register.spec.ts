import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';

let homePage: HomePage

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`)
  homePage = new HomePage(page)
  await homePage.navigateToHomePage()
  await homePage.checkThatHomePageBannerIsLoaded()
})

test.afterEach(async ({ }, testInfo) => {
  console.log(`Finish ${testInfo.title}`)
  await homePage.tearDown()
})

test.describe("Register", () => {

  test("Register User", async () => {
    await homePage.navigateToSignupAndLoginPage()
  })
  
})