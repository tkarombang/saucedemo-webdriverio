const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const url = require("../pageobjects/url");
const scAddProduct = require("../pageobjects/sc-add-product");
const locSCaddProduct = require("../locator/loc.scAddProduct-item");
const locSCaddProduct1 = require("../locator/loc.scAddProduct-item1");

const itemPro = new scAddProduct(locSCaddProduct);
const itemPro1 = new scAddProduct(locSCaddProduct1);

describe("Shopping Cart Feature", () => {
  it("Should Be create the new icon shopping cart by adding the product", async () => {
    await url.open();
    await lgEntUserPass.enter("standard_user", "secret_sauce");

    await itemPro.addToCart();
    await itemPro1.addToCart();
  });

  it("Should be displayed the following detail: Quantity, Title, Excerpt, and Price. on product card", async () => {
    await itemPro.scPage();
    await itemPro.printProdDesc();
    await itemPro1.printProdDesc();
  });
});
