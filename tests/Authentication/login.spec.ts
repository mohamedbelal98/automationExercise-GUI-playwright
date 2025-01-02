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

test.afterEach(async ({}, testInfo) => {
  console.log(`Finish ${testInfo.title}`);
  await homePage.tearDown();
});

test.describe('Login Test Cases', () => {
  test(
    'Login User with correct email and password',
    { tag: ['@Regression', '@Auth'] },
    async () => {
      await homePage.navigateToSignupAndLoginPage();
      await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded();
      await signupAndLoginPage.enterLogincredentials();
      await signupAndLoginPage.checkThatEmailAdressAndPasswordAreCorrect();
      await signupAndLoginPage.clickOnLoginButton();
      await homePage.checkUserIsLoggedInCorrectly();
    }
  );

  test(
    'Login User with incorrect email and password',
    { tag: ['@Auth'] },
    async () => {
      await homePage.navigateToSignupAndLoginPage();
      await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded();
      await signupAndLoginPage.enterLogincredentialsWithIncorrectData();
      await signupAndLoginPage.clickOnLoginButton();
      await signupAndLoginPage.checkThatEmailOrPasswordIsIncorrectIsDisplayedCorrectly();
    }
  );
});
