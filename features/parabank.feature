 Feature: As a parabank customer, I want to be able to navigate to landing page so that I can view product information

  @parabank @parabankCustLogin
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I enter "Username" as "priya"
    And I enter "Password" as "priya123" 
    And I click on loginButton
    Then I should see LoggedInUser

    @parabank @parabankCustLoginUserError
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I enter "Username" as "priya"
    And I click on loginButton
    Then I should see LoggedInUserError

    @parabank @parabankCustLoginPasswordError
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I enter "Password" as "priya123"
    And I click on loginButton
    Then I should see LoggedInPasswordError



  @parabank @parabankRegister
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I click on "RegisterLink"
    And I enter the inputs for registration

    | inputName | inputValue |
    | RegisterFirstname       | Tester      |
    | RegisterLastname        | tester123    |
    | RegisterAddress         | 1122 Hope Farm |
    | RegisterCity            | San Antonio   |
    | RegisterState           | TX        |
    | RegisterZipcode         | 78240        |
    | RegisterPhonenum        | 21078987     |
    | RegisterSSN             | 123456789      |
    | RegisterUsername        | testuser      |
    | RegisterPassword        | testuser       |
    | RegisterConfirmpassword | testuser       |

     And I click on "RegisterButton"
    Then I should see RegistrationConfirmed

     @parabank @parabankRegisterFailed
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I click on "RegisterLink"
    And I enter the inputs for registration

    | inputName | inputValue |
    | RegisterFirstname       | Tester      |
    | RegisterLastname        | tester123    |
    | RegisterAddress         |  1122hopefarm    |
    | RegisterCity            | San Antonio   |
    | RegisterState           | TX        |
    | RegisterZipcode         | 78240        |
    | RegisterPhonenum        | 21078987     |
    | RegisterSSN             |              |
    | RegisterUsername        | testuser      |
    | RegisterPassword        | testuser       |
    | RegisterConfirmpassword | testuser       |

     And I click on "RegisterButton"
    Then I should see RegistrationFailed

 @parabank @parabankRegistrationpasswordMatch
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I click on "RegisterLink"
    And I enter the inputs for registration

    | inputName | inputValue |
    | RegisterFirstname       | Tester      |
    | RegisterLastname        | tester123    |
    | RegisterAddress         | 1122 Hope Farm |
    | RegisterCity            | San Antonio   |
    | RegisterState           | TX        |
    | RegisterZipcode         | 78240        |
    | RegisterPhonenum        | 21078987     |
    | RegisterSSN             | 123456789      |
    | RegisterUsername        | testuser      |
    | RegisterPassword        | testuser       |
    | RegisterConfirmpassword | testghj       |

     And I click on "RegisterButton"
    Then I should see passwordNotMatch



    @parabank @parabankForgotLogin
  Scenario: Customer is displayed with parabank.parasoft.com landing page
    Given I am on the parabankparasoft portal
    When I click on "ForgotLogin"
    And I enter the inputs for LoginInfo

    | inputName | inputValue   |
    | Firstname | John        |
    | Lastname  | Smith     |
    | Address   | 1431 Main St |
    | City      | Beverly Hills   |
    | State     | CA        |
    | Zipcode   | 90210        |
    | SSN       | 310-447-4121      |

   And I click on "FindLoginInfo"
    Then I should see LoggedInUser
    
