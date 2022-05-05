import Swal from 'sweetalert2';

import getCatalogService from 'Services/catalogService';
import MiniCartComponent from 'Components/miniCart/index';
import PlaceHolderLoading from 'Components/Placeholder';
import ShippingCart from 'Components/ShippingCart';
import SimilarsComponent from '../../components/similars/index';
import SkuSelectorController from 'Components/SkuSelector/SkuSelectorController';
import Zoom from 'Components/zoom/index';
import Helpers from 'Helpers/index';
import Config from './product.config';

class ProductPage {
  constructor() {
    this._vtexjsCatalog = new getCatalogService();
    this.miniCartComponenet_ = new MiniCartComponent();
    this.shippingCart_ = new ShippingCart();
    this.zoom_ = new Zoom();
    this.loading = new PlaceHolderLoading();
    this.helpers = new Helpers();

    this._isProduction =
      process.env.NODE_ENV == 'production' ? 'production' : 'development';

    this.devProductId =
      this._isProduction == 'production'
        ? skuJson.productId
        : Config.developmentProductId();

    this.skuSelectorController_ = new SkuSelectorController({
      id: this.devProductId,
      viewElement: document.querySelector('.skuSelectorView'),
      context: 'productPage',
      buyButton: true,
      addToCartBtn: true,
      quantity: true,
    });

    this.skuSelectorController_.init();

    this.elementWrapper = '';
    this.productInfo = {};

    this.prevArrow = `<button class="slick-arrow-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
          <path d="M20.2 9.804c-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414zM17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm0 28C9.832 30 4 24.168 4 17S9.832 4 17 4s13 5.832 13 13-5.832 13-13 13z"/>
      </svg>
    </button>`;

    this.nextArrow = `<button class="slick-arrow-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
          <path d="M21.7 16.29l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71zM17.072 2.144c-8.244 0-14.928 6.684-14.928 14.928S8.828 32 17.072 32 32 25.316 32 17.072 25.316 2.144 17.072 2.144zm0 27.856C9.944 30 4.144 24.2 4.144 17.072s5.8-12.928 12.928-12.928S30 9.944 30 17.072 24.2 30 17.072 30z"/>
      </svg>
    </button>`;

    this.componentBuilder();
  }

  handleSetProductIdToElement() {
    if (window.skuJson) {
      const productPageMainElement = document.querySelector(
        '.productPage__main'
      );
      productPageMainElement.dataset.productId = window.skuJson.productId;
    }
  }

  getProductDataFromApi() {
    const isProduction =
      process.env.NODE_ENV == 'production' ? 'production' : 'development';

    const id =
      isProduction == 'development'
        ? Config.developmentProductId()
        : skuJson.productId;

    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
      id: id,
    };

    return this._vtexjsCatalog.getCatalog(params);
  }

  setProductImages(response, option) {
    const productPageThumbsElement = document.querySelector('.js-image-thumbs');
    let sizes = {
      widthThumb: 150,
      heightThumb: 150,
      widthZoom: 500,
      heightZoom: 500,
    };

    const thumbs = () => {
      if (response.length > 0) {
        const productImages = response[0].items[0].images;
        const productVideo = response[0]['Vídeo'];

        productImages.forEach((productImage, index) => {
          let currentProductImageZoom = productImage.imageTag
            .replace(/#width#/g, sizes.widthZoom)
            .replace(/#height#/g, sizes.heightZoom)
            .replace('~', '');

          let currentProductImageThumb = productImage.imageTag
            .replace(/#width#/g, sizes.widthThumb)
            .replace(/#height#/g, sizes.heightThumb)
            .replace('~', '');

          productPageThumbsElement.insertAdjacentHTML(
            'beforeEnd',
            `
            <li class="productPage__image-item" data-product-image-zoom='${currentProductImageZoom}' data-product-image-index="${index}">
              ${currentProductImageThumb}
            </li>`
          );
        });

        if (productVideo) {
          productPageThumbsElement.insertAdjacentHTML(
            'beforeEnd',
            `
            <li class="productPage__image-item--video" >
                <i class="far fa-play-circle"></i>
            </li>`
          );

          this.handleProductVideo(productVideo);
        }
      }

      this.handleDuplicateCustomThumbZoom();

      Config.thumbsSlider();
    };

    const options = {
      thumbs,
    };

    options[option]();
  }

  handleProductVideo(productVideo) {
    const videoElements = document.querySelectorAll(
      '.productPage__image-item--video'
    );

    let url = productVideo[0].split(`https://www.youtube.com/watch?v=`);
    url = `https://www.youtube.com/embed/${url[1]}`;

    videoElements.forEach(video => {
      video.addEventListener('click', () => {
        Swal.fire({
          html: `<div class="productPage__video"><iframe class="productPage__video-thumb"src="${url}"></iframe></div>`,
          showConfirmButton: false,
          customClass: {
            container: 'productPage__video-modal',
          },
        });

        const videoEl = document.querySelector('.productPage__video');
        const videoIframe = videoEl.querySelector('iframe');
        this.loading.loaderController(true, videoEl, 'video');
        videoIframe.setAttribute('style', 'width: 0!important');

        videoIframe.addEventListener('load', () => {
          this.loading.loaderController(false, videoEl, 'video');
          videoIframe.setAttribute('style', 'width: 100%');
        });
      });
    });
  }

  renderProductInfoOnScreen(response) {
    const product = response['0'];
    const nameElement = document.querySelector('.productPage__name');
    const isProduction =
      process.env.NODE_ENV == 'production' ? 'production' : 'development';

    if (product) {
      //Description
      const productDescription = document.querySelector(
        '.productPage__description'
      );
      productDescription.innerHTML += product.description;

      if (nameElement)
        nameElement.innerHTML =
          isProduction == 'production' ? skuJson.name : product.productName;
    }
  }

  handleBackToCategoryLink() {
    const backToCategory = document.querySelector(
      '.productPage__back-to-category'
    );

    let Uglifiedcategory;
    let category;

    this.productInfo[0].categories.forEach((cat, index) => {
      if (index == 0) {
        category = cat.split('/');

        category = category[category.length - 2];

        Uglifiedcategory = Helpers.removeDiacritics(cat).toLowerCase();
      }
    });

    backToCategory.innerHTML = `<i class="fa fa-chevron-left"></i> voltar para <a href="${Uglifiedcategory}" id="category-to-return">${category}</a>`;
  }

  handleSkuModal() {
    const products = document.querySelectorAll('.productCard');

    products.forEach(product => {
      this.skuSelectorOnShelf.skuSelectorOnShelf(product);
    });
  }

  sendProductIndoToSkuSelectorModel(response) {
    this.skuSelectorController_.skuSelectorModel_.productInfo = response;
  }

  async buildProductPage() {
    const response = await this.getProductDataFromApi();

    this.productInfo = response;

    /* Desktop */
    const productBrand = document.querySelector('.productPage__brand');
    productBrand.innerHTML = this.productInfo[0].brand;

    const productBrandId = document.querySelector('.productPage__id-product');
    productBrandId.innerHTML = this.productInfo[0].brandId;

    const productDescription = document.querySelector('.productPage__description--bottom-content');
    productDescription.innerHTML = this.productInfo[0].description;

    /* Tabela de Medidas */
    const productUrlTableLink = this.productInfo[0]['Tabela de Medidas'];
    const productInfo2 = this.productInfo[0];
    const measurementTableLink = document.querySelector('.productPage__size--measures a');

    if (productUrlTableLink == undefined) {
      measurementTableLink.classList.add("hide");
    } else {
      measurementTableLink.addEventListener('click', () => {
        Swal.fire({
          imageUrl: productUrlTableLink,
          imageHeight: 'auto',
          imageAlt: 'Tabela de Medidas',
          showConfirmButton: false,
          showCloseButton: true,
          customClass: {
            container: 'size--measures',
          },
        })
      });
    }


    /* Leia mais */
    const seeMore = document.querySelector('#seeMoreBtn' || '#seeMoreBtnBottom');
    const seeMoreContent = document.querySelector('.productPage__description' || '.productPage__description--bottom-content');

    seeMore.addEventListener("click", () => {
      seeMoreContent.classList.toggle("expanded");

      const expanded = seeMoreContent.classList.contains("expanded");
      if (expanded) {
        seeMore.innerHTML = "Leia -";
      } else {
        seeMore.innerHTML = "Leia +";
      }
    });

    /* Leia mais Botton */
    const seeMoreBotton = document.querySelector('#seeMoreBtnBottom');
    const seeMoreContentBotton = document.querySelector('.productPage__description--bottom-content');

    seeMoreBotton.addEventListener("click", () => {
      seeMoreContentBotton.classList.toggle("expanded");

      const expanded = seeMoreContentBotton.classList.contains("expanded");
      if (expanded) {
        seeMoreBotton.innerHTML = "Leia -";
      } else {
        seeMoreBotton.innerHTML = "Leia +";
      }
    });

    // Ajuste Compre junto Vtex
    let itemsbuyTogether = $(".buyTogether .prateleira fieldset").detach();
    $(".buyTogether .prateleira ul li").append(itemsbuyTogether);

    this.sendProductIndoToSkuSelectorModel(response);
    this.renderProductInfoOnScreen(response);

    this._similars();
    this.handleBackToCategoryLink();

    Config.handleShelfSlide(this.prevArrow, this.nextArrow);
    Config.handleShareLinks();

    this.loading.loaderController(false, this.elementWrapper, 'productPage');
  }

  _similars() {
    new SimilarsComponent(skuJson.productId)._init_();
  }

  componentBuilder() {
    const container = document.querySelector('.productPage');
    this.elementWrapper = container;

    this.loading.loaderController(true, this.elementWrapper, 'productPage');

    document.addEventListener('DOMContentLoaded', () => {
      this.buildProductPage();
      this.zoom_.load(1000, 1000);
      this.shippingCart_.load();

    });
  }
}

new ProductPage();
