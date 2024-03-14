
const helpers = require("../runtime/helpers");
module.exports = function () {
     
  
   
        
     this.Given(/^I am on the "([^"]*)" portal$/, function(objectKey) {
      return helpers.loadPage(page.saucedemo[objectKey],2000);
     });
    

      this.When(/^I enter the "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) {
            return page.saucedemo.inputElement(inputname, inputvalue)
        });
        
         
       this.When(/^I click on productName as "([^"]*)"$/, function(objectKey) {
          return page.saucedemo.clickElement(objectKey)
      });
   
 
                 
      this.When(/^I click on "([^"]*)"$/, function(objectKey) {
         return page.saucedemo.clickElement(objectKey)
       });

             
      this.Then(/^I should see "([^"]*)"$/, function(objectKey) {
          return page.saucedemo.elementExists(objectKey)
       });

       this.When(/^I enter input information$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.saucedemo.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });

    
  }
            
