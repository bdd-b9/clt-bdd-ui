module.exports = function () {
     
   
    this.Given("I am on the parabank website", function () {
  return helpers.loadPage(page.parabank.url); 
        });

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
      console.log("The objectKey is: " + page.parabank[objectKey]);
      // Write code here that turns the phrase above into concrete actions
      return helpers.loadPage(page.parabank[objectKey]);
    });
    
    this.When(/^I enter inputs for registering$/, async function(table) {
          const fields = table.rows();
      for (var i = 0; i < fields.length; i++) {
        page.parabank.inputElement(fields[i][0], fields[i][1]);
      }
      await driver.sleep(3000);
      return;
    }); 

   
  
    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, value) { // VehiclesButton, InventoryLink
      return page.parabank.inputElement(inputname, value);
     });
    this.When('I click on ForgotLoginInfo', function () {
      return page.parabank.clickElement('ForgotLoginInfo');
  });

  this.Then('I click on Register', function () {
    return page.parabank.clickElement('Register');
});
  
    this.When('I click on Login', function () {
    return page.parabank.clickElement('Login');
});

           
this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
  console.log("The objectKey in commonsteps is: " + objectKey);
  return page.parabank.elementExists(objectKey);
});
  
  
     
   

}