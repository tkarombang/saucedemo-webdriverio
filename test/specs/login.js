const entUserPass = require("../pageobjects/lg-ent.user.pass");
const lgOut = require("../pageobjects/lg-out");
const OpenUrl = require("../pageobjects/url");
const locUsersSauce = require("../locator/loc.users");
const passSaucedemo = "secret_sauce";
const errLog = require("../locator/loc.get-text");

describe("Login Test Feature", () => {
  it("should be successfully login in website", async () => {
    await OpenUrl.open();
    for (let i = 0; i < locUsersSauce.length; i++) {
      console.log(`Testing User ${locUsersSauce[i]}`);
      await entUserPass.enter(locUsersSauce[i], passSaucedemo);
      const currentUrl = await browser.getUrl();
      if (currentUrl === "https://www.saucedemo.com/inventory.html") {
        await lgOut.logoutClick();
      } else {
        const textErrLogin = await $(errLog.errLogin);
        const txterr = await textErrLogin.getText();
        console.log(`Error Text: ${txterr}`);
        await browser.refresh();
      }
    }

    await browser.pause(2000);
  });
});
