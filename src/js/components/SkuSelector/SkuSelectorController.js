import Swal from 'sweetalert2';

import CartService from 'Services/cartService';
import MiniCartComponent from '../../components/miniCart';
import PlaceHolderLoading from '../../components/Placeholder/index';
import SkuSelectorComponent from './SkuSelector';
import SkuSelectorView from './skuSelectorView';

export default class SkuSelectorController {
  constructor(config) {
    if (!config)
      throw new Error('SkuSelectorController não recebeu os parametros');

    this._config = config;
    this._context = config.context;

    this._loader = config.loader ? config.loader : true;

    this.skuSelectorModel_ = new SkuSelectorComponent(
      config.id,
      config.context
    );

    this.placeholderLoading_ = new PlaceHolderLoading();
    this._vtexjsCartSerive = new CartService();
    this.miniCart_ = new MiniCartComponent();

    this._element = config.viewElement;

    this.skuSelectorView_ = new SkuSelectorView(this._element, config.context);

    this.skuSelectorModel_.element = config.viewElement;
    this.skuSelectorModel_.whereAmI = config.context;
  }

  handleOptionClick() {
    const container = this._element;
    const options = container.querySelectorAll('.variation__option');

    options &&
      options.forEach((option) => {
        option.addEventListener('click', (e) => {
          const skuValue = e.target.dataset.skuValue;
          const skuCamp = e.target.dataset.skuCamp;

          this.handleSelection(e, skuCamp, skuValue);
        });
      });
  }

  async getSkusWithThisOption(skuCamp, skuValue) {
    const response = await this.skuSelectorModel_.response;
    const skus = response.skus;

    return skus.filter((sku) => {
      return sku.dimensions[skuCamp] == skuValue;
    });
  }

  async filterSelectedSku() {
    const response = await this.skuSelectorModel_.response;

    const productId = this.skuSelectorModel_.productId;
    const skuSelectedObj = this.skuSelectorModel_.skuSelected;
    const skus = response.skus;

    const skuSelected = skus.filter((sku) => {
      return (
        JSON.stringify(sku.dimensions) ==
        JSON.stringify(skuSelectedObj[productId])
      );
    });

    skuSelected && this.handleSkuSelectedReturn(skuSelected);

    return skuSelected;
  }

  static async returnProductInfo(id, context = 'test') {
    const model = new SkuSelectorComponent(id, context);
    const response = await model.response;

    return response;
  }

  async handleSelection(event, skuCamp, skuValue) {
    const container = this._element;
    const allOptions = container.querySelectorAll('.variation__option');

    const skusWithThisOption = await this.getSkusWithThisOption(
      skuCamp,
      skuValue
    );

    const unnavailableOptions = this.handleUnnavailableOptions(
      allOptions,
      skusWithThisOption,
      event,
      skuCamp
    );

    this.handleSelectionObject(event, skuCamp, skuValue, unnavailableOptions);
  }

  handleSelectionObject(event, skuCamp, skuValue, unnavailableOptions) {
    const productId = this.skuSelectorModel_.productId;
    const selectionObject = this.skuSelectorModel_.skuSelected[productId];

    unnavailableOptions.forEach((el) => {
      const value = el.dataset.skuValue;
      const camp = el.dataset.skuCamp;

      selectionObject[camp] == value ? (selectionObject[camp] = '') : null;
    });

    selectionObject[skuCamp] = skuValue;

    this.checkIfAllSelected(productId)
      ? this.filterSelectedSku()
      : (this._element.dataset.skuId = '');
    this.updateClasses(selectionObject);
  }

  updateClasses(obj) {
    const container = this._element;
    const allOptions = container.querySelectorAll('.variation__option');

    if (obj) {
      allOptions.forEach((el) => {
        obj[el.dataset.skuCamp] == el.dataset.skuValue
          ? el.classList.add('option-selected')
          : el.classList.remove('option-selected');
      });
    }
  }

  handleUnnavailableOptions(elements, skus, event, skuCamp) {
    /*Element -- html variations nodes */
    const container = this._element;
    const allOptions = container.querySelectorAll('.variation__option');
    const mainVariation = this.skuSelectorModel_.mainVariation;

    const unOptions = Array.from(elements).filter((element) => {
      let camp = element.dataset.skuCamp;
      let value = element.dataset.skuValue;
      let options = [];

      skus.forEach((sku) => {
        options.push(sku.dimensions[camp]);
      });

      return !options.includes(value) && element.dataset.skuCamp != skuCamp;
    });

    allOptions.forEach((option) =>
      skuCamp == mainVariation
        ? option.classList.remove('invalid_combination')
        : null
    );

    unOptions.forEach((option) => {
      option.dataset.skuCamp != mainVariation
        ? option.classList.add('invalid_combination')
        : null;
    });

    return unOptions;
  }

  handleSkuSelectedReturn(sku) {
    if (sku.length > 0) {
      const container = this._element;
      this.skuSelectorModel_.skuFinal = sku;

      container.dataset.skuId = sku[0].sku;
      this.skuSelectorView_.updateDataView(this.skuSelectorModel_);
    }
  }

  checkIfAllSelected(id) {
    const skuSelectedObj = this.skuSelectorModel_.skuSelected;

    return Object.keys(skuSelectedObj[id]).every((k) => skuSelectedObj[id][k]);
  }

  async getSkusWithSelectedOptions(type, value) {
    const response = await this.skuSelectorModel_.response;
    const skus = response.skus;

    return skus.filter((sku) => sku.dimensions[type] == value);
  }

  async createSelectionObject() {
    const response = await this.skuSelectorModel_.response;
    const types = Object.keys(response.dimensionsMap);
    const productId = response.productId;
    const skuSelectedObj = this.skuSelectorModel_.skuSelected;
    const thisProductObj = (skuSelectedObj[productId] = {});

    this.skuSelectorModel_._mainVariation = types[0];

    types.forEach((type) => {
      thisProductObj[type] = '';
    });

    this.setDefaultSelection(thisProductObj, types);
  }

  handleInputType() {
    const container = this._element;
    const comboDefault = container.querySelector('.variation__combo-default');
    const comboList = container.querySelector('.variation__combo-list');
    let comboVariations = '';
    comboList
      ? (comboVariations = comboList.querySelectorAll('.variation__option'))
      : null;
    const productId = this.skuSelectorModel_.productId;
    const selectionObj = this.skuSelectorModel_.skuSelected;

    comboDefault &&
      comboDefault.addEventListener('click', () => {
        comboList.classList.toggle('variation__combo-list--visible');

        comboVariations.forEach((el) => {
          el.addEventListener('click', (event) => {
            const type = event.target.dataset.skuCamp;

            comboDefault.textContent = selectionObj[productId][type];
            comboList.classList.remove('variation__combo-list--visible');
          });
        });

        window.addEventListener('click', (event) => {
          if (!event.target.matches(`.variation__combo-default`)) {
            comboList.classList.remove('variation__combo-list--visible');
          }
        });
      });
  }

  handleAviseMe() {
    const productData = this.skuSelectorModel_._data;

    !productData.available
      ? this.skuSelectorView_.setAviseMeForUnnavailableProduct(
          productData,
          this.skuSelectorModel_
        )
      : null;
  }

  handleBuyButtonEvent() {
    const context = this._context;
    const buyButtons = document.querySelectorAll(`.${context}__buy-button`);

    const quantityController = document.querySelector(
      `.${context}__quantityController`
    );

    if (this._config.quantity && quantityController) {
      this.handleQuantityController();
    }

    for (let index = 0; index < buyButtons.length; index++) {
      const butButton$ = buyButtons[index];

      butButton$.addEventListener('click', async () => {
        const productId = this.skuSelectorModel_.productId;
        const selectionObj = this.skuSelectorModel_.skuSelected;
        const skuFinal = this.skuSelectorModel_.skuFinal;

        const quantityControllerCount = quantityController
          ? quantityController.querySelector(`.quantityController__counter`)
          : null;

        let isAllOptionsSelected = Object.keys(selectionObj[productId]).every(
          (k) => selectionObj[productId][k]
        );

        if (isAllOptionsSelected == false) {
          const unOptions = [];

          Object.entries(selectionObj[productId]).forEach((option) => {
            if (!option[1]) {
              unOptions.push(option[0]);
            }
          });

          Swal.fire({
            text: `Selecione ${unOptions.toString()} para poder comprar`,
            icon: 'warning',
            padding: '3rem',
            showConfirmButton: false,
            customClass: {
              container: 'invalid-buy-container',
            },
          });
        } else {
          let quantity = quantityControllerCount
            ? quantityControllerCount.textContent
            : undefined;

          if (quantity >= skuFinal.availablequantity) {
            quantity = skuFinal.availablequantity;
          }

          let params = {
            skuId: skuFinal[0].sku,
            productQuantity: quantity ? +quantity : 1,
          };

          await this._vtexjsCartSerive.addCurrentItem(params).then(() => {
            if (context == 'productPage') {
              window.location.href = `/checkout/#/cart`;
            }
          });

          this.handleShowModalToast('success', 'Adicionado com sucesso');
          this.miniCart_.handleRenderItemIntoTheCart();
        }
      });
    }
  }

  handleQuantityController() {
    const quantityController = document.querySelectorAll(
      `.${this._context}__quantityController`
    );

    for (let i = 0; i < quantityController.length; i++) {
      const quantity$ = quantityController[i];

      const plusBtn = document.createElement('button');
      plusBtn.classList.add('quantityController__btn');
      plusBtn.textContent = '+';

      const minusBtn = document.createElement('button');
      minusBtn.classList.add('quantityController__btn');
      minusBtn.textContent = '-';

      let quantityCounterElement = document.createElement('span');
      quantityCounterElement.classList.add('quantityController__counter');
      quantityCounterElement.textContent = this.skuSelectorModel_.quantityValue;

      plusBtn.addEventListener('click', () => {
        this.skuSelectorModel_.quantityValue++;
        quantityCounterElement.textContent = this.skuSelectorModel_.quantityValue;
      });

      minusBtn.addEventListener('click', () => {
        if (this.skuSelectorModel_.quantityValue <= 1) {
          return;
        }

        this.skuSelectorModel_.quantityValue--;
        quantityCounterElement.textContent = this.skuSelectorModel_.quantityValue;
      });

      quantity$.appendChild(minusBtn);
      quantity$.appendChild(quantityCounterElement);
      quantity$.appendChild(plusBtn);
    }
  }

  handleShowModalToast(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  __invalidClass__() {
    const variationContainerElement_ = document.querySelectorAll(
      '.variation__wrapper'
    )[1];

    if (variationContainerElement_) {
      const coisas = variationContainerElement_.querySelectorAll('label');

      const dataVariations = this.skuSelectorModel_._data;

      let falseSkus = [];

      dataVariations.skus.filter((item) => {
        if (!item.available) {
          return falseSkus.push(item);
        }
      });

      [...coisas].forEach((items, index) => {
        falseSkus.filter((item) => {
          if (item.dimensions['Quantidade Pacote'] === items.dataset.skuValue) {
            items.classList.add('error');
          }
        });
      });
    }
  }

  async setDefaultSelection(obj, types) {
    const mainVariation = this.skuSelectorModel_.mainVariation;
    const container = this._element;
    const allOptions = container.querySelectorAll('.variation__option');
    const response = await this.skuSelectorModel_.response;
    const productId = this.skuSelectorModel_.productId;
    const skus = response.skus;

    let defaultSku = '';

    this.__invalidClass__(allOptions);

    allOptions.forEach(() => {
      skus.forEach((sku) => {
        if (
          !defaultSku &&
          sku.available &&
          Object.keys(sku.dimensions).length != 0
        ) {
          defaultSku = sku;
        }
      });
    });

    if (defaultSku) {
      types.forEach((type) => {
        obj[type] = defaultSku.dimensions[type];
      });

      let skuFinalDimensions = defaultSku.dimensions;
      let skuSelected = this.skuSelectorModel_.skuSelected[productId];

      skuSelected = obj;

      this.__dispatchFirstClick__(allOptions, mainVariation, skuSelected);

      this.filterSelectedSku();
      this.updateClasses(skuFinalDimensions);
    } else {
      let skuSelected = this.skuSelectorModel_.skuSelected[productId];

      skus.forEach((sku) => {
        if (!defaultSku && sku.available) {
          defaultSku = sku;
        }
      });

      this.__dispatchFirstClick__(allOptions, mainVariation, skuSelected);

      this.filterSelectedSku();
      this.updateClasses();
    }
  }

  __dispatchFirstClick__(allOptions, mainVariation, skuSelected) {
    const element_ = Array.from(allOptions).filter((option) => {
      return (
        option.dataset.skuCamp == mainVariation &&
        option.dataset.skuValue == skuSelected[`${mainVariation}`]
      );
    });

    console.warn(element_, 'element');

    element_.length > 0 && element_[0].click();
  }

  _buyButtonAdd() {
    const context = this._config.context;
    const productId = this.skuSelectorModel_.productId;
    const selectionObj = this.skuSelectorModel_.skuSelected;

    const buyButtonElements = document.querySelectorAll(
      `.${context}__add-to-cart`
    );

    for (let i = 0; i < buyButtonElements.length; i++) {
      const buyButton$ = buyButtonElements[i];

      buyButton$.addEventListener('click', () => {
        const skuId = this.skuSelectorModel_.skuFinal;

        let isAllOptionsSelected = Object.keys(selectionObj[productId]).every(
          (k) => selectionObj[productId][k]
        );

        if (isAllOptionsSelected == false) {
          const unOptions = [];
          Object.entries(selectionObj[productId]).forEach((option) => {
            if (!option[1]) {
              unOptions.push(option[0]);
            }
          });

          Swal.fire({
            text: `Selecione ${unOptions.toString()} para poder comprar`,
            icon: 'warning',
            padding: '3rem',
            showConfirmButton: false,
            customClass: {
              container: 'invalid-buy-container',
            },
          });
        } else {
          this.miniCart_._addProduct(
            skuId[0].sku,
            this.skuSelectorModel_.quantityValue
          );
        }
      });
    }
  }

  handleOptions() {
    this._config.buyButton ? this.handleBuyButtonEvent() : null;
    this._config.addToCartBtn ? this._buyButtonAdd() : null;
  }

  handleLoading(loader) {
    if (loader) {
      this.placeholderLoading_.loaderController(
        true,
        this._element,
        'shelf__sku-selector'
      );
    } else {
      this.placeholderLoading_.loaderController(
        false,
        this._element,
        'shelf__sku-selector'
      );
    }
  }

  async init() {
    this._config.loader ? this.handleLoading(true) : null;

    await this.skuSelectorView_
      ._render(this.skuSelectorModel_)
      .then(() => (this._config.loader ? this.handleLoading(false) : null));

    this.handleInputType();
    this.createSelectionObject();
    this.handleOptionClick();
    this.handleAviseMe();
    this.handleOptions();
  }
}
