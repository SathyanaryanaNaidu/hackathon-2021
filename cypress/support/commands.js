/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("typeLogin", (user) => {
  cy.get(user.emailField || "input[name=email]")
    .type(user.email)
    .should("have.value", user.email);

  cy.get(user.passwordField || "input[name=password]")
    .type(user.password)
    .should("have.value", user.password);
});

Cypress.Commands.add("triggerMouserHover", (identifier) => {
  cy.get(identifier).trigger("mouseover");
});

Cypress.Commands.add("shouldHaveTypedValue", (identifier, typo) => {
  cy.get(identifier).type(typo).should("have.value", typo);
});

Cypress.Commands.add("clickOn", (identifier) => {
  cy.get(identifier).click();
});

Cypress.Commands.add("clickFirstElementOf", (identifier) => {
  cy.get(identifier).first().click();
});

Cypress.Commands.add("findThenClickFirstElementOf", (identifier, toBeFound) => {
  cy.get(identifier).find(toBeFound).first().click();
});

Cypress.Commands.add("getSessionStorage", (key) => {
  cy.window().then((window) => window.sessionStorage.getItem(key));
});

Cypress.Commands.add("setSessionStorage", (key, value) => {
  cy.window().then((window) => {
    window.sessionStorage.setItem(key, value);
  });
});

Cypress.Commands.add("getLocalStorage", (key) => {
  cy.window().then((window) => window.localStorage.getItem(key));
});

Cypress.Commands.add("setLocalStorage", (key, value) => {
  cy.window().then((window) => {
    window.localStorage.setItem(key, value);
  });
});
