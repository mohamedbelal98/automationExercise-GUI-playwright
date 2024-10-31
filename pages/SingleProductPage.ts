import { expect, Locator, type Page } from "@playwright/test";

export class SingleProductPage {

    readonly page: Page
    readonly productName: Locator
    readonly productCategory: Locator
    readonly productPrice: Locator
    readonly productAvailability: Locator
    readonly productCondition: Locator
    readonly productBrand: Locator

    constructor(page: Page) {
        this.page = page
        this.productName = this.page.locator(".product-information h2")
        this.productCategory = this.page.locator(".product-information p", { hasText: 'Category:' })
        this.productPrice = this.page.locator('.product-information span span', { hasText: 'Rs.' })
        this.productAvailability = this.page.locator('.product-information p', { hasText: 'Availability:' })
        this.productCondition = this.page.locator('.product-information p', { hasText: 'Condition:' })
        this.productBrand = this.page.locator('.product-information p', { hasText: 'Brand:' })
    }

    /************************* Asserations *************************/

    async checkThatProductDetailsDisplayedCorrectly() {

        await expect(this.productName).toBeVisible()
        await expect(this.productCategory).toBeVisible()
        await expect(this.productPrice).toBeVisible()
        await expect(this.productAvailability).toBeVisible()
        await expect(this.productCondition).toBeVisible()
        await expect(this.productBrand).toBeVisible()
    }

}