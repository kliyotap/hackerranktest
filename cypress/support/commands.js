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

/**
 * get a profile object from the profiles fixture by tag.
 *
 * @param {string} tag - The tag used to find a test user
 * @returns {object} profile object or empty object if profile with specified username not found
 */
Cypress.Commands.add('getTestUserByTag', (tag) => {
  return cy.fixture('testData').then((p) => p.filter((profile) => profile.tag === tag)[0] || {});
});
