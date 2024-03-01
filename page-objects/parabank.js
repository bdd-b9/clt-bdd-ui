const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    parabank: 'https://parabank.parasoft.com/',

    elements: {
        parabankHeader: '/html/body/div[1]/div[2]',
        loginActionButton: '//*[@id="loginPanel"]/form/div[3]/input',
        usernametextbox: '//*[@id="loginPanel"]/form/div[1]/input',
        passwordtextbox: '//*[@id="loginPanel"]/form/div[2]/input',
        BlankErrorMessage: '//*[@id="rightPanel"]/h1',
        ErrorMessage: '//*[@id="rightPanel"]/p', 
        username: by.name('username'),
        password: by.name('password'),
        ForgotLogin: '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookup: '//*[@id="rightPanel"]/h1',
        FirstName: by.name('firstName'),
        LastName: by.name('lastName'),
        Address: by.name('address.street'),
        City: by.name('address.city'),
        State: by.name('address.state'),
        ZipCode: by.name('address.zipCode'),
        SSN: by.name('ssn'),
        Find: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input', 
        Signupeasy: '//*[@id="rightPanel"]/h1', 
        Register: '//*[@id="loginPanel"]/p[2]/a',
        FirstName: by.name('customer.firstName'),
        LastName: by.name('customer.lastName'),
        Address: by.name('customer.address.street'),
        City: by.name('customer.address.city'),
        State: by.name('customer.address.state'),
        Zipcode: by.name('customer.address.zipCode'),
        Phone: by.name('customer.phoneNumber'),
        SSN: by.name('customer.ssn'),
        UserName: by.name('customer.username'),
        Password: by.name('customer.password'),
        Confirm: by.name('repeatedPassword'),
        CustomerRegister: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        Error: '//*[@id="rightPanel"]/p', 

        
        
    },

    clickElement: async function (objectKey) {  //loginActionButton,
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectKey];   
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();  //*[@id="loginPanel"]/form/div[3]/input,
    },
    
    inputElement: async function (name, val) {
        var selector = page.parabank.elements[name];
        await driver.sleep(5000);
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function (objectkey) { 
        // eslint-disable-next-line no-console
        var selector = page.parabank.elements[objectkey];  
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

};