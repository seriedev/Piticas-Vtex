import Vtexjs from './vtex';

export default class SimulationOrderFormService extends Vtexjs {
  constructor() {
    super();
    this.VTEX_ENDPOINTS = {
      NEW_ENDPOINT: '/checkout/pub/orderforms/simulation',
      GET_POSTAL_CODE: '/checkout/pub/postal-code/BRA/',
    };
  }

  async simulationOderForm(payload) {
    const response = await this.post(
      `${this.VTEX_ENDPOINTS.NEW_ENDPOINT}`,
      payload
    );
    return response;
  }

  async getPostalCodeInformations(payload) {
    const response = await this.post(
      `${this.VTEX_ENDPOINTS.GET_POSTAL_CODE}`,
      payload
    );
    return response;
  }
}
