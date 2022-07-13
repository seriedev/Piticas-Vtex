/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["wpJsonpFRN"] = window["wpJsonpFRN"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers/index.js":
/*!*********************************!*\
  !*** ./src/js/helpers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
  /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
  /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
  /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
  /* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
  /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
  /* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
  /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
  /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
  /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
  /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__);
  
  
  
  
  
  
  
  
  
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  /* eslint-disable no-case-declarations */
  var Helpers = /*#__PURE__*/function () {
    function Helpers() {
      _classCallCheck(this, Helpers);
    }
  
    _createClass(Helpers, [{
      key: "_FormData",
      value: function _FormData(object) {
        var formData = new FormData();
        Object.keys(object).forEach(function (key) {
          return formData.append(key, object[key]);
        });
        return formData;
      }
    }, {
      key: "_mask",
      value: function _mask(query, type) {
        var _this = this;
  
        var element = document.querySelector(query);
  
        switch (type) {
          case 'cpf':
            var inputValue = element.value;
            element.placeholder = '___.___.___-__';
            element.maxLength = 14;
            element.addEventListener('keyup', function () {
              var cpf = element.value.replace(/[^\d]/g, '');
              cpf.replace(/\D+/g, '');
              inputValue = cpf;
              var length = cpf.length;
              cpf = length <= 6 ? inputValue.replace(/(\d{3})(\d{1,3})/g, '$1.$2') : length <= 9 ? inputValue.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3') : inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, '$1.$2.$3-$4');
              element.classList.add('cpf--not-valid');
  
              if (_this._isValidCPF(cpf)) {
                element.classList.remove('cpf--not-valid');
              }
  
              element.value = cpf;
            });
            break;
  
          case 'rg':
            element.placeholder = '__.___.___-_';
            element.maxLength = 11;
            element.addEventListener('keyup', function () {
              var rg = element.value.replace(/[^\d]/g, '');
              rg.replace(/\D+/g, '');
              element.value = rg;
              var rgLength = rg.length;
              rg = rgLength <= 8 ? rg.replace(/(\d{2})(\d{3})(\d{3})/g, '$1.$2.$3') : rgLength <= 9 ? rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4') : rg;
              element.value = rg;
            });
            break;
  
          case 'phone':
            element.placeholder = '(__)____-____';
            element.addEventListener('keyup', function () {
              var phone = element.value;
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
            element.addEventListener('keyup', function () {
              var cnpj = element.value;
              var unformattedCNPJ = element.value;
              element.maxLength = 20;
              element.classList.add('cnpj--not-valid');
              element.value = _this.maskCpf(cnpj);
  
              if (_this._isValidCNPJ(unformattedCNPJ)) {
                element.classList.remove('cnpj--not-valid');
              }
            });
            break;
  
          case 'cep':
            var cep = element.value;
            element.placeholder = '_____-__';
            element.maxLength = 9;
            element.addEventListener('keyup', function () {
              cep = element.value.replace(/\D/g, '');
              cep = element.value.replace(/^(\d{5})(\d)/, '$1-$2');
              element.value = cep;
            });
            break;
        }
      }
    }, {
      key: "_maskCpf",
      value: function _maskCpf(cnpj) {
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
    }, {
      key: "_slugifyString",
      value: function _slugifyString(str) {
        var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
        var to = 'aaaaaeeeeeiiiiooooouuuunc------';
        str = str.replace(/^\s+|\s+$/g, '').toLowerCase();
  
        for (var i = 0, l = from.lengthgth; i < l; i++) {
          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
  
        str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
        return str;
      }
    }, {
      key: "_formatPrice",
      value: function _formatPrice(int) {
        var price = "".concat(int).replace(/([0-9]{2})$/g, ',$1');
        if (price.lengthgth > 6) price = price.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
        return price;
      }
    }, {
      key: "_formatReal",
      value: function _formatReal(int) {
        var atual = int; //com R$
  
        var f = atual.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }); //sem R$
  
        var f2 = atual.toLocaleString('pt-br', {
          minimumFractionDigits: 2
        });
        return f2;
      }
    }, {
      key: "_formatCurrencyDecimal",
      value: function _formatCurrencyDecimal(numero) {
        var str = numero.toFixed(0);
        var resStr = str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2);
        var resposta = parseFloat(resStr);
        return resposta;
      }
    }, {
      key: "_isValidEmail",
      value: function _isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
    }, {
      key: "_isValidCPF",
      value: function _isValidCPF(input_cpf) {
        var cpf = input_cpf.replace(/[^0-9]/g, '').toString(),
            numeros,
            digitos,
            soma,
            i,
            resultado,
            digitos_iguais = 1;
        if (cpf.length < 11) return false;
  
        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
          }
        }
  
        if (!digitos_iguais) {
          numeros = cpf.substring(0, 9);
          digitos = cpf.substring(9);
          soma = 0;
  
          for (i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
          }
  
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0)) return false;
          numeros = cpf.substring(0, 10);
          soma = 0;
  
          for (i = 11; i > 1; i--) {
            soma += numeros.charAt(11 - i) * i;
          }
  
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1)) return false;
          return true;
        }
  
        return false;
      }
    }, {
      key: "_isValidCNPJ",
      value: function _isValidCNPJ(cnpj) {
        var getVerificationCode1 = function getVerificationCode1() {
          var total = 0;
          var mod = 0;
          var factors = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
          var nums = cnpj.substr(0, 12).split('');
  
          for (var i in nums) {
            total += nums[i] * factors[i];
          }
  
          mod = total % 11;
          return mod < 2 ? 0 : 11 - mod;
        };
  
        var getVerificationCode2 = function getVerificationCode2(code1) {
          var total = 0;
          var mod = 0;
          var factors = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
          var nums = (cnpj.substr(0, 12) + code1).split('');
  
          for (var i in nums) {
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
        var code1 = getVerificationCode1();
        var code2 = getVerificationCode2(code1);
        return code1 == this.verificationCode1 && code2 == this.verificationCode2;
      }
    }, {
      key: "_hasElementChanged",
      value: function _hasElementChanged(element, callback) {
        var mutationObserverConfig = {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        };
        var mutationObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            console.log(mutation, callback);
            return callback();
          });
        });
        return mutationObserver.observe(element, mutationObserverConfig);
      }
    }, {
      key: "getParents",
      value: function getParents(elem, selector) {
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
  
            while (--i >= 0 && matches.item(i) !== this) {
              ;
            }
  
            return i > -1;
          };
        } // Set up a parent array
  
  
        var parents = []; // Push each parent element to the array
  
        for (; elem && elem !== document; elem = elem.parentNode) {
          if (selector) {
            if (elem.matches(selector)) {
              parents.push(elem);
            }
  
            continue;
          }
  
          parents.push(elem);
        } // Return our parent array
  
  
        return parents;
      }
    }], [{
      key: "isMobile",
      value: function isMobile() {
        var query = window.matchMedia('(max-width: 991px)');
        return query.matches;
      }
    }, {
      key: "removeDiacritics",
      value: function removeDiacritics(str) {
        var defaultDiacriticsRemovalMap = [{
          base: 'A',
          letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        }, {
          base: 'AA',
          letters: /[\uA732]/g
        }, {
          base: 'AE',
          letters: /[\u00C6\u01FC\u01E2]/g
        }, {
          base: 'AO',
          letters: /[\uA734]/g
        }, {
          base: 'AU',
          letters: /[\uA736]/g
        }, {
          base: 'AV',
          letters: /[\uA738\uA73A]/g
        }, {
          base: 'AY',
          letters: /[\uA73C]/g
        }, {
          base: 'B',
          letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
        }, {
          base: 'C',
          letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
        }, {
          base: 'D',
          letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        }, {
          base: 'DZ',
          letters: /[\u01F1\u01C4]/g
        }, {
          base: 'Dz',
          letters: /[\u01F2\u01C5]/g
        }, {
          base: 'E',
          letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        }, {
          base: 'F',
          letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
        }, {
          base: 'G',
          letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        }, {
          base: 'H',
          letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        }, {
          base: 'I',
          letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        }, {
          base: 'J',
          letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
        }, {
          base: 'K',
          letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        }, {
          base: 'L',
          letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        }, {
          base: 'LJ',
          letters: /[\u01C7]/g
        }, {
          base: 'Lj',
          letters: /[\u01C8]/g
        }, {
          base: 'M',
          letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
        }, {
          base: 'N',
          letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        }, {
          base: 'NJ',
          letters: /[\u01CA]/g
        }, {
          base: 'Nj',
          letters: /[\u01CB]/g
        }, {
          base: 'O',
          letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        }, {
          base: 'OI',
          letters: /[\u01A2]/g
        }, {
          base: 'OO',
          letters: /[\uA74E]/g
        }, {
          base: 'OU',
          letters: /[\u0222]/g
        }, {
          base: 'P',
          letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
        }, {
          base: 'Q',
          letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
        }, {
          base: 'R',
          letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        }, {
          base: 'S',
          letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        }, {
          base: 'T',
          letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        }, {
          base: 'TZ',
          letters: /[\uA728]/g
        }, {
          base: 'U',
          letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        }, {
          base: 'V',
          letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
        }, {
          base: 'VY',
          letters: /[\uA760]/g
        }, {
          base: 'W',
          letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
        }, {
          base: 'X',
          letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
        }, {
          base: 'Y',
          letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        }, {
          base: 'Z',
          letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        }, {
          base: 'a',
          letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        }, {
          base: 'aa',
          letters: /[\uA733]/g
        }, {
          base: 'ae',
          letters: /[\u00E6\u01FD\u01E3]/g
        }, {
          base: 'ao',
          letters: /[\uA735]/g
        }, {
          base: 'au',
          letters: /[\uA737]/g
        }, {
          base: 'av',
          letters: /[\uA739\uA73B]/g
        }, {
          base: 'ay',
          letters: /[\uA73D]/g
        }, {
          base: 'b',
          letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
        }, {
          base: 'c',
          letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
        }, {
          base: 'd',
          letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        }, {
          base: 'dz',
          letters: /[\u01F3\u01C6]/g
        }, {
          base: 'e',
          letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        }, {
          base: 'f',
          letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
        }, {
          base: 'g',
          letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        }, {
          base: 'h',
          letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        }, {
          base: 'hv',
          letters: /[\u0195]/g
        }, {
          base: 'i',
          letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        }, {
          base: 'j',
          letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
        }, {
          base: 'k',
          letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        }, {
          base: 'l',
          letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        }, {
          base: 'lj',
          letters: /[\u01C9]/g
        }, {
          base: 'm',
          letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
        }, {
          base: 'n',
          letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        }, {
          base: 'nj',
          letters: /[\u01CC]/g
        }, {
          base: 'o',
          letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        }, {
          base: 'oi',
          letters: /[\u01A3]/g
        }, {
          base: 'ou',
          letters: /[\u0223]/g
        }, {
          base: 'oo',
          letters: /[\uA74F]/g
        }, {
          base: 'p',
          letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
        }, {
          base: 'q',
          letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
        }, {
          base: 'r',
          letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        }, {
          base: 's',
          letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        }, {
          base: 't',
          letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        }, {
          base: 'tz',
          letters: /[\uA729]/g
        }, {
          base: 'u',
          letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        }, {
          base: 'v',
          letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
        }, {
          base: 'vy',
          letters: /[\uA761]/g
        }, {
          base: 'w',
          letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
        }, {
          base: 'x',
          letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
        }, {
          base: 'y',
          letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        }, {
          base: 'z',
          letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        }];
  
        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
          str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }
  
        return str;
      }
    }]);
  
    return Helpers;
  }();
  
  /* harmony default export */ __webpack_exports__["default"] = (Helpers);
  
  /***/ }),
  
  /***/ "./src/js/pages/home/home.config.js":
  /*!******************************************!*\
    !*** ./src/js/pages/home/home.config.js ***!
    \******************************************/
  /*! exports provided: default */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
  
  
  var handleSlickDesktop = function handleSlickDesktop(prevArrow, nextArrow) {
    var autoplaySpeed = 4000;
    var transitionSpeed = 500;
    $('.js-full-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      dots: true
    });
    $('.js-full-banner').slick('setPosition');
    $('.js-full-banner--mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      dots: true
    });
    $('.js-full-banner--mobile').slick('setPosition');
  
    if ($(window).width() < 768) {
      $('.js-benefits').slick({
        slidesToShow: 1,
        variableWidth: false,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow
      });
    }
  
    
      var brandsList = $('.js-brand-list');
      brandsList.slick({
        infinite: true,
        autoplaySpeed: autoplaySpeed,
        speed: transitionSpeed,
        slidesToShow: 6,
        slidesToScroll: 6,
        swipe: true,
        dots: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          }
      ]
      });
    
  
    if ($(window).width() < 1024) {
      var generalSlide = $('.js-general-slide');
      generalSlide.slick({
        infinite: true,
        autoplaySpeed: autoplaySpeed,
        speed: transitionSpeed,
        slidesToShow: 6,
        slidesToScroll: 6,
        swipe: true,
        dots: true,
        arrows: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        }, {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }, {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }]
      });
    }
  };
  
  var handleShelfSlide = function handleShelfSlide(prevArrow, nextArrow) {
    var collections = document.querySelectorAll('.home__collections');
    collections.forEach(function (col) {
      col.querySelectorAll('.helperComplement').forEach(function (el) {
        col.querySelector('h2').classList.add('collection__title');
        el.remove();
      });
    });
    var slickConfig = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      }, {
        breakpoint: 634,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }, {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    };
    $('.home__collections ul').slick(slickConfig);
  };
  
  /* harmony default export */ __webpack_exports__["default"] = ({
    handleSlickDesktop: handleSlickDesktop,
    handleShelfSlide: handleShelfSlide
  });
  
  /***/ }),
  
  /***/ "./src/js/pages/home/index.js":
  /*!************************************!*\
    !*** ./src/js/pages/home/index.js ***!
    \************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
  /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
  /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
  /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
  /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
  /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
  /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
  /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__);
  /* harmony import */ var yall_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yall-js */ "./node_modules/yall-js/src/yall.mjs");
  /* harmony import */ var Helpers_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Helpers/index */ "./src/js/helpers/index.js");
  /* harmony import */ var _home_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.config */ "./src/js/pages/home/home.config.js");
  
  
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  
  
  
  
  
  
  
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  
  
  
  
  var Home = /*#__PURE__*/function () {
    function Home() {
      _classCallCheck(this, Home);
  
      this.helpers = new Helpers_index__WEBPACK_IMPORTED_MODULE_8__["default"]();
      this.pitNews();
      this.prevArrow = "<button class=\"slick-arrow-left\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 32 32\">\n        <path d=\"M20.2 9.804c-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414zM17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm0 28C9.832 30 4 24.168 4 17S9.832 4 17 4s13 5.832 13 13-5.832 13-13 13z\"/>\n    </svg>\n    </button>";
      this.nextArrow = "<button class=\"slick-arrow-right\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 32 32\">\n        <path d=\"M21.7 16.29l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71zM17.072 2.144c-8.244 0-14.928 6.684-14.928 14.928S8.828 32 17.072 32 32 25.316 32 17.072 25.316 2.144 17.072 2.144zm0 27.856C9.944 30 4.144 24.2 4.144 17.072s5.8-12.928 12.928-12.928S30 9.944 30 17.072 24.2 30 17.072 30z\"/>\n    </svg>\n      </button>";
      this.componentBuilder();
    }
  
    _createClass(Home, [{
      key: "_initSlick",
      value: function _initSlick() {
        _home_config__WEBPACK_IMPORTED_MODULE_9__["default"].handleShelfSlide(this.prevArrow, this.nextArrow);
        _home_config__WEBPACK_IMPORTED_MODULE_9__["default"].handleSlickDesktop(this.prevArrow, this.nextArrow);
      }
    },{
      key: "handleSkuModal",
      value: function handleSkuModal() {
        var _this = this;
  
        var products = document.querySelectorAll('.productCard');
        products.forEach(function (product) {
          _this.skuSelectorOnShelf.skuSelectorOnShelf(product);
        });
      }
    }, {
      key: "lazyLoading",
      value: function lazyLoading() {
        Object(yall_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
          observeChanges: true
        });
      }
    }, {
      key: "pitNews",
      value: function pitNews() {
        /* fetch('https://www.pitinews.com.br/wp-json/wp/v2/posts?_embed').then(function(response) {
          return response.json()
        }).then(function(posts) {
          console.log(posts);
        }); */
        var quantityPosts = 5;
        var postsContainer = document.querySelector(".pitnews__wrapper");
  
        var getPosts = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, data, pitnewsSlide, autoplaySpeed, transitionSpeed;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch("https://www.pitinews.com.br/wp-json/wp/v2/posts?_embed&per_page=".concat(quantityPosts));
  
                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();
  
                  case 5:
                    data = _context.sent;
                    data.map(function (post) {
                      var innerContent = "\n        <div class=\"pitnews__item\">\n          <a href=\"".concat(post.link, "\" target=\"_blank\" css=\"pitnews__link\">\n              <img src=\"").concat(post._embedded['wp:featuredmedia']['0'].media_details.sizes['banner-370x370'].source_url, "\" class=\"pitnews__img\" alt=\"\" srcset=\"\">\n              <div class=\"pitnews__item--title\">").concat(post.title.rendered, "</div>\n              <div class=\"pitnews__item--content\">\n                ").concat(post.excerpt.rendered, "\n              </div>\n          </a>\n        </div>\n        ");
                      postsContainer.innerHTML += innerContent;
                    });
  
                    if (!($(window).width() < 1024)) {
                      _context.next = 13;
                      break;
                    }
  
                    pitnewsSlide = $('.pitnews__wrapper');
                    autoplaySpeed = 4000;
                    transitionSpeed = 500;
                    _context.next = 13;
                    return pitnewsSlide.slick({
                      infinite: true,
                      autoplaySpeed: autoplaySpeed,
                      speed: transitionSpeed,
                      slidesToShow: 6,
                      slidesToScroll: 6,
                      swipe: true,
                      dots: true,
                      arrows: false,
                      responsive: [{
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true
                        }
                      }, {
                        breakpoint: 720,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          infinite: true
                        }
                      }, {
                        breakpoint: 540,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: true
                        }
                      }]
                    });
  
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
  
          return function getPosts() {
            return _ref.apply(this, arguments);
          };
        }();
  
        getPosts();
        /* const url = 'https://www.pitinews.com.br/wp-json/wp/v2/posts?_embed&per_page=5';
        const postsContainer = document.querySelector(".pitnews__wrapper");
          fetch(url)
        .then(response => response.json())
        .then(data => {
            data.map( post => {
            const innerContent =
            `
            <div class="pitnews__item">
              <a href="${post.link}" target="_blank" css="pitnews__link">
                  <img src="${post._embedded['wp:featuredmedia']['0'].media_details.sizes['banner-370x370'].source_url}" class="pitnews__img" alt="" srcset="">
                  <div class="pitnews__item--title">${post.title.rendered}</div>
                  <div class="pitnews__item--content">
                    ${post.excerpt.rendered}
                  </div>
              </a>
            </div>
            `
            postsContainer.innerHTML += innerContent;
          });
            if ($(window).width() < 1024) {
            const pitNewslSlide = $('.pitnews__wrapper');
        
            pitNewslSlide.slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 6,
                swipe: true,
                dots: true,
                arrows: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                    },
                  },
                  {
                    breakpoint: 720,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                    },
                  },
                  {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                    },
                  },
                ],
              });   
          }    
        }); */
      }
      /**
       * ComponentBuilder, he is running all your methods.
       */
  
    }, {
      key: "componentBuilder",
      value: function componentBuilder() {
        var _this2 = this;
  
        document.addEventListener('DOMContentLoaded', function () {
          _this2._initSlick();
  
          _this2.lazyLoading(); //this.handleSkuModal();
  
        });
      }
    }]);
  
    return Home;
  }();
  
  new Home();
  
  /***/ }),
  
  /***/ "./src/scss/pages/home/index.scss":
  /*!****************************************!*\
    !*** ./src/scss/pages/home/index.scss ***!
    \****************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // extracted by mini-css-extract-plugin
  
  /***/ }),
  
  /***/ 4:
  /*!***************************************************************************!*\
    !*** multi ./src/js/pages/home/index.js ./src/scss/pages/home/index.scss ***!
    \***************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! ./src/js/pages/home/index.js */"./src/js/pages/home/index.js");
  module.exports = __webpack_require__(/*! ./src/scss/pages/home/index.scss */"./src/scss/pages/home/index.scss");
  
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=frn.lojapiticas.home.js.map