module.exports = function () {


    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        return helpers.loadPage(page.parabank[objectKey]);
    });

    this.When(/^I click on the "([^"]*)"$/, function(objectKey)  {
        console.log('The objectKey is ' + page.parabank[objectKey]);
        return page.parabank.clickElement(objectKey);
    });

    this.Then(/^I should see the "([^"]*)"$/, function (objectKey)  {
        return page.parabank.elementExists(objectKey);
    });

    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(objectKey,value)  {
        return page.parabank.inputElement(objectKey,value);
    });
    
    this.When(/^I enter the inputs for Lookup$/, function (datatable) {
        const rows = datatable.rows()
         for(var i=0; i<rows.length; i++) {
             var inputname = rows[i][0];
             var inputvalue = rows[i][1];
             page.parabank.inputElement(inputname, inputvalue);
        }  
        return;
    });

    this.When(/^I enter the inputs for Register$/, function (datatable) {
        const rows = datatable.rows()
         for(var i=0; i<rows.length; i++) {
             var inputname = rows[i][0];
             var inputvalue = rows[i][1];
             page.parabank.inputElement(inputname, inputvalue);
        }  
        return;
    });

   
}
  

