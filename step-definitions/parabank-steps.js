const helpers = require("../runtime/helpers");

module.exports = function () {
    this.Given(/^: I am on the "([^"]*)" website$/, function(objectKey) {
        console.log('The objectKey is: ' + page.parabank[objectKey]);
        return helpers.loadPage(page.parabank[objectKey]);
        //return helpers.loadPage(page.parabank.ParabankPortal);
    });

    this.When(/^: I enter "([^"]*)" as "([^"]*)"$/, function(inputname,inputvalue){
        return page.parabank.inputElement(inputname,inputvalue);
    });

    this.When(/^: I click on "([^"]*)"$/, function(objectKey){
        return page.parabank.clickElement(objectKey);
    });

    this.Then(/^: I should see "([^"]*)"$/, function(objectKey){
        return page.parabank.elementExists(objectKey);
    });

    this.When(/^: I enter the inputs for registration$/, function(DataTable){
        const rows = DataTable.rows();
        for(var i=0 ; i < rows.length ; i++){
            var inputname = rows[i][0];
            var inputvalue = rows[i][1];
            page.parabank.inputElement(inputname,inputvalue);
        }
        return;
    });

    this.Then(/^: I enter the inputs for finding my login details$/, function(DataTable) {
        const rows = DataTable.rows();
        for(var i=0 ; i < rows.length ; i++){
            var inputname = rows[i][0];
            var inputvalue = rows[i][1];
            page.parabank.inputElement(inputname,inputvalue);
        }
        return;
    });

}


/* Create below scenarios
1. Register 
2. Customer Login 
3. Forgot Login Info

Create a new branch parabank_firstname and push it to your origin repo.
Make your origin repo as public

Deliverables:
1. A feature file (Scenarios should have DataTable, Scenario Outlines) (prarabank.feature)
2. A steps-definition file (parabank-steps.js)
3. A page object file - (parabank.js)



A complete test plan document for manual testing.
Make sure it is written properly without any grammatical errors.

Once completed, send the test plan document to bdd.b9@clarkstech.com with subject - Your First Name Last Name | Parabank Test Plan

And your github link in the body of the email.*/
