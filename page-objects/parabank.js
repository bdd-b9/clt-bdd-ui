const { assert } = require("chai");
const helpers = require("../runtime/helpers");
const { By } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

module.exports = {
    ParabankPortal: 'https://parabank.parasoft.com',
    elements : {
               // THESE ARE  ALL FOR LOGIN : 
        username: by.name('username'), //*[@id="loginPanel"]/form/div[1]/input',  
        password: by.name('password'), //*[@id="loginPanel"]/form/div[2]/input',
        LoginActionButton : '//*[@id="loginPanel"]/form/div[3]/input',
        AccountsOverview: '//*[@id="rightPanel"]/div/div/h1', 
        BankErrorMessage : '//*[@id="rightPanel"]/p',

                // THESE ARE ALL FOR FORGOT LOGIN INFO :
        ForgotLoginInfo : '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookupHeader : '//*[@id="rightPanel"]/h1',
        FirstName1: by.name('firstName'), 
        LastName1: by.name('lastName'),
        Address1: by.name('address.street'),
        City1: by.name('address.city'),
        State1: by.name('address.state'),
        ZipCode1: by.name('address.zipCode'),
        SSN1: by.name('ssn'),
        FindMyLoginInfo : '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        ErrorMessageForNotfindingInfo : '//*[@id="rightPanel"]/h1',

            // THESE ARE ALL FOR TO REGISTER AS A CUSTOMER
        Register : '//*[@id="loginPanel"]/p[2]/a',
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
        RegisterNewUser : '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input'      
        
    },
    clickElement : async function(objectKey) {
        console.log(objectKey + " - entering into Click method");
        const selector = this.elements[objectKey];
        //console.log(selector);
        await driver.sleep(2000);
        console.log("Click Event of " + objectKey)
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement : async function(inputname,inputvalue) {
        console.log("Name = " + inputname);
        //const selector = this.elements[inputname];
        var selector = page.parabank.elements[inputname];
        console.log("inputvalue = " + inputvalue);
        await driver.sleep(2000);  
       // return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
        return driver.findElement(selector).sendKeys(inputvalue); 
       // return driver.findElement(By.name(inputname)).sendKeys(inputvalue);
    },

    elementExists : async function(objectKey){
        const selector = this.elements[objectKey];
        console.log(objectKey + " checking element existing or not");
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector));
    }
    
}

