const fs = require("fs");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const url = require("../pageobjects/url");
const scAddProduct = require("../pageobjects/sc-add-product");
const locSCaddProduct = require("../locator/loc.scAddProduct-item");
const locSCaddProduct1 = require("../locator/loc.scAddProduct-item1");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const itemPro = new scAddProduct(locSCaddProduct);
const itemPro1 = new scAddProduct(locSCaddProduct1);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;

describe("Shopping Cart Feature", () => {
  it("Should Be create the new icon shopping cart by adding the product", async () => {
    await url.open();
    await lgEntUserPass.enter(username, password);

    await itemPro.addToCart();
    await itemPro1.addToCart();
  });

  it("Should be displayed the following detail: Quantity, Title, Excerpt, and Price. on product card", async () => {
    await itemPro.scPage();
    await itemPro.printProdDesc();
    await itemPro1.printProdDesc();
  });
});
