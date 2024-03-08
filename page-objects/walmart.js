module.exports = {

    url: 'http://www.walmart.com/',

    elements : {
        SigninButton: '//*[@id="__next"]/div[1]/div/span/header/nav/ul/li[2]/a/div/div[1]',
        SigninCreateaccountHeader: '//*[@id="__next"]/div[1]/div/span/header/nav/ul/li[2]/div/div/button',
        services:'//*[@id="__next"]/div[1]/div/span/header/section[2]/div/a',
        DepartmentsButton: '//*[@id="__next"]/div[1]/div/span/header/section[1]/div/a',
        AllDepartmentsListheader: '//*[@id="__next"]/div[1]/div/span/header/section[1]/div/div/div/div/div/a'

    },




    clickElement: async function (objectKey)

        {
            var selector = page.walmart.elements[objectKey];
            await driver.sleep(2000);
            return driver.findElement(By.xpath(selector)).click();
        },

    elementExists: async function (objectKey) 
        {
            // eslint-disable-next-line no-console
            var selector = page.walmart.elements[objectKey];
            await driver.sleep(5000);
            return driver.findElement(By.xpath(selector));
        }


    }