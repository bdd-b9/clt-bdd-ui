Feature: As a student i want to able to navigate to the page so that i can view information
@Board @Boardsignin
  Scenario: Customer is displayed with Student.org landing page
    Given I am on the board Portal
    When I click on signIn button
    When I click on student button
    when I enter on emailAddress
    When I click checkBox Remember my Email Address
    When I click Next button
    Then I  Should see Please Review and correct the form message to be displayed