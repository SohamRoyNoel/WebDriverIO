Feature: Performing a table operation

    Background:
        Given I'm on the Home Page
    
    Scenario: Account Activity Redirection
        When On the ZeroBank HomePage
        Then Go to Account Activity Tab on the very same page
        Then I extract the text from a table row
        Then I shall able to print column texts

        