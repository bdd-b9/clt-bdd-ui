Feature: As a smartSubmission user, I want to be able to navigate to landing page so that I can view career information


  @submission @smartSubmissionLanding1
  Scenario: Customer is displayed with smartsubmissions.com landing page
    Given I am on the "smartSubmissions" website
    When I click on "LoginBtn"
    Then I should see "smartsubmissionsHeader"

  @submission @smartSubmissionLogin
   Scenario: Customer is displayed with smartsubmissions.com login page
   Given I am on the "smartSubmissions" website
   When I click on "LoginBtn"
   And I enter "email" as "anu.hari80@gmail.com"
   And I enter "password" as "jackson"
   And I click on "LoginActionBtn"
   Then I should see "ErrorMsg"

   
