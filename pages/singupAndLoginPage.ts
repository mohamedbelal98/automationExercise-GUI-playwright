import { expect, Locator, type Page } from '@playwright/test';

export class SignupAndLoginPage {
  readonly page: Page;
  readonly randomNumber: string;
  readonly nameTextInput: string;
  readonly signupTextInput: string;
  readonly newUserSignupTextValue: string;
  readonly loginToYourAccountTextValue: string;
  readonly emailAdressAlreadyExistInput: string;
  readonly emailAdressAlreadyExistContent: string;
  readonly passwordInput: string;
  readonly emailorpasswordIncorrectContent: string;

  readonly newUserSignupText: Locator;
  readonly loginToYourAccountText: Locator;
  readonly nameTextBox: Locator;
  readonly emailAddressTextBoxLocator: Locator;
  readonly signupButton: Locator;
  readonly mrRadioButton: Locator;
  readonly passwordTextBox: Locator;
  readonly dayforDateOfBirth: Locator;
  readonly monthforDateOfBirth: Locator;
  readonly yearforDateOfBirth: Locator;
  readonly newsletterCheckBox: Locator;
  readonly optinCheckBox: Locator;
  readonly firstNameTextBox: Locator;
  readonly lastNameTextBox: Locator;
  readonly companyTextBox: Locator;
  readonly addressTextBox: Locator;
  readonly address2TextBox: Locator;
  readonly country: Locator;
  readonly stateTextBox: Locator;
  readonly cityTextBox: Locator;
  readonly zipCodeTextBox: Locator;
  readonly mobileNumberTextBox: Locator;
  readonly createAccountButton: Locator;
  readonly emailAddressAlreadyExistText: Locator;
  readonly loginPasswordTextBox: Locator;
  readonly loginButton: Locator;
  readonly emailOrPasswordIncorrect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.randomNumber = Date.now().toString();
    this.newUserSignupText = this.page.getByText('New User Signup!');
    this.loginToYourAccountText = this.page.getByText('Login to your account');
    this.nameTextBox = this.page.getByPlaceholder('Name');
    this.emailAddressTextBoxLocator =
      this.page.getByPlaceholder('Email Address');
    this.signupButton = this.page.getByRole('button', { name: 'Signup' });
    this.mrRadioButton = this.page.locator('#uniform-id_gender1');
    this.passwordTextBox = this.page.locator('#password');
    this.dayforDateOfBirth = this.page.locator('#days');
    this.monthforDateOfBirth = this.page.locator('#months');
    this.yearforDateOfBirth = this.page.locator('#years');
    this.newsletterCheckBox = this.page.locator('#newsletter');
    this.optinCheckBox = this.page.locator('#optin');
    this.firstNameTextBox = this.page.locator('#first_name');
    this.lastNameTextBox = this.page.locator('#last_name');
    this.companyTextBox = this.page.locator('#company');
    this.addressTextBox = this.page.locator('#address1');
    this.address2TextBox = this.page.locator('#address2');
    this.country = this.page.locator('#country');
    this.stateTextBox = this.page.locator('#state');
    this.cityTextBox = this.page.locator('#city');
    this.zipCodeTextBox = this.page.locator('#zipcode');
    this.mobileNumberTextBox = this.page.locator('#mobile_number');
    this.createAccountButton = this.page.locator("[data-qa='create-account']");
    this.emailAddressAlreadyExistText = this.page.getByText(
      'Email Address already exist!'
    );
    this.loginPasswordTextBox = this.page.getByPlaceholder('Password');
    this.loginButton = this.page.locator("[data-qa='login-button']");
    this.emailOrPasswordIncorrect = this.page.getByText(
      'Your email or password is incorrect!'
    );

    this.newUserSignupTextValue = 'New User Signup!';
    this.loginToYourAccountTextValue = 'Login to your account';
    this.nameTextInput = 'Mohamed Belal';
    this.signupTextInput = 'mohamed' + this.randomNumber + '@gmail.com';
    this.emailAdressAlreadyExistInput = 'mohamed.belal@gmail.com';
    this.emailAdressAlreadyExistContent = 'Email Address already exist!';
    this.passwordInput = 'Aa1234567!';
    this.emailorpasswordIncorrectContent =
      'Your email or password is incorrect!';
  }

  /************************* Actions *************************/

  async enterSignupNameAndEmail() {
    await this.nameTextBox.fill(this.nameTextInput);
    await this.emailAddressTextBoxLocator.nth(1).fill(this.signupTextInput);
  }

  async enterSignupNameAndEmailAlreadyExist() {
    await this.nameTextBox.fill(this.nameTextInput);
    await this.emailAddressTextBoxLocator
      .nth(1)
      .fill(this.emailAdressAlreadyExistInput);
  }

  async enterLogincredentials() {
    await this.emailAddressTextBoxLocator
      .nth(0)
      .fill(this.emailAdressAlreadyExistInput);
    await this.loginPasswordTextBox.fill(this.passwordInput);
  }

  async enterLogincredentialsWithIncorrectData() {
    await this.emailAddressTextBoxLocator
      .nth(0)
      .fill(this.emailAdressAlreadyExistInput);
    await this.loginPasswordTextBox.fill('Incorrect Password');
  }

  async clickOnSignUpButton() {
    await this.signupButton.click();
  }

  async enterAccountInformationData() {
    await this.mrRadioButton.click();
    await this.passwordTextBox.fill('Aa1234567!');
    await this.dayforDateOfBirth.selectOption('5');
    await this.monthforDateOfBirth.selectOption('October');
    await this.yearforDateOfBirth.selectOption('1998');
    await this.newsletterCheckBox.click();
    await this.optinCheckBox.click();
    await this.firstNameTextBox.fill('Mohamed');
    await this.lastNameTextBox.fill('Belal');
    await this.companyTextBox.fill('Company Name');
    await this.addressTextBox.fill('Adress 1');
    await this.address2TextBox.fill('Address 2');
    await this.country.selectOption('United States');
    await this.stateTextBox.fill('State');
    await this.cityTextBox.fill('City');
    await this.zipCodeTextBox.fill('ZipCode');
    await this.mobileNumberTextBox.fill('01060294548');
  }

  async clickOnCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  /************************* Asserations *************************/
  async checkThatSignupAndLoginPageIsLoaded() {
    await expect(this.newUserSignupText).toBeVisible();
    await expect(this.loginToYourAccountText).toBeVisible();

    expect(await this.newUserSignupText.textContent()).toEqual(
      this.newUserSignupTextValue
    );
    expect(await this.loginToYourAccountText.textContent()).toEqual(
      this.loginToYourAccountTextValue
    );
  }

  async checkThatNameAndEmailAddressAreCorrect() {
    const nameTextBoxValue = await this.nameTextBox.inputValue();
    const signupEmailAddressTextBoxValue = await this.emailAddressTextBoxLocator
      .nth(1)
      .inputValue();

    expect(nameTextBoxValue).toEqual(this.nameTextInput);
    expect(signupEmailAddressTextBoxValue).toEqual(this.signupTextInput);
  }

  async checkThatEmailAdressAndPasswordAreCorrect() {
    const loginEmailAdressValue = await this.emailAddressTextBoxLocator
      .nth(0)
      .inputValue();
    const passwordValue = await this.loginPasswordTextBox.inputValue();

    expect(loginEmailAdressValue).toEqual(this.emailAdressAlreadyExistInput);
    expect(passwordValue).toEqual(this.passwordInput);
  }

  async checkThatEmailAddressAlreadyExistDisplayCorrectly() {
    await expect(this.emailAddressAlreadyExistText).toBeVisible();
    expect(await this.emailAddressAlreadyExistText.textContent()).toEqual(
      this.emailAdressAlreadyExistContent
    );
  }

  async checkThatEmailOrPasswordIsIncorrectIsDisplayedCorrectly() {
    await expect(this.emailOrPasswordIncorrect).toBeVisible();
    expect(await this.emailOrPasswordIncorrect.textContent()).toEqual(
      this.emailorpasswordIncorrectContent
    );
  }
}
