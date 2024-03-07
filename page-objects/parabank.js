const { assert } = require("chai");
const helpers = require("../runtime/helpers");
const { By } = require("selenium-webdriver");

module.exports = {

    url: 'https://parabank.parasoft.com/',

    elements: {
        LoginButton: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        CustomerLogin: '//*[@id="leftPanel"]/h2',
        AccountOverview: '//*[@id="leftPanel"]/ul/li[8]/a',
        username: by.name('username'), 
        password: by.name('password'),
        Login:'//*[@id="loginPanel"]/form/div[3]/input',
        LoginHeader: '//*[@id="RegistrationForm"]/div[3]/button',

        Register:'//*[@id="loginPanel"]/p[2]/a',
        SigningUpEasy : '//*[@id="rightPanel"]/h1',
        FirstName: by.name('customer.firstName'), 
        LastName: by.name('customer.lastName'),
        Address: by.name('customer.address.street'),
        City: by.name('customer.address.city'),
        State: by.name('customer.address.state'),
        ZipCode: by.name('customer.address.zipCode'),
        Phone: by.name('customer.phoneNumber'),
        SSN: by.name('customer.ssn'),
        UserName: by.name('customer.username'),
        Password: by.name('customer.password'),
        Confirm: by.name('repeatedPassword'),
        RegisterNewUser : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',


        locatedSuccessfully: '//*[@id="rightPanel"]/p[1]',
        FindMyLoginInfo: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        ForgotLoginInfo: '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookup: '//*[@id="rightPanel"]/h1',
        FirstName_forgot: by.name('firstName'), 
        LastName_forgot: by.name('lastName'),
        Address_forgot: by.name('address.street'),
        City_forgot: by.name('address.city'),
        State_forgot: by.name('address.state'),
        ZipCode_forgot: by.name('address.zipCode'),
        SSN_forgot: by.name('ssn')

    },
    
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; // LoginHeader // /html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click(); // true // false
    },


    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; // LoginHeader // /html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong

        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)); // true // false
    },

    inputElement: async function (objectKey) { // username or password
        const selector = this.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys('sample@sample.com');
    },
    inputUserName: async function (val) {
        var selector = page.parabank.elements['username'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    inputElement: async function (inputname, inputvalue) { // username or password
        const selector = this.elements[inputname];
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },



};