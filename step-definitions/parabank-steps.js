module.exports = function () {

    this.Given('I am on the parabankparasoft portal', function () {
        return helpers.loadPage(page.parabank.url);
    });
    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function (objKey1,objKey2) {
        return page.parabank.inputFieldValue(objKey1,objKey2);
    });
    this.When('I click on loginButton', function () {
        return page.parabank.clickElement('LoginButton');
    });

    this.Then('I should see LoggedInUser', function () {
        return page.parabank.elementExists('LoggedInUser');
    });
    // this.When('I click on RegisterLink', function () {
    //     return page.parabank.clickElement('Register');
    // });
    this.When(/^I enter the inputs for registration$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.parabank.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(1000);
        return;
    });
    // this.When('I click on RegisterButton', function () {
    //     return page.parabank.clickElement('RegisterButton');
    // });
    this.Then('I should see RegistrationConfirmed', function () {
        return page.parabank.elementExists('RegistrationConfirmed');
    });

    this.When(/^I click on "([^"]*)"$/, function (objKey1) {
        return page.parabank.clickElement(objKey1);
    });
    this.When(/^I enter the inputs for LoginInfo$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.parabank.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(1000);
        return;
    });
};



