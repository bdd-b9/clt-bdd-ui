const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    ParabankPortal: 'https://parabank.parasoft.com/parabank/index.htm',
    
    elements: {
        
        username: by.name('username'), 
        password: by.name('password'),
                
        Registerlink :'//*[@id="loginPanel"]/p[2]/a',
        Signingup :'//*[@id="rightPanel"]/h1',
        Customerlogin: '//*[@id="leftPanel"]/h2',
        forgetlogininfo:'//*[@id="loginPanel"]/p[1]/a',
        Register: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        Welcomemessage: '//*[@id="rightPanel"]/p',
        dataisrequired: '//*[@id="customer.address.street.errors"]',
        usernamealreadyexists:'//*[@id="customer.username.errors"]',
                

    },
    clickElement: async function (objectKey) { // LoginButton
        // eslint-disable-next-line no-console
        console.log('The objectKey  is: '+objectKey) 
        const selector = this.elements[objectKey];
        console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) { // username or password
        const selector = this.elements[inputname];
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },

    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey];
        console.log('The xpath expression is: '+selector)  
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)); // true // false
    },
    
}
