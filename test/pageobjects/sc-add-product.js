class ShoppingCart {
  constructor(itemPro) {
    this.itemPro = itemPro;
  }
  get btnAdd() {
    return $(this.itemPro.btn_add);
  }
  get sCartIcon() {
    return $(this.itemPro.icon_cart);
  }

  get cartIcon() {
    return $(this.itemPro.cart_click);
  }

  get titleProd() {
    return $(this.itemPro.title_prod);
  }

  get excerptProd() {
    return $(this.itemPro.excerpt_prod);
  }

  get priceProd() {
    return $(this.itemPro.price_prod);
  }

  async addToCart() {
    await this.btnAdd.click();
    console.log("TOTAL PRODUCTS: " + (await this.sCartIcon.getText()));
    await browser.pause(2000);
  }

  async scPage() {
    await this.cartIcon.click();
  }

  async printProdDesc() {
    const title = await this.titleProd.getText();
    const excerpt = await this.excerptProd.getText();
    const price = await this.priceProd.getText();
    console.log("TITLE: " + title);
    console.log("EXCERPT: " + excerpt);
    console.log("PRICE: " + price);
  }
}

module.exports = ShoppingCart;
