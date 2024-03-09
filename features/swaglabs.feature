Feature: As a Swag Labs  customer, I want to be able to Sign In

@swagLabs@SwagLabsLogin
    Scenario Outline:Customer is able to Login with valid credentials
        Given I am on the "swaglabs" website
        When I enter "username" as "<username>"
        When I enter "password" as "<password>"
        And I click on the "loginButton"
        Then I should see the "swagLabsPage"
        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

