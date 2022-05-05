import Swal from 'sweetalert2';

import SimulationOrderFormService from 'Services/SimulationOrderFormService';
import FrnComponent from '../frn.component';
export default class ShippingCart extends FrnComponent {
  constructor() {
    super();
    this._simulationOrderForm = new SimulationOrderFormService();

    this.getInputElement = () => {
      return this.getElement('#postal-code');
    };

    this.getButtonElement = () => {
      return this.getElement('.postal-code-send');
    };

    this.getIdSkuElement = () => {
      return this.getElement('.skuSelectorView');
    };

    this.getShippingContainerElement = () => {
      return this.getElement('.shipping-results');
    };
  }

  __listener__() {
    const getButtonElement = this.getButtonElement();

    getButtonElement &&
      getButtonElement.addEventListener('click', () => {
        const inputPostalCodeValueElement_ = this.getInputElement().value;
        const idSku = this.getIdSkuElement().dataset.skuId;

        let ctx = {
          postalCode: inputPostalCodeValueElement_,
          id: idSku,
        };

        this.__setParams(ctx);
      });
  }

  __setParams(ctx) {
    if (ctx.postalCode) {
      let payload = {
        items: [
          {
            id: ctx.id,
            quantity: '1',
            seller: '1',
          },
        ],
        postalCode: ctx.postalCode,
        country: 'BRA',
      };

      this.__mutation__(payload);
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro, digita um CEP',
      });
    }
  }

  async __mutation__(payload) {
    try {
      const rq = await this._simulationOrderForm.simulationOderForm(payload);
      this.__generate(rq);
    } catch {
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro, digita um CEP VALIDO',
      });
    }
  }

  __generate(rq) {
    const { postalCode } = rq;

    const { slas } = rq.logisticsInfo[0];

    this.renderSla(slas, postalCode);
  }

  renderSla(slas, postalCode) {
    this.getShippingContainerElement().innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Valor do frete</th>
            <th>Disponibilidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.renderSlaItem(slas, postalCode)}
        </tbody>
      </table>
      `;
  }

  renderSlaItem(slas, postalCode) {
    let slaItem = '';

    slas.forEach(({ name, shippingEstimate, price }) => {
      const dayShipping = shippingEstimate.split('b')[0];


      let res = price.toString();
      let dec = Math.floor(res.length - 2);
      let priceFinal = res.substring(0, dec) + "." + res.substring(dec);

      console.log('price', priceFinal);

      slaItem += `
        <tr>
          <td>R$ ${price == 0 ? 'Frete Grátis' : priceFinal}</td>
          <td>${name}, entrega em até ${dayShipping} dias úteis</td>
        </tr>
      `;
    });

    return slaItem;
  }

  load() {
    this.__listener__();
  }
}
