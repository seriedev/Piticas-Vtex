import CartService from 'Services/cartService';
import Helpers from 'Helpers/index';

class FreeShippingController extends CartService {
  constructor() {
    super();

    this.helpers = new Helpers();
  }

  handleFreeShippingProgress(data) {
    const shippingValue = document.querySelector('.menu__frete');
    const shippingTitle = document.querySelector('.cart-mini__shipping--title');
    const shippingProgressBar = document.querySelector('.js-shipping-progress');
    const shippingIcon = document.querySelector('.js-shipping-icon');
    const shippingTotalMissingElement = document.querySelector('.js-minicart-shipping-total');
    const goalReachedElement = document.querySelector('.cart-mini__shipping--goal-reached');
    const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

    if (shippingTitle && shippingProgressBar && shippingIcon && shippingTotalMissingElement) {
      const dataTotalizers = data.totalizers;

      const orderFormTotalValue = data.items.length ? dataTotalizers[0].value : 0;
      const freeShippingValue = parseFloat(shippingValue.textContent);

      const orderShippingCalculate = freeShippingValue - orderFormTotalValue;

      const resultCalcOrderAndShipping = (orderFormTotalValue / freeShippingValue) * 100;
      const result = resultCalcOrderAndShipping > 100 ? 100 : resultCalcOrderAndShipping;

      if (
        orderShippingCalculate < 0 &&
        shippingTotalMissingElement &&
        shippingTotalMissingElement.parentElement
      ) {
        shippingTotalMissingElement.parentElement.style.display = 'none';

        goalReachedElement.style.display = 'block';
        document.querySelector('.js-shipping-container').style.display = 'none';
        goalReachedElement.innerHTML = `Parabéns! Você ganhou <span class=".--pink">Frete grátis</span>`;
      } else if (shippingTotalMissingElement) {
        const floatShipping = this.helpers._formatCurrencyDecimal(orderShippingCalculate);

        shippingTotalMissingElement.innerText = floatShipping.toLocaleString('pt-br', formato);
        shippingTotalMissingElement.parentElement.style.display = 'flex';

        document.querySelector('.js-shipping-container').style.display = 'flex';

        goalReachedElement.style.display = 'none';
      }

      shippingProgressBar.style.width = `${result}%`;
      shippingIcon.style.transform =
        resultCalcOrderAndShipping > 100
          ? `translate(calc(${result}% - 1.75rem), 1.25rem)`
          : `translate(${result}%, 1.25rem)`;
    }
  }
}

export default FreeShippingController;

