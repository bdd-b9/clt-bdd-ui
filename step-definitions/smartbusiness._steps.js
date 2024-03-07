module.exports = function () {

    this.Given('I am on the smallbusiness portal', function () {
         return helpers.loadPage(page.smallbusiness.url);
        
    });
   
    this.When('I click on LoginButton', function () {
        return page.smallbusiness.clickElement('LoginButton');
       
   });

   this.Then('I should see LoginHeader', function () {
    return page.smallbusiness.elementExists('LoginHeader');
});

this.When('I enter emailid', function() {
    return page.smallbusiness.inputElement('emailid');
});



};