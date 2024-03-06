Feature: As a parabank customer, I have to be able to login, register successfully so that I can view page information
@parabank @parabankRegisterNewUser
    Scenario: Customer is displayed with parabank register page.
        Given : I am on the "ParabankPortal" website 
        When : I click on "Register"
        Then : I should see "SigningUpEasy"
        When : I enter the inputs for registration
            |inputname|inputvalue|
            |FirstName | Ashok |
            |LastName | Kumar |
            |Address| 123 margarita road |
            |City| Temecula |
            |State| CA |
            |ZipCode| 34567|
            |Phone|123457890|
            |SSN|987654321|
            |UserName|Ashok|
            |Password|Kumar|
            |Confirm|Kumar|  
        And : I click on "RegisterNewUser"
        Then : I should see "AccountsOverview"     

@parabank @parabankValidLogin
    Scenario Outline: Customer is displayed with parabank login page.
        Given : I am on the "ParabankPortal" website
        When : I enter "username" as "<username>"
        And : I enter "password" as "<password>"
        And : I click on "LoginActionButton"
        #Then : I should see "SigningUpEasy"
        Then : I should see "AccountsOverview"
        Examples:
            | username | password |
            | Ashok | Kumar  | 


@parabank @parabankInvalidLogin
    Scenario Outline: Customer is displayed with parabank login page.
        Given : I am on the "ParabankPortal" website
        When : I enter "username" as "<username>"
        And : I enter "password" as "<password>"
        And : I click on "LoginActionButton"
        Then : I should see "BankErrorMessage"
        Examples:
            | username | password |
            | user1 | pass1  | 
            | user2 | pass2 |


@parabank @parabankForgotLoginInfo
    Scenario: Customer is displayed with parabank login page. 
        Given : I am on the "ParabankPortal" website  
        When : I click on "ForgotLoginInfo" 
        Then : I should see "CustomerLookupHeader"  
        And : I enter the inputs for finding my login details
            |inputname|inputvalue|
            |FirstName1 | Ashok |
            |LastName1 | Kumar |
            |Address1| 123 margarita road |
            |City1| Temecula |
            |State1| CA|
            |ZipCode1| 34567 |
            |SSN1|987654321|
        When : I click on "FindMyLoginInfo"
        Then : I should see "ErrorMessageForNotfindingInfo"
