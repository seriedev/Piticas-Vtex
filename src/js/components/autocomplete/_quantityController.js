class QuantityController {
  _handleQuantity(actionFactor, element) {
    const currentQty = +element.value;
    const newValue = +currentQty + +actionFactor;

    element.value = newValue <= 0 ? currentQty : newValue;

    element.dataset.productQty = newValue <= 0 ? currentQty : newValue;
    const index = element.dataset.miniCartItemIndex;

    let currentQtyy = element.value;

    let values = {
      index: index,
      currentQuantity: currentQtyy,
    };

    return values;
  }
}

export default QuantityController;
