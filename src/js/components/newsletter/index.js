import getMasterDataService from 'Services/masterDataService';
import FrnComponent from '../frn.component';
import Swal from 'sweetalert2';
import Helpers from 'Helpers/';

class NewsletterComponent extends FrnComponent {
  constructor() {
    super();
    this._vtexjsMasterData = new getMasterDataService();
    this._helper = new Helpers();

    this.formId = '#js-form-newsletter';
    this.inputEmailElement = '.js-form-input-email';
    this.inputNameElement = '.js-form-input-name';
    this.buttonSend = '#js-button-send';

    /**
     * Get Form's element
     */
    this.getFormElement = () => {
      return this.getElement(this.formId);
    };

    /**
     * Get email's input element
     */
    this.getInputEmailElement = () => {
      return this.getElement(this.inputEmailElement);
    };

    /**
     * Get name input element
     */
    this.getInputNameElement = () => {
      return this.getElement(this.inputNameElement);
    };

    /**
     * Get submit button's element
     */
    this.getButtonSubmitElement = () => {
      return this.getElement(this.buttonSend);
    };
  }

  handleGetNewsletter() {
    const inputEmailElement = this.getInputEmailElement();
    const inputNameElement = this.getInputNameElement();
    const formElement = this.getFormElement();
    const buttonSubmitElement = this.getButtonSubmitElement();

    if (
      inputEmailElement &&
      inputNameElement &&
      formElement &&
      buttonSubmitElement
    ) {
      buttonSubmitElement.addEventListener('click', async e => {
        e.preventDefault();

        const isFormValid = formElement.reportValidity();

        if (isFormValid) {
          const emailValue = this.getInputEmailElement().value;
          const nameValue = this.getInputNameElement().value;

          const validName_ = nameValue.includes('@');

          if (!validName_) {
            const verifyEmail_ = await this._triggerMasterDataToVerifyEmail(
              emailValue
            )

            if (verifyEmail_ == undefined) {
              const inputEmailElement = document.querySelector(
                this.inputEmailElement
              );

              const inputNameElement = document.querySelector(
                this.inputNameElement
              );

              const validEmail_ = this._helper._isValidEmail(emailValue);

              if (validEmail_) {
                await this._triggerMasterDaraToPutAnEmail(
                  emailValue,
                  nameValue
                );

                inputEmailElement.value = '';
                inputNameElement.value = '';
                Swal.fire({
                  icon: 'success',
                  text: 'Cadastrado com sucesso!',
                  customClass: {
                    container: 'newsletter-success',
                  },
                });
              } else {
                inputEmailElement.value = '';
                inputNameElement.value = '';
                Swal.fire({
                  icon: 'error',
                  text: 'Ocorreu um erro',
                  customClass: {
                    container: 'newsletter-fail',
                  },
                });
              }
            } else {
              inputEmailElement.value = '';
              inputNameElement.value = '';
              Swal.fire({
                customClass: {
                  container: 'newsletter-fail',
                },
                icon: 'warning',
                text: 'E-mail ja cadastratado',
              });
            }
          } else {
            Swal.fire({
              icon: 'error',
              text: 'Ocorreu um erro',
              customClass: {
                container: 'newsletter-fail',
              },
            });
          }
        }
      });
    }
  }

  /**
   *
   * @param {*} emailValue
   */

  async _triggerMasterDataToVerifyEmail(emailValue) {
    let checkParams = {
      email: `?email=${emailValue}&_fields=id`,
    };

    const checkresult = await this._vtexjsMasterData.getMasterData(checkParams);

    return checkresult;
  }

  /**
   *
   * @param {*} emailValue
   * @param {*} nameValue  
   */

  async _triggerMasterDaraToPutAnEmail(emailValue, nameValue) {
    const payload = {
      email: emailValue,
      name: nameValue,
    };

    const result = await this._vtexjsMasterData.addMasterData(payload);
    return result;
  }

  load() {
    this.handleGetNewsletter();
  }
}

export default NewsletterComponent;
