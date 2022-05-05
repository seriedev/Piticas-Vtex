import getCatalogService from '../../services/catalogService';
import { REAL } from '../../utils/index';
import currency from 'currency.js';
import ShelfSizes from '../shelfSimilars';
import QuantityControllerSimilar from '../autocomplete/_quantityControllerSimilar';
import MiniCartComponent from '../miniCart';
import ProductCardSimilarsComponent from '../ProductCardSimilars/index';
import SkuSelectorController from '../SkuSelector/SkuSelectorController';

export default class SimilarsComponent {
  constructor(productId) {
    this.productId = productId;

    this._vtexjsCatalog = new getCatalogService();
    this.productCardComponent_ = new ProductCardSimilarsComponent();
    this._quantityController = new QuantityControllerSimilar();
    this._miniCartComponent = new MiniCartComponent();

    this.similarsContainerElement_ = document.querySelector('.similars');
    this.priceElementVTEX_ = '';

    this.summary = REAL('R$ 0,00');

    this.productPrice = document
      .querySelector('.productPage__best-price')
      .textContent.split('R$ ')[1];

    if (this.productPrice) {
      this.productPrice = this.productPrice
        .replace(/[,\s]+|[.\s]+/g, '')
        .trim();
    }

    this.selectedProducts = {};

    window.similars = this.selectedProducts;

    this.prevArrow = `<button class="slick-arrow-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24">
    <path fill-rule="evenodd" d="M13.613 4.178l-9.34 7.588 9.34 7.588c.709.576.952 1.853.543 2.852-.41.999-1.317 1.341-2.027.764L1.334 14.201c-.615-.501-.851-1.52-.643-2.435-.208-.915.028-1.934.643-2.435L12.129.562c.71-.577 1.617-.235 2.027.764.409.999.166 2.276-.543 2.852z" opacity=".502"/>
    </svg>
    </button>`;

    this.nextArrow = `<button class="slick-arrow-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24">
    <path fill-rule="evenodd" d="M13.666 14.669L2.871 23.438c-.71.577-1.617.235-2.027-.764-.409-.999-.167-2.275.543-2.852l9.34-7.588-9.34-7.588C.677 4.07.435 2.793.844 1.794 1.254.796 2.161.453 2.871 1.03l10.795 8.769c.616.5.851 1.52.643 2.435.208.915-.027 1.935-.643 2.435z" opacity=".502"/>
    </svg>
    </button>`;
  }

  formatReal(int) {
    let tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

    return tmp;
  }

  /**
   * Get all the similars
   */
  async _tiggerSimilars_() {
    let similars = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.SIMILARS,
      id: this.productId,
    };

    const similarsResponse_ = this._vtexjsCatalog.getCatalog(similars);

    const t = await similarsResponse_;

    console.log('response', t);

    if (t.length > 1) {
      this._renderSimilars(similarsResponse_);
    } else {
      document.querySelector('.similars').remove();
    }
  }
  /**
   * To create HTML to render all items
   * @param  { JSON } resp
   */

  async _renderSimilars(resp) {  
    const productPriceElement_ = document
      .querySelector('.productPage__best-price')
      .textContent.split('R$ ')[1];

    this.productPrice = productPriceElement_;

    let containerElement_ = `
        <div class="similars__wrapper">
          ${/** Title */ ''}
          <div class="similars__title">
            <h2>Complete seu look</h2>
          </div>

          ${/** Render all the similars products */ ''}
          <ul class= "similars__list">
            ${this.renderItem(await resp)}
          </ul>

          ${/** This is the summary of products */ ''}
          <div class="similars__summary">
            <div class="similars__total">
              <span>Leve os 0 itens por</span>
              <span>R$ 0,00</span>
            </div>
            <div class="similars__buy">
              <div class="similars__actions">
                <button class="similars__buy">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
    `;

    this.similarsContainerElement_.insertAdjacentHTML(
      'afterbegin',
      containerElement_
    );

    this._addSlickConfig();
    this.handleHoverImgChanges();
  }

  renderItem(products) {
    let listItems = '';

    console.log('products', products);
    
    products.forEach((product, index) => {
      
      if (index === (products.length -1)) {
        listItems += `<li class="similars__container">${this._template(product, index)}<div class="similars__plus" style="visibility:hidden">+</div></li>`;
        
      } else {
        listItems += `<li class="similars__container">${this._template(product, index)}<div class="similars__plus">+</div></li>`;

      }
      
    });

    return listItems;
  }

  _template(product, index) {
    let sizes = {
      width: 80,
      height: 80,
    };

    return `${this.productCardComponent_.renderCard(
      product,
      false,
      sizes,
      index
    )}`;
  }

  _addSlickConfig() {
    const removeWithoutStock = document.querySelectorAll(
      '.productCard__withoutstock--visible'
    );
    removeWithoutStock.forEach(element => {
      element.parentElement.remove();
    });

        $('.similars__list').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
          dots: true,
          prevArrow: this.prevArrow,
          nextArrow: this.nextArrow,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                adaptiveHeight: true,
              },
            },
          ],
        });

    this.buyAllElements_();
    this.productCardSkuSelector();
  }

  _addCheckboxEvent(product) {
    product.addEventListener('click', e => {
      if (e.target.matches('.js-checkbox-similar')) {
        if (e.target.checked) {
          let priceElement_ = e.target.closest('.productCard');
          let index = priceElement_.dataset.index;

          let quantityCurrentValue = priceElement_.querySelector(
            '.productCard__skuSelector-actions .skuSelector__quantityController .js-product-qty'
          ).value;

          let price = priceElement_.querySelector('.productCard__price--best')
            .dataset.price;

          let i = {
            index: index,
            price: price,
            quantity: +quantityCurrentValue,
          };

          this.selectedProducts[`product ${index}`] = i;

          this.updatePrice();
          this.updateQuantity();
        } else {
          let priceElement_ = e.target.closest('.productCard');
          let index = priceElement_.dataset.index;

          delete this.selectedProducts[`product ${index}`];
          this.updatePrice();
          this.updateQuantity();
        }
      }
    });
  }

  updatePrice() {
    let price = Object.values(this.selectedProducts).map(item => {
      return +item.price * item.quantity;
    });

    //Converting the array to number
    let numberPrice = price.map(i => Number(i));

    const sum = numberPrice.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);

    this.priceElementVTEX_.innerHTML = `R$ ${
      sum == 0 ? '0,00' : this.formatReal(sum)
    }`;
  }
  

  updateQuantity() {
    let quantity = Object.values(this.selectedProducts).map(item => {
      return item.quantity;
    });

    //Converting the array to number
    let numberQuantity = quantity.map(i => Number(i));
    console.log('numberQuantity :>> ', numberQuantity);
    const sum = numberQuantity.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);

    let contentQuantity = document.querySelector('.similars__total span:first-child');

    contentQuantity.innerHTML = `Leve os ${sum} itens por`;

  }

  buyAllElements_() {
    const buyElement_ = document.querySelector('.similars__buy');

    buyElement_ &&
      buyElement_.addEventListener('click', async e => {
        const checkedElements_ = document.querySelectorAll(
          '.similars input[type=checkbox]:checked'
        );

        let skusSelected = {};

        checkedElements_.forEach((item, index) => {
          const articleELement_ = item.closest('.productCard');

          const idSkuSelected_ = articleELement_.querySelector(
            '.productCard__variations'
          ).dataset.skuId;
          const quntityValue = articleELement_.querySelector('.js-product-qty')
            .value;
              
          let i = {
            id: idSkuSelected_,
            quantity: quntityValue,
          };

          skusSelected[`product ${index} `] = i;
        });

        const skus = Object.values(skusSelected).map(item => {
          return item;
        });

        await this._miniCartComponent._addMultipleProducts(skus);
      });
  }

  productCardSkuSelector() {
    const similarsContainerElement_ = document.querySelector('.similars');
    const products = similarsContainerElement_.querySelectorAll(`.productCard`);

    products.forEach(product => {
      const skuSelectorController = new SkuSelectorController({
        id: product.dataset.productId,
        viewElement: product.querySelector('.productCard__variations'),
        context: 'productCard',
        buyButton: true,
        addToCartBtn: true,
        quantity: true,
      });

      skuSelectorController.init();

      const shelfSizes = new ShelfSizes(product, 'productCard__sizes ul');
      shelfSizes.init();

      this._addQuantity(product);
      this._addBuyButton(product);
      this._addCheckboxEvent(product);
      this.priceElementVTEX_ = document.querySelector(
        '.similars__total span:last-child'
      );

    });

  }
  _addQuantity(product) {
    let btnPlus = product.querySelectorAll(
      '.quantityController-skuSelector__btn'
    );
    let elementCounter = product.querySelector('.js-product-qty');

    btnPlus[1] &&
      btnPlus[1].addEventListener('click', e => {
        let productCardContainerElement_ = e.target.closest('.productCard');
        let checkboxElement_ = productCardContainerElement_.querySelector(
          '.js-checkbox-similar'
        );

        let indexProductElement_ = productCardContainerElement_.dataset.index;

        if (checkboxElement_.checked) {
          let actionFactor = e.target.dataset.productQtyActionFactor;

          this._calculeteQuantityValue(
            actionFactor,
            elementCounter,
            indexProductElement_
          );
        } else {
          checkboxElement_.click();
          let actionFactor = e.target.dataset.productQtyActionFactor;

          this._calculeteQuantityValue(
            actionFactor,
            elementCounter,
            indexProductElement_
          );
        }
      });

    btnPlus[0] &&
      btnPlus[0].addEventListener('click', e => {
        let productCardContainerElement_ = e.target.closest('.productCard');
        let indexProductElement_ = productCardContainerElement_.dataset.index;
        let checkboxElement_ = productCardContainerElement_.querySelector(
          '.js-checkbox-similar'
        );        

        if (checkboxElement_.checked) {
          let actionFactor = e.target.dataset.productQtyActionFactor;
          console.log('actionFactor', actionFactor)
          this._calculeteQuantityValue(
            actionFactor,
            elementCounter,
            indexProductElement_
          );

        }
      });
  }

  _calculeteQuantityValue(actionFactor, elementCounter, indexProductElement_) {
    this.selectedProducts[`product ${indexProductElement_}`].quantity;    

    const currentQuantity = this._quantityController._handleQuantitySimilar(
      actionFactor,
      elementCounter
    );
    console.log('currentQuantity ===>', currentQuantity)

    let currentQuantityValue = +currentQuantity.currentQuantity;

    this.selectedProducts[
      `product ${indexProductElement_}`
    ].quantity = currentQuantityValue;

    this.updatePrice();
    this.updateQuantity();
  }

  _addBuyButton(product) {
    let eventBuy = product.querySelector(
      '.productCard__skuSelector__buy button'
    );

    eventBuy &&
      eventBuy.addEventListener('click', e => {
        let checkboxElement_ = product.querySelector('.js-checkbox-similar');
        checkboxElement_.click();
      });
  }

  handleHoverImgChanges() {
    const imgs = document.querySelectorAll('.productCard__sizes ul li img');

    [...imgs].forEach(img => {
      img.addEventListener('mouseover', e => {
        const productCard = e.target.closest('.productCard');

        const thumb = productCard.querySelector('.productCard__image img');

        const hoveredSizeValue = e.target.dataset.image;

        console.log(hoveredSizeValue);

        thumb.setAttribute('src', hoveredSizeValue);
      });
    });
  }

  _converToGlobal() {
    window.updatePriceSimilars = this.updatePrice();
  }

  _init_() {
    this._tiggerSimilars_();
  }

}
