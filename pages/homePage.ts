import { expect, Locator, type Page } from "@playwright/test";

export class HomePage {

    readonly page: Page
    readonly homePageBanner: Locator
    readonly signupAndLoginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.homePageBanner = this.page.locator("[alt='Website for automation practice']")
        this.signupAndLoginButton = this.page.getByText(" Signup / Login")
    }


    /************************* Actions *************************/
    async navigateToHomePage() {

        // Set up request interception to handle mixed content (HTTP to HTTPS rewrite)
        await this.page.route('https://fonts.googleapis.com/css?family=Play', (route) => {
            const secureUrl = route.request().url().replace('http:', 'https:');
            route.continue({ url: secureUrl });
        });

        await this.page.goto("https://automationexercise.com/")
    }

    async tearDown() {
        await this.page.close()
    }

    async navigateToSignupAndLoginPage() {
        await this.signupAndLoginButton.click()
    }

    /************************* Asserations *************************/
    async checkThatHomePageBannerIsLoaded() {
        await expect(this.homePageBanner).toBeVisible()
    }

}