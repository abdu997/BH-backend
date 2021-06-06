Feature: Creating Customer
    Scenario: Create customer
        Given: I am on the home page
        When I enter a customerID
        And I enter a First Name
        And I enter a Last Name
        And I enter an number for Initial Credit
        And I click "Create Account"
        Then I should see an alert saying "Customer Account Created"
        And I should see the form has been reset

    Scenario: Create customer without customerID
        Given: I am on the home page
        When I enter a First Name
        And I enter a Last Name
        And I enter an number for Initial Credit
        And I click "Create Account"
        Then I should see an alert saying "Missing customerID"
        And I should see my entries in the form fields

    Scenario: Create customer without initial credit
        Given: I am on the home page
        When I enter a customerID
        And I enter a First Name
        And I enter a Last Name
        And I click "Create Account"
        Then I should see an alert saying "Customer Account Created"
        And I should see the form has been reset

Feature: Searching Customer
    Scenario: Search customer that exists
        Given: I am on the home page
        When I enter a valid customerID into the search field
        And I click "Search"
        Then I should see the customer's first name
        And I should see the customer's last name
        And I should see the customer's balance
        And I should see the customer's transactions with their respective transaction type

    Scenario: Search customer that exists
        Given: I am on the home page
        When I enter a invalid customerID into the search field
        And I click "Search"
        Then I should see an alert saying "Customer Does Not Exist"
