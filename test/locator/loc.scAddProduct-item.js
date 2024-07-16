const productItem = {
  // btn_add: '//*[@id="add-to-cart-sauce-labs-backpack"]',
  // title_prod: '//*[@id="item_4_title_link"]/div',
  // excerpt_prod: '//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[1]',
  // price_prod: '//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div',
  cart_click: '//*[@id="shopping_cart_container"]/a',
  icon_quantity: '//*[@id="shopping_cart_container"]/a/span',
  btn_add: "button.btn_inventory",
  title_prod: ".inventory_item_name",
  excerpt_prod: ".inventory_item_desc",
  price_prod: ".inventory_item_price",
  remove_prod: ".cart_btn",
};
module.exports = productItem;
