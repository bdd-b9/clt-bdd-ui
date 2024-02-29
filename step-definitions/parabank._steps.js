module.exports = function () {

    this.Given('I am on the Parabank portal', function () {
         return helpers.loadPage(page.parabank.url);
        });
    this.Then('I Should see Customer Login', function (){
        return page.parabank.elementExists('CustomerLogin');
    })
};


