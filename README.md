 Final task of EPAM Automated testing in JavaScript Stage 2

Website: https://www.saucedemo.com/
 Tool: WebDriverIO 
 Used pattern model: Page Object Model (POM)
 Browsers: Chrome,Edge,Firefox 
 Assertions: expect()

Features: 
 - Uses POM model for better maintainance and traceability.
 - Log-s the progress
 - Runs on Chrome, Edge, and Firefox.
 - Spec Reporter and Allure Reporter available.
 - Screenshots are taken in case of failed tests and saved in folder in the repository 

 Test Cases:
 - UC-1: Test Login form with empty credentials => Expect error message "Username is required"
 - UC-2: Test Login form with credentials by passing Username only => Expect error message "Password is required"
 - UC-3: Test Login form with credentials by passing Username(standard_user) & Password(secret_sause) => Expect title "Swag Labs"

 Locators (CSS): 
 * #user-name => Username Input
 * #password => Password Input
 * #login-button => Login button
 * h3[data-test="error"] => Error message

Screenshots & Reports

- Screenshots of failed tests are stored in /errorShots
- Allure test data is generated in /allure-results
- HTML reports are available in /allure-report after generation

 Tools & Setup

- WebdriverIO v9
- Mocha test framework
- @wdio/allure-reporter
- Allure Commandline
- Node.js

 How to Run =>
1. npm install                               //dependencies
2. npm run wdio                              //runs the test suite
3. npx allure generate "allure-results" --clean -o "allure-report"                              //generates Allure report
4. npx allure open "allure-report"          //opens Allure report

 * Author: Elena Neykova
 * Date: 12.11.2025



