import Swal from 'sweetalert2';

import Helpers from 'Helpers//index';
import Minicart from '../miniCart/index';
import PlaceHolderLoading from '../Placeholder/index';
import SkuSelectorController from '../SkuSelector/SkuSelectorController';

class quickBuy {
  constructor() {
    this.helpers_ = new Helpers();
    this.miniCart = new Minicart();
  }
  _htmlStructure() {
    return `
      <div class="sku-selector">
        <img class="shelf__product-image dfs" />
        <div class="shelf__variations">
          <div class="shelf__action">
            <div class="shelf__quantityController"></div>
            <button class="shelf__add-to-cart">Comprar</button>
          </div>
        </div>
      </div>
    `;
  }

  skuSelectorOnShelf(product) {
    if (product) {
      const productId = product.dataset.productId;

      const openModalBtn = product.querySelector('.productCard__sku-selector');
      const loading = new PlaceHolderLoading();

      openModalBtn &&
        openModalBtn.addEventListener('click', async () => {
          this._modalConfiguration();
          loading.loaderController(
            true,
            document.querySelector('.comprarapida'),
            'shelf__sku-selector'
          );

          const skuSelector = new SkuSelectorController({
            id: productId,
            viewElement: document.querySelector('.shelf__variations'),
            context: 'shelf',
            buyButton: true,
            addToCartBtn: true,
            quantity: true,
          });

          const skuModel = skuSelector.skuSelectorModel_;
          const response = await skuModel.response;

          this.renderProductInfo(response);

          skuSelector.init();

          loading.loaderController(
            false,
            document.querySelector('.comprarapida'),
            'shelf__sku-selector'
          );
          this.handleCloseBtn();
        });
    }
  }

  renderProductInfo(response) {
    const productName = document.querySelector('.shelf__name');

    productName.textContent = response.name;
  }

  _categoryQuickBuy() {
    const shelfContainer = document.querySelector('.vitrine__group');
    if (shelfContainer) {
      shelfContainer.addEventListener('click', async e => {
        if (e.target.matches('.productCard__sku-selector')) {
          const articleElement_ = this.helpers_.getParents(
            e.target,
            '.productCard'
          )[0];

          if (articleElement_) {
            const productId = articleElement_.dataset.productId;
            const response = await SkuSelectorController.returnProductInfo(
              productId
            );
                const loading = new PlaceHolderLoading();

                loading.loaderController(
                  true,
                  document.querySelector('.comprarapida'),
                  'shelf__sku-selector'
                );
  
                const skuSelector = new SkuSelectorController({
                  id: productId,
                  viewElement: document.querySelector('.shelf__variations'),
                  context: 'shelf',
                  buyButton: true,
                  addToCartBtn: true,
                  quantity: true,
                });
  
                this.renderProductInfo(response);
                this.handleCloseBtn();
                skuSelector.init();
  
                loading.loaderController(
                  false,
                  document.querySelector('.comprarapida'),
                  'shelf__sku-selector'
                );
          }
        }
      });
    }
  }

  handleCloseBtn() {
    const closeBtn = document.querySelector('.sku-selector__close-btn');

    closeBtn.addEventListener('click', () => {
      Swal.close();
    });
  }

  _modalConfiguration() {
    Swal.fire({
      html: `<div class="sku-selector comprarapida">
      <span class="sku-selector__close-btn"><i class="fas fa-times"></i></span>
      <img class="shelf__product-image" >
      <div class="shelf__name-container">
        <h1 class="shelf__variation-name"></h1>
        <h1 class="shelf__name"></h1>
      </div>
      <div class="shelf__price">
        <div class="shelf__best-price"></div>
        <div  class="shelf__list-price"></div>
      </div>
      <div class="shelf__installments"></div>
      <div class="shelf__variations"></div>
        <div class="shelf__action">
          <div class="shelf__quantityController"></div>
          <button class="shelf__add-to-cart js-add-to-cart" style="display:block!important">Comprar</button>
    </div>
    <span class="shelf__avise-me" ></span></div>
    `,
      showConfirmButton: false,
      customClass: {
        container: 'shelf-container',
      },
    });

    document
      .querySelector('.sku-selector__close-btn')
      .addEventListener('click', () => Swal.close());
  }
}

export default quickBuy;
