import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupAndLoginPage } from '../../pages/singupAndLoginPage';

let homePage: HomePage
let signupAndLoginPage: SignupAndLoginPage

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`)
  homePage = new HomePage(page)
  signupAndLoginPage = new SignupAndLoginPage(page)
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
    await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded()
    await signupAndLoginPage.enterSignupNameAndEmail()
    await signupAndLoginPage.checkThatNameAndEmailAddressAreCorrect()
    await signupAndLoginPage.clickOnSignUpButton()
  })

})