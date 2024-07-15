const fs = require("fs");
const url = require("../pageobjects/url");
const gtextLocators = require("../locator/loc.get-text");
const TextProduct = require("../pageobjects/hp-get.text");
const locatorLoginPage = require("../locator/loc.loginPage");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const hpGtext = new TextProduct(gtextLocators);
const loginPage = new lgEntUserPass(locatorLoginPage);

const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;
console.log(userSauceJson[0].password);
describe("Homepage showcasing a list of products", () => {
  it("should be showing all the offered products by creating homepage", async () => {
    await url.open();
    await browser.pause(1000);
  });

  it("should be buyer direct to hompage after the logged in", async () => {
    await loginPage.enter(username, password);
    await hpGtext.getHeader("Products");
    await browser.pause(1000);
  });

  it("should be displayed the title of the product", async () => {
    await hpGtext.getTitle();
    await browser.pause(1000);
  });

  it("should be displayed the price of the product", async () => {
    await hpGtext.getPrice();
    await browser.pause(1000);
  });

  it("should be displayed excerpt of the products description", async () => {
    await hpGtext.getDesc();
    await browser.pause(1000);
  });
});
