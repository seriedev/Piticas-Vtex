import Helpers from 'Helpers//index';
import { REAL } from '../../utils/index';
import MiniCartComponent from '../miniCart';

class SelectedController {
  constructor() {
    this._helpers = new Helpers();
    this._miniCartComponent = new MiniCartComponent();
    this.selectedElements = new Set();

    this.totalSuggestion = REAL('R$ 0,00');

    this.totalPrice = new Set();
  }

  _appendElement(elements) {
    elements.forEach((element, index) => {
      element.insertAdjacentHTML(
        'afterbegin',
        `<div class="productCard__checkbox pretty p-icon">
          <input type="checkbox" class="js-buyTogether-checkbox">
          <div class="state">
            <i class="icon fas fa-check"></i>
            <label></label>
          </div>
        </div>`
      );
    });
    this._getUnavailableSku();
    this.getInputToBeChecked();
  }

  _getUnavailableSku() {
    const buyContainerElement_ = document.querySelector(
      '.buyTogether__content'
    );

    const articleElements_ = buyContainerElement_.querySelectorAll(
      '.productCard'
    );

    [...articleElements_].forEach(item => {
      const priceElement = item.querySelector('.productCard__price--best');
      const checkboxElement_ = item.querySelector(
        '.productCard__checkbox > input'
      );

      let priceValue = priceElement.dataset.price;

      if (priceValue === '0.00') {
        checkboxElement_.style.pointerEvents = 'none';
      } else {
        // this._checkFirstItem(item);
      }
    });
  }

  /**
   * @param  {html} element_
   */

  _checkFirstItem(element_) {
    const checkboxElement_ = element_.querySelector(
      '.productCard__checkbox > input'
    );

    if (checkboxElement_) {
      const checkboxElement = (checkboxElement_.checked = true);

      if (checkboxElement) {
        this._changePrice(element_, (checkboxElement_.checked = true));

        setTimeout(() => {
          const productId = element_.dataset.skuSelectedId;
          this.selectedElements.add(+productId);
        }, 3000);
      }
    }
  }

  getInputToBeChecked() {
    const inputElements = document.querySelectorAll('.js-buyTogether-checkbox');

    inputElements.forEach(inputElement => {
      inputElement.addEventListener('change', e => {
        const articleElement = e.target.parentElement.parentElement;

        const skuId = articleElement.querySelector(
          '.productCard__skuSelector-wrapper'
        ).dataset.skuId;

        if (e.target.checked) {
          articleElement.dataset.previousSkuSelected = skuId;
          this.selectedElements.add(+skuId);

          this._changePrice(articleElement, e.target.checked);
        } else {
          this.selectedElements.delete(+skuId);
          this._changePrice(articleElement, e.target.checked);
        }
      });
    });

    this.setBuyElement();
  }

  /**
   * @param  {html} article
   * @param  {input} checkbox
   */

  _changePrice(article, checkbox) {
    const totalPriceContainerElement = document.querySelector(
      '.buyTogether__total-price > span'
    );

    const priceElement = article.querySelector('.productCard__price--best');
    let priceToReplace = priceElement.dataset.price;

    if (checkbox) {
      this.totalPrice.add(priceToReplace.replace(/\./g, ''));
      this.totalSuggestion = this.totalSuggestion.add(priceToReplace);

      const mutationObserverConfig = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true,
      };

      const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          const oldValue = mutation.oldValue;

          if (this.totalPrice.has(oldValue)) {
            const newValue = mutation.target.dataset.price;
            const skuSelector = article.querySelector(
              '.productCard__skuSelector-wrapper'
            );
            const selectedSkuId = skuSelector.dataset.skuId;
            let oldSkuValue = article.dataset.previousSkuSelected;

            this.totalSuggestion = this.totalSuggestion.subtract(oldValue);
            this.totalSuggestion = this.totalSuggestion.add(newValue);

            const totalFormatPrice = this._helpers._formatPrice(
              this.totalSuggestion.value
            );

            totalPriceContainerElement.innerHTML = `R$ ${totalFormatPrice}`;

            this.selectedElements.delete(+oldSkuValue);
            this.selectedElements.add(+selectedSkuId);

            article.dataset.previousSkuSelected = selectedSkuId;

            this.totalPrice.delete(oldValue);
            this.totalPrice.add(newValue.replace(/\./g, ''));

            const valortotal = this.totalPrice;
          }
        });
      });

      mutationObserver.observe(priceElement, mutationObserverConfig);
    } else {
      this.totalSuggestion = this.totalSuggestion.subtract(priceToReplace);
      this.totalPrice.delete(priceToReplace);
    }

    const totalFormatPrice = this._helpers._formatPrice(
      this.totalSuggestion.value
    );

    totalPriceContainerElement.innerHTML = `R$ ${totalFormatPrice}`;
  }

  setBuyElement() {
    const buyButtonElement = document.querySelector(
      '.buyTogether__buy-button > button'
    );

    buyButtonElement.addEventListener('click', async e => {
      const skus = [...this.selectedElements].map(id => ({
        id,
        quantity: 1,
      }));

      await this._miniCartComponent._addMultipleProducts(skus);
    });
  }
}

export default SelectedController;
