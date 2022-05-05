import Vtexjs from './vtex';

export default class FilterService extends Vtexjs {
  constructor() {
    super();
    this.VTEX_ENDPOINTS = {
      FACETS: '/catalog_system/pub/facets/search',
    };
  }

  async getSpecificationValues(params) {
    const response = await this.get(`${this.VTEX_ENDPOINTS.FACETS}${params}`);
    return response;
  }
}
