Feature: As a Tesla customer, I want to be able to navigate to landing page so that I can view product information
  @tesla @teslaHomepage
  Scenario: Customer is displayed with Tesla.com landing page
    Given I am on the Tesla portal
    When I click on LoginButton
    Then I should see LoginHeader Feature: As a tesla customer, I want to be able to navigate to landing page so that I can view product information
 @tesla @teslaHome
  Scenario: Customer is able to Click to Open Account
    Given I am on the tesla website
    #When I click to ShopAvailable Button
   # Then I should see ShopAvailable Button
   When I click on Vehicle Button
   And I click on Inventory Link
