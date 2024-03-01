Feature: As a smartsubmission customer, I want to be able to navigate to landing page so that I can view  information

  @smartSubmission @smartSubmissionLogin
  Scenario: Customer is displayed with smartsubmissions.com loginpage
    Given I am on the "SmartSubmissionPortal" website
    When I click on "LoginButton"
    And I enter Email as "tester@email.com"
    And I enter "Password" as "testpass123"
    And I click on "LoginActionButton"
    Then I should see "ErrorMessage"