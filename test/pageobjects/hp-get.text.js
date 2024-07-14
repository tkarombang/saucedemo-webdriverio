class TextProduct {
  constructor(gtextLocators) {
    this.gtextLocators = gtextLocators;
  }
  get header() {
    return $(this.gtextLocators.header);
  }
  get title() {
    return $(this.gtextLocators.title);
  }
  get desc() {
    return $(this.gtextLocators.desc);
  }
  get price() {
    return $(this.gtextLocators.price);
  }
  get imgElement() {
    return $(this.gtextLocators.img_element);
  }

  async getHeader(text) {
    await expect(this.header).toHaveText(text);
  }
  async getTitle() {
    console.log(await this.title.getText());
  }
  async getPrice() {
    console.log(await this.price.getText());
  }
  async getDesc() {
    console.log(await this.desc.getText());
  }
  async getImg() {
    const atrImg = await this.imgElement.getAttribute("src");
    await browser.newWindow(atrImg);
    await browser.pause(2000);
  }
}

module.exports = TextProduct;
