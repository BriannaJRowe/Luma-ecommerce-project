const cart = require("../pageobjects/cart.page");
const signUp = require("../pageobjects/signup.page");
const purchase = require("../pageobjects/purchase.page");

describe("Sign up and add to cart", () => {
  //Add products to cart
  before(async () => {
    await cart.open();
  });

  //happy path
  it("should sign up a new user", async () => {
    await signUp.open();
    await signUp.createAccount(
      "Jon",
      "Doe",
      "jondoe16@email.com",
      "Password1234",
      "Password1234"
    );
  });

  //Unhappy path
  xit("should NOT sign up a new user when their passwords dont match", async () => {
    await signUp.open();
    await signUp.invalidAccountCreation(
      "John",
      "Smith",
      "jsmith@email.com",
      "PPasword1234",
      "Password"
    );
  });

  it("should add a product to the cart", async () => {
    await cart.open();
    await cart.addToCart();
  });

  it("purchase product", async () => {
    //await purchase.open();
    await purchase.purchaseProduct(
      "KNB Outlet",
      "Shop 32A",
      "45 North Ave",
      "Lane Plaza",
      "Kingston",
      "Georgia",
      "9999",
      "18769098787"
    );
  });

  it("should verify purchase in order history", async () => {
    await purchase.verifyPurchase();
  });
});
