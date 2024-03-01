const helpers = require("../runtime/helpers");

module.exports = function () {
  this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
    console.log("The objectKey is: " + page.common[objectKey]);
    // Write code here that turns the phrase above into concrete actions
    return helpers.loadPage(page.common[objectKey]);
  });

  this.When(/^we click on "([^"]*)"$/, function (objectKey) {
    // VehiclesButton, InventoryLink, LoginButton
    return page.testpara.clickButtonElement(objectKey);
  });

  this.When(
    /^I enter "([^"]*)" as "([^"]*)"$/,
    function (inputname, inputvalue) {
      username, Email, Password;
      return page.common.inputElement(inputname, inputvalue);
    }
  );

  this.Then(/^II should see "([^"]*)"$/, function (objectKey) {
    console.log("The objectKey in commonsteps is: " + objectKey);
    return page.common.elementExists(objectKey);
  });
};
