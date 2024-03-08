module.exports = function () 

{   
    /*this.Given(/^I am on the "([^"]*)"$/, function (objectKey) 
    {
      return helpers.loadPage(page.Thendralparabank[objectKey]);
    }); 
   
    this.When(/^I enter "([^"]*)"$/, function (objKey1) {
       return page.parabank.inputUserName(objKey1);
    });

    //this.When(/^I enter "([^"]*)"$/, function (objKey1) {
      //  return page.parabank.inputPassword(objKey1);
    //});

    //this.When(/^I click on "([^"]*)"$/, function () {
      //  return page.parabank.clickElement('LoginButton');
    //});  */

    /*this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.Thendral_parabank.elementExists(objectKey);
    });//

    /*
    //this.When(/^I click on "([^"]*)"$/, function () {
      //  return page.parabank.clickElement('Forgotlogininfo');
    //});

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });

    //this.When(/^I click on "([^"]*)"$/, function () {
      //  return page.parabank.clickElement('Register');
    //});
    */

    this.When(/^I enter value for fields$/, async function (table) {
      const fields = table.rows();
      for (i = 0; i < fields.length; i++) {
          page.Thendral_parabank.inputElement(fields[i][0], fields[i][1]);
      };
      await driver.sleep(3000);
      return;
        
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
      return page.Thendral_parabank.elementExists(objectKey);
  });

  this.When(/^I enter "([^"]*)"$/, function (objKey1) {
      return page.Thendral_parabank.inputPassword(objKey1);
  });

  this.When(/^I click on "([^"]*)"$/, function (objectKey) {
      return page.Thendral_parabank.clickElement(objectKey);
  });
    

    
}