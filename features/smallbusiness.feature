Feature: As a smsllbusiness customer, I want to be able to navigate to landing page so that I can login the portal

  @smallbusiness @smallbusinesslanding
  Scenario: Customer is displayed with smallbusiness landing page
    Given I am on the smallbusiness portal
    When I click on LoginButton
    Then I should see LoginHeader

  @smallbusiness @smallbusinesslogin
   Scenario: Customer is displayed with smallbusiness login page
    Given I am on the smallbusiness portal
    When I click on LoginButton
    #And I enter emailid
    #And I enter "password"
    #And I click on LoginActionButton
    #Then I should see ErrorMessage
