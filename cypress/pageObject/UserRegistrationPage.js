class Registration{
    
    _userRegistrationHeader = "//h3[text()='User Registration']";
    _firstName = "//div/input[@formcontrolname='firstname']";
    _lastName = "//div/input[@formcontrolname='lastname']";
    _userName = "//div/input[@formcontrolname='username']";
    _password = "//div/input[@formcontrolname='password']";
    _confirmPassword = "//div/input[@formcontrolname='confirmPassword']";
    _maleGenderRadioBtn = "#mat-radio-2 > .mat-radio-label > .mat-radio-label-content";
    _femaleGenderRadioBtn = "#mat-radio-3 > .mat-radio-label > .mat-radio-label-content";
    _registerBtn = ".mat-card-actions > .mat-focus-indicator > .mat-button-wrapper";

    verifyUserRegistration(){
        return cy.xpath(this._userRegistrationHeader);
    }

    enterFirstName(firstName){
        cy.xpath(this._firstName).type(firstName);
    }

    enterLastName(lastName){
        cy.xpath(this._lastName).type(lastName);
    }

    enterUserName(userName){
        cy.xpath(this._userName).type(userName);
    }

    enterPassword(password){
        cy.xpath(this._password).type(password);
    }

    enterConfirmPassword(password){
        cy.xpath(this._confirmPassword).type(password);
    }

    selectMaleRadioBtn(){
        cy.get(this._maleGenderRadioBtn).click();
    }

    selectFemaleRadioBtn(){
        cy.get(this._femaleGenderRadioBtn).click();
    }

    clickOnRegister(){
        cy.get(this._registerBtn).click();
    }
}
export default Registration;