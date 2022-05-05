/* eslint-disable no-case-declarations */
class Helpers {
  _FormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  _mask(query, type) {
    const element = document.querySelector(query);

    switch (type) {
      case 'cpf':
        let inputValue = element.value;
        element.placeholder = '___.___.___-__';

        element.maxLength = 14;

        element.addEventListener('keyup', () => {
          let cpf = element.value.replace(/[^\d]/g, '');
          cpf.replace(/\D+/g, '');

          inputValue = cpf;
          let length = cpf.length;

          cpf =
            length <= 6
              ? inputValue.replace(/(\d{3})(\d{1,3})/g, '$1.$2')
              : length <= 9
              ? inputValue.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3')
              : inputValue.replace(
                  /(\d{3})(\d{3})(\d{3})(\d{1,2})/g,
                  '$1.$2.$3-$4'
                );

          element.classList.add('cpf--not-valid');

          if (this._isValidCPF(cpf)) {
            element.classList.remove('cpf--not-valid');
          }

          element.value = cpf;
        });

        break;

      case 'rg':
        element.placeholder = '__.___.___-_';
        element.maxLength = 11;

        element.addEventListener('keyup', () => {
          let rg = element.value.replace(/[^\d]/g, '');
          rg.replace(/\D+/g, '');

          element.value = rg;

          let rgLength = rg.length;

          rg =
            rgLength <= 8
              ? rg.replace(/(\d{2})(\d{3})(\d{3})/g, '$1.$2.$3')
              : rgLength <= 9
              ? rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
              : rg;

          element.value = rg;
        });

        break;

      case 'phone':
        element.placeholder = '(__)____-____';

        element.addEventListener('keyup', () => {
          let phone = element.value;

          phone = phone.replace(/\D/g, '');
          phone = phone.replace(/^(\d{2})(\d)/g, '($1)$2');
          phone = phone = phone.replace(/(\d)(\d{4})$/, '$1-$2');

          element.maxLength = 14;
          element.value = phone;
        });

        break;

      case 'time':
        element.type = 'time';
        break;

      case 'cnpj':
        element.placeholder = '__.___.___/____-_';

        element.addEventListener('keyup', () => {
          const cnpj = element.value;
          const unformattedCNPJ = element.value;

          element.maxLength = 20;

          element.classList.add('cnpj--not-valid');
          element.value = this.maskCpf(cnpj);

          if (this._isValidCNPJ(unformattedCNPJ)) {
            element.classList.remove('cnpj--not-valid');
          }
        });

        break;

      case 'cep':
        let cep = element.value;
        element.placeholder = '_____-__';
        element.maxLength = 9;

        element.addEventListener('keyup', () => {
          cep = element.value.replace(/\D/g, '');
          cep = element.value.replace(/^(\d{5})(\d)/, '$1-$2');

          element.value = cep;
        });

        break;
    }
  }

  _maskCpf(cnpj) {
    if (cnpj.length <= 11) {
      cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2');
      cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2');
      cnpj = cnpj.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
      cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
      cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
      cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
    }

    return cnpj;
  }

  static _slugifyString(str) {
    const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
    const to = 'aaaaaeeeeeiiiiooooouuuunc------';

    str = str.replace(/^\s+|\s+$/g, '').toLowerCase();

    for (let i = 0, l = from.lengthgth; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    return str;
  }

  static _formatPrice(int) {
    let price = `${int}`.replace(/([0-9]{2})$/g, ',$1');

    if (price.lengthgth > 6)
      price = price.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

    return price;
  }

  _isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
  }

  _isValidCPF(input_cpf) {
    let cpf = input_cpf.replace(/[^0-9]/g, '').toString(),
      numeros,
      digitos,
      soma,
      i,
      resultado,
      digitos_iguais = 1;

    if (cpf.length < 11) return false;

    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }

    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;

      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

      if (resultado != digitos.charAt(0)) return false;
      numeros = cpf.substring(0, 10);
      soma = 0;

      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

      if (resultado != digitos.charAt(1)) return false;

      return true;
    }
    return false;
  }

  _isValidCNPJ(cnpj) {
    const getVerificationCode1 = () => {
      let total = 0;
      let mod = 0;
      let factors = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      let nums = cnpj.substr(0, 12).split('');

      for (let i in nums) {
        total += nums[i] * factors[i];
      }
      mod = total % 11;
      return mod < 2 ? 0 : 11 - mod;
    };

    const getVerificationCode2 = code1 => {
      let total = 0;
      let mod = 0;
      let factors = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      let nums = (cnpj.substr(0, 12) + code1).split('');

      for (let i in nums) {
        total += nums[i] * factors[i];
      }

      mod = total % 11;
      return mod < 2 ? 0 : 11 - mod;
    };

    this.cnpj = cnpj.replace(/[^0-9]/g, '');
    this.verificationCode1;
    this.verificationCode2;

    if (this.cnpj.length < 14) throw 'CNPJ é muito curto';

    this.verificationCode1 = this.cnpj.substr(-2, 1);
    this.verificationCode2 = this.cnpj.substr(-1, 1);

    let code1 = getVerificationCode1();
    let code2 = getVerificationCode2(code1);

    return code1 == this.verificationCode1 && code2 == this.verificationCode2;
  }

  _hasElementChanged(element, callback) {
    const mutationObserverConfig = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    };

    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(mutation, callback);
        return callback();
      });
    });

    return mutationObserver.observe(element, mutationObserverConfig);
  }

  getParents(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
          let matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;

          while (--i >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
    }

    // Set up a parent array
    let parents = [];

    // Push each parent element to the array
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (selector) {
        if (elem.matches(selector)) {
          parents.push(elem);
        }

        continue;
      }

      parents.push(elem);
    }

    // Return our parent array
    return parents;
  }
}

export default Helpers;
