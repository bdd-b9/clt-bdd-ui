Feature: As a parabank customer, I want to be able to navigate to landing page so that I can able to login

    @parabank @parabanklanding
    Scenario: customer is displayed with the parabank landing page
        Given I am on the "parabank" website
        Then I should see the "parabankHeader"

   @parabank @parabankinvalidlogin
 Scenario Outline: customer is displayed with the parabank landing page
  Given I am on the "parabank" website
  When I enter "username" as "<username>"
  And I enter "password" as "<password>"
  And I click on the "loginActionButton"
  Then I should see the "ErrorMessage"
  Examples:
  |username | password |
  |gowri123 | abc123   |
  
  @parabankForgotLogin @parabankForgotLogin
  Scenario: Customer is displayed customer Lookup when login is Forgotten
  Given I am on the "parabank" website
  When I click on the "ForgotLogin" 
  Then I should see the "CustomerLookup" 

  @parabankForgotLogin @parabankCustomerLookup
  Scenario: Customer is displayed customer Lookup to Fill up the information to validate the account
  Given I am on the "parabank" website
  When I click on the "ForgotLogin" 
  And I enter the inputs for Lookup
  |inputname |inputvalue|
  |FirstName |gowri|
  |LastName |Babu|
  |Address |123cypressstreet|
  |City |clarsburgh|
  |State |Maryland|
  |ZipCode |29876|
  |SSN |123-45-6754|
   And I click on the "Find"
  
  
@parabankRegister @parabankRegistersignup
Scenario: Customer is displayed signupeasy to Fill up the information to Register
Given I am on the "parabank" website
When I click on the "Register" 
And I should see the "Signupeasy"
And I enter the inputs for Register
|inputname |inputvalue|
|FirstName |gowri|
|LastName |Babu|
|Address |123 cypressstreet|
|City |clarksburgh|
|State |Maryland|
|ZipCode |29876|
|SSN |123-45-6754|
|Username |gowri123|
|Password |abc123|
|Confirm |abc123|
When I click on the "CustomerRegister"
Then I should see the "Error"