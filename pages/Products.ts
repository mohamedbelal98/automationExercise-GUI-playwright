import { expect, Locator, type Page } from "@playwright/test";

export class Products {

    readonly page: Page
    readonly allProductsTextContent: string

    readonly allProductsTitle: Locator
    readonly viewProductsButtonLocator: Locator

    constructor(page: Page) {
        this.page = page
        this.allProductsTextContent = "All Products"

        this.allProductsTitle = this.page.getByRole('heading', {name: 'All Products'})
        this.viewProductsButtonLocator = this.page.getByText("View Product")
    }

    /************************* Actions *************************/

    async clickOnFirstProductItem() {
        await this.viewProductsButtonLocator.nth(0).click()
    }

    /************************* Asserations *************************/

    async checkThatAllProductsTextDisplayedCorrectly() {

        await expect(this.allProductsTitle).toBeVisible()
        expect(await this.allProductsTitle.textContent()).toEqual(this.allProductsTextContent)
    }


}