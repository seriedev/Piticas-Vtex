import CartService from 'Services/cartService';
import MessagesController from './_messagesController';

class CupomController extends CartService {
  constructor() {
    super();
    this._messagesController = new MessagesController();
    this.cupomInput = 'js-cupom';
    this.cupomButton = 'js-cupom-button';
    this.cupomDiscount = 'cart-mini__final-price-discount';
  }

  handleSendCupom() {
    const inputElement = document.querySelector(`#${this.cupomInput}`);
    const buttonElement = document.querySelector(`#${this.cupomButton}`);

    buttonElement &&
      buttonElement.addEventListener('click', async e => {
        e.preventDefault();
        const inputValue = inputElement.value;

        const result = await this.addCupom(inputValue);
        inputElement.value = ' ';
        this.render(result.totalizers[1].value);
        this._messagesController.showMessages(result, 0);
      });
  }

  render(discount) {
    const discountElement = document.querySelector(`.${this.cupomDiscount}`);
    discountElement.innerHTML = discount;
  }

  load() {
    this.handleSendCupom();
  }
}

export default CupomController;
