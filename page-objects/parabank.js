const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    Parabank: 'https://parabank.parasoft.com/parabank/index.htm',

    elements: {

        Register: '//*[@id="loginPanel"]/p[2]/a',
        SigningUpEasy: '//*[@id="rightPanel"]/h1',
        FirstName: '//*[@id="customer.firstName"]', 
        LastName: '//*[@id="customer.lastName"]',
        Address: '//*[@id="customer.address.street"]',
        City: '//*[@id="customer.address.city"]',
        State: '//*[@id="customer.address.state"]',
        ZipCode: '//*[@id="customer.address.zipCode"]',
        PhoneNumber: '//*[@id="customer.phoneNumber"]',
        SSN: '//*[@id="customer.ssn"]',
        UserName: '//*[@id="customer.username"]',
        Password: '//*[@id="customer.password"]',
        Confirm: '//*[@id="repeatedPassword"]',
        SubmitButton: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        SuccessMessage: '//*[@id="rightPanel"]/h1',

        CustomerLoginHeader: '//*[@id="leftPanel"]/h2',
        CustomerUserName: '//*[@id="loginPanel"]/form/div[1]/input',
        CustomerPassword: '//*[@id="loginPanel"]/form/div[2]/input',
        LoginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        AccountoverviewHeader: '//*[@id="rightPanel"]/div/div/h1',

        ForgotLoginButton:'//*[@id="loginPanel"]/p[1]/a',
        CustomerLookupHeader: '//*[@id="rightPanel"]/h1',
        flfirstName:'//*[@id="firstName"]',
        fllastName: '//*[@id="lastName"]',
        fladdress: '//*[@id="address.street"]',
        flcity: '//*[@id="address.city"]',
        flstate: '//*[@id="address.state"]',
        flzipCode: '//*[@id="address.zipCode"]',
        flssn: '//*[@id="ssn"]',
        FindMyLoginInfoButton:'//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        LoginInfoDetails: '//*[@id="rightPanel"]/p[1]',
    },
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        console.log('The objectKey is: ' + objectKey);
        const selector = this.elements[objectKey];
        await driver.sleep(3000);
        console.log('selector= ' + selector);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    inputElement: async function (name, val) {
        var selector = page.parabank.elements[name];
        await driver.sleep(2000);
        console.log('selector= ' + selector);
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
};