import { expect, Locator, type Page } from "@playwright/test";

export class CommanMethod {

    readonly page: Page
    readonly footerWidgetLocator: Locator
    readonly subscriptionEmaillAddress: Locator
    readonly emailAddressArrow: Locator
    readonly subscriptionTextLocator: Locator
    readonly successAlert: Locator

    constructor(page: Page) {
        this.page = page
        this.footerWidgetLocator = this.page.locator('footer')
        this.subscriptionEmaillAddress = this.page.getByPlaceholder('Your email address')
        this.emailAddressArrow = this.page.locator('#subscribe')
        this.subscriptionTextLocator = this.page.getByText('Subscription')
        this.successAlert = this.page.locator("#success-subscribe")
    }

    /************************* Actions *************************/

    async scrollDownToFooter() {
        await this.footerWidgetLocator.scrollIntoViewIfNeeded()
    }

    async enterEmaailAdressAndClickArrow() {

        await this.subscriptionEmaillAddress.fill("mohamed.belal@gmail.com")
        await this.emailAddressArrow.click()
    }

    /************************* Asserations *************************/

    async verifySubscription() {

        await expect(this.subscriptionTextLocator).toBeVisible()
        expect(await this.subscriptionTextLocator.textContent()).toEqual("Subscription")
    }
    async verfiySuccessMessageForSubscription() {
        await expect(this.successAlert).toBeVisible()
    }

}