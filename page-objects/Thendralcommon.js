const { assert } = require("chai");
const helpers = require("../runtime/helpers");

module.exports = 
{
    collegeboard: 'https://www.collegeboard.org/',
    tesla: 'https://www.tesla.com',
    Jootza: 'https://www.jootza.com/',

    elements: 
    {
        //collegeboardSignin: '//*[@id="globalHeader"]/div/div/div[2]/div[1]/cbw-login/a/span[1]/strong',
        collegeboardSignin: '//*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a',
        Login: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a',
        Accounttype: '//*[@id="content"]/div/div[1]/div/div/h2',
        Student: '//*[@id="content"]/div/div[2]/div/div/a[1]',
        email: '//*[@id="idp-discovery-username"]',        
        Next: '//*[@id="idp-discovery-submit"]',
        Password: '//*[@id="okta-signin-password"]',
        Signin: '//*[@id="okta-signin-submit"]',
        Unablesignin: '//*[@id="form67"]/div[1]/div[1]/div/div/p',
        
        


    },

    clickElement: async function (objectKey)
     {
        // eslint-disable-next-line no-console
        var selector = page.Thendralcommon.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
     },

     elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.Thendralcommon.elements[objectKey];
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