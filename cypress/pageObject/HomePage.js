class HomePage {
    _lnkLogin = "//span[contains(text(),'Login')]";
    _searchBar = "//input[@placeholder='Search books or authors']";
    _bookItem = "//span[contains(text(),'Roomies')]";
    _username = ".mat-menu-trigger.mat-button > .mat-button-wrapper";
    _bookItem1 = "//span[@class='mat-option-text']";
    _bookname = "//div/a/strong";
    _addToCart = "//span[contains(text(),'Add to Cart')]";
    _cartCount = "#mat-badge-content-0";
    _cartIcon = "//*[@matbadgecolor='warn'][contains(text(),'shopping_cart')]";
    _arrowDropdown = "//*[contains(text(),'arrow_drop_down')]";
    _logout = "//*[contains(text(),'Logout')]";
    _wishlistCount = "#mat-badge-content-1";
    _addToWishlist = "//span[contains(text(),'favorite')]";
    _wishlistIcon = "//*[@matbadgecolor='warn'][contains(text(),'favorite')]";
    
    // clickLoginButton(){
    //     cy.get(this.lnkLogin).click();
    // }

    clickLoginButton() {
        cy.xpath(this._lnkLogin).click();
    }
    
    accountCircle() {
        return cy.get(this._username);
    }
    
    searchAndSelectBook(book1) {
        cy.xpath(this._searchBar).type(book1);
        cy.xpath(this._bookItem1).click();
    }

    bookname() {
        return cy.xpath(this._bookname);
    }

    addToCart() {
        cy.xpath(this._addToCart).click();
    }

    cartCount() {
        return cy.get(this._cartCount);
    }

    clickOnCartIcon() {
        cy.xpath(this._cartIcon).click();
    }

    clickOnLogout() {
        cy.xpath(this._arrowDropdown).click();
        cy.xpath(this._logout).click();
    }

    wishlistCount() {
        return cy.get(this._wishlistCount);
    }

    addToWishlist() {
        cy.xpath(this._addToWishlist).click();
    }

    clickOnWishlistIcon() {
        cy.xpath(this._wishlistIcon).click();
    }
}
export default HomePage;