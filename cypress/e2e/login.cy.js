import POMManager from "../pageObject/POMManager";

const pomManager = new POMManager(); 
describe('Azure Bookcart application Login', () => {
    
  it('Login Should not be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);                                                                        //User visit to the application url
      
      pomManager.homePage.clickLoginButton();                                                        // Click on Login Link
      pomManager.loginPage.userLoginWithCredentials(data.incorrectUsername, data.incorrectPassword); //User tries to log in with incorrect credentials
      pomManager.loginPage.verifyAlertMessage().should('have.text',data.invalidCredsErrorMessage);   //Assertion, if it contains invalid credentials Error Message

    })
  })

  it('Login Should be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);                                                           //User visit to the application url
            
      pomManager.homePage.clickLoginButton();                                           // Click on Login Link
      pomManager.loginPage.userLoginWithCredentials(data.username, data.password);      //User tries to log in with correct credentials
      pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);   //Assertion, if it contains Account Circle text
    })
  })
});