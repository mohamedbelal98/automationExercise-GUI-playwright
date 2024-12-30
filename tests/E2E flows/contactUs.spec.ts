import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ContactUs } from '../../pages/ContactUs';

let homePage: HomePage;
let contactUs: ContactUs;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  homePage = new HomePage(page);
  contactUs = new ContactUs(page);
  await homePage.navigateToHomePage();
  await homePage.checkThatHomePageBannerIsLoaded();
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finish ${testInfo.title}`);
  await homePage.tearDown();
});

test.describe('Contact Us test cases', () => {
  test.skip('Contact Us Form', { tag: ['@FullJourney'] }, async () => {
    await homePage.clickOnContactUsButton();
    await contactUs.checkThatContactUsPageIsLoaded();
    await contactUs.enterContactUsData();
    await contactUs.clickOnSubmitButton();
    await contactUs.checkThatSuccessMessageDisplaedCorrectly();
  });
});
