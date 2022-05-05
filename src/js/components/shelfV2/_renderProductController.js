import ProductCardComponent from '../ProductCard/index';
import FrnComponent from '../frn.component';
import PlaceholderLoading from '../../components/Placeholder/index';
import Wishlist from '../../components/wishlist/index';

class RenderProductController extends FrnComponent {
  constructor() {
    super();
    this.productCardComponent_ = new ProductCardComponent();
    this.wishlist_ = new Wishlist();

    this.shelfClass = '.vitrine';
    this.shelfEmptyClass = 'category-shelf--empty';
    this.shelfLoadingClass = 'category-shelf--loading';
    this.loading = new PlaceholderLoading();

    this.getShelfElement = () => {
      return this.getElement(this.shelfClass);
    };
  }

  _resolver(products, loadmore = false) {
    if (products.length > 0) {
      if (loadmore) {
        this.render(products, true);
      } else {
        this.render(products);
      }
    } else {
      this.getShelfElement().querySelector('div > div > ul').innerHTML =
        '<h2 class="category__empty">Infelizmente não encontramos resultado pra sua busca =(</h2>';

      this.getShelfElement().classList.add(this.shelfEmptyClass);
      this.getShelfElement().classList.remove(this.shelfLoadingClass);
      this._removeLoading();
    }
  }

  render(data, append = false, container = false) {
    let productList = '';
    let sizes = {
      width: 250,
      height: 270,
    };

    data.forEach(product => {
      productList += `
        <li>
          ${this.productCardComponent_.renderCard(product, false, sizes)}
        </li>
      `;
    });

    if (append) {
      this.getShelfElement()
        .querySelector('div > div > ul')
        .insertAdjacentHTML('beforeend', productList);
    } else if (container) {
      this.getShelfElement()
        .querySelector('.js-seller-products')
        .insertAdjacentHTML('beforeend', productList);
    } else {
      this.getShelfElement().querySelector(
        'div > div > ul'
      ).innerHTML = productList;
    }

    this.productCardComponent_.load();
    this.wishlist_.load();
    this._removeLoading();
  }

  _removeLoading() {
    const vitrineOpacity = document.querySelector('.vitrine__results');

    if (vitrineOpacity.classList.contains('opacity-none')) {
      vitrineOpacity.classList.remove('opacity-none');
    }

    const loaderElement_ = document.querySelector('.loader');
    if (loaderElement_) {
      loaderElement_.remove();
    }
  }
}

export default RenderProductController;
