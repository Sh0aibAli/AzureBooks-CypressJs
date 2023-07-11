class Login
{
    txtUserName = "//div/input[@data-placeholder='Username']";
    txtPassword = "//div/input[@data-placeholder='Password']";
    btnLogin = "(//span[contains(text(),'Login')])[2]";
    loginHeader = "//h3[text()='Login']";
    alertMessage = "#mat-error-0";
    _registerButton = "//button/span[contains(text(),'Register')]";
     //enter the username
     setUserName(userName){
        cy.xpath(this.txtUserName).type(userName);
    }

    //enter the password
    setPassword(password){
        cy.xpath(this.txtPassword).type(password);
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

    clickOnRegister(){
        cy.xpath(this._registerButton).click();
    }
}
export default Login;