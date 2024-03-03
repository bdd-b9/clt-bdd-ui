Feature: As a parabank customer, I want to be able to navigate to landing page so that I can view information

  @parabank @parabankregister
  Scenario: Customer is able to click register for signing up
    Given I am on the "ParabankPortal" website
    When I click on "Registerlink"
    Then I should see "Signingup"

@parabank @parabankregistersignupincomplete
  Scenario: Customer is able to click register for signing up with incomplete inputs
    Given I am on the "ParabankPortal" website
    When I click on "Registerlink"
    Then I should see "Signingup"
    And I enter the inputs for signup
    | inputName | inputValue |
    | FirstName | bankname |
    | LastName | para |
    And I click on "Register"
    Then I should see "dataisrequired"

  @parabank @parabankregistersignupnewcustomer
  Scenario: New customer able to click register for signing up 
    Given I am on the "ParabankPortal" website
    When I click on "Registerlink"
    Then I should see "Signingup"
    And I enter the inputs for signup
    | inputName | inputValue |
    | FirstName | bankname |
    | LastName | para |
    | Address | 1234 ,drive,NW ,NC |
    | City | concord |
    | State | northcarolina |
    | Zipcode | 12340 |
    | PhoneNumber | 336-000-0000 |
    | Ssn | 000-00-0000 |
    | Username | parabank00001|
    | Password | testpara123 |
    | Confirm | testpara123 |
    And I click on "Register"
    Then I should see "Welcomemessage"

  @parabank @parabankregistersignupexisitingcustomer
  Scenario: Exisiting Customer able to click register for signing up 
    Given I am on the "ParabankPortal" website
    When I click on "Registerlink"
    Then I should see "Signingup"
    And I enter the inputs for signup
    | inputName | inputValue |
    | FirstName | bankname |
    | LastName | para |
    | Address | 1234 ,drive,NW ,NC |
    | City | concord |
    | State | northcarolina |
    | Zipcode | 12340 |
    | PhoneNumber | 336-000-0000 |
    | Ssn | 000-00-0000 |
    | Username | parabank24|
    | Password | testpara123 |
    | Confirm | testpara123 |
    And I click on "Register"
    Then I should see "usernamealreadyexists"

  
  @parabank @parabankcustomerlogininvalid
  Scenario Outline: Customer login with invalid inputs 
    Given I am on the "ParabankPortal" website
    Then I should see "Customerlogin"
    And I enter "username" as "<username>"
    And I enter "password" as "<password>"
    When I click on LoginButton
    Then I should see Error
    Examples:
    | username | password|
    | bankuser | testpara123|

  @parabank @parabankcustomerloginvalid
  Scenario Outline: Customer login with valid inputs 
    Given I am on the "ParabankPortal" website
    Then I should see "Customerlogin"
    And I enter "username" as "<username>"
    And I enter "password" as "<password>"
    When I click on LoginButton
    Then I should see Accounts overview
    Examples:
    | username | password|
    | parabank24 | testpara123|

  @parabank @parabankcustomerforgetlogin
  Scenario: Customer forgetlogin with invalid inputs
    Given I am on the "ParabankPortal" website
    When I click on "forgetlogininfo"
    Then I should see customer lookup
    And I enter the inputs for info
    | inputName | inputValue |
    | firstName | bankname |
    | lastName | para |
    | address | 1234 ,drive,NW ,NC |
    | city | concord |
    | state | northcarolina |
    | zipcode | 12340 |
    | ssn | 000-00-0000 |
    When I click on findmylogin
    Then I should see Errormessages

   