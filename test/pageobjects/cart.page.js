const Page = require("./page");

class Cart extends Page {
  get item() {
    return $("img[alt='Radiant Tee']");
  }

  get size() {
    return $("#option-label-size-143-item-168");
  }
  get colour() {
    return $("#option-label-color-93-item-50");
  }
  get addToCartButton() {
    return $("button[id='product-addtocart-button'] span");
  }

  async addToCart() {
    await this.item.scrollIntoView();
    await this.item.click();
    await this.size.click();
    await this.colour.click();
    await this.addToCartButton.click();
  }

  open() {
    return super.open("");
  }
}

module.exports = new Cart();
