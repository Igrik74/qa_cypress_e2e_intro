/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    const email = 'test1234567@gmail.com';
    const pw = 'test1234567';

    cy.get('h1').should('have.text', 'Sign in');

    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(pw);

    cy.get('button.btn').click();

    cy.contains('a.nav-link', 'test1234567')
      .should('be.visible');
  });
});
