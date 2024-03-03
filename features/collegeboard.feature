Feature: As a collegeboard student,i want to check 

@jootza @jootzalanding
 #Scenario: Customer is displayed with the college.com landing page
Given i am on the collegeboard website                    Was unable to find the step for "Given i am on the collegeboard Website"
When I click on the emailAddress Button                  Was unable to find step for 

    Feature Description#


 Feature: As a college student , I want to be able to navigate to home page so that I can view college information

  @collegeboard @collegeboardHome
  Scenario: Student is displayed with collegeboard home page
   Given I am on the "collegeBoard" website
   When I click on "sign in button"
   And I click on the "student" option 
   And I am "Directed to the Sign in Page"
   And I click on  the "email id" tab
   And I "enter the email id"
   And I click on "Password" tab
   And I "enter the Password"
   Then I click on "Remember my email Address" checkbox
   Then I should see "invalid email id or password"