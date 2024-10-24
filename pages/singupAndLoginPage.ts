import { expect, Locator, type Page } from "@playwright/test";

export class SignupAndLoginPage {

    readonly page: Page
    readonly randomNumber: string
    readonly nameTextInput: string
    readonly signupTextInput: string
    readonly newUserSignupTextValue: string
    readonly loginToYourAccountTextValue: string

    readonly newUserSignupText: Locator
    readonly loginToYourAccountText: Locator
    readonly nameTextBox: Locator
    readonly signupEmailAddressTextBox: Locator
    readonly signupButton: Locator

    constructor(page: Page) {
        this.page = page
        this.randomNumber = Date.now().toString()
        this.newUserSignupText = this.page.getByText("New User Signup!")
        this.loginToYourAccountText = this.page.getByText("Login to your account")
        this.nameTextBox = this.page.getByPlaceholder("Name")
        this.signupEmailAddressTextBox = this.page.getByPlaceholder("Email Address")
        this.signupButton = this.page.getByRole('button', { name: "Signup" })

        this.newUserSignupTextValue = "New User Signup!"
        this.loginToYourAccountTextValue = "Login to your account"
        this.nameTextInput = "Mohamed Belal"
        this.signupTextInput = "mohamed" + this.randomNumber + "@gmail.com"
    }

    /************************* Actions *************************/

    async enterSignupNameAndEmail() {
        await this.nameTextBox.fill(this.nameTextInput)
        await this.signupEmailAddressTextBox.nth(1).fill(this.signupTextInput)
    }

    async clickOnSignUpButton() {
        await this.signupButton.click()
    }

    /************************* Asserations *************************/
    async checkThatSignupAndLoginPageIsLoaded() {

        await expect(this.newUserSignupText).toBeVisible()
        await expect(this.loginToYourAccountText).toBeVisible()

        expect(await this.newUserSignupText.textContent()).toEqual(this.newUserSignupTextValue)
        expect(await this.loginToYourAccountText.textContent()).toEqual(this.loginToYourAccountTextValue)
    }

    async checkThatNameAndEmailAddressAreCorrect() {
        const nameTextBoxValue = await this.nameTextBox.inputValue()
        const signupEmailAddressTextBoxValue = await this.signupEmailAddressTextBox.nth(1).inputValue()

        expect(nameTextBoxValue).toEqual(this.nameTextInput)
        expect(signupEmailAddressTextBoxValue).toEqual(this.signupTextInput)
    }

}