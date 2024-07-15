const fs = require("fs");
const OpenUrl = require("../pageobjects/url");
const lgOut = require("../pageobjects/lg-out");
const locatorLoginPage = require("../locator/loc.loginPage");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");

const loginPage = new lgEntUserPass(locatorLoginPage);

describe("Login Test Feature", () => {
  const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";
  let userSauceJson = JSON.parse(fs.readFileSync(filePath));

  userSauceJson.forEach((data) => {
    it("Should Be Successfully Login In Website", async () => {
      await OpenUrl.open();
      console.log(`TESTING PENGGUNA : ${data.username}`);
      await loginPage.enter(data.username, data.password);
      const currentUrl = await browser.getUrl();
      if (currentUrl === "https://www.saucedemo.com/inventory.html") {
        await lgOut.logoutClick();
      } else {
        loginPage.getErrMsg();
      }

      await browser.pause(2000);
    });
  });
});
