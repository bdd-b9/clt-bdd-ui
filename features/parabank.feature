Feature: As a parabank customer, I want to be able to navigate to landing page so that I can Login

  @parabank @parabankLanding
  Scenario: Customer is displayed with Parabank landing page
  Given I am on the Parabank portal
  Then I should see "CustomerLogin"

  @parabank @parabankRegister
  Scenario: Customer is displayed with parabank register page.
  Given I am on the Parabank portal
  Then I should see "CustomerLogin"
  When I click on "Register"
  Then I should see "SigningUpEasy"
  When I enter inputs for registration details
      |inputname|inputvalue|
      |FirstName | mohana |
      |LastName | Subramaniyam |
      |Address| 200 sun raise |
      |City| Toronto |
      |State| ON |
      |ZipCode| L9e1k9 |
      |Phone| 94949494 |
      |SSN| 22222222 |
      |UserName|mohana3|
      |Password|password|
      |Confirm|password|  
  And I click on "RegisterNewUser"
  Then I should see "AccountOverview"


@parabank @parabankLogin
  Scenario: Customer is displayed with Parabank landing page
  Given I am on the Parabank portal
  Then I should see "CustomerLogin"
  And I enter "username" as "mohana3"
  And I enter "password" as "password"
  And I click on "Login"
  Then I should see "AccountOverview"

@parabank @parabankForgotLogin
    Scenario: Customer is displayed with Parabank landing page 
    Given I am on the Parabank portal
    When I click on "ForgotLoginInfo" 
    Then I should see "CustomerLookup"  
    And I enter the inputs for finding details
        |inputname|inputvalue|
        |FirstName_forgot | mohana |
        |LastName_forgot | Subramaniyam |
        |Address_forgot| 200 sun raise |
        |City_forgot| Toronto |
        |State_forgot| ON |
        |ZipCode_forgot| L9e1k9 |
        |SSN_forgot|22222222|    
    And I click on "FindMyLoginInfo"
    Then I should see "locatedSuccessfully"
