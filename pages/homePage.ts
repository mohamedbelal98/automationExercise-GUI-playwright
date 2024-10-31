import { expect, Locator, type Page } from "@playwright/test";

export class HomePage {

    readonly page: Page
    readonly homePageBanner: Locator
    readonly signupAndLoginButton: Locator
    readonly logoutButton: Locator
    readonly loggedinUser: Locator
    readonly contactUsButton: Locator
    readonly productsButton: Locator

    constructor(page: Page) {
        this.page = page
        this.homePageBanner = this.page.locator("[alt='Website for automation practice']")
        this.signupAndLoginButton = this.page.getByText(" Signup / Login")
        this.logoutButton = this.page.getByText(" Logout")
        this.loggedinUser = this.page.getByText(" Logged in as ")
        this.contactUsButton = this.page.getByText(" Contact us")
        this.productsButton = this.page.getByText(" Products")
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

    async clickonLogoutbutton() {
        await this.logoutButton.click()
    }

    async clickOnContactUsButton() {
        await this.contactUsButton.click()
    }

    async navigateToProductsPage() {
        await this.productsButton.click()
    }

    /************************* Asserations *************************/
    
    async checkThatHomePageBannerIsLoaded() {
        await expect(this.homePageBanner).toBeVisible()
    }

    async checkUserIsLoggedInCorrectly() {
        await expect(this.loggedinUser).toBeVisible()
    }

    async checkUserIsNOTLoggedIn() {
        await expect(this.loggedinUser).not.toBeVisible()
    }

}