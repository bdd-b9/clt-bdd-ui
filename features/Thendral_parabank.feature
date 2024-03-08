Feature: As a parabank customer, I want to be able to navigate to landing page so that I can view product and services information

@parabank @parabankLandingPage
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
Then I should see "welcomeMessage" page

@parabank @parabankCustomerLogin
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
When I enter "UserName" as "cnvjgkl" 
When I enter "Password" as "dfhg@12"
And I click on "ParaBankLogin" button
Then I should see "AccountsOverview"

@parabank @parabankForgotlogininfo
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
When I click on "ForgotLoginInfo" button
Then I should see "CustomerLookup" page

@parabank @parabankRegister
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
When I click on "MPRegister" button
Then I should see "parabanksignup" page
And I enter value for fields
|InputName |  InputValue| 
|FirstName |  James|
|LastName  |  Jerome|
|Address   |  123 Asleton Blvd|
|City      |  Milton|
|State     |  Ontario|
|Zipcode   |  N3T 6S1|
|PhoneNo   |  495-927-0328|
|SSN       |  83747502847567|
|Username  |  John|
|Password  | 274895@16|
|Confirm   |  274895@16|
And I click on "Register" button
Then I should see "WelcomeMessage"


@parabank @parabankAccountServices
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
Then I should see "AccountServices"

@parabank @parabankAccountServices1
Scenario: Customer is displayed with parabank.com landing page
Given I am on the "parabank" website
When I click on "openNewAccount"
And I choose "Accounttype"
And I  choose an "ExistingAccount" to transfer funds into the new account
And I click on "openNewaccount" button
Then I should see "Accountopened" message











