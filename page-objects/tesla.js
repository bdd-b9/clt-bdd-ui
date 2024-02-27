
/* eslint-disable no-undef */
module.exports = 
{

    url: 'http://www.tesla.com/',

    elements: 
    {
        ShopAvailableButton: '//*[@id="tesla-hero-parallax-3245"]/div[2]/div/div[1]/section/a[1]/span',
        VehicleButton: '//*[@id="dx-nav-item--vehicles"]/span',
        InventoryLink: '//*[@id="mega-menu"]/div/dialog/div[1]/h2'
    },

    clickElement: async function (objectKey) 
    {
        // eslint-disable-next-line no-console
        var selector = page.tesla.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function (objectKey) 
    {
        // eslint-disable-next-line no-console
        var selector = page.tesla.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
}
