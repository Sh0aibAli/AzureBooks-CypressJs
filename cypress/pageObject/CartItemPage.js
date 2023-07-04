class CartItemPage
{
    _cartItemHeader = "//div/h2";
    _titleOfBook = "//table/tbody/tr/*/td[2]/a";
    _deleteItem = "//span/*[contains(text(),'delete')]";
    _cartCount = "#mat-badge-content-0";
    _cardTitle = "mat-card .mat-card-title";
    _continueShopping = "//*[contains(text(),'Continue shopping')]";
    _wishlistCount = "#mat-badge-content-1";

    cartItemsHeader(){
        return cy.xpath(this._cartItemHeader);
    }

    titleOfBookInCart(){
        return cy.xpath(this._titleOfBook);
    }

    deleteItem(){
        cy.xpath(this._deleteItem).click();
    }

    cartCount(){
        return cy.get(this._cartCount);
    }

    cardTitle(){
        return cy.get(this._cardTitle);
    }

    clickOnContinueShopping(){
        cy.xpath(this._continueShopping).click();
    }

    wishlistCount() {
        return cy.get(this._wishlistCount);
    }
}
export default CartItemPage;