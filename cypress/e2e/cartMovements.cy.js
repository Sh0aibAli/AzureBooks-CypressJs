import POMManager from "../pageObject/POMManager";

describe('Azure Book Cart movements', () => {
    it('Add and Delete books to cart', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          // const login = new Login();                                  //create object for login
          // const homepage = new HomePage();                            //create object for homepage
          // const cartItemPage = new CartItemPage();
          const pomManager = new POMManager();                                  //create object for pomManager

          pomManager.homePage.clickLoginButton();                                // Click on Login Link
          
          pomManager.loginPage.setUserName(data.username);                                  //Enter incorrect Credentials
          pomManager.loginPage.setPassword(data.password);
          pomManager.loginPage.clickSubmit();                                        //Click on Submit Button
    
          pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);  //Assertion, if it contains this text or not?
          pomManager.homePage.searchAndSelectBook(data.book1);
          
          pomManager.homePage.bookname().should('have.text',data.book1);
          pomManager.homePage.cartCount().should('have.text','0');
          pomManager.homePage.addToCart();
          pomManager.homePage.cartCount().should('have.text','1');
          pomManager.homePage.clickOnCartIcon();

          pomManager.cartItemPage.cartItemsHeader().should('have.text','Cart Items');
          pomManager.cartItemPage.titleOfBookInCart().should('have.text',data.book1);
          pomManager.cartItemPage.deleteItem();

          pomManager.cartItemPage.cartCount().should('have.text','0');
          pomManager.cartItemPage.cardTitle().should('have.text',data.emptyCart);
          pomManager.cartItemPage.clickOnContinueShopping();

          pomManager.homePage.clickOnLogout();
          pomManager.loginPage.verifyLogin().should('have.text','Login');
        })
      })

      it('Add and Delete books to wishlist', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const pomManager = new POMManager();                                  //create object for pomManager

          pomManager.homePage.clickLoginButton();                                // Click on Login Link
          
          pomManager.loginPage.setUserName(data.username);                           //Enter correct Credentials
          pomManager.loginPage.setPassword(data.password);
          pomManager.loginPage.clickSubmit();                                        //Click on Submit Button
    
          pomManager.homePage.accountCircle().should('have.text',data.accountCircleText);  //Assertion, if it contains this text or not?
          pomManager.homePage.searchAndSelectBook(data.book2);
          
          pomManager.homePage.bookname().should('have.text',data.book2);
          pomManager.homePage.wishlistCount().should('have.text','0');
          pomManager.homePage.addToWishlist();
          pomManager.homePage.wishlistCount().should('have.text','1');
          pomManager.homePage.clickOnWishlistIcon();

          pomManager.wishlistItemPage.wishlistHeader().should('have.text','My wishlist');
          pomManager.wishlistItemPage.titleOfBookInWishlist().should('have.text',data.book2);
          pomManager.wishlistItemPage.removeFromWishlist();

          pomManager.homePage.wishlistCount().should('have.text','0');
          pomManager.wishlistItemPage.cardTitle().should('have.text',data.emptyWishlist);
          pomManager.wishlistItemPage.clickOnContinueShopping();

          pomManager.homePage.clickOnLogout();
          pomManager.loginPage.verifyLogin().should('have.text','Login');
        })
      })
});
