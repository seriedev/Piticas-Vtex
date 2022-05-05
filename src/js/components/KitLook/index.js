import getCatalogService from 'Services/catalogService';
import ProductCardComponent from '../../components/ProductCard/index';
import SkuSelectorController from '../../components/SkuSelector/SkuSelectorController';
import FrnComponent from '../frn.component';
import MiniCartComponent from '../miniCart/index';

class KitLookComponent extends FrnComponent {
  constructor() {
    super();

    this._vtexjsCatalog = new getCatalogService();
    this.productCard_ = new ProductCardComponent();
    this.minicartComponent_ = new MiniCartComponent();

    this._kitItems = 'productPage__kit_item';
    this._kitContainer = '.kitlook__list';

    this._kitIdItemsArray = [];
    this._kitItemsArray = [];

    this._selectedSkus = {};
  }

  async _isKitProduct() {
    const inputProductIDHidden = document.getElementById('___rc-p-id');

    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
      id: 13,
    };

    if (!inputProductIDHidden) {
      const response = await this._vtexjsCatalog.getCatalog(params);
      this._kitIdItemsArray = response[0].items[0].kitItems;
      const isKitProp = response[0].items[0].isKit;

      const itemsId = this._kitIdItemsArray.map(item => {
        return item.itemId;
      });

      this.getAllSkusWithSkuId(itemsId);

      return isKitProp;
    }

    return;
  }

  getAllSkusWithSkuId(skusId) {
    const asyncForEach = async (array, callback) => {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    };

    asyncForEach(skusId, async (skuId, index) => {
      let params = {
        type: this._vtexjsCatalog.VTEX_ENDPOINTS.SEARCH_SKU,
        skuId: skuId,
      };

      const response = Promise.all(
        await this._vtexjsCatalog.getCatalog(params)
      );

      response.then(skuItem => {
        this.renderKitLook((this._kitItemsArray = skuItem[0]), index);
      });
    });
  }

  renderKitLook(index) {
    const itemResponse = this._kitItemsArray;
    const kitLookContainer = document.querySelector('.kitlook__list');

    let sizes = {
      width: 192,
      height: 192,
    };

    if (kitLookContainer) {
      kitLookContainer.insertAdjacentHTML(
        'beforeend',
        `${this.productCard_.renderCard(itemResponse, false, sizes, index)} `
      );
      this.getAllSuggestionsIds(index, kitLookContainer);
    }
  }

  setEventBuy() {
    const kitLookContainerElement_ = document.querySelector('.kitlook');

    const kitLookBuyButtonElement_ = document.querySelector(
      '.kitlook__buy-button > button'
    );

    let idItemsToBuy = new Set();

    if (kitLookContainerElement_) {
      kitLookContainerElement_.addEventListener('click', e => {
        if (e.target.matches('.js-buy-kit')) {
          if (e.target.checked) {
            let idDataSet =
              e.target.parentElement.offsetParent.lastElementChild.dataset
                .skuId;
            idItemsToBuy.add(+idDataSet);
          } else {
            let idDataSet =
              e.target.parentElement.offsetParent.lastElementChild.dataset
                .skuId;
            idItemsToBuy.delete(+idDataSet);
          }
        }
      });
    }

    kitLookBuyButtonElement_ &&
      kitLookBuyButtonElement_.addEventListener('click', async () => {
        const skus = [...idItemsToBuy].map(id => ({
          id,
          quantity: 1,
        }));

        this.minicartComponent_._addMultipleProducts(skus);
      });
  }

  getAllSuggestionsIds(index, kitLookContainer) {
    const productCard = kitLookContainer.querySelectorAll('.productCard');

    productCard.forEach(card => {
      const checkbox = card.querySelector('.render-checkbox');

      checkbox.innerHTML = `<div class="productCard__checkbox pretty p-icon">
          <input type="checkbox" class="js-buy-kit">
          <div class="state">
            <i class="icon fas fa-check"></i>
            <label></label>
          </div>
        </div>`;

      const skuSelectorView = card.querySelector(
        '.productCard__skuSelector-wrapper'
      );

      const skuSelector = new SkuSelectorController({
        id: card.dataset.productId,
        viewElement: skuSelectorView,
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

  load() {
    const validateKitProduct = this._isKitProduct();

    if (validateKitProduct) {
      this.setEventBuy();
    }
  }
}

export default KitLookComponent;
