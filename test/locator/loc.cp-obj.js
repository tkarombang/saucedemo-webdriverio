const elmCheckoutPage = {
  chkoutBtn_elm: "#checkout",
  nameField_elm: "#first-name",
  lastNamField_elm: "#last-name",
  zip_elm: "#postal-code",
  continueBtn_elm: "#continue",
  overviewHeader_elm: "//*[@id='header_container']/div[2]/span",
  payment_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[1]',
  paymentValue_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[2]',
  shipping_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[3]',
  shippingValue_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[4]',
  priceTotText_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[5]',
  itemTot_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[6]',
  tax_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[7]',
  totalPrice_elm: '//*[@id="checkout_summary_container"]/div/div[2]/div[8]',
};

module.exports = elmCheckoutPage;
