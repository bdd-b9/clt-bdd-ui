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

    @parabank @parabankInvalidlogin 
    Scenario: Customer is able to login to parabank website
    Given I am on the parabank website
   # When I see "customerLogin"
    When I enter inputs for login
    | inputName | inputValue |
    | username | Jose |
    |password | Parabank@12 |
    And I click on loginBtn
    Then I Should see errorMsg
 
        
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
And I enter inputs for Registration
           | InputName | InputValue | 
           | RegFirstN | Jossy |
           | RegLastN | J |
           | RegAddres | 123 |
           | Regcity | Tam |
           | Regstate | FL |
           | Regzip | 33422 |
           | Regphone | 12345678 |
           | Regssn | 12345 |
           | RegUser | Jossy |
           | RegPswd | Jackson@123 |
           | RegConfirm | Jackson@123 |
 And I click on Register     
Then I should see welcomemsg
