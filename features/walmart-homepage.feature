Feature:  As a walmart customer, I want to be able to navigate to landing page so that I can view product information

@walmart @walmartLanding
Scenario: Customer is displayed with walmart.ca landing page
Given I am on the walmart Landing page
When I clck on Sign in button 
Then I should see Sign in  or create account header 

@walmart @walmartLanding1
Scenario: Customer is displayed with walmart.ca landing page
Given I am on the walmart Landing page
When I click on Departments button
Then I should see All Departments List header