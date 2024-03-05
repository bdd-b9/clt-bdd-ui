Feature: As a jootza customer, I want to be able to navigate to landing page so that I can view product information

@jootza @jootzaRegister
  Scenario: Customer is displayed with jootza.com landing page
   Given I am on the JootzaPortal
   When I click on register
#   And I see "registerHeader"
   And I enter Inputs for register
         | Inputname | Inputvalue | 
           | AccessCode | 1234 |
           | FirstName | Jack |
           | LastName | Jose |
           | Email | jack@gmail.com |
           | Username | jackjose |
           | pswd | Jackson@123 |
   And I click on signUpBtn       
   Then I should see accesscodeErrMsg