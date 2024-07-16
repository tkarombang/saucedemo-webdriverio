const fs = require("fs");
const url = require("../pageobjects/url");
const locatorLoginPage = require("../locator/loc.loginPage");
const scAddProduct = require("../pageobjects/sc-add-product");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const locSCaddProduct = require("../locator/loc.scAddProduct-item");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const itemPro = new scAddProduct(locSCaddProduct);
const loginPage = new lgEntUserPass(locatorLoginPage);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;

describe("As a buyer I want to be able to add a product to may shopping cart", () => {
  before(async () => {
    await url.open();
    await loginPage.enter(username, password);
  });
  it("Should Be create the new icon shopping cart by adding the product", async () => {
    await itemPro.addToCart(6);
  });

  it("Should be displayed the following detail: Quantity, Title, Excerpt, and Price. on product card", async () => {
    await itemPro.scPage();
    await itemPro.printProdDesc();
  });
});
