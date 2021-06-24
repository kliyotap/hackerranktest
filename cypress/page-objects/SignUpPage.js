export default class SignUp {
  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static inputEmailOrPhone() {
    return cy.get('#email-or-phone').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static inputPassword() {
    return cy.get('#password').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static agreeAndJoin() {
    return cy.get('#join-form-submit').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static userAgreementLink() {
    return cy.get('[data-tracking-control-name=registration-frontend_join-form-user-agreement]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static privacyPolicyLink() {
    return cy.get('[data-tracking-control-name=registration-frontend_join-form-privacy-policy]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static cookiePolicyLink() {
    return cy.get('[data-tracking-control-name=registration-frontend_join-form-cookie-policy]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static joinWithGoogle() {
    return cy.get('[data-tracking-control-name=_join-form-join-with-google]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static signIn() {
    return cy.get('[data-tracking-control-name=cold_join_sign_in]').should('exist');
  }

  /**
   * check sign up page loads correctly
   */
  static verifySignUpPageLoadsCorrectly() {
    this.inputEmailOrPhone().should('be.visible');
    this.inputPassword().should('be.visible');
    this.userAgreementLink().should('be.visible');
    this.privacyPolicyLink().should('be.visible');
    this.cookiePolicyLink().should('be.visible');
    this.agreeAndJoin().should('be.visible');
    this.joinWithGoogle().should('be.visible');
    this.signIn().should('be.visible');
  }
}
