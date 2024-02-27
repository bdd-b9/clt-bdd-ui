Feature: As a Collegeboard student, I want to be able to navigate to landing page so that I can view course details

@colleboard @collegeboardlandingpage
Scenario: Student is displayed with collegeboard.org landing page
Given I am on the "collegeboard" website
When I click on "collegeboardSignin" button
##Then I should see "Accounttype" page
And I click on "Student" button
And I enter "email" as "asknch12@gmail.com"
And I click on "Next" button
And I enter "Password" as "sjdufhr18"
And I click on "Signin" button
Then I should see "Unablesignin" page


