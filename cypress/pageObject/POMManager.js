import CartItemPage from "./CartItemPage";
import HomePage from "./HomePage";
import Login from "./LoginPage";
import Registration from "./UserRegistrationPage";
import Wishlist from "./WishlistItemPage";

class POMManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new Login(this.page);
    this.homePage = new HomePage(this.page);
    this.cartItemPage = new CartItemPage(this.page);
    this.userRegistrationPage = new Registration(this.page);
    this.wishlistItemPage = new Wishlist(this.page);
  }

  writeJsonFile(newUsername) {
    cy.writeFile('cypress/fixtures/newlyRegisteredUser.json', { User: newUsername });        //Store the credentials to a json file
  }

  writeTxtFile(newUsername){
    cy.writeFile('cypress/fixtures/newUser.txt', 'Username: ' + newUsername + '\n', { flag: 'a+' }) //Store the credentials to a txt file
  }
}

export default POMManager;