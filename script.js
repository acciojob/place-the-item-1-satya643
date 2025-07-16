cy.visit("http://localhost:5500/main.html");
cy.get('.holder')
  .should('have.css', 'display', 'flex')
  .should('have.css', 'justify-content', 'space-between')
  .should('have.css', 'flex-wrap', 'wrap');
