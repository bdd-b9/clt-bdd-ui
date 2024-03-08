Feature: As a parabank customer, I want to be able to navigate to landing page so that I can able to login

 @parabank @parabanklanding 
 Scenario: customer is displayed with the parabank landing page 
  Given I am on the "parabank" website
  Then I should see the "parabankHeader"


 @parabank @parabanklogin
 Scenario: customer is displayed with the parabank landing page 
  Given I am on the "parabank" website
  And I should see the "usernametextbox"
  And I should see the "passwordtextbox"
  When I click on the "loginActionButton"
  Then I should see the "BlankErrorMessage" 

 @parabank @parabankinvalidlogin
 Scenario Outline: customer is displayed with the parabank landing page
  Given I am on the "parabank" website
  When I enter "username" as "<username>"
  And I enter "password" as "<password>"
  And I click on the "loginActionButton"
  Then I should see the "ErrorMessage"
  Examples:
  |username | password |
  |priya123 | pa55word |
  
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
  |FirstName |priya|
  |LastName |Magesh|
  |Address |23Madisonstreet|
  |City |Edison|
  |State |NewJersey|
  |ZipCode |08623|
  |SSN |232-45-5656|
  #Then I click on the "Find"
  
  
  
@parabankRegister @parabankRegistersignup
Scenario: Customer is displayed signupeasy to Fill up the information to Register
Given I am on the "parabank" website
When I click on the "Register" 
And I should see the "Signupeasy"
And I enter the inputs for Register
|inputname |inputvalue|
|FirstName |priya|
|LastName |Magesh|
|Address |23Madisonstreet|
|City |Edison|
|State |NewJersey|
|ZipCode |08623|
|SSN |232-45-5656|
|Username |priya123|
|Password |pa55word|
|Confirm |pa55word|
#When I click on the "CustomerRegister"
#Then I should see the "Error"

  
  
  









