import Vtexjs from './vtex';
class getCatalogService {
  constructor() {
    this.VTEX_ENDPOINTS = {
      AUTO_COMPLETE: '/buscaautocomplete/',
      VARIATIONS_SINGLE_SKU: '/produto/sku/',
      CATEGORY: '/catalog_system/pub/category/tree/',
      SEARCH: '/catalog_system/pub/products/search?ft=',
      SEARCH_IMAGE_SKU_ID: '/catalog_system/pub/products/search/?fq=productId:',
      SEARCH_SKU: '/catalog_system/pub/products/search?fq=skuId:',
      VARIATIONS: '/catalog_system/pub/products/variations/',
      SIMILARS: '/catalog_system/pub/products/crossselling/similars/',
      GET_BY_BRAND: '/catalog_system/pub/products/search/?fq=B:',
      PARAMS: '/catalog_system/pub/products/search',
      SUGGESTIONS: '/catalog_system/pub/products/crossselling/suggestions/',
    };

    this._apiService = new Vtexjs();
  }

  async getCatalog(param) {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.CATEGORY: {
        const category = await this._apiService.get(param.type + param.id);
        return category;
      }

      case this.VTEX_ENDPOINTS.CREOSSELING: {
        const coresseling = await this._apiService.get(param.type + param.id);
        return coresseling;
      }

      case this.VTEX_ENDPOINTS.VARIATIONS: {
        const variations = await this._apiService.get(param.type + param.id);
        return variations;
      }

      case this.VTEX_ENDPOINTS.VARIATIONS_SINGLE_SKU: {
        const singleSku = await this._apiService.getWithApi(
          param.type + param.id
        );
        return singleSku;
      }

      case this.VTEX_ENDPOINTS.SIMILARS: {
        const similars = await this._apiService.get(param.type + param.id);
        return similars;
      }

      case this.VTEX_ENDPOINTS.SEARCH: {
        const search = await this._apiService.get(
          param.type + param.term + param.fromTo
        );
        return search;
      }

      case this.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID: {
        const searchImageSkuId = await this._apiService.get(
          param.type + param.id
        );
        return searchImageSkuId;
      }

      case this.VTEX_ENDPOINTS.SEARCH_SKU: {
        const searchSku = await this._apiService.get(param.type + param.skuId);
        return searchSku;
      }

      case this.VTEX_ENDPOINTS.GET_BY_BRAND: {
        const byBrand = await this._apiService.get(
          param.type + param.brandId + param.params
        );
        return byBrand;
      }

      case this.VTEX_ENDPOINTS.PARAMS: {
        const params = await this._apiService.get(param.type + param.params);
        return params;
      }

      case this.VTEX_ENDPOINTS.SUGGESTIONS: {
        const suggestions = await this._apiService.get(param.type + param.id);
        return suggestions;
      }
    }
  }

  async postCatalog(param) {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.AUTO_COMPLETE: {
        const autoComplete = await this._apiService.post(
          param.type + param.maxRows + param.term
        );
        return autoComplete;
      }
    }
  }
}

export default getCatalogService;
