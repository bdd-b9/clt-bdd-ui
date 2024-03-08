module.exports = function () {

    
    this.Given('I am on the walmart Landing page', function () {
        return helpers.loadPage(page.walmart.url);
    });

    this.When('I clck on Sign in button', function () 
    {
        return page.walmart.clickElement('SigninButton');
    });

    this.Then('I should see Sign in  or create account header', function ()
    {
        return page.walmart.elementExists('SigninCreateaccountHeader');

    });

    this.When('I click on Departments button', function ()
    {
        return page.walmart.clickElement('DepartmentsButton');

    });

    this.Then('I should see All Departments List header', function ()
    {
        return page.walmart.elementExists('AllDepartmentsListheader');

    }); 
       
    
}



