describe('Login de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('/');

        //cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        //    statusCode: 400
        //}).as('stubPost')
    });

    // Irá executar apenas os cenarios fazer login usuario valido e usuario invalido (it.only)
    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        //cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('fazer login de usuario invalido', () => {
        cy.login('carolana', '1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        }) 
    });

});