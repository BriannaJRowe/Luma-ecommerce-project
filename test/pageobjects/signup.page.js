const Page = require("./page");

class SignUp extends Page {
  get fName() {
    return $("#firstname");
  }
  get lName() {
    return $("#lastname");
  }
  get newsletter() {
    return $("#is_subscribed");
  }
  get emailAddress() {
    return $("#email_address");
  }
  get password() {
    return $("#password");
  }
  get passwordConfirm() {
    return $("#password-confirmation");
  }
  get accountCreationBtn() {
    return $(`button[title='Create an Account'] span`);
  }

  async createAccount(fName, lName, emailAddress, password, passwordConfirm) {
    await this.fName.setValue(fName);
    await this.lName.setValue(lName);

    await this.newsletter.click();

    await this.emailAddress.setValue(emailAddress);
    await this.password.setValue(password);
    await this.passwordConfirm.setValue(passwordConfirm);

    await this.accountCreationBtn.click();

    await expect(browser).toHaveUrl(
      "https://magento.softwaretestingboard.com/customer/account/"
    );
  }
  async invalidAccountCreation(
    fName,
    lName,
    emailAddress,
    password,
    passwordConfirm
  ) {
    await this.fName.setValue(fName);
    await this.lName.setValue(lName);
    await this.emailAddress.setValue(emailAddress);
    await this.password.setValue(password);
    await this.passwordConfirm.setValue(passwordConfirm);
    await this.accountCreationBtn.click();
  }

  open() {
    return super.open("customer/account/create/");
  }
}

module.exports = new SignUp();
