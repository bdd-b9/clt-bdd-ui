Feature: As a saucedemo user, I want to be able to login and buy products

    @saucedemo @saucedemoLogin1
    Scenario Outline: User is able to login to saucedemo portal
        Given I am on the "saucedemo" portal
        When I enter the "username" as "<username>"
        And I enter the "password" as "<password>"
        And I click on "loginButton"
        Then I should see "products"
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

    @saucedemo @saucedemoInvalidLogin2
    Scenario Outline: User is able to login to saucedemo portal
        Given I am on the "saucedemo" portal
        When I enter the "username" as "<username>"
        And I enter the "password" as "<password>"
        And I click on "loginButton"
        Then I should see "errorMessage"
        Examples:
            | username     | password     |
            | standard     | secret_sauce |
            | problem_user | secret       |

    @saucedemo  @saucedemoProduct3
    Scenario:  Customer is able to checkout product on saucedemo portal
        Given I am on the "saucedemo" portal
        When I enter the "username" as "standard_user"
        And I enter the "password" as "secret_sauce"
        And I click on "loginButton"
        And I click on productName as "SauceLabsBackpack"
        And I click on "addToCart"
        And I click on "cartIcon"
        And I click on "checkoutButton"
        And I enter input information
            | inputName | inputValue |
            | firstName | Nisha      |
            | lastName  | Patel      |
            | zipCode   | 20871      |
        And I click on "continueButton"
        And I click on "finishButton"
        Then I should see "thankyouMessage"

    @saucedemo @saucedemoFilter4
    Scenario:  Customer is able to filter the product
        Given I am on the "saucedemo" portal
        When I enter the "username" as "standard_user"
        And I enter the "password" as "secret_sauce"
        And I click on "loginButton"
        And  I click on "priceHighToLow"
        Then I should see "highestPriceFirst"