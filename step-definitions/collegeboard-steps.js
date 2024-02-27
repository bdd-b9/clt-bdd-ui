
module.exports = function () {

    this.Given('I am on the CollegeBoardwebsite', function () {
        return helpers.loadPage(page.CollegeBoard.url);
    })
   
    this.When('I should see Signinbutton', function() {
        return page.CollegeBoard.elementExists('Sign in')
    })

    this.When('I should click on the student button', function() {
        return page.CollegeBoard.elementExists('Student')
    })

    this.And('i should be directed to the Sign in Page', function(){
    return page.CollegeBoard.elementExists('Sign in')
})

this.When(/^I scroll to "([^"]*)"$/, function (objectKey) {
driver.sleep(10000)
return page.CollegeBoardelementExists.scrollToElement(objectKey);
});

 this.When('I click on {string}', function (objectKey) {
return page.CollegeBoardelementExists.clickElement(objectKey);

this.And('I click on the EmailId'"([^"]*)"$/, function() {
    return page.CollegeBoardelementExists('EmailId')
})

this.And('I enter the EmailId'"([^"]*)"$/, function() {
    return page.CollegeBoardelementExists('EmailId')
})

this.And('I click on the Password'"([^"]*)"$/, function() {
    return page.CollegeBoardelementExists('Passsword')
})

this.And('I enter the Password'"([^"]*)"$/, function() {
    return page.CollegeBoardelementExists('EmailId')
})

this.Then('I click on Remember my email Address button', function() {
    return page.CollegeBoardelementExists('Remember my email Address button')
})

this.Then('I should see invalid email id or password', function() {
    return page.CollegeBoardelementExists('invalid email id or password')
})




//#region  Feature: As a college student , I want to be able to navigate to home page so that I can view college information

@collegeboard @collegeboardHome
Scenario: Student is displayed with collegeboard home page
 Given I am on the "collegeBoard" website
 When I click on "sign in button"
 And I click on the "student" option
 And I am "Directed to the Sign in Page"
 And I click on  the "email id" tab
 And I "enter the email id"
 And I click on "Password" tab
 And I "enter the Password"
 Then I click on "Remember my email Address" checkbox
 Then I should see "invalid email id or password"//#endregion
 
}
