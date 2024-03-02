module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function(objectKey) {
        console.log('The objectKey is:' +page.parabank[objectKey])
        return helpers.loadPage(page.parabank[objectKey]);
    });

    
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey is:' + objectKey)
        return page.parabank.elementExists(objectKey);
      });

      this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function (inputname, inputvalue) {
        return page.parabank.inputElement(inputname, inputvalue);
    });

    this.Then(/^I enter the inputs for forgotlogininfo$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.parabank.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(2000);
        return;
    });

    this.Then(/^I enter the inputs for register$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.parabank.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(2000);
        return;
    });


    this.When(/^I click on "([^"]*)"$/, function (objectKey) { 
        return page.parabank.clickElement(objectKey);            
      });

}
