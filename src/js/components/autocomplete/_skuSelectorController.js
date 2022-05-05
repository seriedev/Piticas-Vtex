import Swal from 'sweetalert2';

import SkuSelectorController from '../SkuSelector/SkuSelectorController';
import PlaceHolderLoading from '../Placeholder/index';

class SkuSelectorControllerModal {
  skuSelectorOnShelf() {
    const products = document.querySelectorAll('.list-group-item');

    products.forEach(product => {
      const productId = product.dataset.productId;
      const buttonElement = product.querySelector('.comprar');
      const loading = new PlaceHolderLoading();

      if (!buttonElement.dataset.unavailable) {
        buttonElement.addEventListener('click', async () => {
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

          if (skuModel.response.skus.length == 1) {
            console.warn('Produto tem apenas uma variação de SKU');
            Swal.close();
          } else {
            this.renderProductInfo(response);

            skuSelector.init();

            loading.loaderController(
              false,
              document.querySelector('.comprarapida'),
              'shelf__sku-selector'
            );
            this.handleCloseBtn();
          }
        });
      }
    });
  }

  renderProductInfo(response) {
    const productName = document.querySelector('.shelf__name');

    productName.textContent = response.name;
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
  }
}

export default SkuSelectorControllerModal;
