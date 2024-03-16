module.exports = function () {

    this.Given(/^I am on the "([^"]*)" page$/, function (objectKey) {
        return helpers.loadPage(page.parabank[objectKey]);
    });
   
   // this.When(/^I click on "([^"]*)"$/, function (objectKey) {
      //  console.log('The objectKey is: ' + page.parabank[objectKey]);
        //console.log("entering steps");
       // return page.parabank.clickElement(objectKey);
  // });

   this.When(/^I click on "([^"]*)"$/, function (objectKey) {
       return page.parabank.clickElement(objectKey);
});

    this.Then(/^I should see "([^"]*)" page$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });

    this.When(/^I enter "([^"])" as "([^"]*)" $/, function (inputname,inputvalue) {
       return page.parabank.inputElement(inputname,inputvalue);
    });

    this.When(/^I enter the inputs for Lookup$/, function (dataTable) {
        const rows = dataTable.rows();
        for(var i=0 ; i < rows.length ; i++) {
            var inputname = rows[i][0];
            var inputvalue = rows[i][1];
            page.parabank.inputElement (inputname,inputvalue);
        };
        return;
    });

   };