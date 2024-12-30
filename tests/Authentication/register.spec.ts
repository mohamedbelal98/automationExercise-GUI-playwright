import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupAndLoginPage } from '../../pages/singupAndLoginPage';
import { AccountStatus } from '../../pages/accountstatus';
import { CommanMethod } from '../../pages/commanMethod';

let homePage: HomePage;
let signupAndLoginPage: SignupAndLoginPage;
let accountStatus: AccountStatus;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  homePage = new HomePage(page);
  signupAndLoginPage = new SignupAndLoginPage(page);
  accountStatus = new AccountStatus(page);
  await homePage.navigateToHomePage();
  await homePage.checkThatHomePageBannerIsLoaded();
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finish ${testInfo.title}`);
  await homePage.tearDown();
});

test.describe('Register Test cases', () => {
  test(
    'Register User',
    { tag: ['@Auth', '@Regression'] },
    async ({ page }, testInfo) => {
      await homePage.navigateToSignupAndLoginPage();
      await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded();
      await signupAndLoginPage.enterSignupNameAndEmail();
      await signupAndLoginPage.checkThatNameAndEmailAddressAreCorrect();
      await signupAndLoginPage.clickOnSignUpButton();
      await signupAndLoginPage.enterAccountInformationData();
      await signupAndLoginPage.clickOnCreateAccountButton();
      await accountStatus.checkThatTheAccountCreatedIsVisbleCorrectly();
      await new CommanMethod(page).takeScreenShot(testInfo.title);
    }
  );

  test(
    'Register User with existing email',
    { tag: ['@Auth'] },
    async ({ page }, testInfo) => {
      await homePage.navigateToSignupAndLoginPage();
      await signupAndLoginPage.checkThatSignupAndLoginPageIsLoaded();
      await signupAndLoginPage.enterSignupNameAndEmailAlreadyExist();
      await signupAndLoginPage.clickOnSignUpButton();
      await signupAndLoginPage.checkThatEmailAddressAlreadyExistDisplayCorrectly();
      await new CommanMethod(page).takeScreenShot(testInfo.title);
    }
  );
});
