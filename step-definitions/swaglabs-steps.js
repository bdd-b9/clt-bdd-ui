const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        return helpers.loadPage(page.swaglabs[objectKey],2000);
    });


    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { 
        return page.swaglabs.inputElement(inputname, inputvalue)
    });

  
    this.When(/^I click on the "([^"]*)"$/, function(objectKey) { 
        return page.swaglabs.clickElement(objectKey);
    });


    this.When(/^I click on the saucebuttons$/, function (dataTable){
        const rows = dataTable.rows()
        for (var i = 0; i < rows.length; i++) {
            var filtername = rows[i][0]
            page.swaglabs.clickElement(filtername);
        }
        return;

    });


    this.Then(/^I should see the "([^"]*)"$/, function (objectKey) {
        return page.swaglabs.elementExists(objectKey);
    });



    this.When(/^I am logging into the swaglabs website as "([^"]*)" and "([^"]*)"$/, function(username, password) { 
        helpers.loadPage(page.swaglabs.swaglabs);
        page.swaglabs.inputElement('username', username);
        page.swaglabs.inputElement('password', password);
        page.swaglabs.clickElement('loginBttn');
        return 
    });
   


    this.When(/^I enter the customer details$/, function (dataTable) {
        const rows = dataTable.rows()
        for (var i = 0; i < rows.length; i++) {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.swaglabs.inputElement(inputname, inputvalue)
        }
        return;
    });



}
