class Login
{
    txtUserName = "#mat-input-0";
    txtPassword = "#mat-input-1";
    btnLogin = "(//span[contains(text(),'Login')])[2]";
    loginHeader = "//h3[text()='Login']";
    alertMessage = "#mat-error-0";

     //enter the username
     setUserName(userName){
        cy.get(this.txtUserName).type(userName);
    }

    //enter the password
    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    //click on login button
    clickSubmit(){
        cy.xpath(this.btnLogin).click();
    }

    //verify the login
    verifyLogin(){
        return cy.xpath(this.loginHeader);
    }

    //alertMesssage
    verifyAlertMessage(){
        return cy.get(this.alertMessage);
    }
}
export default Login;