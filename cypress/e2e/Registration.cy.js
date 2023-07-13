import POMManager from "../pageObject/POMManager";

describe('Azure Bookcart Registration', () => {
    it('Register a new User and Login', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const pomManager = new POMManager();                                  //create object for pomManager

          const timestamp = new Date();                               //create object for Date


          pomManager.homePage.clickLoginButton();                                // Click on Login Link
          
          pomManager.loginPage.clickOnRegister();                                    // Click on Register button
          pomManager.userRegistrationPage.verifyUserRegistration().should('have.text','User Registration');  //Assertion, if it contains this text or not?
          pomManager.userRegistrationPage.enterFirstName(data.firstName);                                    //setting the firstname from example.json file
          pomManager.userRegistrationPage.enterLastName(data.lastName);                                      //setting the lastname from example.json file
          
          let newUsername = "Qualtitech"+ timestamp.getMilliseconds()+ timestamp.getMinutes();  //Getting the new username with the help of timestamp
          pomManager.userRegistrationPage.enterUserName(newUsername);                                        //setting the new Username
          pomManager.userRegistrationPage.enterPassword(data.password);                                      //setting the password from example.json file
          pomManager.userRegistrationPage.enterConfirmPassword(data.password);                               //setting the confirm password from example.json file      
          pomManager.userRegistrationPage.selectMaleRadioBtn();                                              //selecting the male radio button
          pomManager.userRegistrationPage.selectFemaleRadioBtn();                                            //selecting the female radio button
          pomManager.userRegistrationPage.selectMaleRadioBtn();                                              //selecting the male radio button
          pomManager.userRegistrationPage.clickOnRegister();                                                 //Click on the register button  
          
          pomManager.loginPage.verifyLogin().should('have.text','Login');                                //Assert the Login Header text
          pomManager.loginPage.setUserName(newUsername);                                                 //Set the new username
          pomManager.loginPage.setPassword(data.password);                                               //Set the password from example.json
          pomManager.loginPage.clickSubmit();                                                            //Click on Submit Button  

          let accountCircleText = data.accCircle + newUsername + data.arrowDd;            //Getting the account circle text
          pomManager.homePage.accountCircle().should('have.text',accountCircleText);                 //Assert the account circle text 
        })
      })
});