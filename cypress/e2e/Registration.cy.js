import Login from "../pageObject/LoginPage"
import HomePage from "../pageObject/HomePage"
import Registration from "../pageObject/UserRegistrationPage";

describe('Azure Bookcart Registration', () => {
    it('Register a new User and Login', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const login = new Login();                                  //create object for login class
          const homepage = new HomePage();                            //create object for homepage class
          const registration = new Registration();                    //create object for registration class
          const timestamp = new Date();                               //create object for Date


          homepage.clickLoginButton();                                // Click on Login Link
          
          login.clickOnRegister();                                    // Click on Register button
          registration.verifyUserRegistration().should('have.text','User Registration');  //Assertion, if it contains this text or not?
          registration.enterFirstName(data.firstName);                                    //setting the firstname from example.json file
          registration.enterLastName(data.lastName);                                      //setting the lastname from example.json file
          
          let newUsername = "Qualtitech"+ timestamp.getMilliseconds()+ timestamp.getMinutes();  //Getting the new username with the help of timestamp
          registration.enterUserName(newUsername);                                        //setting the new Username
          registration.enterPassword(data.password);                                      //setting the password from example.json file
          registration.enterConfirmPassword(data.password);                               //setting the confirm password from example.json file      
          registration.selectMaleRadioBtn();                                              //selecting the male radio button
          registration.selectFemaleRadioBtn();                                            //selecting the female radio button
          registration.selectMaleRadioBtn();                                              //selecting the male radio button
          registration.clickOnRegister();                                                 //Click on the register button  
          
          login.verifyLogin().should('have.text','Login');                                //Assert the Login Header text
          login.setUserName(newUsername);                                                 //Set the new username
          login.setPassword(data.password);                                               //Set the password from example.json
          login.clickSubmit();                                                            //Click on Submit Button  

          let accountCircleText = data.accCircle + newUsername + data.arrowDd;            //Getting the account circle text
          homepage.accountCircle().should('have.text',accountCircleText);                 //Assert the account circle text 
        })
      })
});