describe('launching home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        let logo = cy.get('[data-testid="logo"]');
    });

    it('displays navigation bar at top', () => {            
        let navBar = cy.get('[data-testid="navBar"]');
        
        navBar.should('be.visible');

        navBar.then(element => { 
            cy.wrap(element.position()).its('top').should('eq', 0);
            cy.wrap(element.position()).its('left').should('eq', 0);
        });
    });

    it('displays logo in navigation bar', () => {
        cy.get('[data-testid="logo"]').should('have.attr', 'src');
        
        const navBarBottom = () => {
            cy.get('[data-testid="navBar"]')
                .then(element => {
                    return element[0].getBoundingClientRect().bottom;
                });
        };

        // testing to ensure logo doesn't expand across navbar boundary
        cy.get('[data-testid="logo"]')
            .then(element => { 
                cy.wrap(element[0].getBoundingClientRect()).its('bottom')
                    .then(logoBottom => {
                        cy.get('[data-testid="navBar"]')
                            .then(element => { 
                                cy.wrap(element[0].getBoundingClientRect()).its('bottom').should('gte', logoBottom);
                            });
                    });
            });      
    });
});