const fs = require("fs");
const url = require("../pageobjects/url");
const hpGetText = require("../pageobjects/hp-get.text");
const gtextLocators = require("../locator/loc.get-text");
const locatorLoginPage = require("../locator/loc.loginPage");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const homePage = new hpGetText(gtextLocators);
const loginPage = new lgEntUserPass(locatorLoginPage);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;
describe("Product Detail Feature", () => {
  it("would be able to see the details of the product", async () => {
    await url.open();
    await loginPage.enter(username, password);
  });

  it("should navigate to product detail page when clicking on product title", async () => {
    await homePage.title.click();
  });

  it("show the full size image of the selected product", async () => {
    await homePage.getImg();
  });
});
