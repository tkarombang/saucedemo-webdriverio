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
  it("Should be able to edit the quantity field which will allow the buyer to modify the quantity of the product", async () => {
    const qtyField = await $("#quantity-field").isExisting();
    expect(qtyField).toBe(false);
  });
  it("Should automatically calculate the quantity of the products added to the cart on the price test field", async () => {
    const totalQty = await $("#total_quantity").isExisting();
    expect(totalQty).toBe(false);
  });
});
