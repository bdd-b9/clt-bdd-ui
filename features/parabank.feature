Feature: As a parabank customer, I want to be able to navigate to landing page so that I can view Bank details


  @parabank @parabankLanding1
  Scenario: Customer is displayed with parabank.com landing page
    Given I am on the "paraBankHomepage" website
    When I click on "registerLink"
    Then I should see "signingUpHeader"

    @parabank @parabankRegister
    Scenario: Create a new user for parabank Portal
    Given I am on the "parabank" website
    When I click on "registerLink"
    Then I should see "registrationPage"
    And I have entered the following values on the "registrationPage"
     | fieldName                  | value  |
    
    | Firstname                  | random |
    | Lastname                 | random |
    | Address                    | random |
    | City                       | random |
    | State                     | random |
    | ZipCode               | random |
    | MobileNumber               | 0      |
    | Password                   | random |
    | SecurityQuestion           | random |
    | SecurityAnswer             | random |
    And I click on the Register button
    Then I will be on the Login page
        And I will get a popup confirming my registration details
    
    Given I will navigate to the Admissions Portal login page
    When I click the Create an Account link
     Then I will be on the ontrack: prospect - Register page
    Given I have entered the following values on the registration page
    | fieldName                  | value  |
    | Title                      | random |
    | Firstname                  | random |
    | Middlename                 | random |
    | Surname                    | random |
    | DOB                        | random |
    | Gender                     | random |
    | EmailAddress               | random |
    | MobileNumber               | 0      |
    | Password                   | random |
    | SecurityQuestion           | random |
    | SecurityAnswer             | random |
    And I click on the Register button
    Then I will be on the Login page
        And I will get a popup confirming my registration details

   @jootza @jootzaLogin
   Scenario: Customer is displayed with jootza.com login page
   Given I am on the "JootzaPortal" website
   When I click on "LoginButton"
  And I enter "username" as "testuser"
    And I enter "password" as "testpass123"
    And I click on "LoginActionButton"
    Then I should see "ErrorMessage"
 
 
 # @jootza @jootzaLanding1
 # Scenario: Customer is displayed with jootza.com landing page
 #   Given I am on the Jootza portal
 #   When I click on LoginButton
 #   Then I should see LoginHeader

  #@jootza @jootzaRegister
  #Scenario: Customer is displayed with jootza.com landing page
  #  Given I am on the Jootza portal
  #  When I click on RegisterButton
  #  Then I should see RegisterHeader

  #@jootza @jootzaOpenAccount
  #Scenario: Customer is able to Click to Open Account
  #  Given I am on the Jootza portal
  #  When I click to OpenAccountButton
  #  Then I should see CustomerRegistrationHeader

  #@jootza @jootzaSubscribe
  #Scenario: Customer is displayed with jootza.com landing page
  #  Given I am on the Jootza portal
  #  When I scroll to "Subscribe"
  #  When I click on "Subscribe"
  #  Then I should see "invalidEmailMessage"

  #@jootza @jootzaStartNow
  #Scenario: Customer is displayed with jootza.com landing page
  #  Given I am on the Jootza portal
  #  When I scroll to "StarterPlan"
  #  When I click on "StartNow"
  #  Then I should see "CustomerSignup"