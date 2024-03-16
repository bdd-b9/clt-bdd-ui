Feature: As a Tesla customer, I want to be able to navigate to landing page so that I can view product information

  @tesla @teslaHomepage
  Scenario: Customer is displayed with Tesla.com landing page
    Given I am on the Tesla portal
    When I click on LoginButton
    Then I should see LoginHeader