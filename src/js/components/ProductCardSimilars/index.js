import getCatalogService from 'Services/catalogService';
import PlaceholderLoading from '../../components/Placeholder/index';
import FrnComponent from '../frn.component';

class ProductCardSimilarsComponent extends FrnComponent {
  constructor() {
    super();

    this._getCatalag = new getCatalogService();
    this.collectionItemHelper = '.';

    this.isProductPageSimilars = document.querySelector('.similars');

    this.loading = new PlaceholderLoading();
    this.productCardClass = 'productCard';
    this.productCardImageClass = '.js-shelf-product-image';
    this.productCardImageHasHoverClass = `${this.productCardClass}__image--hasHover`;
    this.productCardImageLoadingClass = `${this.productCardClass}__image--loading`;
  }

  general() {
    $('.helperComplement').remove();
  }

  renderAttributes() {
    const productCards = document.querySelectorAll(`.${this.productCardClass}`);

    [...productCards].forEach(async productCard => {
      const productCardId = productCard.dataset.productId;
      let params = {
        type: this._getCatalag.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
        id: productCardId,
      };

      const res = await this._getCatalag.getCatalog(params);

      this.renderSecondaryImage(productCard, res);
    });
  }

  renderSecondaryImage(element, data) {
    const productCardImageElement = element.querySelector(
      this.productCardImageClass
    );

    const { images } = data[0].items[0];

    if (images.length > 1 && productCardImageElement) {
      const image = this.formatterImageTag(images[1], true);

      productCardImageElement.insertAdjacentHTML('beforeend', image);

      productCardImageElement.classList.add(this.productCardImageHasHoverClass);
    }
  }

  formatterImageTag(imageProp = {}, secundary = false, sizes) {
    const { imageId, imageText, imageUrl } = imageProp;
    const imageFormat = imageUrl.split('.')[4].split('?')[0];
    const urlFormatted = `/arquivos/ids/${imageId}-${sizes.width}-${sizes.height}/${imageText}.${imageFormat}`;
    const secundaryClass = `${this.productCardClass}__img--secundary`;

    return `<img data-src="https://www.kindpng.com/picc/m/392-3926418_loading-spinner-loading-icon-png-transparent-png-download.png" src="${urlFormatted}" class="${
      secundary ? secundaryClass : 'lazy'
    }" />`;
  }

  renderCard(product, secundary = false, sizes, index) {
    const { items } = product;

    let newFilterItem = items.filter(quantity => {
      const available = quantity.sellers[0].commertialOffer.AvailableQuantity;
      if (available >= 1) {
        return available;
      }
    });

    const filteredByItemWithStoke = () => {
      if (!newFilterItem.length == 0) {
        newFilterItem.filter(item => {
          if (item.sellers[0].commertialOffer.AvailableQuantity == 0) {
            return items;
          }
        });
        return newFilterItem;
      }
      return items;
    };

    const {
      commertialOffer: { Price, Installments, ListPrice, DiscountHighLight },
    } = filteredByItemWithStoke()[0].sellers[0];

    const commertialCondition = className => {
      return Price > 0
        ? `productCard__${className}--visible`
        : `productCard__${className}--hidden`;
    };

    const stockCondition = className => {
      return Price > 0
        ? `productCard__${className}--hidden`
        : `productCard__${className}--visible`;
    };

    const tagCondition = className => {
      return Price !== ListPrice
        ? `productCard__${className}--visible`
        : `productCard__${className}--hidden`;
    };

    return `
      <article class="productCard" data-product-id="${
        product.productId
      }" data-index=${index}>
        <div class="render-checkbox"></div>
        <div class="productCard__top">
          <div class="productCard__link">
            <a class="productCard__link" href="${product.link}">
              <div class="productCard__image js-product-image">
                ${this.formatterImageTag(
                  filteredByItemWithStoke()[0].images[0],
                  secundary,
                  sizes
                )}
              </div>
            </a>
            <a data-product-id='${
              product.productId
            }' class="productCard__wishList" tabindex="0"></a>
          </div>
          
          <div class="productCard__top-right">
            <span class="productCard__brand">
              ${product.brand}
            </span>
            <a class="productCard__link" href="${product.link}">
              <h3 class="productCard__name">
                ${product.productName}
              </h3>
            </a>

            <div class="productCard__price ${tagCondition('price')}">
              <span class="productCard__price--best" data-price=${Price.toFixed(2)}>
                R$ ${Price.toFixed(2).replace('.', ',')}
              </span>
              <span class="productCard__price--old">
                R$ ${ListPrice.toFixed(2).replace('.', ',')}
              </span>
              ${
                Installments.length > 0
                  ? `
                <span class="productCard__installments">
                  (ou ${this.renderInstallments(Installments)})
                </span>
              `
                  : ''
              }
            </div>
          
            <span class="productCard__unavailable ${stockCondition('unavailable')}">
              Indisponível
            </span>
          </div>
        </div>       

        <div class="productCard__skuSelector-wrapper productCard__variations">
        </div>
        <div class="productCard__variations-bottom">
        ${
          this.isProductPageSimilars
            ? `<div class="productCard__skuSelector-actions">
          
                <div class="productCard__skuSelector__quantity">
                  <div class="skuSelector__quantityController">
                  <button class="quantityController-skuSelector__btn" data-product-qty-action-factor="-1">-</button>
                  <input type="text" class="quantityController-skuSelector__counter js-product-qty" value="0" data-product-qty="0">
                  <button class="quantityController-skuSelector__btn" data-product-qty-action-factor="+1">+</button></div>
                </div>
                <div class="productCard__skuSelector__buy">
                  <button>Adicionar</button>
                  <div class="control-group">
                    <label class="control control-checkbox">
                            <input type="checkbox" class="js-checkbox-similar" />
                        <div class="control_indicator"></div>
                    </label>
                  </div>
                  
                </div>
          </div>`
              : ''
          }
        </div>
        
      </article>
    `;
  }

  renderInstallments(installs) {
    const { Value, NumberOfInstallments } = installs.reduce(
      (prev, current) =>
        prev.NumberOfInstallments > current.NumberOfInstallments
          ? prev
          : current,
      0
    );

    return `<span class="productCard__installments--strong productCard__installments--installments">${NumberOfInstallments}x</span> de <span class="productCard__installments--strong productCard__installments--value">R$ ${Value.toFixed(
      2
    ).replace('.', ',')}</span>`;
  }

  load() {
    this.general();
  }
}

export default ProductCardSimilarsComponent;
