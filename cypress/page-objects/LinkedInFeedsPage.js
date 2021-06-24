export default class FeedPage {
  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static homeNavBarLink() {
    return cy.get('[data-control-name=nav_homepage]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static myNetworkNavBarLink() {
    return cy.get('[data-control-name=nav_mynetwork]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static jobsNavBarLink() {
    return cy.get('[data-control-name=nav_jobs]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static messagingNavBarLink() {
    return cy.get('[data-control-name=nav_messaging]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static notificationsNavBarLink() {
    return cy.get('[data-control-name=nav_notifications]').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static photoInNavBar() {
    return cy.get('.global-nav__me-photo').should('exist');
  }

  /**
   *
   * @returns  {Cypress.Chainable<any>}
   */
  static signOutLink() {
    return cy.get('.global-nav__secondary-item').find('.mv1').filter(':contains("Sign Out")');
  }

  /**
   * verify after login home page is loaded
   * not all controls are being checked except few in top Navigation bar
   */
  static verifyHomePageLoadsCorrectly() {
    this.homeNavBarLink().should('be.visible');
    this.myNetworkNavBarLink().should('be.visible');
    this.jobsNavBarLink().should('be.visible');
    this.messagingNavBarLink().should('be.visible');
    this.notificationsNavBarLink().should('be.visible');
  }

  static signOut() {
    this.photoInNavBar().click();
    this.signOutLink().click({ force: true })
  }
}
