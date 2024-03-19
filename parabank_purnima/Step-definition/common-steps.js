const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey is: ' + page.common[objectKey])
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.common[objectKey]);
    });

    this.When(/^I click on "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
        return page.common.clickElement(objectKey)
    })

    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { // VehiclesButton, InventoryLink
        return page.common.inputElement(inputname, inputvalue)
    })

    this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
        console.log('The objectKey in commonsteps is: ' +objectKey)
        return page.common.elementExists(objectKey);
    });

   
}