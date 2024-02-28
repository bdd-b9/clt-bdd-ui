Feature: As a smartsub customer, I want to be able to navigate to landing page so that I can view product information

  @smart @smartsubmissions1
  Scenario: Customer is displayed with smartsubmissions landing page
    Given I am on the "smartsubmissionsPortal" website
    When I click on "LoginButtonsmart"
    Then I should see "LoginHeadersmart"

  @smart @smartsubmissionLogin
   Scenario: Customer is displayed with smartsubmissions login page
    Given I am on the "smartsubmissionsPortal" website
    When I click on "LoginButtonsmart"
    And I enter username "testuser@gmail.com"
    And I enter password "testpass123"
    And I click on LoginActionButtonsmart
    Then I should see ErrorMessagesmart