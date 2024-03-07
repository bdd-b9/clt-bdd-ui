Feature:  As a Parabank user, I want to be able to register and login and validate my account on the website

  @parabank @parabankRegister1
  Scenario: User is able to register on the Parabank portal
    Given I am on the parabank website
    When I enter inputs for registering
      | inputName | inputValue    |
      | FirstName | Tia           |
      | LastName  | Tia123        |
      | Address   | Broadway      |
      | City      | Clarksburg    |
      | State     | Md            |
      | ZipCode   | 20871         |
      | Phone     | 2408769988    |
      | SSN       | 123456789     |
      | user      | tia@gmail.com |
      | pass      | test1234      |
      | confirm   | test1234      |
    Then I click on Register




  @parabank @parabankCustomerLogin2
  Scenario Outline: Customer is displayed with parabank error message
    Given I am on the parabank website
    When I enter "username" as "<username>"
    And I enter "password" as "<password>"
    And I click on Login
    Then I should see "Error"
    Examples:
      | username | password |
      | Ria      | Ria1234  |
      | Sia      | Sia1234  |
      | Jia      | Jia1234  |


  @parabank @parabanklogin
  Scenario: Customer wants to login to parabank
    Given I am on the parabank website
    When I enter "username" as "Ria"
    And I enter "password" as "Ria123"
    Then I click on Login


  @parabank @parabankForgotLoginInfo3
  Scenario: Customer wants to reset password
    Given I am on the parabank website
    When I click on forgotLoginInfo
    Then I should see "customerLookupMessage"