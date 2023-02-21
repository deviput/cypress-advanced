/// reference types="cypress" />
const username = 'standard_user';
const password = 'secret_sauce';

describe('SAUCEDEMO WEB TESTING', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/')
  });

  it('Mencoba sebisanya', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.url().should('include', '/commands/actions')

    cy.get('Username').type(standard_user)
    expect('Username').to.be.a('string');

    cy.get('Password').type(secret_sauce)
    expect('Password').to.be.a('string');

    cy.contains('login-button').click()
    expect($el).to.have.class('header_secondary_container');

    cy.contains('[id="react-burger-menu-btn"]').click()
    expect($el).to.have.class('bm-item-list');

    cy.contains('Logout').click()

    cy.get('[class="login_wrapper"]').should('include.class', '[class="login_logo"]')
  });
});
