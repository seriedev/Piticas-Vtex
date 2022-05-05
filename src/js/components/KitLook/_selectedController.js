import CartService from 'Services/cartService';
import Helpers from 'Helpers//index';
import { REAL } from '../../utils/index';

class SelectedController {
  constructor() {
    this._helpers = new Helpers();
    this._vtexjsCartService = new CartService();
    this.selectedElements = new Set();

    this.totalSuggestion = REAL('R$ 0,00');
  }

  _appendElement() {
    const kitContainerElement = document.querySelector('.kitlook__list');

    const productCards = kitContainerElement.querySelectorAll('.productCard');

    productCards.forEach(productCard => {
      productCard.insertAdjacentHTML(
        'afterend',
        `<div class="productCard__checkbox">
          <input type="checkbox" class="js-kitlook-checkbox">
        </div>`
      );
    });

    this.getInputToBeChecked();
  }

  getInputToBeChecked() {
    const kitContainerElement = document.querySelector('.kitlook__list');
    const inputElements = kitContainerElement.querySelectorAll(
      '.js-input-checkbox'
    );
    
    inputElements.forEach(inputElement => {
      inputElement.addEventListener('change', e => {
        const articleElement = e.target.offsetParent;

        const productId = articleElement.dataset.productId;

        if (e.target.checked) {
          this.selectedElements.add(+productId);
          this._changePrice(articleElement, e.target.checked);
        } else {
          this.selectedElements.delete(+productId);
          this._changePrice(articleElement, e.target.checked);
        }
      });
    });

    this.setBuyElement();
  }

  _changePrice(article, checkbox) {
    const totalPriceContainerElement = document.querySelector(
      '.buyTogether__total-price > span'
    );
    const priceElement = article.querySelector('.productCard__price--best');
    let priceToReplace = priceElement.dataset.price;

    if (checkbox) {
      this.totalSuggestion = this.totalSuggestion.add(priceToReplace);
    } else {
      this.totalSuggestion = this.totalSuggestion.subtract(priceToReplace);
    }

    const totalFormatPrice = this._helpers._formatPrice(
      this.totalSuggestion.value
    );
    totalPriceContainerElement.innerHTML = `R$ ${totalFormatPrice}`;
  }

  setBuyElement() {
    const buyButtonElement = document.querySelector('.buyTogether__buy-button');

    buyButtonElement.addEventListener('click', async () => {
      const skus = [...this.selectedElements].map(id => ({
        id,
        quantity: 1,
      }));

      await this._vtexjsCartService.addMultipleProducts(skus);
    });
  }
}

export default SelectedController;
