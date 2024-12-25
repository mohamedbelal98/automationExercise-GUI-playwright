import { expect, Locator, type Page } from '@playwright/test';

export class ContactUs {
  readonly page: Page;
  readonly successMessageContent: string;

  readonly getInTouchText: Locator;
  readonly nameTextBox: Locator;
  readonly emailTextBox: Locator;
  readonly subjectTextBox: Locator;
  readonly messageTextBox: Locator;
  readonly uploadFile: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessageContent =
      'Success! Your details have been submitted successfully.';

    this.getInTouchText = this.page.getByText('Get In Touch');
    this.nameTextBox = this.page.getByPlaceholder('Name');
    this.emailTextBox = this.page.locator("[placeholder='Email']");
    this.subjectTextBox = this.page.getByPlaceholder('Subject');
    this.messageTextBox = this.page.getByPlaceholder('Your Message Here');
    this.uploadFile = this.page.locator("[name='upload_file']");
    this.submitButton = this.page.locator("[data-qa='submit-button']");
    this.successMessage = this.page.locator(
      "[class='status alert alert-success']"
    );
  }

  /************************* Actions *************************/

  async enterContactUsData() {
    await this.nameTextBox.fill('Mohamed Belal');
    await this.emailTextBox.fill('mohamed.belal@gmail.com');
    await this.subjectTextBox.fill('Subject Contact');
    await this.messageTextBox.fill('New Message');
    await this.uploadFile.setInputFiles('assets/road-sign-361513_960_720.webp');
  }

  async clickOnSubmitButton() {
    this.page.on('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });

    await this.submitButton.click();
  }

  /************************* Asserations *************************/

  async checkThatContactUsPageIsLoaded() {
    await expect(this.getInTouchText).toBeVisible();
    expect(await this.getInTouchText.textContent()).toEqual('Get In Touch');
  }

  async checkThatSuccessMessageDisplaedCorrectly() {
    await expect(this.successMessage).toBeVisible();
    expect(await this.successMessage.textContent()).toEqual(
      this.successMessageContent
    );
  }
}
