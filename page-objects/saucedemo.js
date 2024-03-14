const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
  module.exports = {

  url: 'https://www.saucedemo.com/',
  saucedemo: 'https://www.saucedemo.com/',

   

  elements: {

    username: '//*[@id="user-name"]',
    password: '//*[@id="password"]',
    loginButton: '//*[@id="login-button"]',
    products: '//*[@id="header_container"]/div[2]/span',
    errorMessage: '//*[@id="login_button_container"]/div/form/div[3]/h3',
    SauceLabsBackpack: '//*[@id="item_4_title_link"]/div',
    addToCart:   '//*[@id="add-to-cart-sauce-labs-backpack"]',
    cartIcon:    '//*[@id="shopping_cart_container"]/a/span',
    checkoutButton: '//*[@id="checkout"]',
    firstName:  '//*[@id="first-name"]',
    lastName:  '//*[@id="last-name"]',
    zipCode:  '//*[@id="postal-code"]',
    continueButton:  '//*[@id="continue"]',
    finishButton:  '//*[@id="finish"]',
    thankyouMessage:   '//*[@id="checkout_complete_container"]/h2',
    priceHighToLow:   '//*[@id="header_container"]/div[2]/div/span/select/option[4]',
    highestPriceFirst: '//*[@id="inventory_container"]/div/div[1]/div[2]/div[2]/div'
  },
   
    clickElement: async function (objectKey) {
      const selector = this.elements[objectKey];
      await driver.sleep(3000);
      return driver.findElement(By.xpath(selector)).click();
  },

  inputElement: async function (inputname, inputvalue) {
      const selector = this.elements[inputname];
      await driver.sleep(3000);
      return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);


  },

  elementExists: async function (objectKey) {
      const selector = this.elements[objectKey];
      await driver.sleep(3000);
      return driver.findElement(By.xpath(selector));
  },



  }
