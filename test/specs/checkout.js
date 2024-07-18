const fs = require("fs");
const url = require("../pageobjects/url");
const cpObj = require("../pageobjects/chk-out");
const locElm_chkout = require("../locator/loc.cp-obj");
const locatorLoginPage = require("../locator/loc.loginPage");
const scAddProduct = require("../pageobjects/sc-add-product");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const locSCaddProduct = require("../locator/loc.scAddProduct-item");
const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";

const chkOutInfo = new cpObj(locElm_chkout);
const itemPro = new scAddProduct(locSCaddProduct);
const loginPage = new lgEntUserPass(locatorLoginPage);
const userSauceJson = JSON.parse(fs.readFileSync(filePath));
const username = userSauceJson[0].username;
const password = userSauceJson[0].password;

describe("As a Buyer, I want to e able to perform checkou", () => {
  before(async () => {
    await url.open();
    await loginPage.enter(username, password);
    await itemPro.addToCart(2);
    await itemPro.scPage();
  });
  it("Should be add checkout button to the shoping cart page", async () => {
    await chkOutInfo.btnExist();
  });
  it("Should be direct the user to Checkout: Your Information page", async () => {
    await chkOutInfo.chkYourInfo();
  });
  it("Should be create a new Checkout: Overview Page", async () => {
    await chkOutInfo.entChkYourInfo("Muh", "Azwar", 123);
  });
  it("Should be displaying data on checkout your information page that you have entered", async () => {
    await itemPro.printProdDesc();
    await chkOutInfo.infoPayment();
    await browser.pause(2000);
  });
  it("Should Finish the checkout process", async () => {
    await $("#finish").click();
    const txtThkForChk = await $('//*[@id="checkout_complete_container"]/h2');
    await txtThkForChk.waitForDisplayed({ timeout: 2000 });
    await txtThkForChk.getText();
  });
});
