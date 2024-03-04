Feature: As a parabank user, I want to be able to navigate to landing page so that I can view bank details

@parabank @parabankLanding
  Scenario: Customer is able to login to parabank website
    Given I am on the parabank website
   # When I see "customerLogin"
    When I enter inputs for login
    | inputName | inputValue |
    | username | Joe |
    |password | Parabank@12 |
    And I click on loginBtn
    Then I Should see welcomemessage
  
  #      | username | password | 
  #      | Anusha  | Jackson@123  |
  #      | Lillyjack | Jackson@123 |
        
@parabankforlog @parabankforgotlog
Scenario: Customer is able to retrive login credentials 
Given I am on the parabank website
When I click on forgotLoginLink
And I see customerlookUp
And I enter inputs for customerLookUp
           | InputName | InputValue | 
           | FirstName | Joe |
           | LastName | Hanes |
           | Address | 123 |
           | City | Lombard |
           | State | IL |
           | ZipCode | 5567 |
           | SSN | 1234 |
 When I click on findLogin     
 Then I should see loginInformation     

@parabankreg @parabankRegister
Scenario: Customer is able to Register 
Given I am on the parabank website
When I click on registerLink
#And I see "customerlookup"
And I enter inputs for Registraticdon
           | InputName | InputValue | 
           | RegFirstN | Lilly |
           | RegLastN | Jac |
           | RegAddres | 123 |
           | Regcity | Tam |
           | Regstate | FL |
           | Regzip | 33422 |
           | Regphone | 12345678 |
           | Regssn | 12345 |
           | RegUser | Lillyjac |
           | RegPswd | Jackson@123 |
           | RegConfirm | Jackson@123 |
 Then I click on Register     

