import Login from "../pageObject/LoginPage"
import HomePage from "../pageObject/HomePage"
import CartItemPage from "../pageObject/CartItemPage"
import Wishlist from "../pageObject/WishlistItemPage";

describe('Azure Book Cart movements', () => {
    it('Add and Delete books to cart', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const login = new Login();                                  //create object for login
          const homepage = new HomePage();                            //create object for homepage
          const cartItemPage = new CartItemPage();
          homepage.clickLoginButton();                                // Click on Login Link
          
          login.setUserName(data.username);                                  //Enter incorrect Credentials
          login.setPassword(data.password);
          login.clickSubmit();                                        //Click on Submit Button
    
          let accountCircleText = data.accCircle + data.username + data.arrowDd;    //Getting the account circle text
          homepage.accountCircle().should('have.text',accountCircleText);  //Assertion, if it contains this text or not?
          homepage.searchAndSelectBook(data.book1);
          
          homepage.bookname().should('have.text',data.book1);
          homepage.cartCount().should('have.text','0');
          homepage.addToCart();
          homepage.cartCount().should('have.text','1');
          homepage.clickOnCartIcon();

          cartItemPage.cartItemsHeader().should('have.text','Cart Items');
          cartItemPage.titleOfBookInCart().should('have.text',data.book1);
          cartItemPage.deleteItem();

          cartItemPage.cartCount().should('have.text','0');
          cartItemPage.cardTitle().should('have.text',data.emptyCart);
          cartItemPage.clickOnContinueShopping();

          homepage.clickOnLogout();
          login.verifyLogin().should('have.text','Login');
        })
      })

      it('Add and Delete books to wishlist', () => {

        cy.fixture("example").then((data) => {
          cy.visit(data.baseUrl);
          
          const login = new Login();                                  //create object for login
          const homepage = new HomePage();                            //create object for homepage
          const wishlistPage = new Wishlist();
          homepage.clickLoginButton();                                // Click on Login Link
          
          login.setUserName(data.username);                           //Enter correct Credentials
          login.setPassword(data.password);
          login.clickSubmit();                                        //Click on Submit Button
    
          let accountCircleText = data.accCircle + data.username + data.arrowDd;    //Getting the account circle text
          homepage.accountCircle().should('have.text',accountCircleText);  //Assertion, if it contains this text or not?
          homepage.searchAndSelectBook(data.book2);
          
          homepage.bookname().should('have.text',data.book2);
          homepage.wishlistCount().should('have.text','0');
          homepage.addToWishlist();
          homepage.wishlistCount().should('have.text','1');
          homepage.clickOnWishlistIcon();

          wishlistPage.wishlistHeader().should('have.text','My wishlist');
          wishlistPage.titleOfBookInWishlist().should('have.text',data.book2);
          wishlistPage.removeFromWishlist();

          homepage.wishlistCount().should('have.text','0');
          wishlistPage.cardTitle().should('have.text',data.emptyWishlist);
          wishlistPage.clickOnContinueShopping();

          homepage.clickOnLogout();
          login.verifyLogin().should('have.text','Login');
        })
      })
});
