Feature: Ecommerce validations
    @Regression
    Scenario: Page has correct title
        Given open url "https://makeup.com.ua/ua/" in the browser
        Then title is as expected

    @Regression
    Scenario: Logo is visible and it is a link
        Given open url "https://makeup.com.ua/ua/" in the browser
        Then logo is visible

    @Regression
    Scenario: Personal-office-button is visible and clickable
        Given open url "https://makeup.com.ua/ua/" in the browser
        When click personal-office-button
        Then personal office pop-up is visible

    @Regression
    Scenario: Header contains 5 elements and click on one element
        Given open url "https://makeup.com.ua/ua/" in the browser
        Then "<expectedHeaderElementscount>" header elements are present on the main Page
        When click on header element "<headerElementName>"
        Then browser went to the clicked Page and header "<headerElementName>" is present

        Examples:
            | expectedHeaderElementscount | headerElementName |
            | 5                           | Акції             |
            | 4                           | Статті            |

