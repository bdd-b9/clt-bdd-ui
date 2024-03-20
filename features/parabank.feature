Feature: As a parabank  customer, I want to be able to Sign Up , Login with valid credentials and check the functionality of forgot login info

    @parabank@parabankRegister
    Scenario: Customer is able to register with Parabank
        Given I am on "parabank" websitepage
        When I click on "registerLink"
        And I see "signupPage"
        And I enter the inputs details
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
        When I see "CustomerLoginHeader"
        And I enter the inputs details
            | InputName   | InputValue  |
            | cusUserName | Manjula2812 |
            | cusPassword | Manjula     |
        And I click on "loginButton"
        Then I should see "CustomerPage"


    @parabank@parabankForgotLogin
    Scenario: Customer is able to Login with forgot login info
        Given I am on "parabank" websitepage
        When I click on "forgotloginButton"
        And I should see "CustomerLookupHeader"
        And I enter the inputs details
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
        And I should see "customerCarePage"
        And I enter the inputs details
            | InputName | InputValue                             |
            | ccName    | Manjula Ramanathan                     |
            | ccEmail   | manju123@gmail.com                     |
            | ccPhone   | 2525252525                             |
            | ccMessage | I cant see the Parabank Locations page |
        And I click on "sendToCuscareButton"
        Then I should see "thankYouRepPage"



    @parabank@parabankCreateNewAccount
    Scenario Outline: Customer is able to create new account
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "openNewAccount"
        And I click on "savingsAccOption"
        And I click on "createNewAcc"
        Then I should see "accountOpenedPage"
        Examples:
            | cusUserName | cusPassword |
            | test01      | test        |




    @parabank@parabankFundtransfer
    Scenario Outline: Customer is able to see Transfer the Funds
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "transferFunds"
        And I enter the "fundAmount" as "100"
        And I click on "17895Account"
        And I click on "transferButton"
        Then I should see "transferCompletePage"
        Examples:
            | cusUserName | cusPassword |
            | tstuser12   | demo1234    |




    @parabank@parabankAccountOverview
    Scenario Outline: Customer is able to see Account Overview
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "accOverviewButton"
        And I click on "accdetailsof27330"
        And I click on "activityPeriodOption"
        And I click on "activityType"
        And I click on "goButton"
        And I click on "ftReceivedButton"
        Then I should see "transactionDetailsPage"
        Examples:
            | cusUserName | cusPassword |
            | Manjula2812 | Manjula     |



    @parabank@parabankBillPay
    Scenario Outline: Customer is able to pay amount to another payee account
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "billPayButton"
        And I should see "billPaymentServicePage"
        And I enter the inputs details
            | InputName          | InputValue     |
            | payeeName          | Manju          |
            | payeeAddress       | 1234Mainstreet |
            | payeeCity          | MD             |
            | payeeState         | MD             |
            | payeeZipcode       | 21022          |
            | payeePhone         | 1212121212     |
            | payeeAccount       | 14545          |
            | payeeVerifyAccount | 14545          |
            | payeeAmount        | 250            |
        And I click on "senPaymentButton"
        Then I should see "billPayCompletePage"
        Examples:
            | cusUserName | cusPassword |
            | abc         | 123         |


    @parabank@parabankUpdateContactInfo
    Scenario Outline: Customer is able to update their contact info
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "updateInfoButton"
        And I should see "updateProfilePage"
        And I enter the inputs details
            | InputName        | InputValue |
            | profileFirstName | Manju      |
            | profileLastName  | R          |
        And I click on "updateProfileButton"
        Then I should see "profileUpdatedPage"
        Examples:
            | cusUserName | cusPassword |
            | abc         | 123         |


    @parabank@parabankRequestLoan
    Scenario Outline: Customer is able to request loan
        Given I am logging into the parabank website as "<cusUserName>" and "<cusPassword>"
        When I click on "requestLoanButton"
        And I should see "applyLoanPage"
        And I enter the inputs details
            | InputName   | InputValue |
            | loanAmount  | 12000      |
            | downPayment | 1000       |
        And I click on "applyNowButton"
        Then I should see "loanApprovedPage"
        Examples:
            | cusUserName       | cusPassword |
            | manjularamanathan | 123456789   |


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
