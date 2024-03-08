module.exports = function () {

    this.Given('I am on the tesla website', function () {
        return helpers.loadPage(page.tesla.url);
    });

    
    this.When('I click to ShopAvailable Button', function () {
        return page.tesla.clickElement('ShopAvailableButton');
    });

    this.Then('I should see ShopAvailable Button', function () {
        return page.tesla.elementExists('ShopAvailableButton');
    });

    
    this.When('I click on Vehicle Button', function () {
        return page.tesla.clickElement('VehicleButton');
    });

    this.When('I click on Inventory Link', function () {
        return page.tesla.clickElement('InventoryLink');
    });
}