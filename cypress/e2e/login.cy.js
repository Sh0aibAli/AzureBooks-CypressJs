import Login from "../pageObject/LoginPage"
import HomePage from "../pageObject/HomePage"


describe('Azure Bookcart application Login', () => {

  it('Login Should not be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const login = new Login();                                  //create object for login
      const homepage = new HomePage();                            //create object for homepage
      
      homepage.clickLoginButton();                                // Click on Login Link
      
      login.setUserName("asch");                                  //Enter incorrect Credentials
      login.setPassword("123456BIJ");
      login.clickSubmit();                                        //Click on Submit Button

      login.verifyAlertMessage().should('have.text','Username or Password is incorrect.');  //Assertion, if it contains this text or not?
    })
  })

  it('Login Should be Success', () => {

    cy.fixture("example").then((data) => {
      cy.visit(data.baseUrl);
      
      const login = new Login();                                  //create object for login
      const homepage = new HomePage();                            //create object for homepage
      
      homepage.clickLoginButton();                                // Click on Login Link
      
      login.setUserName(data.username);                                  //Enter incorrect Credentials
      login.setPassword(data.password);
      login.clickSubmit();                                        //Click on Submit Button

      homepage.accountCircle().should('have.text','account_circle');  //Assertion, if it contains this text or not?
    })
  })
});