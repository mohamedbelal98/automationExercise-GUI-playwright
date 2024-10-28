import { expect, Locator, type Page } from "@playwright/test";

export class AccountStatus {

    readonly page: Page
    readonly accountCreatedText: string

    readonly accountCreatedMessage: Locator
    readonly accountCreatedMessageText: Locator

    constructor(page: Page) {
        this.page = page
        this.accountCreatedText = "Account Created!"

        this.accountCreatedMessage = this.page.locator("[data-qa='account-created']")
        this.accountCreatedMessageText = this.page.getByText("Account Created!")
    }

    /************************* Asserations *************************/

    async checkThatTheAccountCreatedIsVisbleCorrectly() {

        await expect(this.accountCreatedMessage).toBeVisible()

        await expect(await this.accountCreatedMessageText.textContent()).toEqual(this.accountCreatedText)    
    }

}