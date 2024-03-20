Feature: As a Swag Labs  customer, I want to be able to Sign In and purchase items

    @swagLabs@SwagLabsLogin
    Scenario Outline:Customer is able to Login with valid credentials
        Given I am on the "swaglabs" website
        When I enter "username" as "<username>"
        And I enter "password" as "<password>"
        And I click on the "loginBttn"
        Then I should see the "swagLabsPage"
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |
            | problem_user            | secret_sauce |

    @swagLabs@SwagLabsAdditemsToCart
    Scenario Outline:Customer is able to add the items to cart
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the "saucelabsTshirt"
        And I click on the "saucelabsBikeLight"
        And I click on the "saucelabsJacket"
        And I click on the "saucelabsBackPack"
        And I click on the "cartbutton"
        Then I should see the "yourcart"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |


    @swagLabs@SwagLabsOrderAnItem
    Scenario Outline:Customer is able to purchase an item
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the "saucelabsTshirt"
        And I click on the "cartbutton"
        And I click on the "checkoutButton"
        And I enter the customer details
            | InputName | InputValue |
            | firstName | Manju      |
            | lastName  | R          |
            | zipcode   | 21011      |
        And I click on the "continueButton"
        And I click on the "finishButton"
        Then I should see the "thankyouForOrderPage"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |



    @swagLabs@SwagLabsFilterCheck
    Scenario Outline:Customer is able to view the items based on filter and order an item
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the "filterNameZtoA"
        And I click on the "allTheThingsTshirt"
        And I click on the "addtocart"
        And I click on the "cartbutton"
        And I click on the "checkoutButton"
        And I enter the customer details
            | InputName | InputValue |
            | firstName | Manju      |
            | lastName  | R          |
            | zipcode   | 21011      |
        And I click on the "continueButton"
        And I click on the "finishButton"
        Then I should see the "thankyouForOrderPage"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |


    @swagLabs@SwagLabsFilters
    Scenario Outline:Customer is able to view the items based on filters
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the saucebuttons
            | saucebuttons   |
            | nameAtoZ       |
            | nameZtoA       |
            | priceHightoLow |
            | priceLowtoHigh |
        Then I should see the "allProducts"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |



    @swagLabs@SwagLabsRemoveItemFromCart
    Scenario Outline:Customer is able to remove item from cart and continue shopping
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the saucebuttons
            | saucebuttons             |
            | saucelabsTshirt          |
            | saucelabsBikeLight       |
            | cartbutton               |
            | removeSaucelabsTshirt    |
            | removeSaucelabsBikeLight |
            | continueShopping         |
        Then I should see the "allProducts"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |


    @swagLabs@SwagLabsLogout
    Scenario Outline:Customer is able to logout
        Given I am logging into the swaglabs website as "<username>" and "<password>"
        When I click on the "allitemsMenuButton"
        And I click on the "logoutButton"
        Then I should see the "loginPage"
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |






