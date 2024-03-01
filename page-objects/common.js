const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
  SmartSubmissionPortal: "https://www.smartsubmissions.com/",
  JootzaPortal: "http://www.jootza.com/",
  TeslaWebsite: "http://www.tesla.com/",
  elements: {
    VehiclesButton: '//*[@id="dx-nav-item--vehicles"]/span',
    username: by.name("username"), // '//*[@id="username"]', //*[@id="login-password relate-pos"]
    password: by.name("password"),
    Email: by.name("email"),

    LoginActionButton: '//*[@id="RegistrationForm"]/div[3]/button',
    ErrorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
    LoginButton: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
  },
  clickElement: async function (objectKey) {
    // LoginButton
    // eslint-disable-next-line no-console
    console.log("The objectKey  is: " + objectKey);
    const selector = this.elements[objectKey];
    console.log("The xpath expression is: " + selector); //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).click();
  },

  inputElement: async function (inputname, inputvalue) {
    // username or password
    const selector = this.elements[inputname];
    await driver.sleep(3000);
    return driver.findElement(selector).sendKeys(inputvalue);
  },

  elementExists: async function (objectKey) {
    // eslint-disable-next-line no-console
    const selector = this.elements[objectKey];
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector)); // true // false
  },
};
