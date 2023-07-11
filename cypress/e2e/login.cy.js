import Login from "../pageObject/LoginPage"
import HomePage from "../pageObject/HomePage"


describe('Azure Bookcart application Login', () => {

  it('Login Should not be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const login = new Login();                                        //create object for login
      const homepage = new HomePage();                                  //create object for homepage
      
      homepage.clickLoginButton();                                      // Click on Login Link
      
      login.setUserName(data.incorrectUsername);                        //Enter incorrect Credentials
      login.setPassword(data.incorrectPassword);
      login.clickSubmit();                                              //Click on Submit Button

      login.verifyAlertMessage().should('have.text',data.invalidCreds);  //Assertion, if it contains this text or not?
    })
  })

  it('Login Should be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const login = new Login();                                  //create object for login
      const homepage = new HomePage();                            //create object for homepage
      
      homepage.clickLoginButton();                                // Click on Login Link
      
      login.setUserName(data.username);                           //Enter incorrect Credentials
      login.setPassword(data.password);
      login.clickSubmit();                                        //Click on Submit Button

      homepage.accountCircle().should('have.text',data.accCircle + data.username + data.arrowDd);  //Assertion, if it contains this text or not?
    })
  })
});