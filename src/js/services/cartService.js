import Vtexjs from './vtex';

class CartService extends Vtexjs {
  constructor() {
    super();
    this.VTEX_ENDPOINTS = {
      CHECKOUT: '/checkout/pub/orderForm',
    };

    this._apiService = new Vtexjs();
  }

  async addMultipleProducts(skus) {
    if (skus) {
      const { orderFormId } = await this.getCurrentCart();

      const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${orderFormId}/items`;

      const orderItems = skus.map(({ id, quantity }) => ({
        id,
        quantity,
        seller: 1,
      }));

      const payload = {
        orderItems,
      };

      const response = await this._apiService.patch(endpointUrl, payload);
      return response;
    }
  }

  async getCurrentCart() {
    const response = await this._apiService.get(this.VTEX_ENDPOINTS.CHECKOUT);
    return response;
  }

  async addCurrentItem(item, sellerId = 1) {
    if (item.skuId) {
      const current = await this.getCurrentCart();
      const indexFound = current.items.findIndex(x => x.id === item.skuId);

      if (indexFound > -1) {
        item.productQuantity =
          +item.productQuantity + +current.items[indexFound].quantity;
      }

      const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${current.orderFormId}/items`;

      const payload = {
        orderItems: [
          {
            seller: sellerId.toString(),
            quantity: +item.productQuantity,
            id: item.skuId.toString(),
          },
        ],
      };

      const response = this._apiService.patch(endpointUrl, payload);
      return response;
    }
  }

  async updateCurrentItem(item) {
    const current = await this.getCurrentCart();
    const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${current.orderFormId}/items`;

    const payload = {
      orderItems: [
        {
          index: item.index,
          quantity: +item.productQuantity,
        },
      ],
    };

    const response = this._apiService.patch(endpointUrl, payload);
    return response;
  }

  async removeCurrentItem(itemIndex) {
    const current = await this.getCurrentCart();
    const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${current.orderFormId}/items`;
    const payload = {
      orderItems: [
        {
          index: itemIndex,
          quantity: 0,
        },
      ],
      expectedOrderFormSections: ['items'],
      noSplitItem: true,
    };

    const response = await this._apiService.patch(endpointUrl, payload);
    return response;
  }

  async addCupom(cupom) {
    const currentCart = await this.getCurrentCart();

    const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${currentCart.orderFormId}/coupons`;

    const payload = {
      text: cupom,
    };

    const response = this._apiService.post(endpointUrl, payload);
    return response;
  }

  async clearMessages() {
    const currentCart = await this.getCurrentCart();
    const endpointUrl = `${this.VTEX_ENDPOINTS.CHECKOUT}/${currentCart.orderFormId}/messages/clear`;
    const response = this._apiService.post(endpointUrl);
    return response;
  }
}

export default CartService;
