const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
  //  JootzaPortal: 'http://www.jootza.com/',
    Tesla: 'http://www.tesla.com/',
    smartSubmissions: 'https://www.smartsubmissions.com/',
    elements: {
        
        ShopAvailable: '//section[@id="tesla-hero-parallax-3245"]/div[2]/div[1]/div[1]/section/a[1]',
//        
        VehiclesLink: '//button[@id="dx-nav-item--vehicles"]',
        Inventory: '//*[@id="mega-menu"]/div/dialog/div[1]/div[1]/div[3]/ul/li[1]/a',
        InventoryHeader: '//div[@id="iso-container"]/div/div[1]/section/h1',
        LoginBtn: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        smartsubmissionsHeader: '//*[@id="RegistrationForm"]/img',
        email: by.name('email'),//*[@id="RegistrationForm"]/div[1]/div/input',
        password: by.name('password'),//'//*[@id="RegistrationForm"]/div[2]/div/input',
        LoginActionBtn: '//*[@id="RegistrationForm"]/div[3]/button',//*[@id="RegistrationForm"]/div[2]/div[2]
        ErrorMsg: '//*[@id="RegistrationForm"]/div[2]/div[2]',
        
        VehiclesButton: '//*[@id="dx-nav-item--vehicles"]/span',
        username: by.name('username'), // '//*[@id="username"]', //*[@id="login-password relate-pos"]
        password: by.name('password'),
        LoginActionButton: '//*[@id="btn-login"]/button',
        ErrorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
        
        LoginButton: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
    //    ShopAvailable: '//section[@id="tesla-hero-parallax-3245"]/div[2]/div[1]/div[1]/section/a[1]',
    //    InventoryHeader: '//div[@id="iso-container"]/div/div[1]/section/h1',
        
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
        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)); // true // false
    },
    
};