const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" websitepage$/, function (objectKey) {
        return helpers.loadPage(page.parabank[objectKey],2000);
    });

    this.And(/^I click on the "([^"]*)"$/, function(objectKey) { 
        return page.parabank.clickElement(objectKey);
    });

    this.Then(/^I should see the "([^"]*)"$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });

    this.When(/^I enter the inputs details$/, function(dataTable) { 
        const rows = dataTable.rows()
        for(var i=0; i<rows.length; i++){
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname, inputvalue)
        }
        return ;
    });

   

}
