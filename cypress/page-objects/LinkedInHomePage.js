export default class LinkedInHomePage {
  /**
   * 
   * @returns  {Cypress.Chainable<any>}
   */
  static joinNowNavBarButton() {
    return cy.get('[data-tracking-control-name=guest_homepage-basic_nav-header-join]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static signInNavBarButton() {
    return cy.get('[data-tracking-control-name=guest_homepage-basic_nav-header-signin]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static inputPhoneNumberOrEmail() {
    return cy.get('#session_key').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static inputPassword() {
    return cy.get('#session_password').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static forgotPasswordLink() {
    return cy.get('[data-tracking-control-name=homepage-basic_signin-form_forgot-password-link]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static signInButton() {
    return cy.get('[data-tracking-control-name=homepage-basic_signin-form_submit-button]')
      .should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static errorForUserName() {
    return cy.get('#error-for-username').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static alertMessage() {
    return cy.get('.alert').should('exist');
  }

  static visitHomePage() {
    cy.visit(Cypress.env('baseUrl'));
  }

  /**
   * verify Linked home page is loaded and all controls exist and are visible
   */
  static verifyHomePageIsLoadedCorrectly() {
    this.joinNowNavBarButton().should('be.visible');
    this.signInNavBarButton().should('be.visible');
    this.inputPhoneNumberOrEmail().should('be.visible');
    this.inputPassword().should('be.visible');
    this.forgotPasswordLink().should('be.visible');
    this.signInButton().should('be.visible');
  }

  /**
   * enter login details
   * 
   * @param {string} loginKey 
   * @param {string} loginPassword 
   */
  static enterloginDetails(loginKey, loginPassword) {
    this.inputPhoneNumberOrEmail().type(loginKey);
    this.inputPassword().type(loginPassword);
    this.signInButton().click();
  }

  static checkErrorForUserName() {
    this.errorForUserName()
      .should('be.visible')
      .should('contain', 'Couldn’t find a LinkedIn account associated with this email. Please try again.');
  }

  static checkAlertMessage(alertMessage) {
    this.alertMessage().should('be.visible')
      .should('contain', alertMessage);
  }
}

