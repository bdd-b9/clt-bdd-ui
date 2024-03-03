const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    Jootzaportal: 'http://www.jootza.com/',
    TeslaWebsite: 'http://www.tesla.com/',
    CollegeboardPortal: 'https://www.collegeboard.org/',
    smartsubmissionsPortal:'https://www.smartsubmissions.com',
    ParabankPortal: 'https://parabank.parasoft.com/parabank/index.htm',
    
    elements: {
        
        username: by.name('username'), // '//*[@id="username"]', //*[@id="login-password relate-pos"]
        password: by.name('password'),
        Signin: '//*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a',
        signinsubmit:'//*[@id="okta-signin-submit"]',
        unabletosignin:'//*[@id="form67"]/div[1]/div[1]/div/div',
        siginpage:'//*[@id="content"]',
        Studentbtn:'//*[@id="content"]/div/div[2]/div/div/a[1]',
        Signininfo:'//*[@id="form32"]/div[1]/h2',
        emailaddress: by.name('username'),
        Nextbtn:'//*[@id="idp-discovery-submit"]',

        LoginActionButton: '//*[@id="btn-login"]/button',
        WelcomeMessage: '/html/body/mdb-root/app-navigation/header/mdb-navbar/nav/div[2]/p',
        // LoginButton: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        // ErrorMessage: '//*[@id="toast-container"]/mdb-toast-component/div',
        VehiclesButton :'//*[@id="dx-nav-item--vehicles"]',
        InventoryLink: '//*[@id="mega-menu"]/div/dialog/div[1]/div[1]/div[3]/ul/li[1]/a',
        InventoryHeader: '//*[@id="iso-container"]/div/div[1]/section',
        LoginButtonsmart: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        LoginHeadersmart: '//*[@id="RegistrationForm"]/img',
        // LoginActionButtonsmart: '//*[@id="RegistrationForm"]/div[3]/button',
        // ErrorMessagesmart: '//*[@id="RegistrationForm"]/div[2]/div[2]',
        Registerlink :'//*[@id="loginPanel"]/p[2]/a',
        Signingup :'//*[@id="rightPanel"]/h1',
        Customerlogin: '//*[@id="leftPanel"]/h2',
        forgetlogininfo:'//*[@id="loginPanel"]/p[1]/a',
        Register: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        Welcomemessage: '//*[@id="rightPanel"]/p',
        dataisrequired: '//*[@id="customer.address.street.errors"]',
        usernamealreadyexists:'//*[@id="customer.username.errors"]',
        RegisterButton: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
        RegisterHeader:'/html/body/mdb-root/main/div/app-signup/header/section/div/div/div/div/div/div/h2',
        signupButton:'//*[@id="btn-login"]/button',
        errormessage:'//*[@id="toast-container"]/mdb-toast-component/div',

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
