Feature: Parabank Registration , Login and Forgot Login

  @parabank @parabankRegister
  Scenario: Register a new customer
    Given I am on the "Parabank" page
    When I click on "Register"
    Then I should see "SigningUpEasy" page
    When I enter the inputs for Lookup
      | inputname   | inputvalue          |
      | FirstName   | Mark                |
      | LastName    | Antony              |
      | Address     | 39122 Sundale Drive |
      | City        | Fremont             |
      | State       | CA                  |
      | ZipCode     | 94538               |
      | PhoneNumber | 5551234567          |
      | SSN         | 123456789           |
      | UserName    | markantony          |
      | Password    | password            |
      | Confirm     | password            |
    And I click on "SubmitButton"
    Then I should see "SuccessMessage" page

  @parabank @parabankLogin
  Scenario: Customer Login with valid credentials
    Given I am on the "Parabank" page
    Then I should see "CustomerLoginHeader" page
    When I enter the inputs for Lookup
      | inputname        | inputvalue |
      | CustomerUserName | markantony |
      | CustomerPassword | password   |
    And I click on "LoginButton"
    Then I should see "AccountoverviewHeader" page

  @parabank @parabankForgotLogin
  Scenario: Customer Login with forgot login details
    Given I am on the "Parabank" page
    When I click on "ForgotLoginButton"
    Then I should see "CustomerLookupHeader" page
    When I enter the inputs for Lookup
      | inputname   | inputvalue          |
      | flfirstName | markantony          |
      | fllastName  | password            |
      | fladdress   | 39122 Sundale Drive |
      | flcity      | Fremont             |
      | flstate     | CA                  |
      | flzipCode   | 94538               |
      | flssn       | 123456789           |
    And I click on "FindMyLoginInfoButton"
    Then I should see "LoginInfoDetails" page
