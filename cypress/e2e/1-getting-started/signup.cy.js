
describe('Registration Page', () => {
    beforeEach(() => {

        cy.visit('/Reg');
    });

    it('should register a new user', () => {

        cy.get('input[placeholder="Email"]').type('test@example.com');
        cy.get('input[placeholder="Password"]').type('password123');
        cy.get('input[placeholder="Phone Number"]').type('1234567890');
        cy.get('input[placeholder="Confirm Password"]').type('password123');
  
        cy.contains('Register').click();
        cy.url().should('include', '/');
    });

    
});
