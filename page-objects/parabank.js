const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

  url: 'https://parabank.parasoft.com/parabank/index.htm',
  parabank: 'https://parabank.parasoft.com/parabank/index.htm',

  elements: {
  Login: '//*[@id="loginPanel"]/form/div[3]/input',
  username: '//*[@id="loginPanel"]/form/div[1]/input',
  password: '//*[@id="loginPanel"]/form/div[2]/input',
  Error: '//*[@id="rightPanel"]/p',
  FirstName:  '//*[@id="customer.firstName"]',
  LastName:'//*[@id="customer.lastName"]',
  Address:'//*[@id="customer.address.street"]',
  City:'//*[@id="customer.address.city"]',
  State:'//*[@id="customer.address.state"]',
  ZipCode:'//*[@id="customer.address.zipCode"]',
  Phone:'//*[@id="customer.phoneNumber"]',
  SSN:'//*[@id="customer.ssn"]',
  user:'//*[@id="customer.username"]',
  pass:'//*[@id="customer.password"]',
  confirm:'//*[@id="repeatedPassword"]',
  forgotLoginInfo:  '//*[@id="loginPanel"]/p[1]/a', 
  customerLookupMessage:  '//*[@id="rightPanel"]/h1',
  Register: '//input[@value="Register"]',
  welcomeMessage: '//*[@id="rightPanel"]/h1', 
  transferFunds: '//*[@id="leftPanel"]/ul/li[3]/a',
  registerLink:    '//*[@id="loginPanel"]/p[2]/a',
  Name: '//*[@id="loginPanel"]/form/div[1]/input',
  Pass: '//*[@id="loginPanel"]/form/div[2]/input',
  fundAmount:  '//*[@id="amount"]',
  fromAccount: '//*[@id="fromAccountId"]/option[2]',
  transferButton: '//*[@id="rightPanel"]/div/div/form/div[2]/input',
  transferCompleteMessage: '//*[@id="rightPanel"]/div/div/h1'
},


  clickElement: async function (objectKey) { // LoginBtn
  const selector = this.elements[objectKey];
  await driver.sleep(3000);
  return driver.findElement(By.xpath(selector)).click(); 

  },
          
    inputElement: async function (inputname, value) {
      // username or password
      const selector = this.elements[inputname];
      await driver.sleep(3000);
      return driver.findElement(By.xpath(selector)).sendKeys(value); 
    },

  
    
      
    elementExists: async function(objectKey) {
      console.log("The objectKey in commonsteps is: " + objectKey);
      const selector = this.elements[objectKey];
      console.log("The selector is: " + (selector));
        await driver.sleep(3000);
      return driver.findElement(By.xpath(selector));
  },


}
  

   

