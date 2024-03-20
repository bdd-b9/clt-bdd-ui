
const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    swaglabs: 'https://www.saucedemo.com/',


    elements: {
        username: by.name('user-name'),
        password: by.name('password'),
        loginBttn: '//*[@id="login-button"]',

        saucelabsBackPack: '//*[@id="add-to-cart-sauce-labs-backpack"]',
        saucelabsTshirt: '//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]',
        saucelabsBikeLight: '//*[@id="add-to-cart-sauce-labs-bike-light"]',
        saucelabsJacket: '//*[@id="add-to-cart-sauce-labs-fleece-jacket"]',
        cartbutton: '//*[@id="shopping_cart_container"]/a',
        yourcart: '//*[@id="header_container"]/div[2]/span',
       
        checkoutButton: '//*[@id="checkout"]',
        firstName: by.name('firstName'),
        lastName: by.name('lastName'),
        zipcode: by.name('postalCode'),
        continueButton: '//*[@id="continue"]',
        finishButton: '//*[@id="finish"]' ,
        thankyouForOrderPage: '//*[@id="checkout_complete_container"]/h2',


        filterNameZtoA: '//*[@id="header_container"]/div[2]/div/span/select/option[2]',
        allTheThingsTshirt: '//*[@id="item_3_title_link"]/div',
        addtocart: '//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]',


        nameAtoZ: '//*[@id="header_container"]/div[2]/div/span/select/option[1]',
        nameZtoA: '//*[@id="header_container"]/div[2]/div/span/select/option[2]',
        priceHightoLow: '//*[@id="header_container"]/div[2]/div/span/select/option[3]',
        priceLowtoHigh: '//*[@id="header_container"]/div[2]/div/span/select/option[4]',
        allProducts: '//*[@id="header_container"]/div[2]/span',

        removeSaucelabsTshirt: '//*[@id="remove-sauce-labs-bolt-t-shirt"]',
        removeSaucelabsBikeLight: '//*[@id="remove-sauce-labs-bike-light"]',
        continueShopping: '//*[@id="continue-shopping"]',

        allitemsMenuButton: '//*[@id="react-burger-menu-btn"]',
        logoutButton: '//*[@id="logout_sidebar_link"]',
        loginPage: '//*[@id="root"]/div/div[1]'


    },

    clickElement: async function (objectKey) {
        console.log('objectkey= ' + objectKey)

        const selector = page.swaglabs.elements[objectKey];
        console.log('selector= ' + selector)

        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();

    },

    inputElement: async function (inputname, inputvalue) {
        const selector = this.elements[inputname];
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },


    elementExists: async function (objectKey) {
        const selector = this.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector));
    },

}
