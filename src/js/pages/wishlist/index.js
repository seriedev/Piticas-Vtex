/**Import your components here**/
import WishListComponent from 'Components/wishlist/index';

class Wishlist {
  constructor() {
    this.componentBuilder();

    this.wishList_ = new WishListComponent();
  }

  removeCards() {}

  componentBuilder() {
    document.addEventListener('DOMContentLoaded', async event => {});
  }
}
new Wishlist();
