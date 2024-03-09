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

    @parabank@parabankCustomerCare
    Scenario: Customer is able to send the message to Customer Care service
        Given I am on "parabank" websitepage
        When I click on "customerCareButton"
        Then I should see "customerCarePage"
        When I enter the inputs details
            | InputName | InputValue                             |
            | ccName    | Manjula Ramanathan                     |
            | ccEmail   | manju123@gmail.com                     |
            | ccPhone   | 2525252525                             |
            | ccMessage | I cant see the Parabank Locations page |
        And I click on "sendToCuscareButton"
        Then I should see "thankYouRepPage"

    @parabank@parabankAboutUs
    Scenario: Customer is able to see the About Us page of Parabank website
        Given I am on "parabank" websitepage
        When I click on "aboutUsButton"
        Then I should see "demoWebsite"

    @parabank@parabankServicesPage
    Scenario: Customer is able to see SOAP Services page of Parabank website
        Given I am on "parabank" websitepage
        When I click on "servicesButton"
        Then I should see "availServicePage"

    @parabank@parabankProductPage
    Scenario: Customer is able to see Parasoft products page of Parabank website
        Given I am on "parabank" websitepage
        When I click on "productsButton"
        Then I should see "parasoftPage"

    @parabank@parabankLocationsPage
    Scenario: Customer is able to see Parasoft Location page of Parabank website
        Given I am on "parabank" websitepage
        When I click on "locationButton"
        Then I should see "paraLocationPage"


    @parabank@parabankAdminPage
    Scenario: Customer is able to see Parabank Admin page of Parabank website
        Given I am on "parabank" websitepage
        When I click on "adminPageButton"
        Then I should see "paraAdminPage"