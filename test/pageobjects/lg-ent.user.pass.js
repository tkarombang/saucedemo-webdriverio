class UserPass {
  constructor(getLocLoginPage) {
    this.getLocLoginPage = getLocLoginPage;
  }
  get username() {
    return $(this.getLocLoginPage.user_elm);
  }
  get password() {
    return $(this.getLocLoginPage.pass_elm);
  }
  get btnLogin() {
    return $(this.getLocLoginPage.btnLogin_elm);
  }
  get errMsg() {
    return $(this.getLocLoginPage.errLogin_elm);
  }

  async enter(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.btnLogin.click();
    await browser.pause(3000);
  }

  async getErrMsg() {
    const txterr = await this.errMsg.getText();
    console.log(`PESAN ERROR: ${txterr}`);
    //EXPLICIT
    await txterr.waitForDisplayed({ timeout: 2000 });
    expect(await txterr.isDisplayed()).to.be.true;
    await browser.refresh();
  }
}

module.exports = UserPass;
