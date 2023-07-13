import POMManager from "../pageObject/POMManager";


describe('Azure Bookcart application Login', () => {

  it('Login Should not be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const pomManager = new POMManager();                                  //create object for pomManager

      pomManager.homePage.clickLoginButton();                               // Click on Login Link
      
      pomManager.loginPage.setUserName(data.incorrectUsername);                        //Enter incorrect Credentials
      pomManager.loginPage.setPassword(data.incorrectPassword);
      pomManager.loginPage.clickSubmit();                                              //Click on Submit Button

      pomManager.loginPage.verifyAlertMessage().should('have.text',data.invalidCreds);  //Assertion, if it contains this text or not?

    })
  })

  it('Login Should be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const pomManager = new POMManager();                                  //create object for pomManager
      
      pomManager.homePage.clickLoginButton();                               // Click on Login Link
      
      pomManager.loginPage.setUserName(data.username);                           //Enter incorrect Credentials
      pomManager.loginPage.setPassword(data.password);
      pomManager.loginPage.clickSubmit();                                        //Click on Submit Button

      pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);  //Assertion, if it contains this text or not?
    })
  })
});