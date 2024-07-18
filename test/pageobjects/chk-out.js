class ChkPerform {
  constructor(locElm_chkout) {
    this.locElm_chkout = locElm_chkout;
  }
  get chkoutBtn() {
    return $(this.locElm_chkout.chkoutBtn_elm);
  }
  get nameField() {
    return $(this.locElm_chkout.nameField_elm);
  }
  get lastNamField() {
    return $(this.locElm_chkout.lastNamField_elm);
  }
  get zip() {
    return $(this.locElm_chkout.zip_elm);
  }
  get continueBtn() {
    return $(this.locElm_chkout.continueBtn_elm);
  }
  get overviewHeader() {
    return $(this.locElm_chkout.overviewHeader_elm);
  }
  get payment() {
    return $(this.locElm_chkout.payment_elm);
  }
  get payment_value() {
    return $(this.locElm_chkout.paymentValue_elm);
  }
  get shipping() {
    return $(this.locElm_chkout.shipping_elm);
  }
  get shipping_value() {
    return $(this.locElm_chkout.shippingValue_elm);
  }
  get priceTotText() {
    return $(this.locElm_chkout.priceTotText_elm);
  }
  get itemTot() {
    return $(this.locElm_chkout.itemTot_elm);
  }
  get tax() {
    return $(this.locElm_chkout.tax_elm);
  }
  get totalPrice() {
    return $(this.locElm_chkout.totalPrice_elm);
  }

  async btnExist() {
    await expect(this.chkoutBtn).toExist();
  }
  async chkYourInfo() {
    await this.chkoutBtn.click();
    await expect(this.nameField).toBeDisplayed();
    await expect(this.lastNamField).toBeDisplayed();
    await expect(this.zip).toBeDisplayed();
    await expect(this.continueBtn).toBeDisplayed();
  }
  async entChkYourInfo(firstName, lastName, postalCode) {
    await this.nameField.setValue(firstName);
    await this.lastNamField.setValue(lastName);
    await this.zip.setValue(postalCode);
    await this.continueBtn.click();
    await expect(this.overviewHeader).toBeDisplayed();
  }
  async infoPayment() {
    console.log((await this.payment.getText()) + ":" + (await this.payment_value.getText()));
    console.log((await this.shipping.getText()) + ":" + (await this.shipping_value.getText()));
    console.log(await this.priceTotText.getText());
    console.log(await this.itemTot.getText());
    console.log(await this.tax.getText());
    console.log(await this.totalPrice.getText());
  }
}
module.exports = ChkPerform;
