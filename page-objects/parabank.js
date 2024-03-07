const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

  url: "https://parabank.parasoft.com/parabank/register.htm",
  Parabank: "https://parabank.parasoft.com/parabank/register.htm",

  elements: {
  Login: '//*[@id="loginPanel"]/form/div[3]/input',
  username: by.name('username'),
  password: by.name('password'),
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
  ForgotLoginInfo:  '//*[@id="loginPanel"]/p[1]/a',
  customerlookupmessage:  '//*[@id="rightPanel"]/h1',
  Register: '//input[@value="Register"]',
  WelcomeMessage: '//*[@id="rightPanel"]/h1',
},

//clickElement: async function (objectKey) { // LoginBtn
 // const selector = this.elements[objectKey];
 // await driver.sleep(3000);
  //return driver.findElement(By.xpath(selector)).click();

  clickElement: async function (objectKey) {
    // eslint-disable-next-line no-console
    console.log(objectKey);
    var selector = this.elements[objectKey];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();

  },

          
 /*inputElement: async function (inputname, inputvalue) {
    // username or password
    const selector = this.elements[inputname];
    await driver.sleep(3000);
    return driver.findElement(selector).sendKeys(inputvalue); */

    inputElement: async function (inputname, inputvalue) {
      // username or password
      const selector = this.elements[inputname];
      await driver.sleep(3000);
      return driver.findElement(By.xpath(selector)).sendKeys(inputvalue); 
    },

  
  elementExists: async function (objectKey) {
    // eslint-disable-next-line no-console
    const selector = this.elements[objectKey]; 
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector)); // true // false
},
  

   

}
