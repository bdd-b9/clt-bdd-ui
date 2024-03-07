
const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    parabank: 'https://parabank.parasoft.com/parabank/index.htm',


    elements: {
        registerLink: '//*[@id="loginPanel"]/p[2]/a',
        signupPage: '//*[@id="rightPanel"]/h1',
        firstName: by.name('customer.firstName'),
        lastName: by.name('customer.lastName'),
        address: by.name('customer.address.street'),
        city: by.name('customer.address.city'),
        state: by.name('customer.address.state'),
        zipCode: by.name('customer.address.zipCode'),
        phoneNo: by.name('customer.phoneNumber'),
        ssnNumber: by.name('customer.ssn'),
        userName: by.name('customer.username'),
        password: by.name('customer.password'),
        confirmPw: by.name('repeatedPassword'),
        registerButton: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        welcomePage: '//*[@id="rightPanel"]/h1',

        CustomerLoginHeader: '//*[@id="leftPanel"]/h2',
        cusUserName: by.name('username'),
        cusPassword: by.name('password'),
        loginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        CustomerPage: '//*[@id="rightPanel"]/div/div/h1',

        forgotloginButton:'//*[@id="loginPanel"]/p[1]/a',
        CustomerLookupHeader: '//*[@id="rightPanel"]/h1',
        flfirstName :by.name('firstName'),
        fllastName: by.name('lastName'),
        fladdress: by.name('address.street'),
        flcity: by.name('address.city'),
        flstate: by.name('address.state'),
        flzipCode: by.name('address.zipCode'),
        flssnNumber: by.name('ssn'),
        findLoginInfoButton:'//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        loginInfoDetails: '//*[@id="rightPanel"]/p[1]',



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
