const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://parabank.parasoft.com/',

    elements: {
        LoginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        Username: '//*[@id="loginPanel"]/form/div[1]/input',
        Password: '//*[@id="loginPanel"]/form/div[2]/input',
        RegisterLink: '//*[@id="loginPanel"]/p[2]/a',
        ForgotLogin: '//*[@id="loginPanel"]/p[1]/a',
        LoggedInUser: '//*[@id="rightPanel"]/div/div/h1',
        Firstname: '//*[@id="firstName"]',
        Lastname: '//*[@id="lastName"]',
        Address: '//*[@id="address.street"]',
        City: '//*[@id="address.city"]',
        State: '//*[@id="address.state"]',
        Zipcode: '//*[@id="address.zipCode"]',
        SSN: '//*[@id="ssn"]',
        Phonenum: '//*[@id="customer.phoneNumber"]',
        RegisterFirstname: '//*[@id="customer.firstName"]',
        RegisterLastname: '//*[@id="customer.lastName"]',
        RegisterAddress: '//*[@id="customer.address.street"]',
        RegisterCity: '//*[@id="customer.address.city"]',
        RegisterState: '//*[@id="customer.address.state"]',
        RegisterZipcode: '//*[@id="customer.address.zipCode"]',
        RegisterSSN: '//*[@id="customer.ssn"]',
        RegisterPhonenum: '//*[@id="customer.phoneNumber"]', 
        RegisterUsername: '//*[@id="customer.username"]',
        RegisterPassword: '//*[@id="customer.password"]',
        RegisterConfirmpassword: '//*[@id="repeatedPassword"]',
        RegisterButton: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        RegistrationConfirmed: '//*[@id="leftPanel"]/h2',
        LoggedInUserError: '//*[@id="rightPanel"]/h1',
        LoggedInPasswordError: '//*[@id="rightPanel"]/p',
        FindLoginInfo: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        RegistrationFailed: '//*[@id="customer.ssn.errors"]',
        passwordNotMatch: '//*[@id="repeatedPassword.errors"]',

    },
    clickElement: async function (objectKey) {
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputFieldValue: async function (field, val) {
        var selector = page.parabank.elements[field];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },
     elementExists: async function (objectKey) {
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(2000);
       return driver.findElement(By.xpath(selector));
     },
     inputElement: async function (name, val) {
        var selector = page.parabank.elements[name];
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
     },
};


    