Feature: As a ParaBank customer, I want to be able to navigate to landing page so that I can view page information

 
 @parabank @parabankvalidCustomerLogin  
   Scenario Outline: Customer is displayed with parabank login page.
   Given I am on the "ParaBank" website 
   Then I should see "CustomerLogin"
   And I enter "username" as "<username>"
   And I enter "password" as "<password>"
   Then I click on "LoginInButton"
   Then I should see "accountsoverview"
   Examples:
       | username | password | 
       | aditya  | chinni | 

 
  @parabank @parabankRegister
   Scenario: Customer is displayed with ParaBank register page
    Given I am on the "ParaBank" website
    Then I should see "SigingUpIsEasy"
    And I enter the inputs for register
    | inputvalue | inputname |
    | firstname | Kousalya|
    | lastname | Varadharajan |
    | address | 8615, Pinnacle Cross Dr |
    | city | Huntersville |
    | state | NC |
    | zipcode | 28078 |
    | phone | 5513588967 |
    | SSN | 1234567890 |
    | username1 | aditya |
    | password1 | chinni |
    | confirm | chinni |
   And I click on "Register" 
   Then I should see "welcomemessage"     


 @parabank @parabankforgotLoginInfo @qwe
 Scenario: Customer is displayed with parabank customer forgotlogin info page.
   Given I am on the "ParaBank" website
   When I click on "ForgotLoginInfo"
   Then I should see "CustomerLookup"
   And I enter the inputs for forgotlogininfo
    | inputname | inputvalue |
    | firstname1 | Kousalya |        
    | lastname1 | Varadharajan |
    | address1 | 8615 Pinnacle Cross Dr |
    | city1 | Huntersville |
    | state1 | NC |
    | zipcode1 | 28078 |
    | SSN1 | 1234567890 |
  And I click on "ForgotMyLoginInfobutton"
  Then I should see "customerlookup"
   
       