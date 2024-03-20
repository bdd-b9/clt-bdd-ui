const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on "([^"]*)" websitepage$/, function (objectKey) {
        return helpers.loadPage(page.parabank[objectKey], 2000);
    });



    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });


    this.Then(/^I see "([^"]*)"$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });


    this.When(/^I enter the inputs details$/, function (dataTable) {
        const rows = dataTable.rows()
        for (var i = 0; i < rows.length; i++) {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname, inputvalue)
        }
        return;
    });


    this.When(/^I am logging into the parabank website as "([^"]*)" and "([^"]*)"$/, function (cusUserName, cusPassword) {
        helpers.loadPage(page.parabank.parabank);
        page.parabank.inputElement('cusUserName', cusUserName);
        page.parabank.inputElement('cusPassword', cusPassword);
        page.parabank.clickElement('loginButton');
        //page.parabank.elementExists('CustomerPage');
        return
    });


    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.parabank.clickElement(objectKey);
    });


    this.When(/^I enter the "([^"]*)" as "([^"]*)"$/, function (inputname, inputvalue) {
        return page.parabank.inputElement(inputname, inputvalue)
    });


}
