import Swal from 'sweetalert2';

import UserService from 'Services/userService';
import FrnComponent from '../frn.component';

export default class AvisemeComponent extends FrnComponent {
  constructor() {
    super();
    this._userService = new UserService();
  }

  renderAviseme(_element, skuId) {
    if (_element) {
      _element.innerHTML = ` <h4>AVISE-ME</h4>
          <span class="skuselector__avise-me-text">Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo</span>
          <input placeholder='Nome' class='skuselector__avise-me-input skuselector__avise-me-input--name' />
          <input placeholder='E-mail' class='skuselector__avise-me-input skuselector__avise-me-input--email' />
          <button class='skuselector__avise-me-btn'>
            <i class="icon-envelope-alt"></i>
            avise-me
          </button>`;
      this._setAutomaticEmail();
      this._setClickEvent(skuId);
    } else {
      console.log(`Element ${_element} not found!!`);
    }
  }

  async _setAutomaticEmail() {
    let emailElement_ = document.querySelector(
      `.skuselector__avise-me-input--email`
    );

    let nameElement_ = document.querySelector(
      `.skuselector__avise-me-input--name`
    );

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

  _setClickEvent(skuId) {
    const buttonElement_ = document.querySelector(`.skuselector__avise-me-btn`);
    let nameElement_ = document.querySelector(
      `.skuselector__avise-me-input--name`
    );
    let emailElement_ = document.querySelector(
      `.skuselector__avise-me-input--email`
    );

    buttonElement_.addEventListener('click', () => {
      const _isValidEmail = this.helper_._isValidEmail(emailElement_.value);

      let payload = {
        notifymeClientName: nameElement_.value,
        notifymeClientEmail: emailElement_.value,
        notifymeIdSku: skuId,
      };

      if (_isValidEmail) {
        this._tiggerPayload(payload, nameElement_, emailElement_);
      } else {
        this._handleErros();
      }
    });
  }

  _tiggerPayload(payload, nameElement_, emailElement_) {
    const data = this.helper_._FormData(payload);

    $.ajax({
      url: '/no-cache/AviseMe.aspx',
      data: data,
      processData: false,
      contentType: false,
      type: 'POST',
    }).done((data) => {
      this._succes(data);
      this._resetInput(nameElement_, emailElement_);
    });
  }

  _succes() {
    Swal.fire('Enviado com sucesso!', 'Nós te avisaremos quanto este produto estiver disponível!', 'success');
  }

  _resetInput(nameElement_, emailElement_) {
    nameElement_.value = '';
    emailElement_.value = '';
  }

  _handleErros() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Teu email é invalido!',
    });
  }
}
