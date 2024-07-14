class OpenUrl {
  open() {
    return browser.url("https://saucedemo.com");
  }
}

module.exports = new OpenUrl();
