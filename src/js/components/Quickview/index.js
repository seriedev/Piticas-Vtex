/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';

import getCatalogService from 'Services/catalogService';
import PlaceHolderLoading from '../../components/Placeholder/index';
import SkuSelectorComponent from '../../components/skuSelector/index';
import Helpers from 'Helpers//index';

class Quickview {
  constructor() {
    this._vtexjsCatalog = new getCatalogService();
    this.skuSelector = new SkuSelectorComponent();

    this._helpers = new Helpers();
    this.loading = new PlaceHolderLoading();
    this.elementWrapper = '';
    this.variationsLoad = true;
    this.quickViewId = '';
    this.productInfo = {};
  }

  render() {
    const products = document.querySelectorAll('.productCard');
    const skuSelectorHTMLStructure =
      '<div class="quickview__wrapper"><div class="quickview__main"><div class="quickview__image"><ul class="quickview__thumbs js-image-thumbs"></ul><div class="quickview__image-zoom js-image-zoom"><img class="quickview__image-zoom--image" src="" width="1000" height="1500" alt="" /></div></div><div class="quickview__content"><h1 class="quickview__name"></h1><h1 class="quickview__variation-name"></h1><div class="quickview__info"><div class="quickview__description"></div></div><div class="quickview__price"></div><div class="quickview__info"></div><div class="quickview__variations sku-selector"></div><div class="quickview__action"><div class="quickview__avise-me"></div></div><button class="quickview__buy-button">Comprar</button></div></div></div>';
    products.forEach(product => {
      const productId = product.dataset.productId;

      const openModalBtn = Array.from(product.childNodes).filter(node => {
        return node.classList.value == 'productCard__quickview';
      });

      openModalBtn[0].addEventListener('click', () => {
        this.quickViewId = productId;
        Swal.fire({
          html: `${skuSelectorHTMLStructure}`,
          customClass: {
            container: 'quickview-container',
          },
          showCancelButton: false,
          showConfirmButton: false,
        });

        this.handleSetProductIdToElement();
        this.handleGetAndSetCustomThumbs();
        this.handleGetVariations();
      });
    });
  }

  handleSetProductIdToElement() {
    if (window.skuJson) {
      const quickviewMainElement = document.querySelector('.quickview__main');
      quickviewMainElement.dataset.productId = window.skuJson.productId;
    }
  }

  handleReturnProductInfo(response) {
    this.skuSelector.handleProductInfo(response);
  }

  async handleGetAndSetCustomThumbs() {
    const inputIdElement = document.getElementById('___rc-p-id');
    const quickviewThumbsElement = document.querySelector('.js-image-thumbs');

    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
      id: this.quickViewId,
    };

    let sizes = {
      widthThumb: 100,
      heightThumb: 150,
      widthZoom: 1000,
      heightZoom: 1000,
    };

    try {
      const parentElement = document.querySelector('.quickview__wrapper');
      this.elementWrapper = parentElement;
      this.loading.loaderController(true, parentElement, 'quickview');
      const response = await this._vtexjsCatalog.getCatalog(params);

      this.productInfo = response;
      this.handleReturnProductInfo(response);
      this.handleSkuVariationChanges();

      if (response.length > 0) {
        const productImages = response[0].items[0].images;
        console.log(productImages);
        productImages.forEach((productImage, index) => {
          let currentProductImageZoom = productImage.imageTag
            .replace(/#width#/g, sizes.widthZoom)
            .replace(/#height#/g, sizes.heightZoom)
            .replace('~', '');

          let currentProductImageThumb = productImage.imageTag
            .replace(/#width#/g, sizes.widthThumb)
            .replace(/#height#/g, sizes.heightThumb)
            .replace('~', '');

          quickviewThumbsElement.insertAdjacentHTML(
            'beforeEnd',
            `
            <li class="quickview__image-item" data-product-image-zoom='${currentProductImageZoom}' data-product-image-index="${index}">
              ${currentProductImageThumb}
            </li>`
          );
        });
      }
    } catch {
      console.log('We have an error. Try Again!!');
    } finally {
      this.skuSelector.load('quickview', this.quickViewId);
      this.handleDuplicateCustomThumbZoom();
      const parentElement = document.querySelector('.quickview__wrapper');
    }
  }

  handleDuplicateCustomThumbZoom() {
    const productIamgeItemElements = document.querySelectorAll(
      '.quickview__image-item'
    );

    const productImageZoomElement = document.querySelector(
      '.quickview__image-zoom'
    );

    console.log(productIamgeItemElements);

    if (productIamgeItemElements.length > 0) {
      // Set First Image Zoom
      let srcFirstImageValue =
        productIamgeItemElements[0].dataset.productImageZoom;
      productImageZoomElement.innerHTML = srcFirstImageValue;

      // Set Image Zoom by Click
      productIamgeItemElements.forEach(productIamgeItemElement => {
        productIamgeItemElement.addEventListener('click', e => {
          let srcValue = e.target.parentNode.dataset.productImageZoom;
          productImageZoomElement.innerHTML = srcValue;
        });
      });
      //fix that later
      this.loading.loaderController(false, this.elementWrapper, 'quickview');
    } else {
      setTimeout(() => {
        this.handleDuplicateCustomThumbZoom();
      }, 500);
    }
  }

  async handleGetVariations() {
    const quickviewMainElement = document.querySelector('.quickview__main');
    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
      id: this.quickViewId,
    };

    const response = await this._vtexjsCatalog.getCatalog(params);
  }

  handleSkuVariationChanges(skuSelected) {
    const product = this.productInfo['0'];
    console.log(product);
    const productName = document.querySelector('.quickview__name');
    const productDescription = document.querySelector(
      '.quickview__description'
    );

    productName.textContent = product.productName;
    productDescription.textContent = product.description;
  }

  buildComponent() {
    this.render();
  }
}

export default Quickview;
