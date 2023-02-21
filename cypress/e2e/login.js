import LoginPage from './login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    LoginPage.visit();
})

When('I submit login', () => {
    LoginPage.fillusername('username');
    LoginPage.fillpassword('password');
    LoginPage.SignIn();
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible');
})