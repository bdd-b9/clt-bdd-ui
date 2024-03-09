
const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    swaglabs: 'https://www.saucedemo.com/',


    elements: {
        username: by.name('user-name'),
        password: by.name('password'),
        loginButton: '//*[@id="login-button"]',
        swagLabsPage: '//*[@id="header_container"]/div[1]/div[2]/div',
    },
    clickElement: async function (objectKey) {
        const selector = this.elements[objectKey];
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
