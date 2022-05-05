import Swal from 'sweetalert2';

import PlaceHolderLoading from '../../components/Placeholder';
import Helpers from 'Helpers//index2';
import ProductPageConfig from '../../pages/product/product.config';
import AvisemeComponent from '../aviseme/index';

export default class SkuSelectorView {
  constructor(element, context) {
    this._element = element;
    this._context = context;

    this.loading = new PlaceHolderLoading();
  }

  _template(model, response) {
    return `<div class="sku-selector">
              <div class="sku-selector__variations">
                  ${this.renderSKUVariations(response)}
              </div>
            </div>`;
  }

  renderSKUVariations(response) {
    const { dimensionsMap, dimensionsInputType, skus } = response;
    const types = Object.keys(dimensionsMap);

    return types
      .map(
        (type) =>
          `${
            dimensionsInputType[type] == 'Radio'
              ? this.renderRadioOptions(
                  dimensionsMap,
                  type,
                  dimensionsInputType, 
                  skus
                )
              : this.renderComboOptions(dimensionsMap, type)
          }`
      )
      .join('');
  }

  renderComboOptions(dimensionsMap, type) {
    const dimensionsModel = ['UNI', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '21 AO 26', '22', '24', '26', '28', '30', '32', '33 AO 38', '34', '36', '38', '38 AO 44', '40', '42', '44', '46', '48', '50', 'BLPP', 'BLP', 'BLG', 'BLGG', 'PP', 'P', 'P/M', 'M', 'G', 'G/GG', 'GG', 'XP', 'XG', 'XGG']

    const availableSizes = [];

    for (let index = 0; index < dimensionsModel.length; index++) {
      if(dimensionsMap[type].includes(dimensionsModel[index])) {

        availableSizes.push(dimensionsModel[index])

      } else {
        null
      }
    }

    return `<div class="variation__combo-wrapper variation__combo-wrapper--${Helpers._slugifyString(
      type
    )}">
          <button class="variation__combo-default">Selecione a ${type}</button>
          <div class="variation__combo-list">
            ${availableSizes
              .map((option, index) => {
                return `<div class='variation__option ${
                  index == 0 ? `option-selected` : null
                } variation__option--${Helpers._slugifyString(
                  option
                )}' data-sku-camp="${type}" data-sku-value="${option}">${option}</div>`;
              })
              .join('')}
          </div>
    </div>`;
  }

  renderRadioOptions(dimensionsMap, type, dimensionsInputType, skus) {
    
    const dimensionsModel = ['UNI', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '21 AO 26', '22', '24', '26', '28', '30', '32', '33 AO 38', '34', '36', '38', '38 AO 44', '40', '42', '44', '46', '48', '50', 'BLPP', 'BLP', 'BLG', 'BLGG', 'PP', 'P', 'P/M', 'M', 'G', 'G/GG', 'GG', 'XP', 'XG', 'XGG']

    const availableSizes = [];
    for (let index = 0; index < dimensionsModel.length; index++) {
      if(dimensionsMap[type].includes(dimensionsModel[index])) {

        availableSizes.push(dimensionsModel[index])

      } else {
        null
      }
    }

    return `<div class='variation__wrapper variation__wrapper--${Helpers._slugifyString(
      type
    )}' data-input-type='${dimensionsInputType[type]}'>
                <div class='variation__wrapper--title-${Helpers._slugifyString(
                  type
                )}'>${Helpers._slugifyString(type)}</div>
                <div class='variation__wrapper--body-${Helpers._slugifyString(
                  type
                )}'>       
                ${availableSizes
                  .map((option, index) => {
                    return `<label class='variation__option ${
                      index == 0 ? `option-selected` : null
                    } ${!skus[index].available && 'unavailable'} variation__option--${Helpers._slugifyString(
                      option
                    )} ' data-sku-camp="${type}" data-sku-value="${option}">${option}</label>
                    `;
                  })
                  .join('')}
                </div>                
        </div>`; 
  }

  updateDataView(model, sku) {
    const context = this._context;
    const objectContext = this;

    const template = {
      productCard: this.updateProductCard,
      productPage: this.updateProductPageData,
      shelf: this.updateBuyFromShelfData,
    };

    return template[context](model, objectContext, sku);
  }

  updateProductCard(model, _objectContext) {
    const productCard = model.element.parentElement;
    const sku = model.skuFinal[0];

    const bestPrice = productCard.querySelector('.productCard__price--best');
    const installments = productCard.querySelector(
      '.productCard__installments'
    );

    if (bestPrice) {
      bestPrice.dataset.price = `${sku.bestPrice}`;
      bestPrice.textContent = sku.bestPriceFormated;
    }

    if (installments) {
      const installmentsNumber = installments.querySelector(
        `.productCard__installments--installments`
      );
      const installmentsValue = installments.querySelector(
        '.productCard__installments--value'
      );

      if (sku.installments > 1) {
        installmentsNumber.textContent = `${sku.installments}x`;
        installmentsValue.textContent = `R$ ${Helpers._formatPrice(
          sku.installmentsValue
        )}`;
        installments.classList.add('ativo');
      } else {
        installmentsNumber.textContent = '';
        installmentsValue.textContent = '';
        installments.classList.remove('ativo');
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  updateBuyFromShelfData(model, _objectContext) {
    const [sku] = model.skuFinal;
    console.log('sku', sku)

    const aviseMeComponent = new AvisemeComponent();
    const aviseMeElement = document.querySelector('.shelf__avise-me');

    const productVariationName = document.querySelector(
      '.shelf__variation-name'
    );
          
    const productPrice = document.querySelectorAll('.shelf__price');
    const productImage = document.querySelector('.shelf__product-image');
    const productActionSection = document.querySelectorAll('.shelf__action');

    if (productVariationName && productImage) {
      productVariationName.textContent = sku.skuname;
      productImage.src = sku.image;      
    }

    for (let i = 0; i < productPrice.length; i++) {
      const price$ = productPrice[i];
      const productBestPrice = price$.querySelector('.shelf__best-price');
      const productListPrice = price$.querySelector('.shelf__list-price');

      if (productBestPrice && productListPrice) {
        productBestPrice.textContent = sku.bestPriceFormated;
        productListPrice.textContent = sku.listPriceFormated;
        if (sku.bestPrice > sku.listPrice) {
          productListPrice.style.display = 'none';
        } else {
          productListPrice.style.display = 'block';
        }
      }
    }
    //avise-me
    if (!sku.available) {
      productPrice.forEach((priceContainer$) => {
        priceContainer$.setAttribute('style', 'display:none');
      });
      aviseMeComponent.renderAviseme(aviseMeElement, sku.sku);
      productActionSection.forEach((actionContainer$) => {
        actionContainer$.setAttribute('style', 'display:none');
      });
    } else {
      if (aviseMeElement) aviseMeElement.innerHTML = '';
      productActionSection.forEach((actionContainer$) => {
        actionContainer$.setAttribute('style', 'display:flex');
      });
      productPrice.forEach((priceContainer$) => {
        priceContainer$.setAttribute('style', 'display:flex');
      });
    }
    console.log(`installments`, sku.installments)
    console.log(`installmentsValue`, sku.installmentsValue)

    if(sku.installments && sku.installmentsValue) {

      const quickViewInstallments = document.querySelector('.shelf__installments');

        if (sku.installments > 1) {
          quickViewInstallments.textContent = `(ou ${sku.installments}X de R$ ${Helpers._formatPrice(
            sku.installmentsValue
          )} sem juros)`;
          quickViewInstallments.classList.add('ativo');
        } else {
          quickViewInstallments.textContent = '';
          quickViewInstallments.classList.remove('ativo');
        }

        installments.textContent = `${sku.installments}X`;
        installmentsValue.textContent = `R$ ${Helpers._formatPrice(
          sku.installmentsValue
        )}`;
    }
  }

  updateProductPageData(model, objectContext) {
    const minimumDiscont = 5;
    const [sku] = model.skuFinal;

    const aviseMeComponent = new AvisemeComponent();
    const aviseMeElement = document.querySelector('.productPage__avise-me');

    const productVariationName = document.querySelector(
      '.productPage__variation-name'
    );
    const productDiscont = document.querySelector('.productPage__discont');
    const productPrice = document.querySelectorAll('.productPage__price');
    const productActionSection = document.querySelectorAll(
      '.productPage__action'
    );

    for (let i = 0; i < productPrice.length; i++) {
      const price$ = productPrice[i];

      const productListPrice = price$.querySelector('.productPage__list-price');
      const productBestPrice = price$.querySelector('.productPage__best-price');
      const productInstallments = price$.querySelector(
        '.productPage__installments'
      );

      const installmentValueFormated = Helpers._formatPrice(
        sku.installmentsValue
      );

      if (productBestPrice && productListPrice && productInstallments) {
        productBestPrice.textContent = sku.bestPriceFormated;
        productListPrice.textContent = sku.listPriceFormated;
        if (sku.listPrice <= sku.bestPrice) {
          productListPrice.style.display = 'none';
        } else {
          productListPrice.style.display = 'block';
        }

        if (sku.installments > 1) {
          productInstallments.textContent = `(ou ${sku.installments}x de R$ ${installmentValueFormated} sem juros)`;
          productInstallments.classList.add('ativo');
        } else {
          productInstallments.textContent = '';
          productInstallments.classList.remove('ativo');
        }
      }
    }

    if (productVariationName) productVariationName.textContent = sku.skuname;

    if (productDiscont && sku.bestPrice < sku.listPrice) {
      let discont = Math.round(100 - (sku.bestPrice / sku.listPrice) * 100);
      if (discont > minimumDiscont) {
        productDiscont.textContent = `${discont}% OFF`;
        productDiscont.classList.add('ativo');
      }
    }    

    //avise-me
    if (!sku.available) {
      productPrice.forEach((priceContainer$) => {
        priceContainer$.setAttribute('style', 'display:none');
      });
      aviseMeComponent.renderAviseme(aviseMeElement, sku.sku);

      productActionSection.forEach((actionContainer$) => {
        actionContainer$.setAttribute('style', 'display:none');
      });

    } else {
      if (aviseMeElement) aviseMeElement.innerHTML = '';
      productActionSection.forEach((actionContainer$) => {
        actionContainer$.setAttribute('style', 'display:flex');
      });
      productPrice.forEach((priceContainer$) => {
        priceContainer$.setAttribute('style', 'display:flex');
      });
    }
    objectContext.handleThumbsChange(sku, model);
  }

  handleThumbsChange(sku, model) {
    let productInfo = model._productInfo[0];

    const render = () => {
      console.log(`productInfo`, productInfo);
      const productVideo = productInfo['Vídeo'];

      const getResponseWithAllImages = productInfo.items.filter((item) => {
        return item.name == sku.skuname;
      });

      const productPageThumbsElement = document.querySelector(
        '.productPage__thumbs'
      );

      const productPageImagesElement = document.querySelector(
        '.productPage__image-zoom'
      );

      productPageImagesElement.innerHTML = ' ';

      productPageThumbsElement.innerHTML = ' ';

      let sizes = {
        widthThumb: 150,
        heightThumb: 150,
        widthZoom: 450,
        heightZoom: 450,
      };

      const productImages = getResponseWithAllImages[0].images;

      productImages.forEach((productImage, index) => {
        let currentProductImageZoom = productImage.imageTag
          .replace(/#width#/g, sizes.widthZoom)
          .replace(/#height#/g, sizes.heightZoom)
          .replace('~', '');
        
        productPageImagesElement.insertAdjacentHTML(
          'beforeEnd',
          `
          <li class="productPage__image-item-zoom" data-product-image-zoom='${currentProductImageZoom}' data-product-image-index="${index}">
            ${currentProductImageZoom}
          </li>`
        );

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
      this.initSliders();
    };

    

    const getInfo = () => {
      if (productInfo) {
        render();
      } else {
        setTimeout(() => {
          productInfo = model._productInfo[0];
          getInfo();
        }, 10);
      }
    };

    getInfo();
  }

  initSliders() {
    const zoomList = document.querySelector('.productPage__image-zoom');
    if ([...zoomList.classList].includes('slick-initialized')) {
      zoomList.classList.remove('slick-initialized');
    }
    const thumbsList = document.querySelector('.js-image-thumbs');
    if ([...thumbsList.classList].includes('slick-initialized')) {
      thumbsList.classList.remove('slick-initialized');
    }
    ProductPageConfig.zoomImagesSlider();
    ProductPageConfig.thumbsSlider();
  }

  handleProductVideo(productVideo) {
    const videoElements = document.querySelectorAll(
      '.productPage__image-item--video'
    );

    let url = productVideo[0].split(`https://www.youtube.com/watch?v=`);
    url = `https://www.youtube.com/embed/${url[1]}`;

    videoElements.forEach((video) => {
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

  setAviseMeForUnnavailableProduct(product, model) {
    const context = this._context;
    const aviseMeComponent = new AvisemeComponent();
    const aviseMeElement = document.querySelector(`.${context}__avise-me`);
    const productActionSection = document.querySelector(`.${context}__action`);
    const skuOptions = this._element;

    this.handleThumbsChange(product.skus[0], model);

    skuOptions.remove();

    if (!product.available && productActionSection) {
      aviseMeComponent.renderAviseme(aviseMeElement, product.productId);
      productActionSection.setAttribute('style', 'display:none');
    }
  }

  async _render(model) {
    const response = await model.response;

    this._element.innerHTML = this._template(model, response);

    return response;
  }
}
