import FeedPage from '../page-objects/LinkedInFeedsPage';
import LinkedInHomePage from '../page-objects/LinkedInHomePage';
import LinkedInSignUp from '../page-objects/SignUpPage';

context('Frontend Tests > LinkedIn', () => {

  it('Should load home page with all controls visible > should display error when login details are not entered correctly > should load sign up page correctly', () => {
    LinkedInHomePage.visitHomePage();
    LinkedInHomePage.verifyHomePageIsLoadedCorrectly();
    console.log("%clinked home Page is loaded correctly", "color: blue");

    // should display errors when login details are not entered
    LinkedInHomePage.signInButton().click();
    LinkedInHomePage.checkAlertMessage('Please enter your email address or mobile number.');

    // catching an exception that is thrown in console by linked website itself - we don't want test to stop here!
    Cypress.on('uncaught:exception', (err) => {
      expect(err.message).to.include(' error originated from your application code');
      return false;
    });

    cy.getTestUserByTag('invalid_login').then(({ email, password }) => {
      // should display errors when password is not entered
      LinkedInHomePage.inputPhoneNumberOrEmail().type(email);
      LinkedInHomePage.signInButton().click();
      LinkedInHomePage.checkAlertMessage('Please enter your password.');

      // should display errors when username or email is not entered is not entered
      LinkedInHomePage.inputPhoneNumberOrEmail().clear()
      LinkedInHomePage.inputPassword().type(password);
      LinkedInHomePage.signInButton().click();
      LinkedInHomePage.checkAlertMessage('Please enter your email address or mobile number.');
    });

    // validate sign up page loads correctly
    LinkedInHomePage.joinNowNavBarButton().click();
    LinkedInSignUp.verifySignUpPageLoadsCorrectly();
  });

  it('enter valid login details > sign up should be successful', () => {
    LinkedInHomePage.visitHomePage();
    // reading data from external json
    cy.getTestUserByTag('valid_login').then(({ phoneNumber, password }) => {

      // catching an exception that is thrown in console by linked website itself - we don't want test to stop here!
      Cypress.on('uncaught:exception', (err) => {
        expect(err.message).to.include(' error originated from your application code');
        return false;
      });
      LinkedInHomePage.inputPhoneNumberOrEmail().type(phoneNumber);
      LinkedInHomePage.inputPassword().type(password);
    });

    LinkedInHomePage.signInButton().click();
    FeedPage.verifyHomePageLoadsCorrectly();
    FeedPage.signOut();
  });
});
