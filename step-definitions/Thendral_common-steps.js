module.exports = function () 
{


    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey)
    {
       // return page.common.
        return helpers.loadPage(page.Thendralcommon[objectKey]);

    });

    this.When(/^I click on "([^"]*)" button$/, function (objectKey)    
    {
       console.log ('Object Key is '+ objectKey);
        return page.Thendralcommon.clickElement(objectKey);

    });

    this.Then(/^I should see "([^"]*)" page$/, function (objectKey)
    {
       console.log(objectKey)
        return page.Thendralcommon.elementExists(objectKey);

    }
    );

    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function (inputName,inputValue)
    {
       //console.log(inputName)
        return page.Thendralcommon.inputElement(inputName,inputValue);
    });



    
    
}