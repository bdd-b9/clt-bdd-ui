const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://parabank.parasoft.com/parabank/index.htm',
    ParabankPortal:'https://parabank.parasoft.com/parabank/index.htm',
    

    elements: {
        // username: by.name('username'),
        // password: by.name('password'),
        // parabankLoginButton: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        // parabankLoginHeader: '//*[@id="RegistrationForm"]/img',
        LoginButon:'//*[@id="loginPanel"]/form/div[3]/input',
        Error:'//*[@id="rightPanel"]/p',
        Errormessages:'//*[@id="rightPanel"]',
        Accountsoverview:'//*[@id="rightPanel"]/div/div/h1',
        
               
        lookup:'//*[@id="rightPanel"]',
        firstName: by.name('firstName'),
        lastName: by.name('lastName'),
        address: by.name('address.street'),
        city: by.name('address.city'),
        state: by.name('address.state'),
        zipcode: by.name('address.zipCode'),
        ssn: by.name('ssn'),
        findmylogin:'/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[8]/td[2]/input',
        FirstName: by.name('customer.firstName'),
        LastName: by.name('customer.lastName'),
        Address: by.name('customer.address.street'),
        City: by.name('customer.address.city'),
        State: by.name('customer.address.state'),
        Zipcode: by.name('customer.address.zipCode'),
        PhoneNumber :by.name('customer.phoneNumber'),
        Ssn: by.name('customer.ssn'),
        Username: by.name('customer.username'),
        Password: by.name('customer.password'),
        Confirm: by.name('repeatedPassword'),

        
},

content: {
    'Adams, Jimmy': 'Adams, Jimmy',
    'ADMIN, CLT': 'ADMIN, CLT'
},
scrollToElement: async function (objectKey) {
    console.log('objectkey= ' + objectKey)
    var selector = page.parabank.elements[objectKey];
    console.log('selector= ' + selector)
    await driver.sleep(2000);
    return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
},
inputUserName: async function (val) {
    console.log('value is = ' + val)
    var selector = page.parabank.elements['username'];
    console.log('selector= ' + selector)
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(val);

},
inputPassword: async function (val) {
    var selector = page.parabank.elements['password'];
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(val);

},
inputElement: async function (name, val) {
    console.log('value is = ' + name, val)
    var selector = page.parabank.elements[name];
    console.log('selector= ' + selector)
    await driver.sleep(2000);
    return driver.findElement(selector).sendKeys(val);

},
loginPortal: async function (username) {
    await helpers.loadPage(page.jootza.url);
    await this.inputUserName(username)
    await this.inputPassword(page.parabank.elements['PasswordVal'])
    await this.clickElement('LoginBtn')
    await driver.sleep(2000);
    return;
},
verifyApproverName: async function (val) {
    var selector = page.smart.elements['approverName'];
    var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
    assert.equal(page.smart.content[val], result);
},
clickElement: async function (objectKey) { // LoginButton
    // eslint-disable-next-line no-console
    console.log('The objectKey  is: '+objectKey) 
    const selector = this.elements[objectKey];
    console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).click();
},
elementExists: async function (objectKey) {
    // eslint-disable-next-line no-console
    const selector = this.elements[objectKey];
    console.log('The xpath expression is: '+selector)  
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector)); // true // false
},

}
