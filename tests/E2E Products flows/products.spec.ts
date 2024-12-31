import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { Products } from '../../pages/Products';
import { SingleProductPage } from '../../pages/SingleProductPage';

let homePage: HomePage;
let products: Products;
let singleProductPage: SingleProductPage;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  homePage = new HomePage(page);
  products = new Products(page);
  singleProductPage = new SingleProductPage(page);
  await homePage.navigateToHomePage();
  await homePage.checkThatHomePageBannerIsLoaded();
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finish ${testInfo.title}`);
  await homePage.tearDown();
});

test.describe('Products test cases', () => {
  test(
    'Verify All Products and product detail page',
    { tag: ['@FullJourney'] },
    async () => {
      await homePage.navigateToProductsPage();
      await products.checkThatAllProductsTextDisplayedCorrectly();
      await products.clickOnFirstProductItem();
      await singleProductPage.checkThatProductDetailsDisplayedCorrectly();
    }
  );

  test.skip('Search Product', { tag: ['@FullJourney'] }, async () => {
    await homePage.navigateToProductsPage();
    await products.checkThatAllProductsTextDisplayedCorrectly();
    await products.searchForProducts('Women');
    await products.checkThatAllProductsAfterSearchRelatedToSearchKey('Women');
  });
});
