const gtextLocators = require("../locator/loc.get-text");
const hpGetText = require("../pageobjects/hp-get.text");
const lgEntUserPass = require("../pageobjects/lg-ent.user.pass");
const url = require("../pageobjects/url");

const homePage = new hpGetText(gtextLocators);

describe("Product Detail Feature", () => {
  it("would be able to see the details of the product", async () => {
    await url.open();
    await lgEntUserPass.enter("standard_user", "secret_sauce");
  });

  it("should navigate to product detail page when clicking on product title", async () => {
    await homePage.title.click();
  });

  it("show the full size image of the selected product", async () => {
    const image = await $('//*[@id="inventory_item_container"]/div/div/div[1]/img');
    const attImage = await image.getAttribute("src");
    await browser.newWindow(attImage);
    await browser.pause(2000);
  });
});
