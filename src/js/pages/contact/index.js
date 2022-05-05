import Swal from 'sweetalert2';

import getMasterDataService from 'Services/masterDataService';
import UserService from 'Services/userService';
import Helpers from 'Helpers/index';
import Config from './contact.config';
class Institucional {
  constructor() {
    this.helpers_ = new Helpers();

    this.componentBuilder();

    this._vtexjsMasterData = new getMasterDataService();
    this._userService = new UserService();

    this.prevArrow = `<button class="slick-arrow-left">
    <svg class="slick-arrow-left" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"><g><g opacity="1"><path fill="#b8b8b8" d="M10.614.006l1.172 1.122-9.47 10.508 9.679 9.204-1.063 1.171L.005 11.62l1.063-1.171.073.07z"/></g></g></svg>
    </button>`;

    this.nextArrow = `<button class="slick-arrow-right">
    <svg class="slick-arrow-right" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"><g><g opacity="1"><path fill="#b8b8b8" d="M.214 1.128L1.386.006l9.473 10.512.073-.07 1.063 1.171L1.068 22.011.005 20.84l9.678-9.204z"/></g></g></svg>
  </button>`;
  }

  handleBreadcrumb() {
    const breadcrumb = document.querySelectorAll(
      '.js-institucional-breadcrumb'
    );
    const title = document.getElementsByTagName('title');
    const account = title[0].textContent.split('Institucional – ')[1];
    const body = document.getElementsByTagName('body');

    let url = body[0].classList[0];

    url = url.split('/').pop();

    url = url.replace('-', ' ');
    url = url.replace(/(^|-)./g, s => s.slice(-1).toUpperCase());

    title[0].textContent = `${url} - ${account}`;

    breadcrumb[0].children[0].textContent = url;
  }

  _initSlider() {
    Config.handleShelfSlide(this.prevArrow, this.nextArrow);
  }

  async _setAutomaticEmail() {
    const nameElement_ = document.querySelector('.contato__input--nome');
    const emailElement_ = document.querySelector('.contato__input--email');

    let params = {
      type: this._userService.VTEX_ENDPOINTS.USER_INFO,
    };

    const response = (this._currentUser = await this._userService.getUserInformation(
      params
    ));

    if (response.IsUserDefined) {
      emailElement_.value = response.Email;
    }

    if (response.FirstName) {
      nameElement_.value = response.FirstName;
    }
  }

  handleSkuModal() {
    const products = document.querySelectorAll('.productCard');

    products.forEach(product => {
      this.skuSelectorOnShelf.skuSelectorOnShelf(product);
    });
  }

  getFormData() {
    const nameInput = document.querySelector('.contato__input--nome');
    const emailInput = document.querySelector('.contato__input--email');
    const assuntoInput = document.querySelector('.contato__input--assunto');
    const mensagemInput = document.querySelector('.contato__input--mensagem');
    const form = document.querySelector('.contato__form');

    this._setAutomaticEmail();

    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = nameInput.value;
      const email = emailInput.value;
      const assunto = assuntoInput.value;
      const mensagem = mensagemInput.value;

      this.validateEmail(email, emailInput) &&
        this.sendFormData(name, email, assunto, mensagem);
    });
  }

  validateEmail(email, input) {
    const response = this.helpers_._isValidEmail(email);
    !response
      ? Swal.fire({
          icon: 'error',
          text: 'Para enviar, digite um e-mail válido!',
        })
      : null;

    input.focus();

    return response;
  }

  async addClientData(email, name) {
    const entityCode = (this._vtexjsMasterData.entityCode = 'CL');

    const params = {
      type: this._vtexjsMasterData.VTEX_ENDPOINTS.DocumentId(),
      documentId: email,
      entityCode,
    };

    const payload = {
      email: email,
      firstName: name,
    };

    await this._vtexjsMasterData.addMasterData(params, payload);
  }

  async _triggerMasterDataToVerifyEmail(emailValue) {
    let entityCode = (this._vtexjsMasterData.entityCode = 'CL');

    let checkParams = {
      type: this._vtexjsMasterData.VTEX_ENDPOINTS.Fields(entityCode),
      email: `?email=${emailValue}&_fields=id`,
    };

    const checkresult = await this._vtexjsMasterData.getMasterData(checkParams);

    return checkresult;
  }

  async sendFormData(name, email, assunto, mensagem) {
    const verifyEmail = await this._triggerMasterDataToVerifyEmail(email);

    if (!verifyEmail.length > 0) {
      this.addClientData(email, name);
    }

    let entityCode = (this._vtexjsMasterData.entityCode = 'CT');

    const payload = {
      email: email,
      nome: name,
      assunto: assunto,
      mensagem: mensagem,
    };

    let params = {
      type: this._vtexjsMasterData.VTEX_ENDPOINTS.Documents(),
      entityCode,
    };

    const result = await this._vtexjsMasterData
      .addMasterData(params, payload)
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'Enviado com sucesso!',
        });

        this.resetInputs();
      });
  }

  resetInputs() {
    const nameInput = document.querySelector('.contato__input--nome');
    const emailInput = document.querySelector('.contato__input--email');
    const assuntoInput = document.querySelector('.contato__input--assunto');
    const mensagemInput = document.querySelector('.contato__input--mensagem');

    nameInput.value = '';
    emailInput.value = '';
    assuntoInput.value = '';
    mensagemInput.value = '';
  }

  componentBuilder() {
    document.addEventListener('DOMContentLoaded', () => {
      this._initSlider();
      this.handleSkuModal();
      this.handleBreadcrumb();
      this.getFormData();
    });
  }
}

new Institucional();
