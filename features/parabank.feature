Feature: As a parabank customer, I want to able to navigate this website.

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
            |UserName|ashok|
            |Password|kumar|
            |Confirm|kumar|  
        And : I click on "RegisterNewUser"
        #Then : I should see "AccountsOverview" 
        Then : I should see "WelcomeMessage"    

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
            | Ashok7 | Kumar7  | 


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

@parabank @parabankCustomerCare
    Scenario: Customer is displayed with parabank home page.
        Given : I am on the "ParabankPortal" website
        When : I click on "CustomerCareButton"
        Then : I should see "CustomerCareHeader"
        When : I enter the inputs for customer care support
            |inputname|inputvalue|
            |Name1 | Ashok |
            |Email1 | Kumar |
            |Phone1 | 123 margarita road |
            |Message1 | Temecula |      
        And : I click on "SendToCustomerCareButton"
        Then : I should see "ThankYouMessage"
        

        
       # And : I enter "password" as "<password>"
        #Then : I should see "SigningUpEasy"
        

@parabank @parabankTransferFunds
    Scenario Outline: Customer is displayed with parabank login page.
        #Given : I am logging into "ParabankPortal" website as "<username>" and "<password>"
        Given : I am logging into "ParabankPortal" website as "<username>","<password>" and "LoginActionButton"
        Then : I should see "WelcomeMessage"
        When : I click on "TransferFunds"
        And : I enter "AmountToTransfer" as "100"
        And : I click on "FromAccount"
        And : I click on "ToAccount"
        And : I click on "TransferButton"
        Then : I should see "TransferFundsPage"
        Examples: 
        | username | password |
        | ashok | kumar |



@parabank @parabankOpenNewAccount
    Scenario Outline: Customer is displayed with parabank login page.
        Given : I am logging into "ParabankPortal" website as "<username>","<password>" and "LoginActionButton"
        Then : I should see "AccountsOverview"
        When : I click on "OpenNewAccount"
        Then : I should see "AccountOpenedMessage"
        When : I click on "<Account_Type>"
        And : I click on "<Account_List>"
        And : I click on "OpenNewAccountButton"
        Then : I should see "AccountOpenedMessage"
        Examples: 
            | Account_Type | Account_List | username | password |
            | CheckingAccount | ExistingAccount1 | ashok | kumar |
            | SavingsAccount | ExistingAccount2 | ashok | kumar |



@parabank @parabankAccountsOverview
    Scenario Outline: Customer is displayed with parabank login page.
        Given : I am logging into "ParabankPortal" website as "<username>","<password>" and "LoginActionButton"
        Then : I should see "AccountsOverview"
        #Then : I should see "BankErrorMessage"
        Examples: 
        | username | password |
        | ashok | kumar |

@parabank @parabankBillPay
    Scenario Outline: Customer is displayed with parabank login page.
        Given : I am logging into "ParabankPortal" website as "<username>","<password>" and "LoginActionButton"
        Then : I should see "AccountsOverview"
        #Then : I should see "BankErrorMessage"
        When : I click on "BillPay"
        Then : I should see "BillPaymentServices"
        When : I enter payee information for payment 
            | inputname | inputvalue |
            | PayeeName| Vrishin  |
            | PayeeAddress| 123|
            | PayeeCity | Tem |
            | PayeeState | CA |
            | PayeeZipCode| 92345 |
            | PayeePhone | 98765 |
            | PayeeAccount | 18765 |
            | PayeeVerifyAccount| 18765 |
            | PayeeAmount | 1 |
        And : I scroll to "PayeeFromAccount"    
        And : I click on "SendPayment"
        Then : I should see "PaymentConfirmMessage"    
        Examples: 
        | username | password |
        | ashok | kumar |

                
        
        



