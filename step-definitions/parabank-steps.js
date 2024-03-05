const helpers = require("../runtime/helpers");

module.exports = function () {

   /* this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey is: ' + page.common[objectKey])
        // Write code here that turns the phrase above into concrete actions
        return helpers.loadPage(page.common[objectKey]);
    });*/

    this.Given('I am on the parabank website', function () {
        return helpers.loadPage(page.parabank.parabank); //https://jootza.com
    });
    this.When(/^I enter inputs for login$/, function(dataTable){
        const rows=dataTable.rows();
        for(var i=0;i<rows.length;i++)
        {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
            console.log(inputvalue)
        }
        return;
    });

    this.Then('I click on loginBtn', function(){
        return page.parabank.clickElement('loginBtn');
    })

    this.Then('I Should see welcomemessage', function () {
               return page.parabank.elementExists('welcome');
    })
 
    this.When('I click on forgotLoginLink', function() {
        return page.parabank.clickElement('forgotLoginLink');
    });
    this.When('I see customerlookUp', function(){
        return page.parabank.elementExists('customerlookUp')
    })
    
    this.When(/^I enter inputs for customerLookUp$/, function(dataTable){
        const rows=dataTable.rows();
       
        
        for(var i=0;i<rows.length;i++)
        {
           
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
          //  console.log("InputnameInputValue"+inputvalue);
    };
  //  await driver.sleep(3000)
        return;
    }); 

   
   this.When('I click on findLogin', async function() {
        return page.parabank.clickElement('findLoginBtn');
    });

    this.Then('I should see loginInformation', function(){
        return page.parabank.elementExists('loginInfo')
    })

    this.When('I click on registerLink', function() {
        return page.parabank.clickElement('registerBtn');
    });

    this.When(/^I enter inputs for Registration$/, function(dataTable){
        const rows=dataTable.rows();
        for(var i=0;i<rows.length;i++)
        {
           
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
            
    }
        return;
    });
   
    this.Then('I click on Register', function()
    {
        return page.parabank.clickElement('RegisterBtn');
    })
    this.Then('I should see welcomemsg', function () {
        return page.parabank.elementExists('welcomemsg');
})
  //this.When(/^I click on "([^"]*)"$/, function(objectKey) { 
  //          return page.parabank.clickElement(objectKey)
  //})

   
 //   this.Then('I should see welcomemessage', function () {
 //       return page.jootza.elementExists('welcome');
 //   });
   /*this.When(/^I see "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
        return page.common.clickElement(objectKey)
    })
    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { // VehiclesButton, InventoryLink
        return page.common.inputElement(inputname, inputvalue)
    })
*/    
//    this.Then(/^I click on "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
//        return page.parabank.clickElement(objectKey)
//    })
 //   thread.sleep(3000)
   /* this.Then(/^I click on "([^"]*)"$/, function(objectKey) { // VehiclesButton, InventoryLink
        return page.common.clickElement(objectKey)
    })

    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { // VehiclesButton, InventoryLink
        return page.common.inputElement(inputname, inputvalue)
    })
//thread.sleep(5000)
this.When(/^I see "([^"]*)"$/, function (objectKey) {
    console.log('The objectKey in commonsteps is: ' + objectKey)
    return page.common.elementExists(objectKey);
});
this.Then('I enter inputs for customerLookUp', function(inputName, inputValue) { // VehiclesButton, InventoryLink
    return page.common.inputElement(inputName, inputValue)
})
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.common.elementExists(objectKey);
    });
   */
};