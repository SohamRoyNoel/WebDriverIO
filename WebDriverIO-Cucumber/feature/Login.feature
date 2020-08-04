Feature: Performing a Login

    Background: 
        Given I'm on the Login Page
    
    Scenario: Login with a default user
        When I login with a default user
        Then I shall be on the Zero Bank User Page