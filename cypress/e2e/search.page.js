const URL = 'http://zero.webappsecurity.com/index.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const LOGIN = '#signin_button';

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username);
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }

    static login() {
        cy.get(LOGIN).click();
    }

    static fillData(data) {
        cy.get('#searchTerm').type(data);
    }

    static seeData(data) {
        cy.get('h2').should('contain.text', data);
    }
}

export default SearchPage;
