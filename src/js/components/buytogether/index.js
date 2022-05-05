import getCatalogService from 'Services/catalogService';
import ProductCardComponent from '../../components/ProductCard/index';
import FrnComponent from '../frn.component';
import SkuSelectorController from '../SkuSelector/SkuSelectorController';
import SelectedController from './_selectedController';

class BuyTogetherComponent extends FrnComponent {
  constructor() {
    super();
    this._getCatalag = new getCatalogService();
    this.productCard_ = new ProductCardComponent();
    this.selectedController_ = new SelectedController();

    this.buyTogetherClass = '.buyTogether__container';

    this.buyTogetherContainerElement = () =>
      this.getElement(this.buyTogetherClass);
  }

  async getSuggestions() {
    const isProduction =
      process.env.NODE_ENV == 'production' ? 'production' : 'development';

    let params = {
      type: this._getCatalag.VTEX_ENDPOINTS.SUGGESTIONS,
      id: isProduction == 'development' ? 1 : skuJson.productId,
    };

    const response = await this._getCatalag.getCatalog(params);

    if (response.length == 0) {
      const buyTogether = document.querySelector('.buyTogether');
      buyTogether.remove();
    }



    this._pipeSuggestions(response);
  }

  _pipeSuggestions(response) {
    if (response.length >= 0) {
      response.map(suggestions => {
        this.renderSuggestions(suggestions);
      });

      this.getAllSuggestionsIds();
    }
  }

  renderSuggestions(suggestions) {
    let sizes = {
      width: 192,
      height: 192,
    };

    this.buyTogetherContainerElement().insertAdjacentHTML(
      'beforeend',
      `${this.productCard_.renderCard(suggestions, false, sizes)}`
    );
  }

  getAllSuggestionsIds() {
    const asyncForEach = async (array, callback) => {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    };

    const buyTogether = document.querySelector('.buyTogether__container');

    if (buyTogether) {
      const productCards = buyTogether.querySelectorAll('.productCard');

      productCards.forEach((card, index) => {
        const skuSelectorElement = card.querySelector(
          '.productCard__skuSelector-wrapper'
        );

        this.addBuyTogetherClassToProductCard(card);

        const productId = card.dataset.productId;

        const skuSelector = new SkuSelectorController({
          id: productId,
          viewElement: skuSelectorElement,
          context: 'productCard',
          buyButton: false,
          addToCartBtn: false,
          quantity: false,
          loader: false,
        });

        card.classList.add('productCard--hasSkuSelector');
        card.dataset.dataIndex = index;

        skuSelector.init();
      });
    }

    this.getAllProductCard();
  }

  addBuyTogetherClassToProductCard(card) {
    card && card.classList.add('productCard--buyTogetherItem');
  }

  getAllProductCard() {
    if (this.buyTogetherContainerElement()) {
      const productCardElements = this.buyTogetherContainerElement().querySelectorAll(
        '.productCard'
      );

      this.selectedController_._appendElement(productCardElements);
    }
  }

  load() {
    this.getSuggestions();
  }
}

export default BuyTogetherComponent;
