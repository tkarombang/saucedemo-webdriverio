//const assert = require("assert");
const fs = require("fs");
const entUserPass = require("../pageobjects/lg-ent.user.pass");
const lgOut = require("../pageobjects/lg-out");
const OpenUrl = require("../pageobjects/url");
const errLog = require("../locator/loc.get-text");

describe("Login Test Feature", () => {
  const filePath = "D:/webDriverIO/saucedemo/test/testData/userSaucedemo.json";
  let userSauceJson = JSON.parse(fs.readFileSync(filePath));

  userSauceJson.forEach((data) => {
    it("Should Be Successfully Login In Website", async () => {
      await OpenUrl.open();
      console.log(`TESTING USER : ${data.username}`);
      await entUserPass.enter(data.username, data.password);
      const currentUrl = await browser.getUrl();
      if (currentUrl === "https://www.saucedemo.com/inventory.html") {
        await lgOut.logoutClick();
      } else {
        const textErrLogin = await $(errLog.errLogin);
        const txterr = await textErrLogin.getText();
        console.log(`Error Text: ${txterr}`);
        await browser.refresh();
      }

      await browser.pause(2000);
    });
  });
});
