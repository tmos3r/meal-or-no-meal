describe('launching the app', () => {
    it('displays the logo', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="logo"]').should('be.visible');
    });
});