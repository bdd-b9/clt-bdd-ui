const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    ParaBank: 'https://parabank.parasoft.com/parabank/register.htm',

    elements: {

        username: by.name('username'),
        password: by.name('password'),
        SigingUpIsEasy: '/html/body/div[1]/div[3]/div[2]/h1',
        firstname: by.name('customer.firstName'), 
        lastname: by.name('customer.lastName'),
        address: by.name('customer.address.street'),
        city: by.name('customer.address.city'),
        state: by.name('customer.address.state'),
        zipcode: by.name('customer.address.zipCode'),
        phone: by.name('customer.phoneNumber'),
        SSN: by.name('customer.ssn'),
        username1: by.name('customer.username'),
        password1: by.name('customer.password'),
        confirm: by.name('repeatedPassword'),
     
        welcomemessage: '//*[@id="rightPanel"]/h1',
        Register: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        CustomerLogin: '//*[@id="leftPanel"]/h2',
        LoginInButton: '//*[@id="loginPanel"]/form/div[3]/input',
        accountsoverview: '//*[@id="rightPanel"]/div/div/h1',
        ForgotLoginInfo: '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookup : '//*[@id="rightPanel"]/h1',
        firstname1:  by.name('firstName'),            
        lastname1: by.name('lastName'),
        address1: by.name('address.street'),  
        city1:  by.name('address.city'),
        state1:  by.name('address.state'),
        zipcode1:  by.name('address.zipCode'),
        SSN1:  by.name('ssn'),
        ForgotMyLoginInfobutton: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        customerlookup: '//*[@id="rightPanel"]/h1'

    },

    elementExists: async function (objectKey) {
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },

    inputElement: async function (inputName, inputValue) {
        var selector = page.parabank.elements[inputName];
        await driver.sleep(1000);
        return driver.findElement(selector).sendKeys(inputValue);

    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
}