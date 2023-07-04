class Wishlist{
   
    _wishlistHeader = "//div/h2";
    _titleOfBook = "//table/tbody/tr/*/td[2]/a";
    _removeFromWishlist = "//span[contains(text(),'Remove from Wishlist')]";
    _cardTitle = "mat-card .mat-card-title";
    _continueShopping = "//*[contains(text(),'Continue shopping')]";

    wishlistHeader(){
        return cy.xpath(this._wishlistHeader);
    }

    titleOfBookInWishlist(){
        return cy.xpath(this._titleOfBook);
    }

    removeFromWishlist(){
        cy.xpath(this._removeFromWishlist).click();
    }

    cardTitle(){
        return cy.get(this._cardTitle);
    }

    clickOnContinueShopping(){
        cy.xpath(this._continueShopping).click();
    }

}
export default Wishlist;