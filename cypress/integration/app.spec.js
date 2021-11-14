/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.server();
    cy.viewport('macbook-16');
    // Start from the login page
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('button[type*="button"]').click();

    cy.url().should('include', '/login');

    const userEmail = 'satya@gmail.com';
    const passworrd = 'password@123';

    // Enter the credentials
    cy.get('#email').type(userEmail).should('have.value', userEmail);
    cy.wait(500);
    cy.get('#password').type(passworrd).should('have.value', passworrd);
    cy.wait(1000);

    // Adding a watcher on the API call that will be triggered on Button Click
    cy.route('/api/test*').as('getUsers');
    cy.get('button[id*="loginButton"]').click();

    // Testing for the Expected Results
    cy.wait('@getUsers').then((interception) => {
      expect(interception.response.body.message).to.be.equal('Login Success');
    });

    // Testing the routing / redirection to new page
    // The new url should include "/profile"
    cy.url().should('include', '/dashboard');

    // // The new page should contain an h1 with "Welcome to Profile"
    // cy.get('h1').contains('Welcome to Profile');
    cy.wait(4000);
  });
});
