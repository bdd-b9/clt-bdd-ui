module.exports = function () {

    this.Given('I am on the Parabank portal', function () {
         return helpers.loadPage(page.parabank.url);
        });
    this.Then(/^I should see "([^"]*)"$/, function(objectKey){
        return page.parabank.elementExists(objectKey);
    });
    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) {  
        return page.parabank.inputElement(inputname, inputvalue)
    });
    this.When(/^I click on "([^"]*)"$/, function(objectKey) { 
        return page.parabank.clickElement(objectKey)
    });

    this.When('I enter inputs for registration details', function(DataTable){
        const rows = DataTable.rows();
        for(var i=0 ; i < rows.length ; i++){
            var inputname = rows[i][0];
            var inputvalue = rows[i][1];
            page.parabank.inputElement(inputname,inputvalue);
        }
        return;
    });

    this.Then('I enter the inputs for finding details', function(DataTable) {
        const rows = DataTable.rows();
        for(var i=0 ; i < rows.length ; i++){
            var inputname = rows[i][0];
            var inputvalue = rows[i][1];
            page.parabank.inputElement(inputname,inputvalue);
        }
        return;
    });

};







