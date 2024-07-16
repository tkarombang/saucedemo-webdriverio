class ShoppingCart {
  constructor(itemPro) {
    this.itemPro = itemPro;
  }
  get btnAdd() {
    return $$(this.itemPro.btn_add);
  }
  get sCartQuantity() {
    return $(this.itemPro.icon_quantity);
  }

  get cartIcon() {
    return $(this.itemPro.cart_click);
  }

  get titleProd() {
    return $$(this.itemPro.title_prod);
  }

  get excerptProd() {
    return $$(this.itemPro.excerpt_prod);
  }

  get priceProd() {
    return $$(this.itemPro.price_prod);
  }

  get rmProd() {
    return $$(this.itemPro.remove_prod);
  }

  async addToCart(item) {
    const btnsAdd = await this.btnAdd;
    if (item > btnsAdd.length) {
      throw new Error("Jumlah Item Terlalu Banyak");
    } else {
      for (let i = 0; i < item; i++) {
        await btnsAdd[i].click();
      }
    }

    console.log("TOTAL PRODUCTS: " + (await this.sCartQuantity.getText()));
    await browser.pause(2000);
  }

  async scPage() {
    await this.cartIcon.click();
    await browser.pause(2000);
  }

  async printProdDesc() {
    const title = await this.titleProd;
    const excerpt = await this.excerptProd;
    const prices = await this.priceProd;
    title.forEach((name) => console.log("TITLE: " + name.getText()));
    excerpt.forEach((desc) => console.log("EXCERPT: " + desc.getText()));
    prices.forEach((price) => console.log("PRICE: " + price.getText()));
    await browser.pause(2000);
  }

  async remove_btn() {
    const rmButton = await this.rmProd;
    rmButton.forEach((btn) => btn.click());
  }
}

module.exports = ShoppingCart;
