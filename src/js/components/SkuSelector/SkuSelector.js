import getCatalogService from 'Services/catalogService';
import userService from 'Services/userService';

export default class SkuSelectorComponent {
  constructor(id, context) {
    this._vtexjsCatalog = new getCatalogService();
    this._userService = new userService();

    this._element = '';
    this._data = '';
    this._productInfo = '';
    this._productId = id;
    this._variationData = this.fetchVariationsData(id);
    this._skuSelected = {};
    this._skuFinal = {};
    this._whereAmI = context;
    this.quantityValue = 1;
  }

  async fetchVariationsData(id) {
    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.VARIATIONS,
      id: id,
    };

    const response = await this._vtexjsCatalog.getCatalog(params);

    this._data = await response;
    return response;
  }

  get element() {
    return this._element;
  }

  set element(element) {
    this._element = element;
  }

  set productInfo(data) {
    this._productInfo = data;
  }

  set mainVariation(variation) {
    this._mainVariation = variation;
  }

  set sku(sku) {
    this._sku = sku;
  }

  set skuFinal(sku) {
    this._skuFinal = sku;
  }

  set skuSelected(obj) {
    this._skuSelected = obj;
  }

  set whereAmI(context) {
    this._whereAmI = context;
  }

  get productInfo() {
    return this._productInfo;
  }

  get whereAmI() {
    return this._whereAmI;
  }

  get skuFinal() {
    return this._skuFinal;
  }

  get skuSelected() {
    return this._skuSelected;
  }

  get mainVariation() {
    return this._mainVariation;
  }

  get sku() {
    return this._sku;
  }

  get productId() {
    return this._productId;
  }

  get response() {
    return this._data ? this._data : this._variationData;
  }
}
