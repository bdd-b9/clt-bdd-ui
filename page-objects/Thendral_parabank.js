const { assert } = require("chai");
const helpers = require("../runtime/helpers");

module.exports = {

    parabank: 'https://parabank.parasoft.com/parabank/index.htm',

    elements:
    {
        WelcomeMessage: '//*[@id="bodyPanel"]',
        MPUserName: '//*[@id="loginPanel"]/form/div[1]/input',
        MPPassword: '//*[@id="loginPanel"]/form/div[2]/input',
        LoginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        CustomerLogin: '//*[@id="leftPanel"]/h2',
        ErrorMessage: '//*[@id="rightPanel"]/h1',
       ForgotLoginInfo: '//*[@id="loginPanel"]/p[1]/a',
       MPRegister: '//*[@id="loginPanel"]/p[2]/a',
       CustomerLookup: '//*[@id="rightPanel"]/h1',
       AccountsOverview: '//*[@id="rightPanel"]/div/div/h1',  
       passwordErrorMessage: '//*[@id="repeatedPassword.errors"]',
       WelcomeMessage: '//*[@id="rightPanel"]/h1',  
       OpenNewAccount: '//*[@id="rightPanel"]/div/div/form/div/input',
       AccountOpened: '//*[@id="rightPanel"]/div/div/h1',
       parabanksignup: '//*[@id="rightPanel"]/h1',
       FirstName: '//*[@id="customer.firstName"]',
       LastName: '//*[@id="customer.lastName"]',
       Address: '//*[@id="customer.address.street"]',
       City: '//*[@id="customer.address.city"]',
       State: '//*[@id="customer.address.state"]',
       Zipcode: '//*[@id="customer.address.zipCode"]',
       PhoneNo: '//*[@id="customer.phoneNumber"]',
       SSN: '//*[@id="customer.ssn"]',
       Username: '//*[@id="customer.username"]',
       Password: '//*[@id="customer.password"]',
       Confirm: '//*[@id="repeatedPassword"]',
       Register: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
       AccountServices: '[@id="leftPanel"]/h2',
       openNewAccount: '//*[@id="leftPanel"]/ul/li[1]/a',
       //*[@id="leftPanel"]/ul/li[1]/a
       //*[@id="leftPanel"]/h2
       //*[@id="rightPanel"]/h1



    },


        
    clickElement: async function (objectKey)
    {
       // eslint-disable-next-line no-console
       var selector = page.Thendral_parabank.elements[objectKey];
       await driver.sleep(3000);
       return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) {
       // eslint-disable-next-line no-console
       var selector = this.elements[objectKey];
       console.log('xpath'+selector)
       await driver.sleep(3000);
       return driver.findElement(By.xpath(selector));
   },

   inputElement: async function (inputname,inputvalue) { // username or password
    const selector = this.elements[inputname];
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);

    }
}
