describe('Log In Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should register a new user successfully', () => {
        cy.get('input[placeholder="email"]').type('test@gmail.com');
        cy.get('input[placeholder="password"]').type('password123');
        
        cy.get('button').contains('login').click();

        cy.url().should('eq', 'http://localhost:3000/');
    });
});