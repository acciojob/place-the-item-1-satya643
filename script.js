cy.get('.holder')
  .should('have.css', 'display', 'flex')
  .should('have.css', 'justify-content', 'space-between')
  .should('have.css', 'flex-wrap', 'wrap');
