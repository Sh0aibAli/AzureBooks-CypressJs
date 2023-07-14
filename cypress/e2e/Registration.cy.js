import POMManager from "../pageObject/POMManager";

const pomManager = new POMManager();                                                        //create object for pomManager

describe('Azure Bookcart Registration', () => {
    it('Register a new User and Login', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const timestamp = new Date();                                                                      //create object for Date

          pomManager.homePage.clickLoginButton();                                                            // Click on Login Link
          
          pomManager.loginPage.clickOnRegister();                                                            // Click on Register button
          pomManager.userRegistrationPage.verifyUserRegistration().should('have.text','User Registration');  //Assertion, if it contains this text or not?
          
          pomManager.userRegistrationPage.enterFirstnameAndLastname(data.firstName, data.lastName);//setting the firstname, lastname from example.json file
          
          let newUsername = "Qualtitech"+ timestamp.getMilliseconds()+ timestamp.getMinutes();    //Getting the new username with the help of timestamp
          pomManager.userRegistrationPage.enterUserName(newUsername);                             //setting the new Username
         
          pomManager.userRegistrationPage.enterPasswordAndConfirmPassword(data.password);         //setting the password and confirm Password from example.json file

          pomManager.userRegistrationPage.selectFemaleRadioBtn();                                 //selecting the female radio button
          pomManager.userRegistrationPage.selectMaleRadioBtn();                                   //selecting the male radio button

          pomManager.userRegistrationPage.clickOnRegister();                                      //Click on the register button  
          
          pomManager.loginPage.verifyLogin().should('have.text','Login');                         //Assert the Login Header text
          pomManager.loginPage.userLoginWithCredentials(newUsername, data.password);              //User tries to log in with new username
          
          let accountCircleText = data.accCircle + newUsername + data.arrowDd;                    //Getting the newly account circle text
          pomManager.homePage.accountCircle().should('have.text',accountCircleText);              //Assert the account circle text 

          pomManager.writeJsonFile(newUsername);                                                      //Store the credentials to a json file
          // cy.writeFile('cypress/fixtures/newlyRegisteredUser.json', { newUsername1: newUsername});        
          
          pomManager.writeTxtFile(newUsername)                                                        //Store the credentials to a txt file
          // cy.writeFile('cypress/fixtures/newUser.txt', 'Username: ' + newUsername + '\n', { flag: 'a+' }) //Store the credentials to a txt file
        })
      })
});