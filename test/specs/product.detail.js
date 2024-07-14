const fs = require("fs");
const gtextLocators = require("../locator/loc.get-text");
const hpGetText = require("../pageobjects/hp-get.text");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const url = require("../pageobjects/url");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const homePage = new hpGetText(gtextLocators);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;
describe("Product Detail Feature", () => {
  it("would be able to see the details of the product", async () => {
    await url.open();
    await lgEntUserPass.enter(username, password);
  });

  it("should navigate to product detail page when clicking on product title", async () => {
    await homePage.title.click();
  });

  it("show the full size image of the selected product", async () => {
    await homePage.getImg();
  });
});
