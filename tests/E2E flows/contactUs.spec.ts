import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { ContactUs } from '../../pages/ContactUs';

let homePage: HomePage
let contactUs: ContactUs

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`)
    homePage = new HomePage(page)
    contactUs = new ContactUs(page)
    await homePage.navigateToHomePage()
    await homePage.checkThatHomePageBannerIsLoaded()
})

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finish ${testInfo.title}`)
    homePage.tearDown()
})

test.describe("Contact Us test cases", async () => {

    test("Contact Us Form", async () => {

        await homePage.clickOnContactUsButton()
        await contactUs.checkThatContactUsPageIsLoaded()
        await contactUs.enterContactUsData()
        await contactUs.clickOnSubmitButton()
        await contactUs.checkThatSuccessMessageDisplaedCorrectly()
    })

})