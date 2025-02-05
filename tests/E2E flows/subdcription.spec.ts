import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { CommanMethod } from '../../pages/commanMethod';

let homePage: HomePage;
let commanMethod: CommanMethod;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  homePage = new HomePage(page);
  commanMethod = new CommanMethod(page);
  await homePage.navigateToHomePage();
  await homePage.checkThatHomePageBannerIsLoaded();
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finish ${testInfo.title}`);
  await homePage.tearDown();
});

test.describe('Subscription Test cases', () => {
  test(
    'Verify Subscription in home page',
    { tag: ['@FullJourney'] },
    async () => {
      await commanMethod.scrollDownToFooter();
      await commanMethod.verifySubscription();
      await commanMethod.enterEmaailAdressAndClickArrow();
      await commanMethod.verfiySuccessMessageForSubscription();
    }
  );

  test(
    'Verify Subscription in Cart page',
    { tag: ['@FullJourney'] },
    async () => {
      await homePage.navigateToCartPage();
      await commanMethod.scrollDownToFooter();
      await commanMethod.verifySubscription();
      await commanMethod.enterEmaailAdressAndClickArrow();
      await commanMethod.verfiySuccessMessageForSubscription();
    }
  );
});
