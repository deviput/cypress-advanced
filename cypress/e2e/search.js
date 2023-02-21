const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')

Given('I am valid user', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.url().should('include', 'index.html');
    cy.get('#signin_button').click();
})

When('I click data in search box', () => {
    cy.get('#searchTerm').type('some text {enter}');
})

Then('I should see data in the application', () => {
    cy.get('h2').should('contain.text', 'Search Results:');
})