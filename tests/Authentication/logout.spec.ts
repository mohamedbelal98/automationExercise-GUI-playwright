import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupAndLoginPage } from '../../pages/singupAndLoginPage';

let homePage: HomePage;
let signupAndLoginPage: SignupAndLoginPage;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  homePage = new HomePage(page);
  signupAndLoginPage = new SignupAndLoginPage(page);
  await homePage.navigateToHomePage();
  await homePage.checkThatHomePageBannerIsLoaded();
});

test.afterEach(async ({ page }, testInfo) => {
  homePage = new HomePage(page);
  console.log(`Finish ${testInfo.title}`);
  homePage.tearDown();
});

test.describe('Logout Test Cases', () => {
  test('Logout User', { tag: ['@Auth', '@Regression'] }, async () => {
    await homePage.navigateToSignupAndLoginPage();
    await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded();
    await signupAndLoginPage.enterLogincredentials();
    await signupAndLoginPage.checkThatEmailAdressAndPasswordAreCorrect();
    await signupAndLoginPage.clickOnLoginButton();
    await homePage.checkUserIsLoggedInCorrectly();
    await homePage.clickonLogoutbutton();
    await homePage.checkUserIsNOTLoggedIn();
  });
});
