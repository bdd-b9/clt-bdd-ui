Feature: As a Tesla user, I want to be able to navigate to landing page so that I can view 

@tesla @teslaLanding
Scenario: Customer is displaying with tesla.com landing page
Given I am on the "Tesla" website
When I click on "VehiclesLink"
And I click on "Inventory"
Then I should see "InventoryHeader"
