class UserPass {
  get username() {
    return $('//*[@id="user-name"]');
  }
  get password() {
    return $('//*[@id="password"]');
  }
  get btnLogin() {
    return $('//*[@id="login-button"]');
  }

  async enter(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.btnLogin.click();
    await browser.pause(3000);
  }
}

module.exports = new UserPass();
