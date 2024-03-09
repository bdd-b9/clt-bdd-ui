const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        return helpers.loadPage(page.swaglabs[objectKey],2000);
    });


    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { 
        return page.swaglabs.inputElement(inputname, inputvalue)
    });

  

    this.And(/^I click on the "([^"]*)"$/, function(objectKey) { 
        return page.swaglabs.clickElement(objectKey);
    });

    this.Then(/^I should see the "([^"]*)"$/, function (objectKey) {
        return page.swaglabs.elementExists(objectKey);
    });



   

}
