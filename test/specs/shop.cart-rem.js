const fs = require("fs");
const url = require("../pageobjects/url");
const scAddProduct = require("../pageobjects/sc-add-product");
const locatorLoginPage = require("../locator/loc.loginPage");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const locSCaddProduct = require("../locator/loc.scAddProduct-item");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const itemPro = new scAddProduct(locSCaddProduct);
const loginPage = new lgEntUserPass(locatorLoginPage);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;

describe("As a buyer I want to be able to manage the products on my shopping cart", () => {
  before(async () => {
    await url.open();
    await loginPage.enter(username, password);
    await itemPro.addToCart(4);
  });
  it("Should be to remove product on the shopping cart", async () => {
    await itemPro.scPage();
    await itemPro.remove_btn();
    await browser.pause(2000);
  });
});
