import { expect, Locator, type Page } from "@playwright/test";

export class Products {

    readonly page: Page
    readonly allProductsTextContent: string

    readonly allProductsTitle: Locator
    readonly viewProductsButtonLocator: Locator
    readonly searchProductTextBox: Locator
    readonly searchProductButton: Locator
    readonly productsNameLocator: Locator

    constructor(page: Page) {
        this.page = page
        this.allProductsTextContent = "All Products"

        this.allProductsTitle = this.page.getByRole('heading', { name: 'All Products' })
        this.viewProductsButtonLocator = this.page.getByText("View Product")
        this.searchProductTextBox = this.page.getByPlaceholder('Search Product')
        this.searchProductButton = this.page.locator('[id="submit_search"]')
        this.productsNameLocator = this.page.locator("//div[@class='productinfo text-center']/p")
    }

    /************************* Actions *************************/

    async clickOnFirstProductItem() {
        await this.viewProductsButtonLocator.nth(0).click()
    }

    async searchForProducts(searchKey: string) {

        await this.searchProductTextBox.clear()
        await this.searchProductTextBox.fill(searchKey)
        await this.searchProductButton.click()
    }

    /************************* Asserations *************************/

    async checkThatAllProductsTextDisplayedCorrectly() {

        await expect(this.allProductsTitle).toBeVisible()
        expect(await this.allProductsTitle.textContent()).toEqual(this.allProductsTextContent)
    }

    async checkThatAllProductsAfterSearchRelatedToSearchKey(searchKey: string) {

        const productsName = await this.productsNameLocator.allTextContents()

        productsName.forEach((singleProductName) => {
            if (!singleProductName.includes(searchKey)) {
                throw new Error(`The result is not related to your search. (${singleProductName})`)
            }
        })
    }


}