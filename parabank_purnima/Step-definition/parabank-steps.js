const DataTable = require("cucumber/lib/cucumber/ast/data_table");

module.exports = function () {
    
    this.When('I click on LoginButton', function () {
        return page.parabank.clickElement('LoginButon');
    });

    this.Then('I should see Error', function () {
        return page.parabank.elementExists('Error');
    });

    this.Then('I should see Accounts overview', function () {
        return page.parabank.elementExists('Accountsoverview');
    });

    
    
    this.Then('I should see customer lookup', function () {
        return page.parabank.elementExists('lookup');
    });

    this.When(/^I enter the inputs for signup$/,function (dataTable) {
        const rows = dataTable.rows();
        for (var i=0; i<rows.length; i++) {
            var inputName = rows[i][0];
            var inputValue =rows[i][1]
            page.parabank.inputElement(inputName, inputValue);
        } 
        return ;       
    });

    this.When(/^I enter the inputs for info$/,function (dataTable) {
        const rows = dataTable.rows();
        for (var i=0; i<rows.length; i++) {
            var inputName = rows[i][0];
            var inputValue =rows[i][1]
            page.parabank.inputElement(inputName, inputValue);
        } 
        return ;       
    });

    this.When('I click on findmylogin', function () {
        return page.parabank.clickElement('findmylogin');
    });
    this.Then('I should see Errormessages', function () {
        return page.parabank.elementExists('Errormessages');
    });

}
