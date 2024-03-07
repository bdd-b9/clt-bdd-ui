Feature: As a parabank  customer, I want to be able to Sign Up , Login with valid credentials and check the functionality of forgot login info 

    @parabank@parabankRegister
    Scenario: Customer is able to register with Parabank
        Given I am on "parabank" websitepage
        When I click on "registerLink"
        Then I should see "signupPage"
        When I enter the inputs details
            | InputName | InputValue   |
            | firstName | Manjula      |
            | lastName  | Ramanathan   |
            | address   | 1234street   |
            | city      | Ellicottcity |
            | state     | Maryland     |
            | zipCode   | 21043        |
            | phoneNo   | 2525252525   |
            | ssnNumber | 4545258369   |
            | userName  | Manjula2812  |
            | password  | Manjula      |
            | confirmPw | Manjula      |
        And I click on "registerButton"
        Then I should see "welcomePage"


    @parabank@parabankLogin
    Scenario: Customer is able to Login with valid credentials
        Given I am on "parabank" websitepage
        Then I should see "CustomerLoginHeader"
        When I enter the inputs details
            | InputName   | InputValue  |
            | cusUserName | Manjula2812 |
            | cusPassword | Manjula     |
        And I click on "loginButton"
        Then I should see "CustomerPage"


    @parabank@parabankForgotLogin
    Scenario: Customer is able to Login with forgot login info
        Given I am on "parabank" websitepage
        When I click on "forgotloginButton"
        Then I should see "CustomerLookupHeader"
        When I enter the inputs details
            | InputName   | InputValue   |
            | flfirstName | Manjula      |
            | fllastName  | Ramanathan   |
            | fladdress   | 1234street   |
            | flcity      | Ellicottcity |
            | flstate     | Maryland     |
            | flzipCode   | 21043        |
            | flssnNumber | 4545258369   |
        And I click on "findLoginInfoButton"
        Then I should see "loginInfoDetails"

