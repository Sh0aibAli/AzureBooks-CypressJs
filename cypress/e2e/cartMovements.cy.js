import POMManager from "../pageObject/POMManager";

const pomManager = new POMManager();                                                        //create object for pomManager

describe('Azure Book Cart movements', () => {
    it('Add and Delete books to cart', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);                                                           //User visit to the application url
          
          pomManager.homePage.clickLoginButton();                                           // Click on Login Link
          
          pomManager.loginPage.userLoginWithCredentials(data.username, data.password);      //User tries to log in with correct credentials
          pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);   //Assertion, if it contains Account Circle text
        
          pomManager.homePage.searchAndSelectBook(data.book1);                              //User enters and select a book
          
          pomManager.homePage.bookname().should('have.text',data.book1);                    //Assertion, if it contains Bookname
          pomManager.homePage.cartCount().should('have.text','0');                          //Assertion, if cart count is zero
          
          pomManager.homePage.addToCart();                                                  //User clicks on Add to cart button
          pomManager.homePage.cartCount().should('have.text','1');                          //Assertion, if cart count is one
          
          pomManager.homePage.clickOnCartIcon();                                            //User click on cart icon button
          pomManager.cartItemPage.cartItemsHeader().should('have.text','Cart Items');       //Assertion, if the page header is Cart Items or not
          pomManager.cartItemPage.titleOfBookInCart().should('have.text',data.book1);       //Assertion, if the book title is correct
          
          pomManager.cartItemPage.deleteItem();                                             //User clicks on Delete button

          pomManager.cartItemPage.cartCount().should('have.text','0');                      //Assertion, if cart count is zero
          pomManager.cartItemPage.cardTitle().should('have.text',data.emptyCart);           //Assertion, if card title should contains the empty message
          
          pomManager.cartItemPage.clickOnContinueShopping();                                //User clicks on continue shopping button
          
          pomManager.homePage.clickOnLogout();                                              //User clicks on logout button
          pomManager.loginPage.verifyLogin().should('have.text','Login');                   //Assertion, if user is able to see Login Header
        })
      })

      it('Add and Delete books to wishlist', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);                                                           //User visit to the application url
          
          pomManager.homePage.clickLoginButton();                                           // Click on Login Link
          
          pomManager.loginPage.userLoginWithCredentials(data.username, data.password);      //User tries to log in with correct credentials
          pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);   //Assertion, if it contains Account Circle text
          
          pomManager.homePage.searchAndSelectBook(data.book2);                              //User enters and select a book
          
          pomManager.homePage.bookname().should('have.text',data.book2);                    //Assertion, if it contains Bookname
          pomManager.homePage.wishlistCount().should('have.text','0');                      //Assertion, if cart count is zero
          
          pomManager.homePage.addToWishlist();                                              //User clicks on Add to wishlist button
          pomManager.homePage.wishlistCount().should('have.text','1');                      //Assertion, if cart count is one
          
          pomManager.homePage.clickOnWishlistIcon();                                        //User click on wishlist icon button
          pomManager.wishlistItemPage.wishlistHeader().should('have.text','My wishlist');    //Assertion, if the page header is My wishlist or not
          pomManager.wishlistItemPage.titleOfBookInWishlist().should('have.text',data.book2);//Assertion, if the book title is correct
          
          pomManager.wishlistItemPage.removeFromWishlist();                                  //User clicks on remove button

          pomManager.homePage.wishlistCount().should('have.text','0');                       //Assertion, if cart count is zero
          pomManager.wishlistItemPage.cardTitle().should('have.text',data.emptyWishlist);    //Assertion, if card title should contains the empty message
          
          pomManager.wishlistItemPage.clickOnContinueShopping();                             //User clicks on continue shopping button

          pomManager.homePage.clickOnLogout();                                               //User clicks on logout button
          pomManager.loginPage.verifyLogin().should('have.text','Login');                    //Assertion, if user is able to see Login Header
        })
      })
});
