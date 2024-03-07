Feature: As a collegeboard customer, I want to be able to navigate to page so that I can view sign in information

  @collegeboard @collegeboardSignIn
  Scenario: Customer is displayed with collegeboard sign in page
    Given I am on the CollegeBoard website
    When I enter Username
    When I enter Password
    And I click on SignIn
    Then I should see UnableToSignin 