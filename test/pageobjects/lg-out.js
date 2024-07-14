class StepsLogout {
  get ctaMenu() {
    return $('//*[@id="react-burger-menu-btn"]');
  }
  get out() {
    return $('//*[@id="logout_sidebar_link"]');
  }

  async logoutClick() {
    await this.ctaMenu.click();
    await this.out.click();
  }
}
module.exports = new StepsLogout();
