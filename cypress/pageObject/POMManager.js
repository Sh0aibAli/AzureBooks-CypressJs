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
}

export default POMManager;