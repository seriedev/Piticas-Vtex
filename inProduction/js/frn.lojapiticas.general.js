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
/******/ 		"general": 0
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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
    /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var Components_autocomplete_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/autocomplete/index */ "./src/js/components/autocomplete/index.js");
    /* harmony import */ var Components_Footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Footer/index */ "./src/js/components/Footer/index.js");
    /* harmony import */ var Components_miniCart_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/miniCart/index */ "./src/js/components/miniCart/index.js");
    /* harmony import */ var Components_newsletter_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/newsletter/index */ "./src/js/components/newsletter/index.js");
    /* harmony import */ var Components_quickBuy_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Components/quickBuy/index */ "./src/js/components/quickBuy/index.js");
    /* harmony import */ var Components_wishlist_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/wishlist/index */ "./src/js/components/wishlist/index.js");
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    
    
    
    
    var AppController = /*#__PURE__*/function () {
      function AppController() {
        _classCallCheck(this, AppController);
    
        this.footer = new Components_Footer_index__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.carrousel_ = new Components_newsletter_index__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.miniCart_ = new Components_miniCart_index__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.autocomplete_ = new Components_autocomplete_index__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.wishList_ = new Components_wishlist_index__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.shelfSku = new Components_quickBuy_index__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.eventHandlerBinds();
      }
    
      _createClass(AppController, [{
        key: "storeBennefitsCarousel",
        value: function storeBennefitsCarousel() {
          var prevArrow = "<button class=\"slick-arrow-left\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"9px\" height=\"15px\"><path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\" d=\"M7.955,2.878 L2.385,7.402 L7.955,11.927 C8.378,12.271 8.523,13.032 8.279,13.628 C8.034,14.223 7.493,14.427 7.070,14.083 L0.633,8.854 C0.266,8.556 0.126,7.948 0.250,7.402 C0.126,6.857 0.266,6.249 0.633,5.951 L7.070,0.722 C7.493,0.378 8.034,0.582 8.279,1.177 C8.523,1.773 8.378,2.534 7.955,2.878 Z\"/></svg>\n                      </button>";
          var nextArrow = "<button class=\"slick-arrow-right\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"9px\" height=\"14px\"><path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\" d=\"M8.447,8.537 L2.010,13.766 C1.587,14.110 1.046,13.906 0.802,13.310 C0.557,12.715 0.702,11.953 1.126,11.609 L6.695,7.085 L1.126,2.561 C0.702,2.217 0.557,1.456 0.802,0.860 C1.046,0.265 1.587,0.061 2.010,0.404 L8.447,5.634 C8.814,5.931 8.954,6.539 8.831,7.085 C8.954,7.631 8.814,8.239 8.447,8.537 Z\"/></svg>\n                      </button>";
          $('.bennefits-list__carousel').slick({
            adaptiveHeight: true,
            slidesToShow: 1,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow
          });
        }
      }, {
        key: "handleSlickTopbar",
        value: function handleSlickTopbar() {
          var prevArrow = "<button class=\"slick-arrow-left\">\n                        <img src=\"/arquivos/arrow-left.png\" alt=\"left\" srcset=\"\" />\n                      </button>";
          var nextArrow = "<button class=\"slick-arrow-right\">\n                        <img src=\"/arquivos/arrow-right.png\" alt=\"left\" srcset=\"\" />\n                      </button>";
          $('.header__topbar--item--row-slide').slick({
        
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow
          }); //$('.header__topbar--item--row-slide').slick('setPosition');
        }
      }, {
        key: "inputSearchMenu",
        value: function inputSearchMenu() {
          /* Search Desktop */
          if ($(window).width() > 1024) {
            /* Altera borda input ao digitar */
            var inputSearch = document.querySelector(".header .search #search-input");
            inputSearch.addEventListener("input", function (_) {
              if (inputSearch.value.length > 1) {
                inputSearch.classList.add("borderInvisible");
                $(".autocomplete-overlay").addClass("active");
    
                if (inputSearch.value.length == 1) {
                  $(".autocomplete-overlay").addClass("active");
                }
              } else {
                inputSearch.classList.remove("borderInvisible");
    
                if (inputSearch.value.length == 0) {
                  $(".autocomplete-overlay").removeClass("active");
                }
              }
            });
            jQuery(document).on("click", "#search-input", function () {
              $(".autocomplete-overlay").addClass("active");
            });
            jQuery(document).on("click", ".autocomplete-overlay", function () {
              $(".autocomplete-overlay").removeClass("active");
            });
          }
          /* Start Modal Search Mobile */
    
    
          if ($(window).width() < 1024) {
            var buttonSearchMobile = document.querySelector('.searchIcon');
            var searchModalMobileContent = document.querySelector('.search');
            var buttonSearchInModalMobile = document.querySelector('#smarthint-search-input')
            buttonSearchMobile.addEventListener('click', function () {
              return searchModalMobileContent.classList.add('show-search-mobile');
            });
            searchModalMobileContent.addEventListener('click', function (e) {
              if (searchModalMobileContent.classList.contains('show-search-mobile') && e.target != buttonSearchInModalMobile) {
                searchModalMobileContent.classList.remove('show-search-mobile');
              }
            });
            searchModalMobileContent.addEventListener('click', function (e) {
              if (e.target.matches('#search-input')) {
                searchModalMobileContent.classList.toggle('show-search-mobile');
              }
            });
    
            var _inputSearch = document.querySelector(".header .search #search-input");
    
            _inputSearch.addEventListener("input", function (_) {
              if (_inputSearch.value.length > 1) {
                _inputSearch.classList.add("borderInvisible");
    
                $(".search").addClass("show-search-mobile");
    
                if (_inputSearch.value.length == 1) {
                  $(".search").addClass("show-search-mobile");
                }
              } else {
                _inputSearch.classList.remove("borderInvisible");
    
                if (_inputSearch.value.length == 0) {
                  $(".search").removeClass("show-search-mobile");
                }
              }
            });
          }
        }
      }, {
        key: "scrollHeader",
        value: function scrollHeader() {
          var floatingBar = document.querySelector('.header'); //const menuElement_ = document.querySelector('.menu');
          // const allDepartamentElements_ = document.querySelector('.all-departaments');
          // allDepartamentElements_.addEventListener('click', e => {
          //   menuElement_.classList.toggle('menu__show');
          // });
    
          window.addEventListener('scroll', function (e) {
            if (window.scrollY > floatingBar.offsetHeight) {
              document.body.classList.add('floating-header'); // allDepartamentElements_.classList.add('all-departaments-show');
            } else {
              document.body.classList.remove('floating-header');
              $('.header__topbar--item--row-slide').slick('setPosition'); // allDepartamentElements_.classList.remove('all-departaments-show');
            }
          }, false);
        }
      }, {
        key: "handleHeaderMenu",
        value: function handleHeaderMenu() {
          var _this = this;
    
          //const menuToggler = document.querySelectorAll('.header .menuToggle');
          var menuToggler = document.querySelector('header .menuToggle');
          var menuTogglerDesktop = document.querySelector('.header__bottom'); //const menuWrapper = document.querySelector('.mobile-menu');
    
          var menuListElement_ = document.querySelectorAll('.menuToggle__menu-list');
          /*menuToggler.forEach(toggler => {
            toggler.addEventListener('click', e => {
              document.querySelector('.menuToggle').classList.toggle('menuToggle--open');
              menuWrapper.classList.toggle('mobile-menu--open');
            });
          });*/
    
          var subMenus = document.querySelectorAll('.submenu-title');
          var subMenusUl = document.querySelectorAll('.submenu-ul');
          var products = document.querySelectorAll('.submenu-product');
          var subMenuGroupWrapper = document.querySelector('.menu__group-sub-wrapper');
          var productsWithoutVitrineClass = document.querySelectorAll('.submenu-product .n2colunas');
          var productsWithoutVitrineClassTwo = document.querySelectorAll('.menu__group-sub-products .n2colunas');
          productsWithoutVitrineClass.forEach(function (product) {
            product.classList.remove('vitrine');
          });
          productsWithoutVitrineClassTwo.forEach(function (product) {
            product.classList.remove('vitrine');
          });
          subMenuGroupWrapper.addEventListener('mouseleave', function () {
            products.forEach(function (product) {
              product.classList.remove('product--active');
            });
            subMenusUl.forEach(function (subMenuUl) {
              subMenuUl.classList.remove('product--active');
            });
          });
    
          var _loop = function _loop(index) {
            subMenus[index].addEventListener("mouseenter", function () {
              products.forEach(function (product) {
                product.classList.remove('product--active');
              });
              subMenusUl.forEach(function (subMenuUl) {
                subMenuUl.classList.remove('product--active');
              });
              products[index].classList.add('product--active');
              subMenusUl[index].classList.add('product--active');
            });
          };
    
          for (var index = 0; index < subMenus.length; index++) {
            _loop(index);
          }
    
          var el = document.querySelector('.header__top .menu__sticky .menu__group-item a');
          el.addEventListener('click', function () {
            menuTogglerDesktop.classList.toggle('visible-menu-desktop');
          });
          menuToggler.addEventListener('click', function (e) {
            if (e.target.matches('.menuToggle input') || e.target.matches('.menuToggle-icon-close svg') || e.target.matches('.menuToggle-overlay')) {
              menuToggler.classList.toggle('menuToggle--open');
              if(window.screen.width < 1024 ){
                  let itensHeaderMenuMobile = document.querySelector('header .itens-right')  
                  if(itensHeaderMenuMobile.style.zIndex === "5" ){
                      setTimeout(()=>{
                          itensHeaderMenuMobile.setAttribute('style','z-index:4');
                      },4e2)  
                  }else{
                    itensHeaderMenuMobile.setAttribute('style','z-index:5');    
                  }  
              }
            }
          });
          menuListElement_.forEach(function (li) {
            li.addEventListener('click', function (e) {
              var subMenu = li.querySelector('.menuToggle__group-sub-items');
    
              if (e.target.matches('.menuToggle__group-sub-first-item .fas') || e.target.matches('.menuToggle__group-sub-items-text')) {
                e.preventDefault();
    
                if (subMenu) {
                  if (subMenu.style.maxHeight) {
                    li.classList.remove('mobile-menu__menu-list--active');
                    subMenu.classList.remove('menuToggle__group-sub-items--active');
                    subMenu.style.maxHeight = null;
                  } else {
                    subMenu.classList.add('menuToggle__group-sub-items--active');
                    li.classList.add('mobile-menu__menu-list--active'); //subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
    
                    subMenu.style.maxHeight = '100vh';
                  }
                }
              } else {
                _this.unbind(e);
              }
            });
          });
          this.handleOpenGesture();
          this.handleCloseGesture();
          $('.header .menu .menu__group').clone().appendTo('.mobile-menu__menu'); // submenu mobile
    
          var query = window.matchMedia('(max-width: 991px)');
    
          if (query.matches) {
            var submenu = document.querySelectorAll('.menu__group-item.haschild > span');
            submenu.forEach(function (element) {
              element.addEventListener('click', function (e) {
                e.preventDefault();
                element.nextElementSibling.classList.toggle('menu__group-sub--open');
              });
            });
          }
        }
      }, {
        key: "handleOpenGesture",
        value: function handleOpenGesture() {
          var checkbox = document.querySelector('.header .menuToggle > input');
          var mainElement = document.querySelector('main');
          var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a(mainElement, {});
    
          var checkIfItsSlide = function checkIfItsSlide(node) {
            if (node && node.classList) {
              if (node.classList.contains('slick-slide') || node.classList.contains('slick-track') || node.classList.contains('slick-list')) {
                return true;
              }
            }
          };
    
          var checkIfFilterIsOpen = function checkIfFilterIsOpen() {
            var filter = document.querySelector('.js-filter');
            if (filter) return filter.classList.contains('filter__show') ? true : false;
          };
    
          hammer.on('swiperight', function (ev) {
            var isSlide = false;
            var isFilterOpen = false;
            var nodes = [];
            var element = ev.target;
            nodes.push(element);
    
            while (element.parentNode) {
              nodes.unshift(element.parentNode);
              element = element.parentNode;
              var slide = checkIfItsSlide(element.parentNode);
              var filter = checkIfFilterIsOpen();
    
              if (slide) {
                isSlide = true;
                return;
              }
    
              if (filter) {
                isFilterOpen = true;
                return;
              }
            }
    
            if (!isSlide || !isFilterOpen) {
              checkbox.click();
              checkbox.checked = true;
            }
          });
        }
      }, {
        key: "handleCloseGesture",
        value: function handleCloseGesture() {
          var checkbox = document.querySelector('.header .menuToggle > input');
          var menuBody = document.querySelector('.header .menuToggle__menu');
          var hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_1___default.a(menuBody, {});
          hammer.on('swipeleft', function (ev) {
            checkbox.click();
            checkbox.checked = false;
          });
        }
      }, {
        key: "handleSkuModal",
        value: function handleSkuModal() {
          var _this2 = this;
    
          var products = document.querySelectorAll('.productCard');
    
          if (products.length) {
            products.forEach(function (product) {
              _this2.shelfSku.skuSelectorOnShelf(product);
            });
          }
        }
      }, {
        key: "handleLoginUser",
        value: function handleLoginUser(){
          const vendorURL = document.location.protocol + "//" + document.location.hostname
          document.querySelector("header .user > a").addEventListener('click',(e)=>{
            e.preventDefault();
            fetch(vendorURL +'/api/vtexid/pub/authenticated/user')
            .then(res=>res.json()).then((data) =>{
                data != null ? window.location.href = vendorURL + "/_secure/account#/profile"
                : vtexid.start({ returnUrl: "", userEmail: '', locale: 'pt-BR', forceReload: false });  
            })
            .catch(console.error)
          })
        }
      }, {
        key: "eventHandlerBinds",
        value: function eventHandlerBinds() {
          var _this3 = this;
    
          document.addEventListener('DOMContentLoaded', function () {
            _this3.carrousel_.load();
    
            _this3.miniCart_.load();
    
            _this3.autocomplete_.load();
    
            _this3.scrollHeader();
    
            _this3.handleHeaderMenu();
    
            _this3.inputSearchMenu();
    
            _this3.handleSkuModal();
    
            _this3.shelfSku._categoryQuickBuy();
    
            _this3.footer.handleDropdown();
    
            _this3.storeBennefitsCarousel();
    
            _this3.handleSlickTopbar();
    
            _this3.wishList_.load();

            _this3.handleLoginUser();
          });
        }
      }]);
    
      return AppController;
    }();
    
    new AppController();
    
    /***/ }),
    
    /***/ "./src/js/components/Footer/index.js":
    /*!*******************************************!*\
      !*** ./src/js/components/Footer/index.js ***!
      \*******************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var Footer = /*#__PURE__*/function () {
      function Footer() {
        _classCallCheck(this, Footer);
      }
    
      _createClass(Footer, [{
        key: "handleDropdown",
        value: function handleDropdown() {
          var _this = this;
    
          var initiateDropdown = function initiateDropdown(query) {
            if (query.matches) {
              _this.dropdown();
            } else {
              return;
            }
          };
    
          var query = window.matchMedia('(max-width: 991px)');
          setTimeout(function () {
            initiateDropdown(query);
            query.addListener(initiateDropdown);
          }, 2000);
        }
      }, {
        key: "dropdown",
        value: function dropdown() {
          var dropdownToggle = document.querySelectorAll('.accordion-toggle');
          dropdownToggle.forEach(function (toggle) {
            var panel = toggle.nextElementSibling;
            toggle.addEventListener('click', function (e) {
              e.target.classList.toggle('open-accordion');
    
              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
              }
            });
          });
        }
      }]);
    
      return Footer;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/Placeholder/index.js":
    /*!************************************************!*\
      !*** ./src/js/components/Placeholder/index.js ***!
      \************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaceHolderLoading; });
    /* harmony import */ var Helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers//index */ "./src/js/helpers/index.js");
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    var PlaceHolderLoading = /*#__PURE__*/function () {
      function PlaceHolderLoading() {
        _classCallCheck(this, PlaceHolderLoading);
    
        this._helpers = new Helpers_index__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
    
      _createClass(PlaceHolderLoading, [{
        key: "loaderController",
        value: function loaderController(loading, parentElement, name) {
          var uglifiedName = this._helpers._slugifyString(name);
    
          var template = this.handleChooseTemplate(name);
          var body = document.getElementsByTagName('body'); // body[0].setAttribute('style', 'overflow: hidden!important');
    
          if (loading == true) {
            parentElement.setAttribute('style', 'visibility: hidden; position: relative;');
            parentElement.insertAdjacentHTML("beforeend", "".concat(template("".concat(uglifiedName, "__placeholder"))));
            var placeholder = document.querySelector(".".concat(uglifiedName, "__placeholder"));
            placeholder.setAttribute('style', 'visibility:visible; position:sticky; bottom:100%; width: 100%;');
          } else {
            parentElement.setAttribute('style', 'visibility: visible!important; pointer-events:auto; position:unset; top:unset; width: 100%;');
            body[0].setAttribute('style', 'overflow: auto');
    
            if (document.querySelector(".".concat(uglifiedName, "__placeholder"))) {
              console.log("removing ".concat(name, " placeholder"));
              document.querySelector(".".concat(uglifiedName, "__placeholder")).remove();
            }
          }
        }
      }, {
        key: "handleChooseTemplate",
        value: function handleChooseTemplate(name) {
          switch (name) {
            case 'productPage':
              return this.handleLoadProductPage;
    
            case 'productPage__sku-selector':
              return this.handleLoadShelf;
    
            case 'shelf__sku-selector':
              return this.handleLoadShelf;
    
            case 'home':
              return this.handleLoadProductPage;
    
            case 'autocomplete':
              return this.handleLoadShelf;
    
            case 'filter':
              return this.handleLoadFilters;
    
            case 'video':
              return this.handleVideo;
    
            case 'spinner':
              return this.handleSpinningLoader;
          }
        }
      }, {
        key: "handleVideo",
        value: function handleVideo(classe) {
          return "<div class=\"loader ".concat(classe, "\"></div>");
        }
      }, {
        key: "handleSpinningLoader",
        value: function handleSpinningLoader(classe) {
          return "<div class=\"loader ".concat(classe, "\"></div>");
        }
      }, {
        key: "handleLoadFilters",
        value: function handleLoadFilters(classe) {
          return "<div class=\"ph-item ".concat(classe, "\">\n          <div class=\"ph-col-12\">\n              <div class=\"ph-col-6 empty\"></div>\n              <div class=\"ph-col-12\"></div>\n            </div>\n          </div>");
        }
      }, {
        key: "handleLoadProductPage",
        value: function handleLoadProductPage(classe) {
          return "<div class=\"ph-item ".concat(classe, "\">\n          <div class=\"ph-col-4\">\n            <div class=\"ph-picture picture-product\"></div>\n            <div class=\"ph-picture picture-product\"></div>\n            <div class=\"ph-picture picture-product\"></div>\n          </div>\n          <div>\n          <div class=\"ph-row\">\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n          </div>\n        </div>\n        <div class=\"ph-col-12 line-margin\">\n          <div class=\"ph-row\">\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-6\"></div>\n            <div class=\"ph-col-6 empty\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8\"></div>\n            <div class=\"ph-col-4 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n          </div>\n        </div>\n        \n        \n      </div>");
        }
      }, {
        key: "handleLoadBanner",
        value: function handleLoadBanner() {//Logica
        }
      }, {
        key: "handleLoadShelf",
        value: function handleLoadShelf(classe) {
          return "<div class=\"ph-item ".concat(classe, "\">\n      <div class=\"ph-col-12\">\n          <div class=\"ph-picture\"></div>\n          <div class=\"ph-row\">\n              <div class=\"ph-col-6 big\"></div>\n              <div class=\"ph-col-4 empty big\"></div>\n              <div class=\"ph-col-2 big\"></div>\n              <div class=\"ph-col-4\"></div>\n              <div class=\"ph-col-8 empty\"></div>\n              <div class=\"ph-col-6\"></div>\n              <div class=\"ph-col-6 empty\"></div>\n              <div class=\"ph-col-12\"></div>\n          </div>\n      </div>\n      <div class=\"ph-col-12\">\n          <div class=\"ph-row\">\n              <div class=\"ph-col-6 big\"></div>\n              <div class=\"ph-col-4 empty big\"></div>\n              <div class=\"ph-col-2 big\"></div>\n              <div class=\"ph-col-4\"></div>\n              <div class=\"ph-col-8 empty\"></div>\n              <div class=\"ph-col-6\"></div>\n              <div class=\"ph-col-6 empty\"></div>\n              <div class=\"ph-col-12\"></div>\n          </div>\n      </div>\n  </div>");
        }
      }, {
        key: "_productCard",
        value: function _productCard() {
          return "\n    <div class=\"col-12 col-sm-6\">\n\n      <div class=\"ph-item\">\n        <div class=\"ph-col-12\">\n          <div class=\"ph-picture\"></div>\n          <div class=\"ph-row\">\n            <div class=\"ph-col-4\"></div>\n            <div class=\"ph-col-8 empty\"></div>\n            <div class=\"ph-col-12\"></div>\n          </div>\n        </div>\n        <div class=\"ph-col-2\">\n          <div class=\"ph-avatar\"></div>\n        </div>\n        <div>\n          <div class=\"ph-row\">\n            <div class=\"ph-col-12\"></div>\n            <div class=\"ph-col-2\"></div>\n            <div class=\"ph-col-10 empty\"></div>\n            <div class=\"ph-col-8 big\"></div>\n            <div class=\"ph-col-4 big empty\"></div>\n          </div>\n        </div>\n      </div>\n\n  </div>\n    ";
        }
      }]);
    
      return PlaceHolderLoading;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/ProductCard/index.js":
    /*!************************************************!*\
      !*** ./src/js/components/ProductCard/index.js ***!
      \************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
    /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
    /* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
    /* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */ var Services_catalogService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! Services/catalogService */ "./src/js/services/catalogService.js");
    /* harmony import */ var _components_Placeholder_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Placeholder/index */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var _frn_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../frn.component */ "./src/js/components/frn.component.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    
    var ProductCardComponent = /*#__PURE__*/function (_FrnComponent) {
      _inherits(ProductCardComponent, _FrnComponent);
    
      var _super = _createSuper(ProductCardComponent);
    
      function ProductCardComponent() {
        var _this;
    
        _classCallCheck(this, ProductCardComponent);
    
        _this = _super.call(this);
        _this._getCatalag = new Services_catalogService__WEBPACK_IMPORTED_MODULE_24__["default"]();
        _this.collectionItemHelper = '.';
        _this.loading = new _components_Placeholder_index__WEBPACK_IMPORTED_MODULE_25__["default"]();
        _this.productCardClass = 'productCard';
        _this.productCardImageClass = '.js-shelf-product-image';
        _this.productCardImageHasHoverClass = "".concat(_this.productCardClass, "__image--hasHover");
        _this.productCardImageLoadingClass = "".concat(_this.productCardClass, "__image--loading");
        return _this;
      }
    
      _createClass(ProductCardComponent, [{
        key: "general",
        value: function general() {
          $('.helperComplement').remove();
        }
      }, {
        key: "renderAttributes",
        value: function renderAttributes() {
          var _this2 = this;
    
          var productCards = document.querySelectorAll(".".concat(this.productCardClass));
    
          _toConsumableArray(productCards).forEach( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(productCard) {
              var productCardId, params, res;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      productCardId = productCard.dataset.productId;
                      params = {
                        type: _this2._getCatalag.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
                        id: productCardId
                      };
                      _context.next = 4;
                      return _this2._getCatalag.getCatalog(params);
    
                    case 4:
                      res = _context.sent;
    
                      _this2.renderSecondaryImage(productCard, res);
    
                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
    
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      }, {
        key: "renderSecondaryImage",
        value: function renderSecondaryImage(element, data) {
          var productCardImageElement = element.querySelector(this.productCardImageClass);
          var images = data[0].items[0].images;
    
          if (images.length > 1 && productCardImageElement) {
            var image = this.formatterImageTag(images[1], true);
            productCardImageElement.insertAdjacentHTML('beforeend', image);
            productCardImageElement.classList.add(this.productCardImageHasHoverClass);
          }
        }
      }, {
        key: "formatterImageTag",
        value: function formatterImageTag() {
          var imageProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var secundary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var sizes = arguments.length > 2 ? arguments[2] : undefined;
          var imageId = imageProp.imageId,
              imageText = imageProp.imageText,
              imageUrl = imageProp.imageUrl;
          var imageFormat = imageUrl.split('.')[4].split('?')[0];
          var urlFormatted = "/arquivos/ids/".concat(imageId, "-").concat(sizes.width, "-").concat(sizes.height, "/").concat(imageText, ".").concat(imageFormat);
          var secundaryClass = "".concat(this.productCardClass, "__img--secundary");
          return "<img data-src=\"https://www.kindpng.com/picc/m/392-3926418_loading-spinner-loading-icon-png-transparent-png-download.png\" src=\"".concat(urlFormatted, "\" class=\"").concat(secundary ? secundaryClass : 'lazy', "\" />");
        }
      }, {
        key: "renderCard",
        value: function renderCard(product) {
          var secundary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var sizes = arguments.length > 2 ? arguments[2] : undefined;
          var index = arguments.length > 3 ? arguments[3] : undefined;
          var items = product.items;
          var newFilterItem = items.filter(function (quantity) {
            var available = quantity.sellers[0].commertialOffer.AvailableQuantity;
    
            if (available >= 1) {
              return available;
            }
          });
    
          var filteredByItemWithStoke = function filteredByItemWithStoke() {
            if (!newFilterItem.length == 0) {
              newFilterItem.filter(function (item) {
                if (item.sellers[0].commertialOffer.AvailableQuantity == 0) {
                  return items;
                }
              });
              return newFilterItem;
            }
    
            return items;
          };
    
          var _filteredByItemWithSt = filteredByItemWithStoke()[0].sellers[0].commertialOffer,
              Price = _filteredByItemWithSt.Price,
              Installments = _filteredByItemWithSt.Installments,
              ListPrice = _filteredByItemWithSt.ListPrice,
              DiscountHighLight = _filteredByItemWithSt.DiscountHighLight,
              AvailableQuantity = _filteredByItemWithSt.AvailableQuantity;
    
          var commertialCondition = function commertialCondition(className) {
            return Price > 0 ? "productCard__".concat(className, "--visible") : "productCard__".concat(className, "--hidden");
          };
    
          var stockCondition = function stockCondition(className) {
            return AvailableQuantity == 0 ? "productCard__".concat(className, "--hidden") : "productCard__".concat(className, "--visible");
          };
    
          var tagCondition = function tagCondition(className) {
            return Price !== ListPrice ? "productCard__".concat(className, "--visible") : "productCard__".concat(className);
          };
    
          return "\n      <article class=\"productCard\" data-product-id=\"".concat(product.productId, "\" data-index=").concat(index, ">\n        <div class=\"render-checkbox\"></div>\n        <div class=\"productCard__link\">\n          <a class=\"productCard__link\" href=\"").concat(product.link, "\">\n            <div class=\"productCard__image js-product-image\">\n              ").concat(this.formatterImageTag(filteredByItemWithStoke()[0].images[0], secundary, sizes), "\n            </div>\n          </a>\n          <a data-product-id='").concat(product.productId, "' class=\"productCard__wishList\" tabindex=\"0\"></a>\n        </div>\n        <div class=\"productCard__flag\">\n\n            ").concat(DiscountHighLight[0] == undefined ? "" : "<span class=\"productCard__flag--span\">".concat(DiscountHighLight[0]['<Name>k__BackingField'], "</span>"), "\n        </div>\n        <span class=\"productCard__brand\">\n          ").concat(product.brand, "\n        </span>\n        <a class=\"productCard__link\" href=\"").concat(product.link, "\">\n          <h3 class=\"productCard__name\">\n            ").concat(product.productName.toLowerCase(), "\n          </h3>\n        </a>\n        <div class=\"productCard__price ").concat(tagCondition('price'), "\">\n          <span class=\"productCard__price--best\" data-price=").concat(Price.toFixed(2), ">\n            R$ ").concat(Price.toFixed(2).replace('.', ','), "\n          </span>\n          <span class=\"productCard__price--old ").concat(Price <= ListPrice ? 'hide' : 'show', "\">\n            R$ ").concat(ListPrice.toFixed(2).replace('.', ','), "\n          </span>\n          ").concat(Installments.length > 0 ? "\n            <span class=\"productCard__installments\">\n              (ou ".concat(this.renderInstallments(Installments), " sem juros)\n            </span>\n          ") : '', "\n        </div>\n\n        ").concat(AvailableQuantity == 0 ? "\n          <span class=\"productCard__buy productCard__unavailable ".concat('productCard__unavailable--visible', "\">\n            Indispon\xEDvel\n          </span>\n          ") : "<a class=\"productCard__sku-selector productCard__buy\" tabindex=\"0\">Comprar</a>", "\n        <div class=\"productCard__skuSelector-wrapper productCard__variations\">\n        </div>\n      </article>\n    ");
        }
      }, {
        key: "renderInstallments",
        value: function renderInstallments(installs) {
          var _installs$reduce = installs.reduce(function (prev, current) {
            return prev.NumberOfInstallments > current.NumberOfInstallments ? prev : current;
          }, 0),
              Value = _installs$reduce.Value,
              NumberOfInstallments = _installs$reduce.NumberOfInstallments;
    
          return "<span class=\"productCard__installments--strong productCard__installments--installments\">".concat(NumberOfInstallments, "x</span> de <span class=\"productCard__installments--strong productCard__installments--value\">R$ ").concat(Value.toFixed(2).replace('.', ','), "</span>");
        }
      }, {
        key: "load",
        value: function load() {
          this.general(); // this.renderAttributes();
        }
      }]);
    
      return ProductCardComponent;
    }(_frn_component__WEBPACK_IMPORTED_MODULE_26__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (ProductCardComponent);
    
    /***/ }),
    
    /***/ "./src/js/components/SkuSelector/SkuSelector.js":
    /*!******************************************************!*\
      !*** ./src/js/components/SkuSelector/SkuSelector.js ***!
      \******************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkuSelectorComponent; });
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var Services_catalogService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Services/catalogService */ "./src/js/services/catalogService.js");
    /* harmony import */ var Services_userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Services/userService */ "./src/js/services/userService.js");
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    var SkuSelectorComponent = /*#__PURE__*/function () {
      function SkuSelectorComponent(id, context) {
        _classCallCheck(this, SkuSelectorComponent);
    
        this._vtexjsCatalog = new Services_catalogService__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._userService = new Services_userService__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
    
      _createClass(SkuSelectorComponent, [{
        key: "fetchVariationsData",
        value: function () {
          var _fetchVariationsData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
            var params, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    params = {
                      type: this._vtexjsCatalog.VTEX_ENDPOINTS.VARIATIONS,
                      id: id
                    };
                    _context.next = 3;
                    return this._vtexjsCatalog.getCatalog(params);
    
                  case 3:
                    response = _context.sent;
                    _context.next = 6;
                    return response;
    
                  case 6:
                    this._data = _context.sent;
                    return _context.abrupt("return", response);
    
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function fetchVariationsData(_x) {
            return _fetchVariationsData.apply(this, arguments);
          }
    
          return fetchVariationsData;
        }()
      }, {
        key: "element",
        get: function get() {
          return this._element;
        },
        set: function set(element) {
          this._element = element;
        }
      }, {
        key: "productInfo",
        get: function get() {
          return this._productInfo;
        },
        set: function set(data) {
          this._productInfo = data;
        }
      }, {
        key: "mainVariation",
        get: function get() {
          return this._mainVariation;
        },
        set: function set(variation) {
          this._mainVariation = variation;
        }
      }, {
        key: "sku",
        get: function get() {
          return this._sku;
        },
        set: function set(sku) {
          this._sku = sku;
        }
      }, {
        key: "skuFinal",
        get: function get() {
          return this._skuFinal;
        },
        set: function set(sku) {
          this._skuFinal = sku;
        }
      }, {
        key: "skuSelected",
        get: function get() {
          return this._skuSelected;
        },
        set: function set(obj) {
          this._skuSelected = obj;
        }
      }, {
        key: "whereAmI",
        get: function get() {
          return this._whereAmI;
        },
        set: function set(context) {
          this._whereAmI = context;
        }
      }, {
        key: "productId",
        get: function get() {
          return this._productId;
        }
      }, {
        key: "response",
        get: function get() {
          return this._data ? this._data : this._variationData;
        }
      }]);
    
      return SkuSelectorComponent;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/SkuSelector/SkuSelectorController.js":
    /*!****************************************************************!*\
      !*** ./src/js/components/SkuSelector/SkuSelectorController.js ***!
      \****************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkuSelectorController; });
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
    /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
    /* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */ var Services_cartService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! Services/cartService */ "./src/js/services/cartService.js");
    /* harmony import */ var _components_miniCart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/miniCart */ "./src/js/components/miniCart/index.js");
    /* harmony import */ var _components_Placeholder_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Placeholder/index */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var _SkuSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SkuSelector */ "./src/js/components/SkuSelector/SkuSelector.js");
    /* harmony import */ var _skuSelectorView__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./skuSelectorView */ "./src/js/components/SkuSelector/skuSelectorView.js");
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    
    
    
    var SkuSelectorController = /*#__PURE__*/function () {
      function SkuSelectorController(config) {
        _classCallCheck(this, SkuSelectorController);
    
        if (!config) throw new Error('SkuSelectorController não recebeu os parametros');
        this._config = config;
        this._context = config.context;
        this._loader = config.loader ? config.loader : true;
        this.skuSelectorModel_ = new _SkuSelector__WEBPACK_IMPORTED_MODULE_22__["default"](config.id, config.context);
        this.placeholderLoading_ = new _components_Placeholder_index__WEBPACK_IMPORTED_MODULE_21__["default"]();
        this._vtexjsCartSerive = new Services_cartService__WEBPACK_IMPORTED_MODULE_19__["default"]();
        this.miniCart_ = new _components_miniCart__WEBPACK_IMPORTED_MODULE_20__["default"]();
        this._element = config.viewElement;
        this.skuSelectorView_ = new _skuSelectorView__WEBPACK_IMPORTED_MODULE_23__["default"](this._element, config.context);
        this.skuSelectorModel_.element = config.viewElement;
        this.skuSelectorModel_.whereAmI = config.context;
      }
    
      _createClass(SkuSelectorController, [{
        key: "handleOptionClick",
        value: function handleOptionClick() {
          var _this = this;
    
          var container = this._element;
          var options = container.querySelectorAll('.variation__option');
          options && options.forEach(function (option) {
            option.addEventListener('click', function (e) {
              var skuValue = e.target.dataset.skuValue;
              var skuCamp = e.target.dataset.skuCamp;
    
              _this.handleSelection(e, skuCamp, skuValue);
            });
          });
        }
      }, {
        key: "getSkusWithThisOption",
        value: function () {
          var _getSkusWithThisOption = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(skuCamp, skuValue) {
            var response, skus;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.skuSelectorModel_.response;
    
                  case 2:
                    response = _context.sent;
                    skus = response.skus;
                    return _context.abrupt("return", skus.filter(function (sku) {
                      return sku.dimensions[skuCamp] == skuValue;
                    }));
    
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function getSkusWithThisOption(_x, _x2) {
            return _getSkusWithThisOption.apply(this, arguments);
          }
    
          return getSkusWithThisOption;
        }()
      }, {
        key: "filterSelectedSku",
        value: function () {
          var _filterSelectedSku = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, productId, skuSelectedObj, skus, skuSelected;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.skuSelectorModel_.response;
    
                  case 2:
                    response = _context2.sent;
                    productId = this.skuSelectorModel_.productId;
                    skuSelectedObj = this.skuSelectorModel_.skuSelected;
                    skus = response.skus;
                    skuSelected = skus.filter(function (sku) {
                      return JSON.stringify(sku.dimensions) == JSON.stringify(skuSelectedObj[productId]);
                    });
                    skuSelected && this.handleSkuSelectedReturn(skuSelected);
                    return _context2.abrupt("return", skuSelected);
    
                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function filterSelectedSku() {
            return _filterSelectedSku.apply(this, arguments);
          }
    
          return filterSelectedSku;
        }()
      }, {
        key: "handleSelection",
        value: function () {
          var _handleSelection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event, skuCamp, skuValue) {
            var container, allOptions, skusWithThisOption, unnavailableOptions;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    container = this._element;
                    allOptions = container.querySelectorAll('.variation__option');
                    _context3.next = 4;
                    return this.getSkusWithThisOption(skuCamp, skuValue);
    
                  case 4:
                    skusWithThisOption = _context3.sent;
                    unnavailableOptions = this.handleUnnavailableOptions(allOptions, skusWithThisOption, event, skuCamp);
                    this.handleSelectionObject(event, skuCamp, skuValue, unnavailableOptions);
    
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function handleSelection(_x3, _x4, _x5) {
            return _handleSelection.apply(this, arguments);
          }
    
          return handleSelection;
        }()
      }, {
        key: "handleSelectionObject",
        value: function handleSelectionObject(event, skuCamp, skuValue, unnavailableOptions) {
          var productId = this.skuSelectorModel_.productId;
          var selectionObject = this.skuSelectorModel_.skuSelected[productId];
          unnavailableOptions.forEach(function (el) {
            var value = el.dataset.skuValue;
            var camp = el.dataset.skuCamp;
            selectionObject[camp] == value ? selectionObject[camp] = '' : null;
          });
          selectionObject[skuCamp] = skuValue;
          this.checkIfAllSelected(productId) ? this.filterSelectedSku() : this._element.dataset.skuId = '';
          this.updateClasses(selectionObject);
        }
      }, {
        key: "updateClasses",
        value: function updateClasses(obj) {
          var container = this._element;
          var allOptions = container.querySelectorAll('.variation__option');
    
          if (obj) {
            allOptions.forEach(function (el) {
              obj[el.dataset.skuCamp] == el.dataset.skuValue ? el.classList.add('option-selected') : el.classList.remove('option-selected');
            });
          }
        }
      }, {
        key: "handleUnnavailableOptions",
        value: function handleUnnavailableOptions(elements, skus, event, skuCamp) {
          /*Element -- html variations nodes */
          var container = this._element;
          var allOptions = container.querySelectorAll('.variation__option');
          var mainVariation = this.skuSelectorModel_.mainVariation;
          var unOptions = Array.from(elements).filter(function (element) {
            var camp = element.dataset.skuCamp;
            var value = element.dataset.skuValue;
            var options = [];
            skus.forEach(function (sku) {
              options.push(sku.dimensions[camp]);
            });
            return !options.includes(value) && element.dataset.skuCamp != skuCamp;
          });
          allOptions.forEach(function (option) {
            return skuCamp == mainVariation ? option.classList.remove('invalid_combination') : null;
          });
          unOptions.forEach(function (option) {
            option.dataset.skuCamp != mainVariation ? option.classList.add('invalid_combination') : null;
          });
          return unOptions;
        }
      }, {
        key: "handleSkuSelectedReturn",
        value: function handleSkuSelectedReturn(sku) {
          if (sku.length > 0) {
            var container = this._element;
            this.skuSelectorModel_.skuFinal = sku;
            container.dataset.skuId = sku[0].sku;
            this.skuSelectorView_.updateDataView(this.skuSelectorModel_);
          }
        }
      }, {
        key: "checkIfAllSelected",
        value: function checkIfAllSelected(id) {
          var skuSelectedObj = this.skuSelectorModel_.skuSelected;
          return Object.keys(skuSelectedObj[id]).every(function (k) {
            return skuSelectedObj[id][k];
          });
        }
      }, {
        key: "getSkusWithSelectedOptions",
        value: function () {
          var _getSkusWithSelectedOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type, value) {
            var response, skus;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.skuSelectorModel_.response;
    
                  case 2:
                    response = _context4.sent;
                    skus = response.skus;
                    return _context4.abrupt("return", skus.filter(function (sku) {
                      return sku.dimensions[type] == value;
                    }));
    
                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
    
          function getSkusWithSelectedOptions(_x6, _x7) {
            return _getSkusWithSelectedOptions.apply(this, arguments);
          }
    
          return getSkusWithSelectedOptions;
        }()
      }, {
        key: "createSelectionObject",
        value: function () {
          var _createSelectionObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var response, types, productId, skuSelectedObj, thisProductObj;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.skuSelectorModel_.response;
    
                  case 2:
                    response = _context5.sent;
                    types = Object.keys(response.dimensionsMap);
                    productId = response.productId;
                    skuSelectedObj = this.skuSelectorModel_.skuSelected;
                    thisProductObj = skuSelectedObj[productId] = {};
                    this.skuSelectorModel_._mainVariation = types[0];
                    types.forEach(function (type) {
                      thisProductObj[type] = '';
                    });
                    this.setDefaultSelection(thisProductObj, types);
    
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
    
          function createSelectionObject() {
            return _createSelectionObject.apply(this, arguments);
          }
    
          return createSelectionObject;
        }()
      }, {
        key: "handleInputType",
        value: function handleInputType() {
          var container = this._element;
          var comboDefault = container.querySelector('.variation__combo-default');
          var comboList = container.querySelector('.variation__combo-list');
          var comboVariations = '';
          comboList ? comboVariations = comboList.querySelectorAll('.variation__option') : null;
          var productId = this.skuSelectorModel_.productId;
          var selectionObj = this.skuSelectorModel_.skuSelected;
          comboDefault && comboDefault.addEventListener('click', function () {
            comboList.classList.toggle('variation__combo-list--visible');
            comboVariations.forEach(function (el) {
              el.addEventListener('click', function (event) {
                var type = event.target.dataset.skuCamp;
                comboDefault.textContent = selectionObj[productId][type];
                comboList.classList.remove('variation__combo-list--visible');
              });
            });
            window.addEventListener('click', function (event) {
              if (!event.target.matches(".variation__combo-default")) {
                comboList.classList.remove('variation__combo-list--visible');
              }
            });
          });
        }
      }, {
        key: "handleAviseMe",
        value: function handleAviseMe() {
          var productData = this.skuSelectorModel_._data;
          !productData.available ? this.skuSelectorView_.setAviseMeForUnnavailableProduct(productData, this.skuSelectorModel_) : null;
        }
      }, {
        key: "handleBuyButtonEvent",
        value: function handleBuyButtonEvent() {
          var _this2 = this;
    
          var context = this._context;
          var buyButtons = document.querySelectorAll(".".concat(context, "__buy-button"));
          var quantityController = document.querySelector(".".concat(context, "__quantityController"));
    
          if (this._config.quantity && quantityController) {
            this.handleQuantityController();
          }
    
          for (var index = 0; index < buyButtons.length; index++) {
            var butButton$ = buyButtons[index];
            butButton$.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var productId, selectionObj, skuFinal, quantityControllerCount, isAllOptionsSelected, unOptions, quantity, params;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      productId = _this2.skuSelectorModel_.productId;
                      selectionObj = _this2.skuSelectorModel_.skuSelected;
                      skuFinal = _this2.skuSelectorModel_.skuFinal;
                      quantityControllerCount = quantityController ? quantityController.querySelector(".quantityController__counter") : null;
                      isAllOptionsSelected = Object.keys(selectionObj[productId]).every(function (k) {
                        return selectionObj[productId][k];
                      });
    
                      if (!(isAllOptionsSelected == false)) {
                        _context6.next = 11;
                        break;
                      }
    
                      unOptions = [];
                      Object.entries(selectionObj[productId]).forEach(function (option) {
                        if (!option[1]) {
                          unOptions.push(option[0]);
                        }
                      });
                      sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                        text: "Selecione ".concat(unOptions.toString(), " para poder comprar"),
                        icon: 'warning',
                        padding: '3rem',
                        showConfirmButton: false,
                        customClass: {
                          container: 'invalid-buy-container'
                        }
                      });
                      _context6.next = 18;
                      break;
    
                    case 11:
                      quantity = quantityControllerCount ? quantityControllerCount.textContent : undefined;
    
                      if (quantity >= skuFinal.availablequantity) {
                        quantity = skuFinal.availablequantity;
                      }
    
                      params = {
                        skuId: skuFinal[0].sku,
                        productQuantity: quantity ? +quantity : 1
                      };
                      _context6.next = 16;
                      return _this2._vtexjsCartSerive.addCurrentItem(params).then(function () {
                        if (context == 'productPage') {
                          window.location.href = "/checkout/#/cart";
                        }
                      });
    
                    case 16:
                      _this2.handleShowModalToast('success', 'Adicionado com sucesso');
    
                      _this2.miniCart_.handleRenderItemIntoTheCart();
    
                    case 18:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            })));
          }
        }
      }, {
        key: "handleQuantityController",
        value: function handleQuantityController() {
          var _this3 = this;
    
          var quantityController = document.querySelectorAll(".".concat(this._context, "__quantityController"));
    
          var _loop = function _loop(i) {
            var quantity$ = quantityController[i];
            var plusBtn = document.createElement('button');
            plusBtn.classList.add('quantityController__btn');
            plusBtn.textContent = '+';
            var minusBtn = document.createElement('button');
            minusBtn.classList.add('quantityController__btn');
            minusBtn.textContent = '-';
            var quantityCounterElement = document.createElement('span');
            quantityCounterElement.classList.add('quantityController__counter');
            quantityCounterElement.textContent = _this3.skuSelectorModel_.quantityValue;
            plusBtn.addEventListener('click', function () {
              _this3.skuSelectorModel_.quantityValue++;
              quantityCounterElement.textContent = _this3.skuSelectorModel_.quantityValue;
            });
            minusBtn.addEventListener('click', function () {
              if (_this3.skuSelectorModel_.quantityValue <= 1) {
                return;
              }
    
              _this3.skuSelectorModel_.quantityValue--;
              quantityCounterElement.textContent = _this3.skuSelectorModel_.quantityValue;
            });
            quantity$.appendChild(minusBtn);
            quantity$.appendChild(quantityCounterElement);
            quantity$.appendChild(plusBtn);
          };
    
          for (var i = 0; i < quantityController.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "handleShowModalToast",
        value: function handleShowModalToast(icon, title) {
          var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function onOpen(toast) {
              toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.stopTimer);
              toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.resumeTimer);
            }
          });
          Toast.fire({
            icon: icon,
            title: title
          });
        }
      }, {
        key: "__invalidClass__",
        value: function __invalidClass__() {
          var variationContainerElement_ = document.querySelectorAll('.variation__wrapper')[1];
    
          if (variationContainerElement_) {
            var coisas = variationContainerElement_.querySelectorAll('label');
            var dataVariations = this.skuSelectorModel_._data;
            var falseSkus = [];
            dataVariations.skus.filter(function (item) {
              if (!item.available) {
                return falseSkus.push(item);
              }
            });
    
            _toConsumableArray(coisas).forEach(function (items, index) {
              falseSkus.filter(function (item) {
                if (item.dimensions['Quantidade Pacote'] === items.dataset.skuValue) {
                  items.classList.add('error');
                }
              });
            });
          }
        }
      }, {
        key: "setDefaultSelection",
        value: function () {
          var _setDefaultSelection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(obj, types) {
            var mainVariation, container, allOptions, response, productId, skus, defaultSku, skuFinalDimensions, skuSelected, _skuSelected;
    
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    mainVariation = this.skuSelectorModel_.mainVariation;
                    container = this._element;
                    allOptions = container.querySelectorAll('.variation__option');
                    _context7.next = 5;
                    return this.skuSelectorModel_.response;
    
                  case 5:
                    response = _context7.sent;
                    productId = this.skuSelectorModel_.productId;
                    skus = response.skus;
                    defaultSku = '';
    
                    this.__invalidClass__(allOptions);
    
                    allOptions.forEach(function () {
                      skus.forEach(function (sku) {
                        if (!defaultSku && sku.available && Object.keys(sku.dimensions).length != 0) {
                          defaultSku = sku;
                        }
                      });
                    });
    
                    if (defaultSku) {
                      types.forEach(function (type) {
                        obj[type] = defaultSku.dimensions[type];
                      });
                      skuFinalDimensions = defaultSku.dimensions;
                      skuSelected = this.skuSelectorModel_.skuSelected[productId];
                      skuSelected = obj;
    
                      this.__dispatchFirstClick__(allOptions, mainVariation, skuSelected);
    
                      this.filterSelectedSku();
                      this.updateClasses(skuFinalDimensions);
                    } else {
                      _skuSelected = this.skuSelectorModel_.skuSelected[productId];
                      skus.forEach(function (sku) {
                        if (!defaultSku && sku.available) {
                          defaultSku = sku;
                        }
                      });
    
                      this.__dispatchFirstClick__(allOptions, mainVariation, _skuSelected);
    
                      this.filterSelectedSku();
                      this.updateClasses();
                    }
    
                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
    
          function setDefaultSelection(_x8, _x9) {
            return _setDefaultSelection.apply(this, arguments);
          }
    
          return setDefaultSelection;
        }()
      }, {
        key: "__dispatchFirstClick__",
        value: function __dispatchFirstClick__(allOptions, mainVariation, skuSelected) {
          var element_ = Array.from(allOptions).filter(function (option) {
            return option.dataset.skuCamp == mainVariation && option.dataset.skuValue == skuSelected["".concat(mainVariation)];
          });
          console.warn(element_, 'element');
          element_.length > 0 && element_[0].click();
        }
      }, {
        key: "_buyButtonAdd",
        value: function _buyButtonAdd() {
          var _this4 = this;
    
          var context = this._config.context;
          var productId = this.skuSelectorModel_.productId;
          var selectionObj = this.skuSelectorModel_.skuSelected;
          var buyButtonElements = document.querySelectorAll(".".concat(context, "__add-to-cart"));
    
          for (var i = 0; i < buyButtonElements.length; i++) {
            var buyButton$ = buyButtonElements[i];
            buyButton$.addEventListener('click', function () {
              var skuId = _this4.skuSelectorModel_.skuFinal;
              var isAllOptionsSelected = Object.keys(selectionObj[productId]).every(function (k) {
                return selectionObj[productId][k];
              });
    
              if (isAllOptionsSelected == false) {
                var unOptions = [];
                Object.entries(selectionObj[productId]).forEach(function (option) {
                  if (!option[1]) {
                    unOptions.push(option[0]);
                  }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                  text: "Selecione ".concat(unOptions.toString(), " para poder comprar"),
                  icon: 'warning',
                  padding: '3rem',
                  showConfirmButton: false,
                  customClass: {
                    container: 'invalid-buy-container'
                  }
                });
              } else {
                _this4.miniCart_._addProduct(skuId[0].sku, _this4.skuSelectorModel_.quantityValue);
              }
            });
          }
        }
      }, {
        key: "handleOptions",
        value: function handleOptions() {
          this._config.buyButton ? this.handleBuyButtonEvent() : null;
          this._config.addToCartBtn ? this._buyButtonAdd() : null;
        } // getAllBuyTogetherChecked() {
        //   const checkboxes = document.querySelectorAll(".buy-product-checkbox")
        //   const count = document.querySelector(".selected-count")
        //   const value = document.querySelector(".selected-value")
        //   console.log('count :>> ', count.innerText);
        //   console.log('value :>> ', value.innerText);
        //   console.log('checkboxes :>> ', checkboxes);
        //   checkboxes.forEach((checkbox) => {
        //     checkbox.checked = true;
        //     // if(checkbox.checked) {
        //     //   count.innerText = +count.innerText + 1
        //     // }
        //   })
        // }
    
      }, {
        key: "handleLoading",
        value: function handleLoading(loader) {
          if (loader) {
            this.placeholderLoading_.loaderController(true, this._element, 'shelf__sku-selector');
          } else {
            this.placeholderLoading_.loaderController(false, this._element, 'shelf__sku-selector');
          }
        }
      }, {
        key: "init",
        value: function () {
          var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this5 = this;
    
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this._config.loader ? this.handleLoading(true) : null;
                    _context8.next = 3;
                    return this.skuSelectorView_._render(this.skuSelectorModel_).then(function () {
                      return _this5._config.loader ? _this5.handleLoading(false) : null;
                    });
    
                  case 3:
                    this.handleInputType();
                    this.createSelectionObject();
                    this.handleOptionClick();
                    this.handleAviseMe();
                    this.handleOptions(); // this.getAllBuyTogetherChecked();
    
                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
    
          function init() {
            return _init.apply(this, arguments);
          }
    
          return init;
        }()
      }], [{
        key: "returnProductInfo",
        value: function () {
          var _returnProductInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
            var context,
                model,
                response,
                _args9 = arguments;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    context = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 'test';
                    model = new _SkuSelector__WEBPACK_IMPORTED_MODULE_22__["default"](id, context);
                    _context9.next = 4;
                    return model.response;
    
                  case 4:
                    response = _context9.sent;
                    return _context9.abrupt("return", response);
    
                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
    
          function returnProductInfo(_x10) {
            return _returnProductInfo.apply(this, arguments);
          }
    
          return returnProductInfo;
        }()
      }]);
    
      return SkuSelectorController;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/SkuSelector/skuSelectorView.js":
    /*!**********************************************************!*\
      !*** ./src/js/components/SkuSelector/skuSelectorView.js ***!
      \**********************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkuSelectorView; });
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
    /* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
    /* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
    /* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/Placeholder */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var Helpers_index2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! Helpers//index2 */ "./src/js/helpers/index2.js");
    /* harmony import */ var _pages_product_product_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../pages/product/product.config */ "./src/js/pages/product/product.config.js");
    /* harmony import */ var _aviseme_index__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../aviseme/index */ "./src/js/components/aviseme/index.js");
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    
    
    var SkuSelectorView = /*#__PURE__*/function () {
      function SkuSelectorView(element, context) {
        _classCallCheck(this, SkuSelectorView);
    
        this._element = element;
        this._context = context;
        this.loading = new _components_Placeholder__WEBPACK_IMPORTED_MODULE_24__["default"]();
      }
    
      _createClass(SkuSelectorView, [{
        key: "_template",
        value: function _template(model, response) {
          return "<div class=\"sku-selector\">\n              <div class=\"sku-selector__variations\">\n                  ".concat(this.renderSKUVariations(response), "\n              </div>\n            </div>");
        }
      }, {
        key: "renderSKUVariations",
        value: function renderSKUVariations(response) {
          var _this = this;
    
          var dimensionsMap = response.dimensionsMap,
              dimensionsInputType = response.dimensionsInputType,
              skus = response.skus;
          var types = Object.keys(dimensionsMap); //console.log('response >>>>>>', response); 
    
          return types.map(function (type) {
            return "".concat(dimensionsInputType[type] == 'Radio' ? _this.renderRadioOptions(dimensionsMap, type, dimensionsInputType, skus) : _this.renderComboOptions(dimensionsMap, type));
          }).join('');
        }
      }, {
        key: "renderComboOptions",
        value: function renderComboOptions(dimensionsMap, type) {
          // var dimensionsModel = ['UNI', '02', '2', '03', '3', '04', '4', '06', '6', '08', '8', '10', '12', '14', '16', '18', '20', '21 AO 26', '22', '24', '26', '28', '30', '32', '33 AO 38', '33/34', '33 / 34', '34', '35/36', '35 / 36', '36', '37/38', '37 / 38', '38', '38 AO 44', '39 / 40', '39 AO 44', '39', '40', '41', '42', '41 / 42', '43/44', '43 / 44', '44', '45', '46', '48', '50', 'INFANTIL', 'INF/ P/M', 'INF/ G/GG', 'BLPP', 'BLP', 'BLM', 'BLG', 'BLGG', 'PP', 'P', 'P/M', 'M', 'G', 'G/GG', 'GG', 'XP', 'XG', 'XGG', 'SEM GRADE'];
            
          //dimensions map tem array com valores fora de ordem, deve-se usar o array de skus 
          var dimensionsModel = dimensionsMap.Tamanho.concat(dimensionsMap.Cor)
    
          var availableSizes = [];
      
          for (var index = 0; index < dimensionsModel.length; index++) {
            if (dimensionsMap[type].includes(dimensionsModel[index])) {
                availableSizes.push(dimensionsModel[index]);
            } else {
                null;
              }
            }
    
          return "<div class=\"variation__combo-wrapper variation__combo-wrapper--".concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(type), "\">\n          <button class=\"variation__combo-default\">Selecione a ").concat(type, "</button>\n          <div class=\"variation__combo-list\">\n            ").concat(availableSizes.map(function (option, index) {
            return "<div class='variation__option ".concat(index == 0 ? "option-selected" : null, " variation__option--").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(option), "' data-sku-camp=\"").concat(type, "\" data-sku-value=\"").concat(option, "\">").concat(option, "</div>");
          }).join(''), "\n          </div>\n    </div>");
        }
      }, {
        key: "renderRadioOptions",
        value: function renderRadioOptions(dimensionsMap, type, dimensionsInputType, skus) {
          // var dimensionsModel = ['UNI', '02', '2', '03', '3', '04', '4', '06', '6', '08', '8', '10', '12', '14', '16', '18', '20', '21 AO 26', '22', '24', '26', '28', '30', '32', '33 AO 38', '33/34', '33 / 34', '34', '35/36', '35 / 36', '36', '37/38', '37 / 38', '38', '38 AO 44', '39 / 40', '39 AO 44', '39', '40', '41', '42', '41 / 42', '43/44', '43 / 44', '44', '45', '46', '48', '50', 'INFANTIL', 'INF/ P/M', 'INF/ G/GG', 'BLPP', 'BLP', 'BLM', 'BLG', 'BLGG', 'PP', 'P', 'P/M', 'M', 'G', 'G/GG', 'GG', 'XP', 'XG', 'XGG', 'SEM GRADE'];
            
            //armazena tamanhos e cores de cada SKU
            let prodTamanho = skus.map((res)=> res.dimensions.Tamanho)
            let prodCor = skus.map((res)=> res.dimensions.Cor)
    
            //removi valores duplicados, retorna um novo array com [cores e tamanhos]  
            let prodEspecifications = [...new Set(prodCor)].concat(...new Set(prodTamanho))
    
            var availableSizes = [];
      
            for (var index = 0; index < prodEspecifications.length; index++) {
              if (dimensionsMap[type].includes(prodEspecifications[index])) {
                availableSizes.push(prodEspecifications[index]);
              } else {
                null;
              }
            }
    
          return "<div class='variation__wrapper variation__wrapper--".concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(type), "' data-input-type='").concat(dimensionsInputType[type], "'>\n                <div class='variation__wrapper--title-").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(type), "'>").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(type), "</div>\n                <div class='variation__wrapper--body-").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(type), "'>       \n                ").concat(availableSizes.map(function (option, index) {
            return "<label class='variation__option ".concat(index == 0 ? "option-selected" : null, " ").concat(!skus[index].available && 'unavailable', " variation__option--").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._slugifyString(option), " ' data-sku-camp=\"").concat(type, "\" data-sku-value=\"").concat(option, "\">").concat(option, "</label>\n                    ");
          }).join(''), "\n                </div>                \n        </div>");
        }
      }, {
        key: "updateDataView",
        value: function updateDataView(model, sku) {
          var context = this._context;
          var objectContext = this;
          var template = {
            productCard: this.updateProductCard,
            productPage: this.updateProductPageData,
            shelf: this.updateBuyFromShelfData
          };
          return template[context](model, objectContext, sku);
        }
      }, {
        key: "updateProductCard",
        value: function updateProductCard(model, _objectContext) {
          var productCard = model.element.parentElement;
          var sku = model.skuFinal[0];
          var bestPrice = productCard.querySelector('.productCard__price--best');
          var installments = productCard.querySelector('.productCard__installments');
    
          if (bestPrice) {
            bestPrice.dataset.price = "".concat(sku.bestPrice);
            bestPrice.textContent = sku.bestPriceFormated;
          }
    
          if (installments) {
            var installmentsNumber = installments.querySelector(".productCard__installments--installments");
    
            var _installmentsValue = installments.querySelector('.productCard__installments--value');
    
            if (sku.installments > 1) {
              installmentsNumber.textContent = "".concat(sku.installments, "x");
              _installmentsValue.textContent = "R$ ".concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._formatPrice(sku.installmentsValue));
              installments.classList.add('ativo');
            } else {
              installmentsNumber.textContent = '';
              _installmentsValue.textContent = '';
              installments.classList.remove('ativo');
            }
          } //console.log('productCard sku final', sku);
    
        } // eslint-disable-next-line no-unused-vars
    
      }, {
        key: "updateBuyFromShelfData",
        value: function updateBuyFromShelfData(model, _objectContext) {
          var _model$skuFinal = _slicedToArray(model.skuFinal, 1),
              sku = _model$skuFinal[0];
    
          console.log('sku', sku);
          var aviseMeComponent = new _aviseme_index__WEBPACK_IMPORTED_MODULE_27__["default"]();
          var aviseMeElement = document.querySelector('.shelf__avise-me');
          var productVariationName = document.querySelector('.shelf__variation-name');
          var productPrice = document.querySelectorAll('.shelf__price');
          var productImage = document.querySelector('.shelf__product-image');
          var productActionSection = document.querySelectorAll('.shelf__action');
    
          if (productVariationName && productImage) {
            productVariationName.textContent = sku.skuname; // console.log('imgProduct', sku)
            // console.log('imgProduct', model)
            // productImage.forEach((img) => {
            //   img.src += sku.image;
            // }); 
            //  for (let i = 0; i < productImage.length; i++) {
            //   const imgProduct = productImage[i];
            //   console.log('imgProduct', imgProduct)
            //   imgProduct.src += sku.image;
            // } 
    
            productImage.src = sku.image;
          }
    
          for (var i = 0; i < productPrice.length; i++) {
            var price$ = productPrice[i];
            var productBestPrice = price$.querySelector('.shelf__best-price');
            var productListPrice = price$.querySelector('.shelf__list-price');
    
            if (productBestPrice && productListPrice) {
              productBestPrice.textContent = sku.bestPriceFormated;
              productListPrice.textContent = sku.listPriceFormated;
    
              if (sku.bestPrice > sku.listPrice) {
                productListPrice.style.display = 'none';
              } else {
                productListPrice.style.display = 'block';
              }
            }
          } //avise-me
    
    
          if (!sku.available) {
            productPrice.forEach(function (priceContainer$) {
              priceContainer$.setAttribute('style', 'display:none');
            });
            aviseMeComponent.renderAviseme(aviseMeElement, sku.sku);
            productActionSection.forEach(function (actionContainer$) {
              actionContainer$.setAttribute('style', 'display:none');
            });
          } else {
            if (aviseMeElement) aviseMeElement.innerHTML = '';
            productActionSection.forEach(function (actionContainer$) {
              actionContainer$.setAttribute('style', 'display:flex');
            });
            productPrice.forEach(function (priceContainer$) {
              priceContainer$.setAttribute('style', 'display:flex');
            });
          }
    
          console.log("installments", sku.installments);
          console.log("installmentsValue", sku.installmentsValue);
    
          if (sku.installments && sku.installmentsValue) {
            var quickViewInstallments = document.querySelector('.shelf__installments');
    
            if (sku.installments > 1) {
              quickViewInstallments.textContent = "(ou ".concat(sku.installments, "X de R$ ").concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._formatPrice(sku.installmentsValue), " sem juros)");
              quickViewInstallments.classList.add('ativo');
            } else {
              quickViewInstallments.textContent = '';
              quickViewInstallments.classList.remove('ativo');
            }
    
            installments.textContent = "".concat(sku.installments, "X");
            installmentsValue.textContent = "R$ ".concat(Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._formatPrice(sku.installmentsValue));
          }
        }
      }, {
        key: "updateProductPageData",
        value: function updateProductPageData(model, objectContext) {
          var minimumDiscont = 5;
    
          var _model$skuFinal2 = _slicedToArray(model.skuFinal, 1),
              sku = _model$skuFinal2[0];
    
          var aviseMeComponent = new _aviseme_index__WEBPACK_IMPORTED_MODULE_27__["default"]();
          var aviseMeElement = document.querySelector('.productPage__avise-me');
          var productVariationName = document.querySelector('.productPage__variation-name');
          var productDiscont = document.querySelector('.productPage__discont');
          var productPrice = document.querySelectorAll('.productPage__price');
          var productActionSection = document.querySelectorAll('.productPage__action');
    
          for (var i = 0; i < productPrice.length; i++) {
            var price$ = productPrice[i];
            var productListPrice = price$.querySelector('.productPage__list-price');
            var productBestPrice = price$.querySelector('.productPage__best-price');
            var productInstallments = price$.querySelector('.productPage__installments');
    
            var installmentValueFormated = Helpers_index2__WEBPACK_IMPORTED_MODULE_25__["default"]._formatPrice(sku.installmentsValue);
    
            if (productBestPrice && productListPrice && productInstallments) {
              productBestPrice.textContent = sku.bestPriceFormated;
              productListPrice.textContent = sku.listPriceFormated;
    
              if (sku.listPrice <= sku.bestPrice) {
                productListPrice.style.display = 'none';
              } else {
                productListPrice.style.display = 'block';
              }
    
              if (sku.installments > 1) {
                productInstallments.textContent = "(ou ".concat(sku.installments, "x de R$ ").concat(installmentValueFormated, " sem juros)");
                productInstallments.classList.add('ativo');
              } else {
                productInstallments.textContent = '';
                productInstallments.classList.remove('ativo');
              }
            }
          }
    
          if (productVariationName) productVariationName.textContent = sku.skuname;
    
          if (productDiscont && sku.bestPrice < sku.listPrice) {
            var discont = Math.round(100 - sku.bestPrice / sku.listPrice * 100);
    
            if (discont > minimumDiscont) {
              productDiscont.textContent = "".concat(discont, "% OFF");
              productDiscont.classList.add('ativo');
            }
          } //avise-me
    
    
          if (!sku.available) {
            productPrice.forEach(function (priceContainer$) {
              priceContainer$.setAttribute('style', 'display:none');
            });
            aviseMeComponent.renderAviseme(aviseMeElement, sku.sku);
            productActionSection.forEach(function (actionContainer$) {
              actionContainer$.setAttribute('style', 'display:none');
            });
          } else {
            if (aviseMeElement) aviseMeElement.innerHTML = '';
            productActionSection.forEach(function (actionContainer$) {
              actionContainer$.setAttribute('style', 'display:flex');
            });
            productPrice.forEach(function (priceContainer$) {
              priceContainer$.setAttribute('style', 'display:flex');
            });
          }
    
          objectContext.handleThumbsChange(sku, model);
        }
      }, {
        key: "handleThumbsChange",
        value: function handleThumbsChange(sku, model) {
          var _this2 = this;
    
          var productInfo = model._productInfo[0];
    
          var render = function render() {
            console.log("productInfo", productInfo);
            var productVideo = productInfo['Vídeo'];
            var getResponseWithAllImages = productInfo.items.filter(function (item) {
              return item.name == sku.skuname;
            });
            var productPageThumbsElement = document.querySelector('.productPage__thumbs');
            var productPageImagesElement = document.querySelector('.productPage__image-zoom');
            productPageImagesElement.innerHTML = ' ';
            productPageThumbsElement.innerHTML = ' ';
            var sizes = {
              widthThumb: 150,
              heightThumb: 150,
              widthZoom: 450,
              heightZoom: 450
            };
            var productImages = getResponseWithAllImages[0].images;
            productImages.forEach(function (productImage, index) {
              var currentProductImageZoom = productImage.imageTag.replace(/#width#/g, sizes.widthZoom).replace(/#height#/g, sizes.heightZoom).replace('~', '');
              productPageImagesElement.insertAdjacentHTML('beforeEnd', "\n          <li class=\"productPage__image-item-zoom\" data-product-image-zoom='".concat(currentProductImageZoom, "' data-product-image-index=\"").concat(index, "\">\n            ").concat(currentProductImageZoom, "\n          </li>"));
              var currentProductImageThumb = productImage.imageTag.replace(/#width#/g, sizes.widthThumb).replace(/#height#/g, sizes.heightThumb).replace('~', '');
              productPageThumbsElement.insertAdjacentHTML('beforeEnd', "\n          <li class=\"productPage__image-item\" data-product-image-zoom='".concat(currentProductImageZoom, "' data-product-image-index=\"").concat(index, "\">\n            ").concat(currentProductImageThumb, "\n          </li>"));
            }); //this.handleDuplicateCustomThumbZoom();
    
            if (productVideo) {
              productPageThumbsElement.insertAdjacentHTML('beforeEnd', "\n          <li class=\"productPage__image-item--video\" >\n              <i class=\"far fa-play-circle\"></i>\n          </li>");
    
              _this2.handleProductVideo(productVideo);
            }
    
            _this2.initSliders();
          };
    
          var getInfo = function getInfo() {
            if (productInfo) {
              render();
            } else {
              setTimeout(function () {
                productInfo = model._productInfo[0];
                getInfo();
              }, 10);
            }
          };
    
          getInfo();
        }
      }, {
        key: "initSliders",
        value: function initSliders() {
          var zoomList = document.querySelector('.productPage__image-zoom');
    
          if (_toConsumableArray(zoomList.classList).includes('slick-initialized')) {
            zoomList.classList.remove('slick-initialized');
          }
    
          var thumbsList = document.querySelector('.js-image-thumbs');
    
          if (_toConsumableArray(thumbsList.classList).includes('slick-initialized')) {
            thumbsList.classList.remove('slick-initialized');
          }
    
          _pages_product_product_config__WEBPACK_IMPORTED_MODULE_26__["default"].zoomImagesSlider();
          _pages_product_product_config__WEBPACK_IMPORTED_MODULE_26__["default"].thumbsSlider();
        }
      }, {
        key: "handleProductVideo",
        value: function handleProductVideo(productVideo) {
          var _this3 = this;
    
          var videoElements = document.querySelectorAll('.productPage__image-item--video');
          var url = productVideo[0].split("https://www.youtube.com/watch?v=");
          url = "https://www.youtube.com/embed/".concat(url[1]);
          videoElements.forEach(function (video) {
            video.addEventListener('click', function () {
              sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                html: "<div class=\"productPage__video\"><iframe class=\"productPage__video-thumb\"src=\"".concat(url, "\"></iframe></div>"),
                showConfirmButton: false,
                customClass: {
                  container: 'productPage__video-modal'
                }
              });
              var videoEl = document.querySelector('.productPage__video');
              var videoIframe = videoEl.querySelector('iframe');
    
              _this3.loading.loaderController(true, videoEl, 'video');
    
              videoIframe.setAttribute('style', 'width: 0!important');
              videoIframe.addEventListener('load', function () {
                _this3.loading.loaderController(false, videoEl, 'video');
    
                videoIframe.setAttribute('style', 'width: 100%');
              });
            });
          });
        }
        /* handleDuplicateCustomThumbZoom() {
           const productIamgeItemElements = document.querySelectorAll(
             '.productPage__image-item'
           );
        
           const productImageZoomElement = document.querySelector(
             '.productPage__image-zoom'
           );
        
           // Miguel 19/05/2021
           const productImageZoomElements = document.querySelectorAll(
             '.productPage__image-zoom'
           );
        
           //let srcFirstImageValue =
            // productIamgeItemElements[0].dataset.productImageZoom;
            // productImageZoomElement.innerHTML = srcFirstImageValue;
        
           productImageZoomElements.forEach(() => {
             let srcFirstImageValue =
             productIamgeItemElements[0].dataset.productImageZoom;
             productImageZoomElement.innerHTML = srcFirstImageValue;
             //productImageZoomElements.addEventListener('click', (e) => {
               //let srcValue = e.target.parentNode.dataset.productImageZoom;
              // productImageZoomElement.innerHTML = srcValue;
             //});
           });
        
           productIamgeItemElements.forEach((productIamgeItemElement) => {
             productIamgeItemElement.addEventListener('click', (e) => {
               let srcValue = e.target.parentNode.dataset.productImageZoom;
               productImageZoomElement.innerHTML = srcValue;
             });
           });
        
           const thumbsList = document.querySelector('.js-image-thumbs');
        
           if (Array.from(thumbsList.classList).includes('slick-initialized')) {
             thumbsList.classList.remove('slick-initialized');
           }
           ProductPageConfig.thumbsSlider();
         }*/
    
      }, {
        key: "setAviseMeForUnnavailableProduct",
        value: function setAviseMeForUnnavailableProduct(product, model) {
          var context = this._context;
          var aviseMeComponent = new _aviseme_index__WEBPACK_IMPORTED_MODULE_27__["default"]();
          var aviseMeElement = document.querySelector(".".concat(context, "__avise-me"));
          var productActionSection = document.querySelector(".".concat(context, "__action"));
          var skuOptions = this._element;
          this.handleThumbsChange(product.skus[0], model);
          skuOptions.remove();
    
          if (!product.available && productActionSection) {
            aviseMeComponent.renderAviseme(aviseMeElement, product.productId);
            productActionSection.setAttribute('style', 'display:none');
          }
        }
      }, {
        key: "_render",
        value: function () {
          var _render2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return model.response;
    
                  case 2:
                    response = _context.sent;
                    this._element.innerHTML = this._template(model, response);
                    return _context.abrupt("return", response);
    
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function _render(_x) {
            return _render2.apply(this, arguments);
          }
    
          return _render;
        }()
      }]);
    
      return SkuSelectorView;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/autocomplete/_quantityController.js":
    /*!***************************************************************!*\
      !*** ./src/js/components/autocomplete/_quantityController.js ***!
      \***************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var QuantityController = /*#__PURE__*/function () {
      function QuantityController() {
        _classCallCheck(this, QuantityController);
      }
    
      _createClass(QuantityController, [{
        key: "_handleQuantity",
        value: function _handleQuantity(actionFactor, element) {
          var currentQty = +element.value;
          var newValue = +currentQty + +actionFactor;
          element.value = newValue <= 0 ? currentQty : newValue;
          element.dataset.productQty = newValue <= 0 ? currentQty : newValue;
          var index = element.dataset.miniCartItemIndex;
          var currentQtyy = element.value;
          var values = {
            index: index,
            currentQuantity: currentQtyy
          };
          return values;
        }
      }]);
    
      return QuantityController;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (QuantityController);
    
    /***/ }),
    
    /***/ "./src/js/components/autocomplete/_skuSelectorController.js":
    /*!******************************************************************!*\
      !*** ./src/js/components/autocomplete/_skuSelectorController.js ***!
      \******************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SkuSelector/SkuSelectorController */ "./src/js/components/SkuSelector/SkuSelectorController.js");
    /* harmony import */ var _Placeholder_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Placeholder/index */ "./src/js/components/Placeholder/index.js");
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    var SkuSelectorControllerModal = /*#__PURE__*/function () {
      function SkuSelectorControllerModal() {
        _classCallCheck(this, SkuSelectorControllerModal);
      }
    
      _createClass(SkuSelectorControllerModal, [{
        key: "skuSelectorOnShelf",
        value: function skuSelectorOnShelf() {
          var _this = this;
    
          var products = document.querySelectorAll('.list-group-item');
          products.forEach(function (product) {
            var productId = product.dataset.productId;
            var buttonElement = product.querySelector('.comprar');
            var loading = new _Placeholder_index__WEBPACK_IMPORTED_MODULE_7__["default"]();
    
            if (!buttonElement.dataset.unavailable) {
              buttonElement.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var skuSelector, skuModel, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this._modalConfiguration();
    
                        loading.loaderController(true, document.querySelector('.comprarapida'), 'shelf__sku-selector');
                        skuSelector = new _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_6__["default"]({
                          id: productId,
                          viewElement: document.querySelector('.shelf__variations'),
                          context: 'shelf',
                          buyButton: true,
                          addToCartBtn: true,
                          quantity: true
                        });
                        skuModel = skuSelector.skuSelectorModel_;
                        _context.next = 6;
                        return skuModel.response;
    
                      case 6:
                        response = _context.sent;
    
                        if (skuModel.response.skus.length == 1) {
                          console.warn('Produto tem apenas uma variação de SKU');
                          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
                        } else {
                          _this.renderProductInfo(response);
    
                          skuSelector.init();
                          loading.loaderController(false, document.querySelector('.comprarapida'), 'shelf__sku-selector');
    
                          _this.handleCloseBtn();
                        }
    
                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            }
          });
        }
      }, {
        key: "renderProductInfo",
        value: function renderProductInfo(response) {
          var productName = document.querySelector('.shelf__name');
          productName.textContent = response.name;
        }
      }, {
        key: "handleCloseBtn",
        value: function handleCloseBtn() {
          var closeBtn = document.querySelector('.sku-selector__close-btn');
          closeBtn.addEventListener('click', function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
          });
        }
      }, {
        key: "_modalConfiguration",
        value: function _modalConfiguration() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            html: "<div class=\"sku-selector comprarapida\">\n      <span class=\"sku-selector__close-btn\"><i class=\"fas fa-times\"></i></span>\n      <img class=\"shelf__product-image\" >\n      <div class=\"shelf__name-container\">\n        <h1 class=\"shelf__variation-name\"></h1>\n        <h1 class=\"shelf__name\"></h1>\n      </div>\n      <div class=\"shelf__price\">\n        <div class=\"shelf__best-price\"></div>\n        <div  class=\"shelf__list-price\"></div>\n      </div>\n      <div class=\"shelf__variations\"></div>\n        <div class=\"shelf__action\">\n          <div class=\"shelf__quantityController\"></div>\n          <button class=\"shelf__add-to-cart js-add-to-cart\" style=\"display:block!important\">Comprar</button>\n    </div>\n    <span class=\"shelf__avise-me\" ></span></div>\n    ",
            showConfirmButton: false,
            customClass: {
              container: 'shelf-container'
            }
          });
        }
      }]);
    
      return SkuSelectorControllerModal;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (SkuSelectorControllerModal);
    
    /***/ }),
    
    /***/ "./src/js/components/autocomplete/index.js":
    /*!*************************************************!*\
      !*** ./src/js/components/autocomplete/index.js ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
    /* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
    /* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
    /* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
    /* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
    /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
    /* harmony import */ var Services_cartService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Services/cartService */ "./src/js/services/cartService.js");
    /* harmony import */ var Services_catalogService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Services/catalogService */ "./src/js/services/catalogService.js");
    /* harmony import */ var Helpers___WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! Helpers/ */ "./src/js/helpers/index.js");
    /* harmony import */ var _miniCart_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../miniCart/index */ "./src/js/components/miniCart/index.js");
    /* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Placeholder */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var _skuSelectorController_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_skuSelectorController.js */ "./src/js/components/autocomplete/_skuSelectorController.js");
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    
    
    
    
    
    
    var AutoCompleteComponent = /*#__PURE__*/function () {
      function AutoCompleteComponent() {
        _classCallCheck(this, AutoCompleteComponent);
    
        this._getCatalog = new Services_catalogService__WEBPACK_IMPORTED_MODULE_22__["default"]();
        this._cartService = new Services_cartService__WEBPACK_IMPORTED_MODULE_21__["default"]();
        this._minircart = new _miniCart_index__WEBPACK_IMPORTED_MODULE_24__["default"]();
        this.helpers = new Helpers___WEBPACK_IMPORTED_MODULE_23__["default"]();
        this.skuSelectorModalController_ = new _skuSelectorController_js__WEBPACK_IMPORTED_MODULE_26__["default"]();
        this.inputSearchBar = '#search-input';
        this.resultList = 'result-list';
        this.searchButton = '.js-send-search';
        this.loading = new _Placeholder__WEBPACK_IMPORTED_MODULE_25__["default"]();
      }
    
      _createClass(AutoCompleteComponent, [{
        key: "showResults",
        value: function showResults(resp, catalago, general) {
          var _this = this;
    
          var resultList = document.getElementById(this.resultList);
          resultList.innerHTML = '';
          this.loading.loaderController(true, resultList, 'autocomplete');
          resultList.classList.remove('result-list-show', 'result-list-show-no-item');
          var searchBar = document.querySelector(this.inputSearchBar);
    
          if (!searchBar.value && resp.itemsReturned === undefined) {
            this.loading.loaderController(false, resultList, 'autocomplete');
          }
    
          if (resp.itemsReturned === undefined) {
            return;
          }
    
          var items = resp.itemsReturned;
          var animationDelay = 0;
    
          if (items.length == 0) {
            this.showGeneralResults(general);
          } else {
            resultList.classList.add('result-list-show');
            items.forEach(function (item, index) {
              // VERIFICAR SE catalogo.productId FOR IGUAL A items.productID
              // <div class="list-brand">
              //   <span>${catalago.catalagoItems[index].brand}</span>
              // </div>
              if (item.items.length >= 1) {
                var thumb = function thumb() {
                  var thumbElement = '';
    
                  if (item.thumb) {
                    thumbElement = "\n              <img width=\"25\" height=\"25\" src=\"".concat(item.thumbUrl.replace('-25-25/', '-100-100/'), "\" />\n              ");
                  }
    
                  return thumbElement;
                };
    
                var resultItem = "\n          <div data-index=".concat(index, " class=\"list-group-item animated fadeInUp\" style=\"animation-delay: ").concat(animationDelay, "s;\">\n\n            <div class=\"list-image\">\n              ").concat(thumb() || '', "\n            </div>\n            <div class=\"list-title\">\n              <a href=").concat(item.href, ">\n                <h5>").concat(item.name, "</h5>                \n              </a>\n            </div>\n\n            <div class=\"price-title\">R$ <span class=\"price\"></span></div>\n\n            <div class=\"list-button\"><button class=\"comprar\">Comprar</button></div>\n          </div>\n                    ");
                resultList.insertAdjacentHTML('beforeend', resultItem);
                animationDelay += 0.1;
                setTimeout(function () {
                  _this.loading.loaderController(false, resultList, 'autocomplete');
                }, 1000);
              } else {
                console.log('departamento');
              }
            });
            this.resp = resp;
    
            this._setProductProperties(catalago);
          }
        }
      }, {
        key: "showGeneralResults",
        value: function showGeneralResults(items) {
          var _this2 = this;
    
          console.log('items', items);
          var animationDelay = 0;
          var resultList = document.getElementById(this.resultList);
    
          if (items.length > 1) {
            resultList.classList.add('result-list-show');
            items.forEach(function (item, index) {
              if (item.items.length > 1) {
                var resultItem = "\n          <div data-index=".concat(index, " data-product-id=\"").concat(item.productId, "\" class=\"list-group-item animated fadeInUp\" style=\"animation-delay: ").concat(animationDelay, "s;\">\n  \n            <div class=\"list-image small-image\">\n              <img width=\"100\" height=\"100\" src=\"").concat(item.items[0].images[0].imageUrl, "\" />\n            </div>\n  \n            <div class=\"list-title\">\n              <a href=").concat(item.link, ">\n                <h5>").concat(item.productName, "</h5>                \n              </a>\n            </div>\n\n            <div class=\"price-title\">R$ <span class=\"price\">").concat(_this2.helpers._formatPrice(item.items[0].sellers[0].commertialOffer.Price), "</span></div>\n            \n            <div class=\"list-button\"><button class=\"comprar\" data-product-id=\"").concat(item.productId, "\">Comprar</button></div>\n          </div>\n                    ");
                resultList.insertAdjacentHTML('beforeend', resultItem);
                animationDelay += 0.1;
                setTimeout(function () {
                  _this2.loading.loaderController(false, resultList, 'autocomplete');
                }, 1000);
              } else {// this.loading.loaderController(false, resultList, 'autocomplete');
                // console.log('departamento');
              }
            });
          } else {
            resultList.innerHTML = 'Nenhum item encontrado :(';
            resultList.classList.add('result-list-show', 'result-list-show-no-item');
          }
    
          this.skuSelectorModalController_.skuSelectorOnShelf();
        }
      }, {
        key: "showBlogItems",
        value: function showBlogItems(items) {}
      }, {
        key: "_setProductProperties",
        value: function _setProductProperties(catalago) {
          var _this3 = this;
    
          var priceElements = document.querySelectorAll('.price');
          var buttonBuyElements = document.querySelectorAll('.comprar');
          var listElements = document.querySelectorAll('.list-group-item');
          var priceCatalg = catalago.catalagoItems.map(function (item, index) {
            if (item.items[0] === undefined) return;
            return _this3.helpers._formatReal(item.items[0].sellers[0].commertialOffer.Price);
          });
          /* const priceCatalg = catalago.catalagoItems.map((item, index) => {
            if (item.items[index] === undefined) return;
            return item.items[0].sellers[0].commertialOffer.Price;
          }); */
    
          var productId = catalago.catalagoItems.map(function (item) {
            return item.items[0].itemId;
          });
          var productIdVariations = catalago.catalagoItems.map(function (item) {
            return item.productId;
          });
    
          _toConsumableArray(priceElements).map(function (priceElement, index) {
            if (!priceCatalg[index] == 0) {
              priceElement.innerHTML = priceCatalg[index];
            } else {
              priceElement.classList.add('hide');
              priceElement.parentElement.classList.add('hide');
            }
          });
    
          _toConsumableArray(buttonBuyElements).map(function (buyElement, index) {
            if (!priceCatalg[index] == 0) {
              buyElement.dataset.productId = productId[index];
            } else {
              buyElement.dataset.unavailable = true;
              buyElement.innerHTML = 'indisponível';
              buyElement.classList.add('primary-color');
            }
          }); // this.loading.loaderController(false, resultList, 'autocomplete');
    
    
          _toConsumableArray(listElements).map(function (listElement, index) {
            listElement.dataset.productId = productIdVariations[index];
          });
    
          this.skuSelectorModalController_.skuSelectorOnShelf();
        }
      }, {
        key: "setEventBuy",
        value: function setEventBuy(buttons) {
          var _this4 = this;
    
          _toConsumableArray(buttons).map(function (button) {
            button.addEventListener('click', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var id, params;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        id = e.target.dataset.productId;
                        params = {
                          skuId: id,
                          productQuantity: 1
                        };
                        _context.next = 4;
                        return _this4._cartService.addCurrentItem(params);
    
                      case 4:
                        _this4._minircart.handleRenderItemIntoTheCart();
    
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
    
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          });
        }
      }, {
        key: "setFocusOut",
        value: function setFocusOut() {
          var _this5 = this;
    
          var resultList = document.getElementById(this.resultList);
          window.addEventListener('click', function (event) {
            if (!event.target.matches(_this5.resultList)) {
              resultList.innerHTML = '';
              resultList.classList.remove('result-list-show');
            }
          });
        }
      }, {
        key: "setSearchEvent",
        value: function setSearchEvent() {
          var _this6 = this;
    
          var buttonSearchElement_ = document.querySelector(this.searchButton);
    
          if (buttonSearchElement_) {
            buttonSearchElement_.addEventListener('click', function () {
              var searchBar = document.querySelector(_this6.inputSearchBar);
              var inputValue_ = searchBar.value;
    
              if (!inputValue_ == '') {
                window.location.href = "/".concat(inputValue_);
              } else {
                searchBar.focus();
              }
            });
            var searchBar = document.querySelector(this.inputSearchBar);
            searchBar.addEventListener('keypress', function (e) {
              var inputValue_ = searchBar.value;
    
              if (e.key === 'Enter') {
                if (!inputValue_ == '') {
                  window.location.href = "/".concat(inputValue_);
                }
              }
            });
          }
        }
      }, {
        key: "resolver",
        value: function resolver() {
          var searchInput = document.getElementById('search-input');
          var input$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(searchInput, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (searchKey) {
            if (!searchKey || searchKey.length < 3) return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["of"])([]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["forkJoin"])(Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_19__["ajax"])("/buscaautocomplete/?maxRows=5&productNameContains=".concat(searchKey, "&suggestionsStack=")), Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_19__["ajax"])("/api/catalog_system/pub/products/search?ft=".concat(searchKey, "&_from=0&_to=4")), Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_19__["ajax"])("/api/catalog_system/pub/products/search/".concat(searchKey)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["catchError"])(function (err, source) {
            console.warn(err);
            return source;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                autocomplete = _ref3[0],
                catalago = _ref3[1],
                general = _ref3[2];
    
            return {
              autocomplete: autocomplete,
              catalago: catalago,
              general: general
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (resp) {
            if (resp.autocomplete === undefined) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["of"])([]);
            }
    
            return resp;
          }));
    
          this._subscribe(input$);
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(input$) {
          var _this7 = this;
    
          input$.subscribe({
            next: function next(response) {
              if (response.autocomplete === undefined) {
                _this7.showResults([], []);
              } else {
                _this7.showResults(response.autocomplete.response, {
                  catalagoItems: response.catalago.response
                }, response.general.response);
              }
            },
            complete: function complete() {
              console.log('Se ha completado el ciclo');
            }
          });
        }
      }, {
        key: "load",
        value: function load() {
          this.resolver();
          this.setFocusOut();
          this.setSearchEvent();
        }
      }]);
    
      return AutoCompleteComponent;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (AutoCompleteComponent);
    
    /***/ }),
    
    /***/ "./src/js/components/aviseme/index.js":
    /*!********************************************!*\
      !*** ./src/js/components/aviseme/index.js ***!
      \********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AvisemeComponent; });
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var Services_userService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Services/userService */ "./src/js/services/userService.js");
    /* harmony import */ var _frn_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../frn.component */ "./src/js/components/frn.component.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    
    var AvisemeComponent = /*#__PURE__*/function (_FrnComponent) {
      _inherits(AvisemeComponent, _FrnComponent);
    
      var _super = _createSuper(AvisemeComponent);
    
      function AvisemeComponent() {
        var _this;
    
        _classCallCheck(this, AvisemeComponent);
    
        _this = _super.call(this);
        _this._userService = new Services_userService__WEBPACK_IMPORTED_MODULE_13__["default"]();
        return _this;
      }
    
      _createClass(AvisemeComponent, [{
        key: "renderAviseme",
        value: function renderAviseme(_element, skuId) {
          if (_element) {
            _element.innerHTML = " <h4>AVISE-ME</h4>\n          <span class=\"skuselector__avise-me-text\">Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo</span>\n          <input placeholder='Nome' class='skuselector__avise-me-input skuselector__avise-me-input--name' />\n          <input placeholder='E-mail' class='skuselector__avise-me-input skuselector__avise-me-input--email' />\n          <button class='skuselector__avise-me-btn'>\n            <i class=\"icon-envelope-alt\"></i>\n            avise-me\n          </button>";
    
            this._setAutomaticEmail();
    
            this._setClickEvent(skuId);
          } else {
            console.log("Element ".concat(_element, " not found!!"));
          }
        }
      }, {
        key: "_setAutomaticEmail",
        value: function () {
          var _setAutomaticEmail2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var emailElement_, nameElement_, params, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    emailElement_ = document.querySelector(".skuselector__avise-me-input--email");
                    nameElement_ = document.querySelector(".skuselector__avise-me-input--name");
                    params = {
                      type: this._userService.VTEX_ENDPOINTS.USER_INFO
                    };
                    _context.next = 5;
                    return this._userService.getUserInformation(params);
    
                  case 5:
                    response = this._currentUser = _context.sent;
    
                    if (response.IsUserDefined) {
                      emailElement_.value = response.Email;
                    }
    
                    if (response.FirstName) {
                      nameElement_.value = response.FirstName;
                    }
    
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function _setAutomaticEmail() {
            return _setAutomaticEmail2.apply(this, arguments);
          }
    
          return _setAutomaticEmail;
        }()
      }, {
        key: "_setClickEvent",
        value: function _setClickEvent(skuId) {
          var _this2 = this;
    
          var buttonElement_ = document.querySelector(".skuselector__avise-me-btn");
          var nameElement_ = document.querySelector(".skuselector__avise-me-input--name");
          var emailElement_ = document.querySelector(".skuselector__avise-me-input--email");
          buttonElement_.addEventListener('click', function () {
            var _isValidEmail = _this2.helper_._isValidEmail(emailElement_.value);
    
            var payload = {
              notifymeClientName: nameElement_.value,
              notifymeClientEmail: emailElement_.value,
              notifymeIdSku: skuId
            };
    
            if (_isValidEmail) {
              _this2._tiggerPayload(payload, nameElement_, emailElement_);
            } else {
              _this2._handleErros();
            }
          });
        }
      }, {
        key: "_tiggerPayload",
        value: function _tiggerPayload(payload, nameElement_, emailElement_) {
          var _this3 = this;
    
          var data = this.helper_._FormData(payload);
    
          $.ajax({
            url: '/no-cache/AviseMe.aspx',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
          }).done(function (data) {
            _this3._succes(data);
    
            _this3._resetInput(nameElement_, emailElement_);
          });
        }
      }, {
        key: "_succes",
        value: function _succes() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('Enviado com sucesso!', 'Nós te avisaremos quanto este produto estiver disponível!', 'success');
        }
      }, {
        key: "_resetInput",
        value: function _resetInput(nameElement_, emailElement_) {
          nameElement_.value = '';
          emailElement_.value = '';
        }
      }, {
        key: "_handleErros",
        value: function _handleErros() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Teu email é invalido!'
          });
        }
      }]);
    
      return AvisemeComponent;
    }(_frn_component__WEBPACK_IMPORTED_MODULE_14__["default"]);
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/frn.component.js":
    /*!********************************************!*\
      !*** ./src/js/components/frn.component.js ***!
      \********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/index */ "./src/js/helpers/index.js");
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    /**
     * Base Component class
     */
    
    var FrnComponent = /*#__PURE__*/function () {
      /**
       * Base Component constructor
       * @param {Object} props Component's properties.
       */
      function FrnComponent() {
        _classCallCheck(this, FrnComponent);
    
        this.helper_ = new _helpers_index__WEBPACK_IMPORTED_MODULE_11__["default"]();
      }
      /**
       * Component rendering
       * @param {String} _contentContainerSelector - Content's Conatainer selector.
       * @param {String} _htmlToRender - HTML to be render.
       */
    
    
      _createClass(FrnComponent, [{
        key: "render",
        value: function render(_contentContainerSelector, _htmlToRender) {
          var element = document.querySelector(String(_contentContainerSelector));
    
          if (element) {
            element.innerHTML = String(_htmlToRender);
          } else {
            console.info("Element '".concat(_contentContainerSelector, "' not found on page!"));
          }
        }
        /**
         * Get element by selector
         * @param {*} elementSelector
         */
    
      }, {
        key: "getElement",
        value: function getElement() {
          var elementSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return document.querySelector(String(elementSelector));
        }
        /**
         * Get elements by selectors
         * @param {*} elementSelector
         */
    
      }, {
        key: "getElements",
        value: function getElements() {
          var elementSelectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var elements = [];
    
          _toConsumableArray(elementSelectors).forEach(function (selector) {
            var elementFound = document.querySelector(String(selector));
    
            if (elementFound) {
              elements.push(elementFound);
            }
          });
    
          return elements;
        }
        /**
         * Get all elements by selector
         * @param {*} elementSelector
         */
    
      }, {
        key: "getAllElements",
        value: function getAllElements() {
          var elementSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return document.querySelectorAll(String(elementSelector));
        }
      }]);
    
      return FrnComponent;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (FrnComponent);
    
    /***/ }),
    
    /***/ "./src/js/components/miniCart/_freeShippingController.js":
    /*!***************************************************************!*\
      !*** ./src/js/components/miniCart/_freeShippingController.js ***!
      \***************************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var Services_cartService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Services/cartService */ "./src/js/services/cartService.js");
    /* harmony import */ var Helpers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Helpers/index */ "./src/js/helpers/index.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    var FreeShippingController = /*#__PURE__*/function (_CartService) {
      _inherits(FreeShippingController, _CartService);
    
      var _super = _createSuper(FreeShippingController);
    
      function FreeShippingController() {
        var _this;
    
        _classCallCheck(this, FreeShippingController);
    
        _this = _super.call(this);
        _this.helpers = new Helpers_index__WEBPACK_IMPORTED_MODULE_11__["default"]();
        return _this;
      }
    
      _createClass(FreeShippingController, [{
        key: "handleFreeShippingProgress",
        value: function handleFreeShippingProgress(data) {
          //variables for free shiping
          var shippingValue = document.querySelector('.menu__frete');    
          var shippingTitle = document.querySelector('.cart-mini__shipping--title');
          var shippingProgressBar = document.querySelector('.js-shipping-progress');
          var shippingIcon = document.querySelector('.js-shipping-icon');
          var shippingTotalMissingElement = document.querySelector('.js-minicart-shipping-total');
          var goalReachedElement = document.querySelector('.cart-mini__shipping--goal-reached');
          
          var formato = {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          };
          
          ///////////////////conditional to earn a free shiping//////////////////////////
          if (shippingTitle && shippingProgressBar && shippingIcon && shippingTotalMissingElement) {
             dataTotalizers = data.totalizers;
             orderFormTotalValue = data.items.length ? dataTotalizers[0].value : 0;
            
            var freeShippingValue = parseFloat(shippingValue.textContent);
            var orderShippingCalculate = freeShippingValue - orderFormTotalValue;
            var resultCalcOrderAndShipping = orderFormTotalValue / freeShippingValue * 100;
            var result = resultCalcOrderAndShipping > 100 ? 100 : resultCalcOrderAndShipping;
            
    
            if (orderShippingCalculate < 0 && shippingTotalMissingElement && shippingTotalMissingElement.parentElement) {
    
              shippingTotalMissingElement.parentElement.style.display = 'none';
              goalReachedElement.style.display = 'block';
              document.querySelector('.js-shipping-container').style.display = 'none';
              goalReachedElement.innerHTML = "Parab\xE9ns! Voc\xEA ganhou <span class=\".--pink\">Frete Gr\xE1tis</span>";
    
    
            } else if (shippingTotalMissingElement) {
              var floatShipping = this.helpers._formatCurrencyDecimal(orderShippingCalculate);
    
              shippingTotalMissingElement.innerText = floatShipping.toLocaleString('pt-br', formato);
              shippingTotalMissingElement.parentElement.style.display = 'flex';
              document.querySelector('.js-shipping-container').style.display = 'flex';
              goalReachedElement.style.display = 'none';
    
            }
    
            shippingProgressBar.style.transform = "scaleX(".concat(result, "%)");
              shippingIcon.style.transform = resultCalcOrderAndShipping > 100 ? "translate(calc(".concat(result, "% - 1.75rem), 1.25rem)") : "translate(".concat(result, "%, 1.25rem)");
    
          }
    
          ///////////////////Conditional to earn a brinde/////////////////////////
          
          //variables for brinde
          var brindeValue = document.querySelector('.menu_brinde');
          var brindeTitle = document.querySelector('.cart-mini__brinde--title');
          var brindeProgressBar = document.querySelector('.js-brinde-progress');
          var brindeIcon = document.querySelector('.js-brinde-icon');
          var brindeTotalMissingElement = document.querySelector('.js-minicart-brinde-total');
          var goalReachedBrinde = document.querySelector('.cart-mini__brinde--goal-reached');
          
          if (brindeTitle && brindeProgressBar && brindeIcon && brindeTotalMissingElement) {
            
            var dataTotalizers = data.totalizers;
            var orderFormTotalValue = data.items.length ? dataTotalizers[0].value : 0; 
            
            var freeBrindeValue = parseFloat(brindeValue.textContent);
            var orderBrindeCalculate = freeBrindeValue - orderFormTotalValue;
            var resultCalcOrderAndBrinde = orderFormTotalValue / freeBrindeValue * 100;
            var resultFinal = resultCalcOrderAndBrinde > 100 ? 100 : resultCalcOrderAndBrinde;
    
            if (orderBrindeCalculate < 0 && brindeTotalMissingElement && brindeTotalMissingElement.parentElement) {
    
              brindeTotalMissingElement.parentElement.style.display = 'none';
              goalReachedBrinde.style.display = 'block';
              document.querySelector('.js-brinde-container').style.display = 'none';
    
              goalReachedBrinde.innerHTML = "Parab\xE9ns! Voc\xEA ganhou um <span class=\".--pink\">Brinde Exclusivo Piticas!</span><p>Finalize a compra para resgata-lo!</>";
    
            } else if (brindeTotalMissingElement) {
    
              var floatBrinde = this.helpers._formatCurrencyDecimal(orderBrindeCalculate);
    
              brindeTotalMissingElement.innerText = floatBrinde.toLocaleString('pt-br', formato);
              brindeTotalMissingElement.parentElement.style.display = 'flex';
              document.querySelector('.js-brinde-container').style.display = 'flex';
              goalReachedBrinde.style.display = 'none';
    
            }
    
            brindeProgressBar.style.transform = "scaleX(".concat(resultFinal, "%)");
    
              brindeIcon.style.transform = resultCalcOrderAndBrinde > 100 ? "translate(calc(".concat(resultFinal, "% - 1.75rem), 1.25rem)") : "translate(".concat(resultFinal, "%, 1.25rem)");
    
          }
    
        }
      }]);
    
      return FreeShippingController;
    }(Services_cartService__WEBPACK_IMPORTED_MODULE_10__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (FreeShippingController);
    
    /***/ }),
    
    /***/ "./src/js/components/miniCart/_messagesController.js":
    /*!***********************************************************!*\
      !*** ./src/js/components/miniCart/_messagesController.js ***!
      \***********************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var Services_cartService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Services/cartService */ "./src/js/services/cartService.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    var MessagesController = /*#__PURE__*/function (_CartService) {
      _inherits(MessagesController, _CartService);
    
      var _super = _createSuper(MessagesController);
    
      function MessagesController() {
        _classCallCheck(this, MessagesController);
    
        return _super.call(this);
      }
    
      _createClass(MessagesController, [{
        key: "showMessages",
        value: function () {
          var _showMessages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(datas, index) {
            var revert,
                data,
                _args = arguments;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    revert = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
                    data = datas.messages;
                    data.length === 0 ? ' ' : this.handleShowModalToast("".concat(data[0].status), "".concat(data[0].text));
                    _context.next = 5;
                    return this.clearMessages();
    
                  case 5:
                    if (revert) {
                      this.handleRevertQuantity(datas, index);
                    }
    
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function showMessages(_x, _x2) {
            return _showMessages.apply(this, arguments);
          }
    
          return showMessages;
        }()
      }, {
        key: "handleRevertQuantity",
        value: function handleRevertQuantity(datas, index) {
          var data = datas.messages;
          var inputQuantityElement = document.querySelectorAll('.js-product-qty');
          data.code === null ? ' ' : inputQuantityElement[index].value = datas.items[index].quantity;
        }
      }, {
        key: "handleShowModalToast",
        value: function handleShowModalToast(icon, title) {
          var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function onOpen(toast) {
              toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.stopTimer);
              toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.resumeTimer);
            }
          });
          Toast.fire({
            icon: icon,
            title: title
          });
        }
      }]);
    
      return MessagesController;
    }(Services_cartService__WEBPACK_IMPORTED_MODULE_12__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (MessagesController);
    
    /***/ }),
    
    /***/ "./src/js/components/miniCart/index.js":
    /*!*********************************************!*\
      !*** ./src/js/components/miniCart/index.js ***!
      \*********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniCartComponent; });
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
    /* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
    /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */ var Services_cartService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Services/cartService */ "./src/js/services/cartService.js");
    /* harmony import */ var Services_catalogService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Services/catalogService */ "./src/js/services/catalogService.js");
    /* harmony import */ var Helpers_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! Helpers//index */ "./src/js/helpers/index.js");
    /* harmony import */ var _autocomplete_quantityController__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../autocomplete/_quantityController */ "./src/js/components/autocomplete/_quantityController.js");
    /* harmony import */ var _frn_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../frn.component */ "./src/js/components/frn.component.js");
    /* harmony import */ var _freeShippingController__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_freeShippingController */ "./src/js/components/miniCart/_freeShippingController.js");
    /* harmony import */ var _messagesController__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_messagesController */ "./src/js/components/miniCart/_messagesController.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    
    
    
    
    
     //import CupomController from './_cupomController';
    
    
    
    
    var MiniCartComponent = /*#__PURE__*/function (_FrnComponent) {
      _inherits(MiniCartComponent, _FrnComponent);
    
      var _super = _createSuper(MiniCartComponent);
    
      function MiniCartComponent() {
        var _this;
    
        _classCallCheck(this, MiniCartComponent);
    
        _this = _super.call(this);
        _this._vtexjsCartService = new Services_cartService__WEBPACK_IMPORTED_MODULE_21__["default"]();
        _this._vtexjsCatalogService = new Services_catalogService__WEBPACK_IMPORTED_MODULE_22__["default"]();
        _this._helper = new Helpers_index__WEBPACK_IMPORTED_MODULE_23__["default"](); //this._cupomController = new CupomController();
    
        _this._freeShippingController = new _freeShippingController__WEBPACK_IMPORTED_MODULE_26__["default"]();
        _this._messagesController = new _messagesController__WEBPACK_IMPORTED_MODULE_27__["default"]();
        _this._quantityController = new _autocomplete_quantityController__WEBPACK_IMPORTED_MODULE_24__["default"]();
        _this.miniCartLink = 'cart__link';
        _this.miniCartContent = 'cart-mini';
        _this.miniCartCloseLink = 'cart-mini__close';
        _this.miniCartItemCountTotal = 'cart__total';
        _this.miniCartList = 'cart-mini__list';
        _this.miniCartListItem = 'js-cart-mini-listItem';
        _this.miniCartListItemTemplate = 'js-cart-mini-listItem-template';
        _this.minicartItem = 'cart-mini__item';
        _this.miniCartItemImage = 'js-miniCart-item-image';
        _this.miniCartItemName = 'js-miniCart-item-name';
        _this.miniCartItemPrice = 'js-miniCart-item-price';
        _this.miniCartItemPriceOld = 'js-miniCart-item-price-old';
        _this.miniCartItemPriceNew = 'js-miniCart-item-price-new';
        _this.productCarts = 'productCard';
        _this.productCartBuy = 'productCard__buy';
        _this.miniCartRemoveItem = 'remove-item';
        _this.miniCartItemList = 'js-cart-mini-list-item';
        _this.cartMiniCountItemsElement = 'cart-mini__items-count';
        _this.buttonQtyActionSelector = 'js-product-qty-action';
        _this.listItemQtySelector = '.js-product-qty';
        _this.cartMiniFinalPrice = 'cart-mini__final-price';
        _this.orderFormId = [];
        _this.indexMensaggems = [];
        return _this;
      }
    
      _createClass(MiniCartComponent, [{
        key: "handleToggleMiniCart",
        value: function handleToggleMiniCart() {
          var _this2 = this;
    
          var miniCartLink = document.querySelector(".".concat(this.miniCartLink));
          var miniCartTotal = document.querySelector(".".concat(this.miniCartItemCountTotal));
          var miniCartCloseLink = document.querySelector(".".concat(this.miniCartCloseLink));
    
          this._handleCartActions();
    
          if (miniCartLink && miniCartCloseLink) {
            miniCartLink.addEventListener('click', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var getCurrentCart;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return _this2._vtexjsCartService.getCurrentCart();
    
                      case 3:
                        getCurrentCart = _context.sent;
    
                        if (!getCurrentCart.items.length <= 0) {
                          _this2._handleOpen();
                        } else {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
                            icon: 'question',
                            title: 'Oops...',
                            text: 'Voce nao tem nada em seu carrinho!!'
                          });
                        }
    
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
    
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
            miniCartTotal.addEventListener('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var getCurrentCart;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        _context2.next = 3;
                        return _this2._vtexjsCartService.getCurrentCart();
    
                      case 3:
                        getCurrentCart = _context2.sent;
    
                        if (!getCurrentCart.items.length <= 0) {
                          _this2._handleOpen();
                        } else {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.fire({
                            icon: 'question',
                            title: 'Oops...',
                            text: 'Voce nao tem nada em seu carrinho!!'
                          });
                        }
    
                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
    
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            miniCartCloseLink.addEventListener('click', function () {
              _this2._handleClose();
            });
          }
        }
      }, {
        key: "_handleOpen",
        value: function _handleOpen() {
          var cartMiniContent = document.querySelector(".".concat(this.miniCartContent));
          var divOverlayElement = document.querySelector('.overlay__minicart');
          divOverlayElement.classList.add('overlay__minicart--show');
          cartMiniContent.classList.add('cart-mini--active');
    
          this._handleCloseClickOverlay();
        }
      }, {
        key: "_handleClose",
        value: function _handleClose() {
          var cartMiniContent = document.querySelector(".".concat(this.miniCartContent));
          var divOverlayElement = document.querySelector('.overlay__minicart');
          divOverlayElement.classList.remove('overlay__minicart--show');
          cartMiniContent.classList.remove('cart-mini--active');
        }
      }, {
        key: "_handleCloseClickOverlay",
        value: function _handleCloseClickOverlay() {
          var _this3 = this;
    
          var divOverlayElement = document.querySelector('.overlay__minicart');
          divOverlayElement.addEventListener('click', function () {
            _this3._handleClose();
          });
        }
      }, {
        key: "_handleCartActions",
        value: function _handleCartActions() {
          var _this4 = this;
    
          var keepBuyElement_ = document.querySelectorAll('.cart-mini__buy-actions > a');
          keepBuyElement_[1].addEventListener('click', function (e) {
            e.preventDefault();
    
            _this4._handleClose();
          });
        }
      }, {
        key: "handleRenderItemIntoTheCart",
        value: function () {
          var _handleRenderItemIntoTheCart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var getCurrentCart, miniCartItemCountTotal, miniCartListItems, miniCartListItemTemplateElement, miniCartList, i, miniCartListItem, products, cartMiniCountItemsElement, _i, productsName, priceFormated;
    
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this._vtexjsCartService.getCurrentCart();
    
                  case 2:
                    getCurrentCart = _context3.sent;
                    this.orderFormId = getCurrentCart;
                    miniCartItemCountTotal = document.querySelector(".".concat(this.miniCartItemCountTotal));
                    miniCartListItems = document.querySelectorAll(".".concat(this.miniCartListItem));
                    miniCartListItemTemplateElement = document.querySelector(".".concat(this.miniCartListItemTemplate));
                    miniCartList = document.querySelector(".".concat(this.miniCartList));
    
                    for (i = 0; i < miniCartListItems.length; i++) {
                      miniCartListItem = miniCartListItems[i];
    
                      if (miniCartListItem !== miniCartListItemTemplateElement) {
                        miniCartList.removeChild(miniCartListItem);
                      }
                    }
    
                    miniCartItemCountTotal.innerHTML = getCurrentCart.items.length;
    
                    if (getCurrentCart.items.length <= 0) {
                      this._handleClose();
    
                      this._freeShippingController.handleFreeShippingProgress(getCurrentCart);
                    } else {
                      products = getCurrentCart.items;
                      cartMiniCountItemsElement = document.querySelector(".".concat(this.cartMiniCountItemsElement));
                      cartMiniCountItemsElement.innerHTML = products.length;
    
                      this._messagesController.showMessages(getCurrentCart, this.indexMensaggems, false);
    
                      for (_i = 0; _i < products.length; _i++) {
                        this._freeShippingController.handleFreeShippingProgress(getCurrentCart);
    
                        productsName = products[_i].name.toLowerCase();
                        priceFormated = products[_i].sellingPrice;
                        miniCartList.innerHTML += "\n        <li class='cart-mini__item js-cart-mini-listItem js-cart-mini-listItem-template js-cart-mini-list-item' data-mini-cart-item-index=".concat(_i, ">\n          <div class='cart-mini__image'>\n            <img src='").concat(products[_i].imageUrl, "' />\n          </div>\n\n          <div class='cart-mini__content'>\n            <span>").concat(productsName, "</span>            \n            <span class='cart-mini__price-item'>R$ ").concat(this._helper._formatPrice(priceFormated), "</span>\n            \n          </div>\n          <div class='cart-mini__content-last'>\n            <span class='cart-mini__content-quantity'>Quantidade</span>\n            <a class=\"remove-item\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATZJREFUeNp80z1LA0EQgGFzRglYhYAiFgqiVfwNKWyEYGGhnRYRi3gWWgQM1goWCn6gjY2QUhAljT/AJqWFIhLLEEFMoyL4Ed+FWRiGTRYe2L3d2Z2du0vEcdzTpQ2gjc/QZBR4lsU5XvGODzRxholOwQmUcYclZNTcEJbxgLVQ8CZ2ZJNOrRdHKOpgl+q2WnQbCLxHS/oHGPPBJXXin6R/oQJrWFCF68NGUgZ5U4dLTGMQKRRwhRG1Lp+U15ExKbrxNWZkMxc4btaMRvIeQ60pV3Hz/YH5diT3eDETNUnVnX6CWbyZNc++YFVT1YJKNYctzJngqg/exa/0h3Fj7jiPYzX+wr4PfsK69NOmqr5Nqf4KGvoLczuv4rvLF+ZOXEQl9GOcYhKHqONHNnvEnlyl4hf/CzAAHuU9H3DZa8UAAAAASUVORK5CYII=\" /></a>                    \n            <div class='cartActions'>              \n              <a class='cartProduct__quantity--action js-product-qty-action js-minicart-qty-action' data-product-qty-action-factor=\"-1\">-</a>\n              <input type=\"text\" class='cartProduct__quantity--number js-product-qty' data-mini-cart-item-index=").concat(_i, "  data-product-sku='").concat(products[_i].productId, "' value=").concat(products[_i].quantity, ">\n              <a class='cartProduct__quantity--action js-product-qty-action js-minicart-qty-action' data-product-qty-action-factor=\"+1\" >+</a>\n            </div>\n          </div>          \n        </li>\n        ");
                      }
    
                      this.handleShowFinalPrice();
                      this.handleRemoveItemIntoTheCart();
                    }
    
                    this.handleQuantityActionsPlusAndMinus();
    
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function handleRenderItemIntoTheCart() {
            return _handleRenderItemIntoTheCart.apply(this, arguments);
          }
    
          return handleRenderItemIntoTheCart;
        }()
      }, {
        key: "handleShowFinalPriceByQuantity",
        value: function handleShowFinalPriceByQuantity(response) {
          // const getCurrentCart = await this._vtexjsCartService.getCurrentCart();
    
          /* const cupomDiscountElement = document.querySelector(
            `.${this._cupomController.cupomDiscount}`
          ); */
          var cartMiniFinalSubPrice = document.querySelector(".".concat(this.cartMiniFinalPrice));
          var cartMiniTotalPrice = document.querySelector('.cart-mini__final-price-total');
          cartMiniFinalSubPrice.innerHTML = "R$ ".concat(this.helper_._formatPrice(response.totalizers[0].value));
          cartMiniTotalPrice.innerHTML = "R$ ".concat(this.helper_._formatPrice(response.value));
          /* cupomDiscountElement.innerHTML = `R$ ${this.helper_._formatPrice(
            response.totalizers[1].value
          )}`; */
        }
      }, {
        key: "handleShowFinalPrice",
        value: function () {
          var _handleShowFinalPrice = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var getCurrentCart, cartMiniFinalSubPrice, cartMiniTotalPrice;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._vtexjsCartService.getCurrentCart();
    
                  case 2:
                    getCurrentCart = _context4.sent;
    
                    /* const cupomDiscountElement = document.querySelector(
                      `.${this._cupomController.cupomDiscount}`
                    ); */
                    cartMiniFinalSubPrice = document.querySelector(".".concat(this.cartMiniFinalPrice));
                    cartMiniTotalPrice = document.querySelector('.cart-mini__final-price-total');
                    cartMiniFinalSubPrice.innerHTML = "R$ ".concat(this.helper_._formatPrice(getCurrentCart.totalizers[0].value));
                    cartMiniTotalPrice.innerHTML = "R$ ".concat(this.helper_._formatPrice(getCurrentCart.value));
                    /* cupomDiscountElement.innerHTML = `R$ ${this.helper_._formatPrice(
                      getCurrentCart.totalizers[1].value
                    )}`; */
    
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
    
          function handleShowFinalPrice() {
            return _handleShowFinalPrice.apply(this, arguments);
          }
    
          return handleShowFinalPrice;
        }()
      }, {
        key: "handleRemoveItemIntoTheCart",
        value: function handleRemoveItemIntoTheCart() {
          var _this5 = this;
    
          var miniCartListItems = document.querySelectorAll(".".concat(this.miniCartItemList));
    
          _toConsumableArray(miniCartListItems).forEach(function (miniCartListItem) {
            var ItemIndex = miniCartListItem.dataset.miniCartItemIndex;
            var removeButton = miniCartListItem.querySelector(".".concat(_this5.miniCartRemoveItem));
            removeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _this5._vtexjsCartService.removeCurrentItem(ItemIndex);
    
                    case 2:
                      _this5.handleShowModalToast('error', 'Eliminado com sucesso');
    
                      _this5.handleRenderItemIntoTheCart();
    
                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));
          });
        }
      }, {
        key: "handleAddItemIntoTheCart",
        value: function handleAddItemIntoTheCart() {
          var _this6 = this;
    
          var productCarts = document.querySelectorAll(".".concat(this.productCarts));
    
          _toConsumableArray(productCarts).forEach(function (productCart) {
            var productCartBuyButton = productCart.querySelector(".".concat(_this6.productCartBuy));
            productCartBuyButton && productCartBuyButton.addEventListener('click', /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                var id, params;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        e.preventDefault();
                        id = productCart.dataset.productId;
                        params = {
                          type: _this6._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_SKU,
                          skuId: id,
                          productQuantity: 1
                        };
                        _context6.next = 5;
                        return _this6._vtexjsCartService.addCurrentItem(params);
    
                      case 5:
                        _this6.handleShowModalToast('success', 'Adicionado com sucesso');
    
                        _this6.handleRenderItemIntoTheCart();
    
                        _this6._handleOpen();
    
                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
    
              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
          });
        }
      }, {
        key: "handleQuantityActionsPlusAndMinus",
        value: function handleQuantityActionsPlusAndMinus() {
          var _this7 = this;
    
          var qtyActionButtons = document.querySelectorAll(".".concat(this.buttonQtyActionSelector));
    
          if (qtyActionButtons) {
            qtyActionButtons.forEach(function (qtyActionButton) {
              var element = qtyActionButton.parentElement.querySelector("".concat(_this7.listItemQtySelector));
              Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["fromEvent"])(element, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (value) {
                if (!value || value.length === 0) {
                  return 1;
                }
    
                return value;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function (item) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])(Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_18__["ajax"])({
                  url: "/api/checkout/pub/orderForm/".concat(_this7.orderFormId.orderFormId, "/items"),
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: {
                    orderItems: [{
                      index: element.dataset.miniCartItemIndex,
                      quantity: +item
                    }]
                  }
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function (data) {
                if (data[0].status == 200) {
                  _this7._freeShippingController.handleFreeShippingProgress(data[0].response);
    
                  _this7.handleShowFinalPrice(data[0].response);
    
                  _this7._messagesController.showMessages(data[0].response, _this7.indexMensaggems);
                }
              })).subscribe();
              Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["fromEvent"])(qtyActionButton, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (e) {
                var actionFactor = e.currentTarget.dataset.productQtyActionFactor;
                var element = qtyActionButton.parentElement.querySelector("".concat(_this7.listItemQtySelector));
    
                var currentQuantity = _this7._quantityController._handleQuantity(actionFactor, element);
    
                var params = {
                  index: currentQuantity.index,
                  productQuantity: currentQuantity.currentQuantity
                };
                _this7.indexMensaggems = params.index;
                return params;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function (item) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])(Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_18__["ajax"])({
                  url: "/api/checkout/pub/orderForm/".concat(_this7.orderFormId.orderFormId, "/items"),
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: {
                    orderItems: [{
                      index: item.index,
                      quantity: +item.productQuantity
                    }]
                  }
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function (data) {
                if (data[0].status == 200) {
                  _this7._freeShippingController.handleFreeShippingProgress(data[0].response);
    
                  _this7.handleShowFinalPriceByQuantity(data[0].response);
    
                  _this7._messagesController.showMessages(data[0].response, _this7.indexMensaggems);
                }
              })).subscribe({
                next: function next() {// console.log('got value ' + x);
                },
                error: function error(err) {
                  console.error('something wrong occurred: ' + err);
                },
                complete: function complete() {
                  console.log('termino');
                }
              });
            });
          }
        }
      }, {
        key: "handleShowModalToast",
        value: function handleShowModalToast(icon, title) {
          var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function onOpen(toast) {
              toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.stopTimer);
              toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_20___default.a.resumeTimer);
            }
          });
          Toast.fire({
            icon: icon,
            title: title
          });
        }
      }, {
        key: "_addProduct",
        value: function () {
          var _addProduct2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(skuId, quantity) {
            var params;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    params = {
                      type: this._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_SKU,
                      skuId: skuId,
                      productQuantity: +quantity
                    };
                    _context7.next = 3;
                    return this._vtexjsCartService.addCurrentItem(params);
    
                  case 3:
                    this.handleShowModalToast('success', 'Adicionado com sucesso');
                    this.handleRenderItemIntoTheCart();
    
                    this._handleOpen();
    
                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
    
          function _addProduct(_x4, _x5) {
            return _addProduct2.apply(this, arguments);
          }
    
          return _addProduct;
        }()
      }, {
        key: "_addMultipleProducts",
        value: function () {
          var _addMultipleProducts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(skus) {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this._vtexjsCartService.addMultipleProducts(skus);
    
                  case 2:
                    this.handleShowModalToast('success', 'Adicionado com sucesso');
                    this.handleRenderItemIntoTheCart();
    
                    this._handleOpen();
    
                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
    
          function _addMultipleProducts(_x6) {
            return _addMultipleProducts2.apply(this, arguments);
          }
    
          return _addMultipleProducts;
        }()
      }, {
        key: "refresh",
        value: function refresh() {
          this.handleRenderItemIntoTheCart();
        }
      }, {
        key: "load",
        value: function load() {
          this.handleToggleMiniCart();
          this.handleRenderItemIntoTheCart();
          this.handleAddItemIntoTheCart(); //this._cupomController.load();
        }
      }]);
    
      return MiniCartComponent;
    }(_frn_component__WEBPACK_IMPORTED_MODULE_25__["default"]);
    
    
    
    /***/ }),
    
    /***/ "./src/js/components/newsletter/index.js":
    /*!***********************************************!*\
      !*** ./src/js/components/newsletter/index.js ***!
      \***********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var Services_masterDataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Services/masterDataService */ "./src/js/services/masterDataService.js");
    /* harmony import */ var _frn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../frn.component */ "./src/js/components/frn.component.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var Helpers___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Helpers/ */ "./src/js/helpers/index.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    
    
    var NewsletterComponent = /*#__PURE__*/function (_FrnComponent) {
      _inherits(NewsletterComponent, _FrnComponent);
    
      var _super = _createSuper(NewsletterComponent);
    
      function NewsletterComponent() {
        var _this;
    
        _classCallCheck(this, NewsletterComponent);
    
        _this = _super.call(this);
        _this._vtexjsMasterData = new Services_masterDataService__WEBPACK_IMPORTED_MODULE_14__["default"]();
        _this._helper = new Helpers___WEBPACK_IMPORTED_MODULE_17__["default"]();
        _this.formId = '#js-form-newsletter';
        _this.inputEmailElement = '.js-form-input-email';
        _this.inputNameElement = '.js-form-input-name';
        _this.buttonSend = '#js-button-send';
        /**
         * Get Form's element
         */
    
        _this.getFormElement = function () {
          return _this.getElement(_this.formId);
        };
        /**
         * Get email's input element
         */
    
    
        _this.getInputEmailElement = function () {
          return _this.getElement(_this.inputEmailElement);
        };
        /**
         * Get name input element
         */
    
    
        _this.getInputNameElement = function () {
          return _this.getElement(_this.inputNameElement);
        };
        /**
         * Get submit button's element
         */
    
    
        _this.getButtonSubmitElement = function () {
          return _this.getElement(_this.buttonSend);
        };
    
        return _this;
      }
    
      _createClass(NewsletterComponent, [{
        key: "handleGetNewsletter",
        value: function handleGetNewsletter() {
          var _this2 = this;
    
          var inputEmailElement = this.getInputEmailElement();
          var inputNameElement = this.getInputNameElement();
          var formElement = this.getFormElement();
          var buttonSubmitElement = this.getButtonSubmitElement();
    
          if (inputEmailElement && inputNameElement && formElement && buttonSubmitElement) {
            buttonSubmitElement.addEventListener('click', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var isFormValid, emailValue, nameValue, validName_, verifyEmail_, _inputEmailElement, _inputNameElement, validEmail_;
    
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        isFormValid = formElement.reportValidity();
    
                        if (!isFormValid) {
                          _context.next = 33;
                          break;
                        }
    
                        emailValue = _this2.getInputEmailElement().value;
                        nameValue = _this2.getInputNameElement().value; //const entityCode = (this._vtexjsMasterData.entityCode = 'NL');
    
                        validName_ = nameValue.includes('@');
    
                        if (validName_) {
                          _context.next = 32;
                          break;
                        }
    
                        _context.next = 9;
                        return _this2._triggerMasterDataToVerifyEmail(emailValue
                        /* ,
                        entityCode */
                        );
    
                      case 9:
                        verifyEmail_ = _context.sent;
    
                        if (!(verifyEmail_ == undefined)) {
                          _context.next = 27;
                          break;
                        }
    
                        _inputEmailElement = document.querySelector(_this2.inputEmailElement);
                        _inputNameElement = document.querySelector(_this2.inputNameElement);
                        validEmail_ = _this2._helper._isValidEmail(emailValue);
    
                        if (!validEmail_) {
                          _context.next = 22;
                          break;
                        }
    
                        _context.next = 17;
                        return _this2._triggerMasterDaraToPutAnEmail(emailValue, nameValue
                        /* ,
                        entityCode */
                        );
    
                      case 17:
                        _inputEmailElement.value = '';
                        _inputNameElement.value = '';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
                          icon: 'success',
                          text: 'Cadastrado com sucesso!',
                          customClass: {
                            container: 'newsletter-success'
                          }
                        });
                        _context.next = 25;
                        break;
    
                      case 22:
                        _inputEmailElement.value = '';
                        _inputNameElement.value = '';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
                          icon: 'error',
                          text: 'Ocorreu um erro',
                          customClass: {
                            container: 'newsletter-fail'
                          }
                        });
    
                      case 25:
                        _context.next = 30;
                        break;
    
                      case 27:
                        inputEmailElement.value = '';
                        inputNameElement.value = '';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
                          customClass: {
                            container: 'newsletter-fail'
                          },
                          icon: 'warning',
                          text: 'E-mail ja cadastratado'
                        });
    
                      case 30:
                        _context.next = 33;
                        break;
    
                      case 32:
                        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
                          icon: 'error',
                          text: 'Ocorreu um erro',
                          customClass: {
                            container: 'newsletter-fail'
                          }
                        });
    
                      case 33:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
    
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        }
        /**
         *
         * @param {*} emailValue
         */
    
      }, {
        key: "_triggerMasterDataToVerifyEmail",
        value: function () {
          var _triggerMasterDataToVerifyEmail2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(emailValue
          /* , entityCode */
          ) {
            var checkParams, checkresult;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    checkParams = {
                      /* type: this._vtexjsMasterData.VTEX_ENDPOINTS.Fields(entityCode), */
                      email: "?email=".concat(emailValue, "&_fields=id")
                    };
                    _context2.next = 3;
                    return this._vtexjsMasterData.getMasterData(checkParams);
    
                  case 3:
                    checkresult = _context2.sent;
                    return _context2.abrupt("return", checkresult);
    
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function _triggerMasterDataToVerifyEmail(_x2) {
            return _triggerMasterDataToVerifyEmail2.apply(this, arguments);
          }
    
          return _triggerMasterDataToVerifyEmail;
        }()
        /**
         *
         * @param {*} emailValue
         * @param {*} nameValue  
         */
    
      }, {
        key: "_triggerMasterDaraToPutAnEmail",
        value: function () {
          var _triggerMasterDaraToPutAnEmail2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(emailValue, nameValue
          /* , entityCode */
          ) {
            var payload, result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    /* const params = {
                      type: this._vtexjsMasterData.VTEX_ENDPOINTS.Documents(),
                      entityCode,
                    }; */
                    payload = {
                      email: emailValue,
                      name: nameValue
                    };
                    _context3.next = 3;
                    return this._vtexjsMasterData.addMasterData(
                    /* params, */
                    payload);
    
                  case 3:
                    result = _context3.sent;
                    return _context3.abrupt("return", result);
    
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function _triggerMasterDaraToPutAnEmail(_x3, _x4) {
            return _triggerMasterDaraToPutAnEmail2.apply(this, arguments);
          }
    
          return _triggerMasterDaraToPutAnEmail;
        }()
      }, {
        key: "load",
        value: function load() {
          this.handleGetNewsletter();
        }
      }]);
    
      return NewsletterComponent;
    }(_frn_component__WEBPACK_IMPORTED_MODULE_15__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (NewsletterComponent);
    
    /***/ }),
    
    /***/ "./src/js/components/quickBuy/index.js":
    /*!*********************************************!*\
      !*** ./src/js/components/quickBuy/index.js ***!
      \*********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var Helpers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Helpers//index */ "./src/js/helpers/index.js");
    /* harmony import */ var _miniCart_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../miniCart/index */ "./src/js/components/miniCart/index.js");
    /* harmony import */ var _Placeholder_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Placeholder/index */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SkuSelector/SkuSelectorController */ "./src/js/components/SkuSelector/SkuSelectorController.js");
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    
    
    
    
    var quickBuy = /*#__PURE__*/function () {
      function quickBuy() {
        _classCallCheck(this, quickBuy);
    
        this.helpers_ = new Helpers_index__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.miniCart = new _miniCart_index__WEBPACK_IMPORTED_MODULE_6__["default"]();
      }
    
      _createClass(quickBuy, [{
        key: "_htmlStructure",
        value: function _htmlStructure() {
          return "\n      <div class=\"sku-selector\">\n        <img class=\"shelf__product-image dfs\" />\n        <div class=\"shelf__variations\">\n          <div class=\"shelf__action\">\n            <div class=\"shelf__quantityController\"></div>\n            <button class=\"shelf__add-to-cart\">Comprar</button>\n          </div>\n        </div>\n      </div>\n    ";
        }
      }, {
        key: "skuSelectorOnShelf",
        value: function skuSelectorOnShelf(product) {
          var _this = this;
    
          if (product) {
            var productId = product.dataset.productId;
            var openModalBtn = product.querySelector('.productCard__sku-selector');
            var loading = new _Placeholder_index__WEBPACK_IMPORTED_MODULE_7__["default"]();
            openModalBtn && openModalBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var skuSelector, skuModel, response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _this._modalConfiguration();
    
                      loading.loaderController(true, document.querySelector('.comprarapida'), 'shelf__sku-selector');
                      skuSelector = new _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_8__["default"]({
                        id: productId,
                        viewElement: document.querySelector('.shelf__variations'),
                        context: 'shelf',
                        buyButton: true,
                        addToCartBtn: true,
                        quantity: true
                      });
                      skuModel = skuSelector.skuSelectorModel_;
                      _context.next = 6;
                      return skuModel.response;
    
                    case 6:
                      response = _context.sent;
    
                      /* if (skuModel.response.skus.length == 1) {
                        console.log('1 variation');
                        Swal.close();
                      } else {
                        this.renderProductInfo(response);
                          skuSelector.init();
                          loading.loaderController(
                          false,
                          document.querySelector('.comprarapida'),
                          'shelf__sku-selector'
                        );
                        this.handleCloseBtn();
                      } */
                      _this.renderProductInfo(response);
    
                      skuSelector.init();
                      loading.loaderController(false, document.querySelector('.comprarapida'), 'shelf__sku-selector');
    
                      _this.handleCloseBtn();
    
                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
          }
        }
      }, {
        key: "renderProductInfo",
        value: function renderProductInfo(response) {
          var productName = document.querySelector('.shelf__name');
          productName.textContent = response.name;
        }
      }, {
        key: "_categoryQuickBuy",
        value: function _categoryQuickBuy() {
          var _this2 = this;
    
          var shelfContainer = document.querySelector('.vitrine__group');
    
          if (shelfContainer) {
            shelfContainer.addEventListener('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                var articleElement_, productId, response, loading, skuSelector;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!e.target.matches('.productCard__sku-selector')) {
                          _context2.next = 15;
                          break;
                        }
    
                        articleElement_ = _this2.helpers_.getParents(e.target, '.productCard')[0];
    
                        if (!articleElement_) {
                          _context2.next = 15;
                          break;
                        }
    
                        productId = articleElement_.dataset.productId;
                        _context2.next = 6;
                        return _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_8__["default"].returnProductInfo(productId);
    
                      case 6:
                        response = _context2.sent;
                        console.log(response); // if (response.skus.length == 1) {
                        //   let skuId = response.skus[0].sku;
                        //   this.miniCart._addProduct(skuId, 1);
                        // } else {
    
                        loading = new _Placeholder_index__WEBPACK_IMPORTED_MODULE_7__["default"](); // this._modalConfiguration();
    
                        loading.loaderController(true, document.querySelector('.comprarapida'), 'shelf__sku-selector');
                        skuSelector = new _SkuSelector_SkuSelectorController__WEBPACK_IMPORTED_MODULE_8__["default"]({
                          id: productId,
                          viewElement: document.querySelector('.shelf__variations'),
                          context: 'shelf',
                          buyButton: true,
                          addToCartBtn: true,
                          quantity: true
                        });
    
                        _this2.renderProductInfo(response);
    
                        _this2.handleCloseBtn();
    
                        skuSelector.init();
                        loading.loaderController(false, document.querySelector('.comprarapida'), 'shelf__sku-selector'); // }
    
                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
    
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          }
        }
      }, {
        key: "handleCloseBtn",
        value: function handleCloseBtn() {
          var closeBtn = document.querySelector('.sku-selector__close-btn');
          closeBtn.addEventListener('click', function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
          });
        }
      }, {
        key: "_modalConfiguration",
        value: function _modalConfiguration() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            html: "<div class=\"sku-selector comprarapida\">\n      <span class=\"sku-selector__close-btn\"><i class=\"fas fa-times\"></i></span>\n      <img class=\"shelf__product-image\" >\n      <div class=\"shelf__name-container\">\n        <h1 class=\"shelf__variation-name\"></h1>\n        <h1 class=\"shelf__name\"></h1>\n      </div>\n      <div class=\"shelf__price\">\n        <div class=\"shelf__best-price\"></div>\n        <div  class=\"shelf__list-price\"></div>\n      </div>\n      <div class=\"shelf__installments\"></div>\n      <div class=\"shelf__variations\"></div>\n        <div class=\"shelf__action\">\n          <div class=\"shelf__quantityController\"></div>\n          <button class=\"shelf__add-to-cart js-add-to-cart\" style=\"display:block!important\">Comprar</button>\n    </div>\n    <span class=\"shelf__avise-me\" ></span></div>\n    ",
            showConfirmButton: false,
            customClass: {
              container: 'shelf-container'
            }
          });
          document.querySelector('.sku-selector__close-btn').addEventListener('click', function () {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
          });
        }
      }]);
    
      return quickBuy;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (quickBuy);
    
    /***/ }),
    
    /***/ "./src/js/components/wishlist/index.js":
    /*!*********************************************!*\
      !*** ./src/js/components/wishlist/index.js ***!
      \*********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
    /* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
    /* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
    /* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
    /* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
    /* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
    /* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */ var Services_catalogService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Services/catalogService */ "./src/js/services/catalogService.js");
    /* harmony import */ var Services_masterDataService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! Services/masterDataService */ "./src/js/services/masterDataService.js");
    /* harmony import */ var Services_userService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! Services/userService */ "./src/js/services/userService.js");
    /* harmony import */ var _components_Placeholder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/Placeholder */ "./src/js/components/Placeholder/index.js");
    /* harmony import */ var _components_ProductCard_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/ProductCard/index */ "./src/js/components/ProductCard/index.js");
    /* harmony import */ var _frn_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../frn.component */ "./src/js/components/frn.component.js");
    /* harmony import */ var _quickBuy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../quickBuy */ "./src/js/components/quickBuy/index.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    
    
    
    
    
    
    
    var WishListComponent = /*#__PURE__*/function (_FrnComponent) {
      _inherits(WishListComponent, _FrnComponent);
    
      var _super = _createSuper(WishListComponent);
    
      function WishListComponent() {
        var _this;
    
        _classCallCheck(this, WishListComponent);
    
        _this = _super.call(this);
        _this._vtexUser = new Services_userService__WEBPACK_IMPORTED_MODULE_24__["default"]();
        _this._masterData = new Services_masterDataService__WEBPACK_IMPORTED_MODULE_23__["default"]();
        _this._vtexjsCatalogService = new Services_catalogService__WEBPACK_IMPORTED_MODULE_22__["default"]();
        _this.productCard_ = new _components_ProductCard_index__WEBPACK_IMPORTED_MODULE_26__["default"]();
        _this.loading_ = new _components_Placeholder__WEBPACK_IMPORTED_MODULE_25__["default"]();
        _this.userService_ = new Services_userService__WEBPACK_IMPORTED_MODULE_24__["default"]();
        _this.shelfSku = new _quickBuy__WEBPACK_IMPORTED_MODULE_28__["default"]();
        _this._currentUser = {};
        _this._userId = '';
        _this._userEmail = '';
        _this._currentUserFavorites = [];
        _this.wishlistName = 'wishlist';
        _this.wishlistContent = '';
        _this.wishlistStorage = window.localStorage.getItem('wishlist');
        _this.rootElement = 'js-favorite';
        _this.countSelector = '.js-favorite-count';
        _this.buttonAdd = '.productCard__wishList';
        _this.wishlistContainerClass = '.js-wishlist-container';
    
        _this.buttonAddElement = function () {
          return _this.getAllElements(_this.buttonAdd);
        };
    
        _this.wishlistContainerElement = function () {
          return _this.getElement(_this.wishlistContainerClass);
        };
    
        _this._initStorage();
    
        return _this;
      }
    
      _createClass(WishListComponent, [{
        key: "_initStorage",
        value: function _initStorage() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.wishlistStorage = JSON.parse(this.wishlistStorage);
          var value = this.wishlistStorage !== null ? this.wishlistStorage : data;
          window.localStorage.setItem(this.wishlistName, JSON.stringify(value));
          this.wishlistContent = value;
        }
      }, {
        key: "_initSetItemStorage",
        value: function _initSetItemStorage(item) {
          var wishlist = this.wishlistStorage;
          wishlist = wishlist ? wishlist : {};
          var indexOf = -1;
          wishlist.forEach(function (wishlistItem, index) {
            if (wishlistItem.productId == item.productId) {
              indexOf = index;
              wishlist.splice(index, 1);
            }
          });
    
          if (wishlist != {} && indexOf == -1) {
            wishlist.push(item);
            sweetalert2__WEBPACK_IMPORTED_MODULE_21___default.a.fire({
              text: 'Produto adicionado aos favoritos com sucesso!'
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_21___default.a.fire({
              text: 'Produto removido dos favoritos com sucesso!'
            });
          }
    
          window.localStorage.setItem(this.wishlistName, JSON.stringify(wishlist));
        }
      }, {
        key: "handleRemoveCardFromList",
        value: function handleRemoveCardFromList() {
          var _this2 = this;
    
          var wishList = document.querySelector('.wishlist');
          var productCards = wishList.querySelectorAll('.productCard');
          Array.from(productCards).forEach(function (card) {
            var btnFavorite = card.querySelector('.productCard__wishList');
            btnFavorite.addEventListener('click', function () {
              card.remove();
              var list = wishList.querySelector('.wishlist__list');
              var remainingCards = wishList.querySelectorAll('.productCard');
    
              if (remainingCards.length == 0) {
                _this2._renderWishlistNoProductsFoundWarning(list);
              }
            });
          });
        }
      }, {
        key: "handleSkuModal",
        value: function handleSkuModal() {
          var _this3 = this;
    
          var products = document.querySelectorAll('.productCard');
    
          if (products.length) {
            products.forEach(function (product) {
              _this3.shelfSku.skuSelectorOnShelf(product);
            });
          }
        }
      }, {
        key: "_verifyProductIdInLocalStorage",
        value: function _verifyProductIdInLocalStorage(productId) {
          var itemLocalStorage = this._getLocalStorageWishlist();
    
          var id = itemLocalStorage.map(function (item) {
            return item.productId;
          });
    
          if (!id.includes(productId.productId)) {
            return true;
          }
    
          return false;
        }
      }, {
        key: "handleSetNewItem",
        value: function handleSetNewItem() {
          var _this4 = this;
    
          if (this._currentUser.IsUserDefined) {
            this.updateLocalStorageByMasterData();
          } else {
            window.localStorage.setItem(this.wishlistName, ['[]']);
          }
    
          _toConsumableArray(this.buttonAddElement()).map(function (buttonAdd) {
            buttonAdd.addEventListener('click', function (e) {
              var currentProductId = e.target.dataset.productId;
              var productObject = {
                productId: Number(currentProductId)
              };
    
              if (_this4._currentUser.IsUserDefined) {
                if (_this4._verifyProductIdInLocalStorage(productObject) === true) {
                  _this4._initSetItemStorage(productObject);
    
                  var arrayProductId = window.localStorage.getItem('wishlist');
                  e.target.classList.add('productCard__wishList--active');
    
                  _this4.handleSetMasterData(arrayProductId, _this4._userEmail);
                } else {
                  _this4._initSetItemStorage(productObject);
    
                  e.target.classList.remove('productCard__wishList--active');
    
                  var _arrayProductId = window.localStorage.getItem('wishlist');
    
                  _this4.handleSetMasterData(_arrayProductId, _this4._userEmail);
                }
              } else {
                _this4.userService_.authenticateModal('pt-br', true);
              }
            });
          });
        }
      }, {
        key: "updateLocalStorageByMasterData",
        value: function () {
          var _updateLocalStorageByMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;
    
            var entityCode, params;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    entityCode = this._masterData.entityCode = 'WL';
                    params = {
                      type: this._masterData.VTEX_ENDPOINTS.Search(),
                      params: "_where=userEmail=".concat(this._userEmail, "&_fields=userEmail,productList")
                    };
                    _context.next = 4;
                    return this._masterData.getMasterData(params).then(function (result) {
                      if (result.length > 0 && result[0].productList) {
                        window.localStorage.removeItem(_this5.wishlistName);
                        var list = result[0].productList;
                        window.localStorage.setItem(_this5.wishlistName, "".concat(list));
                      }
                    });
    
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function updateLocalStorageByMasterData() {
            return _updateLocalStorageByMasterData.apply(this, arguments);
          }
    
          return updateLocalStorageByMasterData;
        }()
      }, {
        key: "handleSetMasterData",
        value: function () {
          var _handleSetMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(productId, userEmail) {
            var _this6 = this;
    
            var entityCode, paramsGetMD;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    entityCode = this._masterData.entityCode = 'WL';
                    paramsGetMD = {
                      type: this._masterData.VTEX_ENDPOINTS.Search(),
                      params: "_where=userEmail=".concat(this._userEmail, "&_fields=userEmail,productList,id")
                    };
                    _context2.next = 4;
                    return this._masterData.getMasterData(paramsGetMD).then(function (result) {
                      if (result.length > 0) {
                        var params = {
                          type: _this6._masterData.VTEX_ENDPOINTS.DocumentId(entityCode, result[0].id)
                        };
                        var payload = {
                          id: result[0].id,
                          userEmail: userEmail,
                          productList: productId
                        };
    
                        _this6._masterData.addMasterData(params, payload);
                      } else {
                        var _params = {
                          type: _this6._masterData.VTEX_ENDPOINTS.Documents(entityCode)
                        };
                        var _payload = {
                          userEmail: userEmail,
                          productList: productId
                        };
    
                        _this6._masterData.addMasterData(_params, _payload);
                      }
                    });
    
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function handleSetMasterData(_x, _x2) {
            return _handleSetMasterData.apply(this, arguments);
          }
    
          return handleSetMasterData;
        }()
      }, {
        key: "_init",
        value: function () {
          var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var params;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    params = {
                      type: this._vtexUser.VTEX_ENDPOINTS.USER_INFO
                    };
                    _context3.next = 3;
                    return this._vtexUser.getUserInformation(params);
    
                  case 3:
                    this._currentUser = _context3.sent;
                    this._userEmail = this._currentUser.Email;
                    this.render(this._currentUser);
    
                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function _init() {
            return _init2.apply(this, arguments);
          }
    
          return _init;
        }()
      }, {
        key: "handleGetLocalStorageWishList",
        value: function handleGetLocalStorageWishList() {
          var itemLocalStorage = window.localStorage.getItem('wishlist');
          itemLocalStorage = JSON.parse(itemLocalStorage);
          this.renderActiveFavorite(itemLocalStorage); // this.renderFavoritesList(itemLocalStorage);
        }
      }, {
        key: "renderActiveFavorite",
        value: function renderActiveFavorite(data) {
          data.forEach(function (_ref) {
            var productId = _ref.productId;
            var item = document.querySelectorAll(".productCard[data-product-id=\"".concat(productId, "\"]"));
    
            _toConsumableArray(item).forEach(function (product) {
              var wishlist = product.querySelector(".productCard__wishList");
    
              if (!wishlist.classList.contains("productCard__wishList--active")) {
                wishlist.classList.add("productCard__wishList--active");
              }
            });
          });
        }
      }, {
        key: "_renderWishlistNoProductsFoundWarning",
        value: function _renderWishlistNoProductsFoundWarning(element) {
          element.insertAdjacentHTML('beforeend', '<h2 class="js-wishlist-noProductsFound wishlist__warning wishlist__warning--no-favorites">Você não possui produtos favoritos :(</h2>');
        }
      }, {
        key: "_getLocalStorageWishlist",
        value: function _getLocalStorageWishlist() {
          var data = window.localStorage.getItem('wishlist');
          data = JSON.parse(data);
          return data;
        }
      }, {
        key: "renderFavoritesList",
        value: function () {
          var _renderFavoritesList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;
    
            var data, listELement, loop;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    data = this._getLocalStorageWishlist();
                    listELement = document.querySelector('.wishlist__list'); //check if there is no favorites
    
                    if (data.length == 0) {
                      this._renderWishlistNoProductsFoundWarning(listELement);
                    }
    
                    if (!listELement) {
                      _context5.next = 11;
                      break;
                    }
    
                    //init loader
                    this.loading_.loaderController(true, listELement, 'spinner');
                    loop = data.map( /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
                        var productId, params, sizes, response;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                productId = _ref2.productId;
    
                                if (productId) {
                                  _context4.next = 3;
                                  break;
                                }
    
                                return _context4.abrupt("return");
    
                              case 3:
                                params = {
                                  type: _this7._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
                                  id: productId
                                };
                                sizes = {
                                  width: 192,
                                  height: 192
                                };
                                _context4.next = 7;
                                return _this7._vtexjsCatalogService.getCatalog(params);
    
                              case 7:
                                response = _context4.sent;
                                listELement.insertAdjacentHTML('beforeend', "".concat(_this7.productCard_.renderCard(response[0], false, sizes)));
    
                              case 9:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
    
                      return function (_x3) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                    _context5.next = 8;
                    return Promise.all(loop);
    
                  case 8:
                    //remove loader
                    this.loading_.loaderController(false, listELement, 'spinner');
                    this.handleRemoveCardFromList();
    
                    this._init();
    
                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
    
          function renderFavoritesList() {
            return _renderFavoritesList.apply(this, arguments);
          }
    
          return renderFavoritesList;
        }()
      }, {
        key: "render",
        value: function render(Auth) {
          this.handleSetNewItem(Auth);
          this.handleGetLocalStorageWishList();
          this.handleSkuModal();
        }
      }, {
        key: "checkIfItsWishlistPage",
        value: function checkIfItsWishlistPage() {
          var isThisWishListPage = document.querySelector('.wishlist-page');
          return isThisWishListPage ? true : false;
        }
      }, {
        key: "load",
        value: function load() {
          var isWishlistPage = this.checkIfItsWishlistPage();
    
          if (isWishlistPage) {
            this.renderFavoritesList();
          } else {
            this._init();
          }
        }
      }]);
    
      return WishListComponent;
    }(_frn_component__WEBPACK_IMPORTED_MODULE_27__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (WishListComponent);
    
    /***/ }),
    
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
    
    /***/ "./src/js/helpers/index2.js":
    /*!**********************************!*\
      !*** ./src/js/helpers/index2.js ***!
      \**********************************/
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
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
    /* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
    /* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
    
    
    
    
    
    
    
    
    
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
    
              while (--i >= 0 && matches.item(i) !== this) {}
    
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
      }]);
    
      return Helpers;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (Helpers);
    
    /***/ }),
    
    /***/ "./src/js/pages/product/product.config.js":
    /*!************************************************!*\
      !*** ./src/js/pages/product/product.config.js ***!
      \************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
    /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
    /* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
    
    
    
    
    var developmentProductId = function developmentProductId() {
      var id = 738;
      return id;
    };
    
    var handleShareLinks = function handleShareLinks() {
      if (window.skuJson) {
        var pageUrl = window.location.href;
        var imgUrl = "/".concat(document.querySelector('.productPage__image-zoom > img').getAttribute('src'));
        var src = document.querySelector('.productPage__image-zoom > img');
        var facebookElement = document.querySelector(".productPage__share-item--facebook");
        var pinterestElement = document.querySelector(".productPage__share-item--pinterest");
        var twitterElement = document.querySelector(".productPage__share-item--twitter");
        var emailElement = document.querySelector(".productPage__share-item--email");
    
        if (facebookElement) {
          facebookElement.setAttribute('href', "https://www.facebook.com/sharer/sharer.php?u=".concat(pageUrl));
        }
    
        if (pinterestElement) {
          pinterestElement.setAttribute('href', "https://pinterest.com/pin/create/button/?url=".concat(pageUrl, "&media=").concat(imgUrl, "&description=Veja que lindo esse(a) ").concat(skuJson.name));
        }
    
        if (twitterElement) {
          twitterElement.setAttribute('href', "https://twitter.com/intent/tweet?url=".concat(pageUrl));
        }
    
        if (emailElement) {
          emailElement.setAttribute('href', "mailto:?subject=".concat(pageUrl));
        }
      }
    };
    
    var handleShelfSlide = function handleShelfSlide(prevArrow, nextArrow) {
      var collections = document.querySelectorAll('.productPage__collections');
      collections.forEach(function (col) {
        col.querySelectorAll('.helperComplement').forEach(function (el) {
          el.remove();
        });
      });
      var slickConfig = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
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
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true
          }
        }]
      };
      $('.productPage__collections ul').slick(slickConfig);
    };
    
    var zoomImagesSlider = function zoomImagesSlider() {
      var prevArrow = "<button class=\"slick-arrow-left\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n    <path d=\"M12.3 17.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71z\"/>\n    </svg>\n    </button>";
      var nextArrow = "<button class=\"slick-arrow-right\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n    <path d=\"M13.8 24.196c.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414z\"/>\n    </svg>\n    </button>";
      $('.productPage__image-zoom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        asNavFor: '.js-image-thumbs'
      });
    
      if ($(window).width() < 1024) {
        $('.productPage__image-zoom').slick('unslick');
      }
    };
    
    var syncSliders = function syncSliders(from, to) {
      var images = document.querySelectorAll(from);
      images && images.forEach(function (image) {
        image.addEventListener('click', function (e) {
          e.preventDefault();
          var index = e.target.closest('[data-slick-index]').getAttribute('data-slick-index');
          $(to).slick('slickGoTo', index);
        });
      });
    };
    
    var thumbsSlider = function thumbsSlider() {
      var thumbs = document.querySelectorAll('.js-image-thumbs li');
      var slidesToShow = thumbs.length <= 3 ? thumbs.length : 3;
      var prevArrow = "<button class=\"slick-arrow-left\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n    <path d=\"M12.3 17.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71z\"/>\n    </svg>\n    </button>";
      var nextArrow = "<button class=\"slick-arrow-right\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n    <path d=\"M13.8 24.196c.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414z\"/>\n    </svg>\n    </button>";
      $('.js-image-thumbs').slick({
        slidesToShow: slidesToShow,
        infinite: false,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        asNavFor: '.productPage__image-zoom'
        /*responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: slidesToShow < 2 ? thumbs.length : 2,
            },
          },
          ],*/
    
      });
      syncSliders('.productPage__image-item', '.productPage__image-zoom');
      $('.slick-initialized').slick('setPosition');
    };
    
    /* harmony default export */ __webpack_exports__["default"] = ({
      handleShareLinks: handleShareLinks,
      handleShelfSlide: handleShelfSlide,
      zoomImagesSlider: zoomImagesSlider,
      thumbsSlider: thumbsSlider,
      developmentProductId: developmentProductId
    });
    
    /***/ }),
    
    /***/ "./src/js/services/cartService.js":
    /*!****************************************!*\
      !*** ./src/js/services/cartService.js ***!
      \****************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
    /* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
    /* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var _vtex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vtex */ "./src/js/services/vtex.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    var CartService = /*#__PURE__*/function (_Vtexjs) {
      _inherits(CartService, _Vtexjs);
    
      var _super = _createSuper(CartService);
    
      function CartService() {
        var _this;
    
        _classCallCheck(this, CartService);
    
        _this = _super.call(this);
        _this.VTEX_ENDPOINTS = {
          CHECKOUT: '/checkout/pub/orderForm'
        };
        _this._apiService = new _vtex__WEBPACK_IMPORTED_MODULE_16__["default"]();
        return _this;
      }
    
      _createClass(CartService, [{
        key: "addMultipleProducts",
        value: function () {
          var _addMultipleProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(skus) {
            var _yield$this$getCurren, orderFormId, endpointUrl, orderItems, payload, response;
    
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!skus) {
                      _context.next = 12;
                      break;
                    }
    
                    _context.next = 3;
                    return this.getCurrentCart();
    
                  case 3:
                    _yield$this$getCurren = _context.sent;
                    orderFormId = _yield$this$getCurren.orderFormId;
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(orderFormId, "/items");
                    orderItems = skus.map(function (_ref) {
                      var id = _ref.id,
                          quantity = _ref.quantity;
                      return {
                        id: id,
                        quantity: quantity,
                        seller: 1
                      };
                    });
                    payload = {
                      orderItems: orderItems
                    };
                    _context.next = 10;
                    return this._apiService.patch(endpointUrl, payload);
    
                  case 10:
                    response = _context.sent;
                    return _context.abrupt("return", response);
    
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function addMultipleProducts(_x) {
            return _addMultipleProducts.apply(this, arguments);
          }
    
          return addMultipleProducts;
        }()
      }, {
        key: "getCurrentCart",
        value: function () {
          var _getCurrentCart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._apiService.get(this.VTEX_ENDPOINTS.CHECKOUT);
    
                  case 2:
                    response = _context2.sent;
                    return _context2.abrupt("return", response);
    
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function getCurrentCart() {
            return _getCurrentCart.apply(this, arguments);
          }
    
          return getCurrentCart;
        }()
      }, {
        key: "addCurrentItem",
        value: function () {
          var _addCurrentItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(item) {
            var sellerId,
                current,
                indexFound,
                endpointUrl,
                payload,
                response,
                _args3 = arguments;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    sellerId = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 1;
    
                    if (!item.skuId) {
                      _context3.next = 11;
                      break;
                    }
    
                    _context3.next = 4;
                    return this.getCurrentCart();
    
                  case 4:
                    current = _context3.sent;
                    indexFound = current.items.findIndex(function (x) {
                      return x.id === item.skuId;
                    });
    
                    if (indexFound > -1) {
                      item.productQuantity = +item.productQuantity + +current.items[indexFound].quantity;
                    }
    
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(current.orderFormId, "/items");
                    payload = {
                      orderItems: [{
                        seller: sellerId.toString(),
                        quantity: +item.productQuantity,
                        id: item.skuId.toString()
                      }]
                    };
                    response = this._apiService.patch(endpointUrl, payload);
                    return _context3.abrupt("return", response);
    
                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function addCurrentItem(_x2) {
            return _addCurrentItem.apply(this, arguments);
          }
    
          return addCurrentItem;
        }()
      }, {
        key: "updateCurrentItem",
        value: function () {
          var _updateCurrentItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(item) {
            var current, endpointUrl, payload, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.getCurrentCart();
    
                  case 2:
                    current = _context4.sent;
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(current.orderFormId, "/items");
                    payload = {
                      orderItems: [{
                        index: item.index,
                        quantity: +item.productQuantity
                      }]
                    };
                    response = this._apiService.patch(endpointUrl, payload);
                    return _context4.abrupt("return", response);
    
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
    
          function updateCurrentItem(_x3) {
            return _updateCurrentItem.apply(this, arguments);
          }
    
          return updateCurrentItem;
        }()
      }, {
        key: "removeCurrentItem",
        value: function () {
          var _removeCurrentItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(itemIndex) {
            var current, endpointUrl, payload, response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.getCurrentCart();
    
                  case 2:
                    current = _context5.sent;
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(current.orderFormId, "/items");
                    payload = {
                      orderItems: [{
                        index: itemIndex,
                        quantity: 0
                      }],
                      expectedOrderFormSections: ['items'],
                      noSplitItem: true
                    };
                    _context5.next = 7;
                    return this._apiService.patch(endpointUrl, payload);
    
                  case 7:
                    response = _context5.sent;
                    return _context5.abrupt("return", response);
    
                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
    
          function removeCurrentItem(_x4) {
            return _removeCurrentItem.apply(this, arguments);
          }
    
          return removeCurrentItem;
        }()
      }, {
        key: "addCupom",
        value: function () {
          var _addCupom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(cupom) {
            var currentCart, endpointUrl, payload, response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.getCurrentCart();
    
                  case 2:
                    currentCart = _context6.sent;
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(currentCart.orderFormId, "/coupons");
                    payload = {
                      text: cupom
                    };
                    response = this._apiService.post(endpointUrl, payload);
                    return _context6.abrupt("return", response);
    
                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
    
          function addCupom(_x5) {
            return _addCupom.apply(this, arguments);
          }
    
          return addCupom;
        }()
      }, {
        key: "clearMessages",
        value: function () {
          var _clearMessages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var currentCart, endpointUrl, response;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getCurrentCart();
    
                  case 2:
                    currentCart = _context7.sent;
                    endpointUrl = "".concat(this.VTEX_ENDPOINTS.CHECKOUT, "/").concat(currentCart.orderFormId, "/messages/clear");
                    response = this._apiService.post(endpointUrl);
                    return _context7.abrupt("return", response);
    
                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
    
          function clearMessages() {
            return _clearMessages.apply(this, arguments);
          }
    
          return clearMessages;
        }()
      }]);
    
      return CartService;
    }(_vtex__WEBPACK_IMPORTED_MODULE_16__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (CartService);
    
    /***/ }),
    
    /***/ "./src/js/services/catalogService.js":
    /*!*******************************************!*\
      !*** ./src/js/services/catalogService.js ***!
      \*******************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _vtex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vtex */ "./src/js/services/vtex.js");
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    var getCatalogService = /*#__PURE__*/function () {
      function getCatalogService() {
        _classCallCheck(this, getCatalogService);
    
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
          SUGGESTIONS: '/catalog_system/pub/products/crossselling/suggestions/'
        };
        this._apiService = new _vtex__WEBPACK_IMPORTED_MODULE_3__["default"]();
      }
    
      _createClass(getCatalogService, [{
        key: "getCatalog",
        value: function () {
          var _getCatalog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
            var category, coresseling, variations, singleSku, similars, search, searchImageSkuId, searchSku, byBrand, params, suggestions;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = param.type;
                    _context.next = _context.t0 === this.VTEX_ENDPOINTS.CATEGORY ? 3 : _context.t0 === this.VTEX_ENDPOINTS.CREOSSELING ? 7 : _context.t0 === this.VTEX_ENDPOINTS.VARIATIONS ? 11 : _context.t0 === this.VTEX_ENDPOINTS.VARIATIONS_SINGLE_SKU ? 15 : _context.t0 === this.VTEX_ENDPOINTS.SIMILARS ? 19 : _context.t0 === this.VTEX_ENDPOINTS.SEARCH ? 23 : _context.t0 === this.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID ? 27 : _context.t0 === this.VTEX_ENDPOINTS.SEARCH_SKU ? 31 : _context.t0 === this.VTEX_ENDPOINTS.GET_BY_BRAND ? 35 : _context.t0 === this.VTEX_ENDPOINTS.PARAMS ? 39 : _context.t0 === this.VTEX_ENDPOINTS.SUGGESTIONS ? 43 : 47;
                    break;
    
                  case 3:
                    _context.next = 5;
                    return this._apiService.get(param.type + param.id);
    
                  case 5:
                    category = _context.sent;
                    return _context.abrupt("return", category);
    
                  case 7:
                    _context.next = 9;
                    return this._apiService.get(param.type + param.id);
    
                  case 9:
                    coresseling = _context.sent;
                    return _context.abrupt("return", coresseling);
    
                  case 11:
                    _context.next = 13;
                    return this._apiService.get(param.type + param.id);
    
                  case 13:
                    variations = _context.sent;
                    return _context.abrupt("return", variations);
    
                  case 15:
                    _context.next = 17;
                    return this._apiService.getWithApi(param.type + param.id);
    
                  case 17:
                    singleSku = _context.sent;
                    return _context.abrupt("return", singleSku);
    
                  case 19:
                    _context.next = 21;
                    return this._apiService.get(param.type + param.id);
    
                  case 21:
                    similars = _context.sent;
                    return _context.abrupt("return", similars);
    
                  case 23:
                    _context.next = 25;
                    return this._apiService.get(param.type + param.term + param.fromTo);
    
                  case 25:
                    search = _context.sent;
                    return _context.abrupt("return", search);
    
                  case 27:
                    _context.next = 29;
                    return this._apiService.get(param.type + param.id);
    
                  case 29:
                    searchImageSkuId = _context.sent;
                    return _context.abrupt("return", searchImageSkuId);
    
                  case 31:
                    _context.next = 33;
                    return this._apiService.get(param.type + param.skuId);
    
                  case 33:
                    searchSku = _context.sent;
                    return _context.abrupt("return", searchSku);
    
                  case 35:
                    _context.next = 37;
                    return this._apiService.get(param.type + param.brandId + param.params);
    
                  case 37:
                    byBrand = _context.sent;
                    return _context.abrupt("return", byBrand);
    
                  case 39:
                    _context.next = 41;
                    return this._apiService.get(param.type + param.params);
    
                  case 41:
                    params = _context.sent;
                    return _context.abrupt("return", params);
    
                  case 43:
                    _context.next = 45;
                    return this._apiService.get(param.type + param.id);
    
                  case 45:
                    suggestions = _context.sent;
                    return _context.abrupt("return", suggestions);
    
                  case 47:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function getCatalog(_x) {
            return _getCatalog.apply(this, arguments);
          }
    
          return getCatalog;
        }()
      }, {
        key: "postCatalog",
        value: function () {
          var _postCatalog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(param) {
            var autoComplete;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.t0 = param.type;
                    _context2.next = _context2.t0 === this.VTEX_ENDPOINTS.AUTO_COMPLETE ? 3 : 7;
                    break;
    
                  case 3:
                    _context2.next = 5;
                    return this._apiService.post(param.type + param.maxRows + param.term);
    
                  case 5:
                    autoComplete = _context2.sent;
                    return _context2.abrupt("return", autoComplete);
    
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function postCatalog(_x2) {
            return _postCatalog.apply(this, arguments);
          }
    
          return postCatalog;
        }()
      }]);
    
      return getCatalogService;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (getCatalogService);
    
    /***/ }),
    
    /***/ "./src/js/services/masterDataService.js":
    /*!**********************************************!*\
      !*** ./src/js/services/masterDataService.js ***!
      \**********************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
    /* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
    /* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
    /* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
    /* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
    /* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
    /* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
    /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
    /* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
    /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var _vtex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vtex */ "./src/js/services/vtex.js");
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    
    
    
    var getMasterDataService = /*#__PURE__*/function (_Vtexjs) {
      _inherits(getMasterDataService, _Vtexjs);
    
      var _super = _createSuper(getMasterDataService);
    
      function getMasterDataService() {
        var _this;
    
        _classCallCheck(this, getMasterDataService);
    
        _this = _super.call(this);
        _this.entityCode = '';
        _this.documentId = '';
        _this.VTEX_ENDPOINTS = {
          Documents: function Documents() {
            return "".concat(_this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA, "/").concat(_this.entityCode, "/documents");
          },
          DocumentId: function DocumentId() {
            return "".concat(_this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA, "/").concat(_this.entityCode, "/documents/").concat(_this.documentId);
          },
          Search: function Search() {
            return "".concat(_this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA, "/").concat(_this.entityCode, "/search?");
          },
          Fields: function Fields() {
            return "".concat(_this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA, "/").concat(_this.entityCode, "/search");
          }
        };
        _this._apiService = new _vtex__WEBPACK_IMPORTED_MODULE_13__["default"]();
        return _this;
      }
    
      _createClass(getMasterDataService, [{
        key: "getMasterData",
        value: function () {
          var _getMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
            var documents, search, fields;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = param.type;
                    _context.next = _context.t0 === this.VTEX_ENDPOINTS.Documents(param.entityCode) ? 3 : _context.t0 === this.VTEX_ENDPOINTS.Search(param.params) ? 7 : _context.t0 === this.VTEX_ENDPOINTS.Fields(param.email) ? 11 : 15;
                    break;
    
                  case 3:
                    _context.next = 5;
                    return this._apiService.get(param.type);
    
                  case 5:
                    documents = _context.sent;
                    return _context.abrupt("return", documents);
    
                  case 7:
                    _context.next = 9;
                    return this._apiService.get(param.type + param.params);
    
                  case 9:
                    search = _context.sent;
                    return _context.abrupt("return", search);
    
                  case 11:
                    _context.next = 13;
                    return this._apiService.get(param.type + param.email);
    
                  case 13:
                    fields = _context.sent;
                    return _context.abrupt("return", fields);
    
                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function getMasterData(_x) {
            return _getMasterData.apply(this, arguments);
          }
    
          return getMasterData;
        }()
      }, {
        key: "addMasterData",
        value: function () {
          var _addMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(param, payload) {
            var documents, docuementId;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.t0 = param.type;
                    _context2.next = _context2.t0 === this.VTEX_ENDPOINTS.Documents(param.entityCode) ? 3 : _context2.t0 === this.VTEX_ENDPOINTS.DocumentId(param.entityCode, param.documentId) ? 7 : 11;
                    break;
    
                  case 3:
                    _context2.next = 5;
                    return this._apiService.patch(param.type, payload);
    
                  case 5:
                    documents = _context2.sent;
                    return _context2.abrupt("return", documents);
    
                  case 7:
                    _context2.next = 9;
                    return this._apiService.patch(param.type, payload);
    
                  case 9:
                    docuementId = _context2.sent;
                    return _context2.abrupt("return", docuementId);
    
                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function addMasterData(_x2, _x3) {
            return _addMasterData.apply(this, arguments);
          }
    
          return addMasterData;
        }()
      }, {
        key: "UpdateMasterData",
        value: function () {
          var _UpdateMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var documentId;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = param.type;
                    _context3.next = _context3.t0 === this.VTEX_ENDPOINTS.DocumentId(param.entityCode) ? 3 : 7;
                    break;
    
                  case 3:
                    _context3.next = 5;
                    return this._apiService.patch(param.type);
    
                  case 5:
                    documentId = _context3.sent;
                    return _context3.abrupt("return", documentId);
    
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
    
          function UpdateMasterData() {
            return _UpdateMasterData.apply(this, arguments);
          }
    
          return UpdateMasterData;
        }()
      }, {
        key: "DeleteMasterData",
        value: function () {
          var _DeleteMasterData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var DocumentId;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.t0 = param.type;
                    _context4.next = _context4.t0 === this.VTEX_ENDPOINTS.DocumentId(param.entityCode, param.documentId) ? 3 : 7;
                    break;
    
                  case 3:
                    _context4.next = 5;
                    return this._apiService.delete(param.type);
    
                  case 5:
                    DocumentId = _context4.sent;
                    return _context4.abrupt("return", DocumentId);
    
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
    
          function DeleteMasterData() {
            return _DeleteMasterData.apply(this, arguments);
          }
    
          return DeleteMasterData;
        }()
      }]);
    
      return getMasterDataService;
    }(_vtex__WEBPACK_IMPORTED_MODULE_13__["default"]);
    
    /* harmony default export */ __webpack_exports__["default"] = (getMasterDataService);
    
    /***/ }),
    
    /***/ "./src/js/services/userService.js":
    /*!****************************************!*\
      !*** ./src/js/services/userService.js ***!
      \****************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _vtex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vtex */ "./src/js/services/vtex.js");
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    
    
    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);
    
        this.VTEX_ENDPOINTS = {
          USER_INFO: '/no-cache/profileSystem/getProfile',
          GET_SESSION: '/sessions/',
          GET_USER_API: '/ipify.org',
          AVISEME: '/no-cache/AviseMe.aspx'
        };
        this._apiService = new _vtex__WEBPACK_IMPORTED_MODULE_3__["default"]();
      }
    
      _createClass(UserService, [{
        key: "getUserInformation",
        value: function () {
          var _getUserInformation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
            var userInfo, getSession, getUserApi;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = param.type;
                    _context.next = _context.t0 === this.VTEX_ENDPOINTS.USER_INFO ? 3 : _context.t0 === this.VTEX_ENDPOINTS.GET_SESSION ? 7 : _context.t0 === this.VTEX_ENDPOINTS.GET_USER_API ? 11 : 15;
                    break;
    
                  case 3:
                    _context.next = 5;
                    return this._apiService.getSemApi(param.type);
    
                  case 5:
                    userInfo = _context.sent;
                    return _context.abrupt("return", userInfo);
    
                  case 7:
                    _context.next = 9;
                    return this._apiService.get(param.type + param.sessionToken + '?items=*');
    
                  case 9:
                    getSession = _context.sent;
                    return _context.abrupt("return", getSession);
    
                  case 11:
                    _context.next = 13;
                    return this._apiService.get(param.type);
    
                  case 13:
                    getUserApi = _context.sent;
                    return _context.abrupt("return", getUserApi);
    
                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function getUserInformation(_x) {
            return _getUserInformation.apply(this, arguments);
          }
    
          return getUserInformation;
        }()
      }, {
        key: "sendAviseme",
        value: function () {
          var _sendAviseme = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(param) {
            var aviseme;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._apiService.postSemApi(param.type, param.payload);
    
                  case 2:
                    aviseme = _context2.sent;
                    return _context2.abrupt("return", aviseme);
    
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
    
          function sendAviseme(_x2) {
            return _sendAviseme.apply(this, arguments);
          }
    
          return sendAviseme;
        }()
      }, {
        key: "authenticateModal",
        value: function authenticateModal(language, forceReload) {
          window.vtexid.start({
            locale: language || 'pt-br',
            forceReload: forceReload || true
          });
          window.scrollTo(0, 0);
        }
      }]);
    
      return UserService;
    }();
    
    /* harmony default export */ __webpack_exports__["default"] = (UserService);
    
    /***/ }),
    
    /***/ "./src/js/services/vtex.js":
    /*!*********************************!*\
      !*** ./src/js/services/vtex.js ***!
      \*********************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vtexjs; });
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
    /* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
    /* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
    /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
    
    
    
    
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var Vtexjs = /*#__PURE__*/function () {
      function Vtexjs() {
        _classCallCheck(this, Vtexjs);
    
        this.VTEX_BASE_ENDPOINT = {
          BASE_URL: '/api',
          BASE_MASTER_DATA: '/dataentities'
        };
      }
    
      _createClass(Vtexjs, [{
        key: "get",
        value: function get(endpoint) {
          return this._handleResolver(endpoint, 'GET');
        }
      }, {
        key: "getSemApi",
        value: function getSemApi(endpoint) {
          return this._handleResolverNoBase(endpoint, 'GET');
        }
      }, {
        key: "delete",
        value: function _delete(endpoint) {
          return this._handleResolver(endpoint, 'DELETE');
        }
      }, {
        key: "post",
        value: function post(endpoint) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._handleResolver(endpoint, 'POST', payload);
        }
      }, {
        key: "postSemApi",
        value: function postSemApi(endpoint) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._handleResolverNoBase(endpoint, 'POST', payload);
        }
      }, {
        key: "put",
        value: function put(endpoint) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._handleResolver(endpoint, 'PUT', payload);
        }
      }, {
        key: "patch",
        value: function patch(endpoint) {
          var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this._handleResolver(endpoint, 'PATCH', payload);
        }
      }, {
        key: "_handleResolver",
        value: function () {
          var _handleResolver2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpointUrl, httpVerb, payload) {
            var header, response, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    header = {
                      method: httpVerb,
                      body: JSON.stringify(payload),
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      }
                    };
                    _context.next = 3;
                    return fetch(this.VTEX_BASE_ENDPOINT.BASE_URL + endpointUrl, header);
    
                  case 3:
                    response = _context.sent;
    
                    if (!(response.status === 401)) {
                      _context.next = 7;
                      break;
                    }
    
                    window.location.assign(window.location);
                    return _context.abrupt("return");
    
                  case 7:
                    if (!(response.status != 204)) {
                      _context.next = 13;
                      break;
                    }
    
                    _context.next = 10;
                    return response.json();
    
                  case 10:
                    _context.t0 = _context.sent;
                    _context.next = 16;
                    break;
    
                  case 13:
                    _context.next = 15;
                    return response;
    
                  case 15:
                    _context.t0 = _context.sent;
    
                  case 16:
                    data = _context.t0;
    
                    if (!response.ok) {
                      _context.next = 19;
                      break;
                    }
    
                    return _context.abrupt("return", data);
    
                  case 19:
                    return _context.abrupt("return", Promise.reject(data));
    
                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
    
          function _handleResolver(_x, _x2, _x3) {
            return _handleResolver2.apply(this, arguments);
          }
    
          return _handleResolver;
        }()
      }, {
        key: "_handleResolverNoBase",
        value: function () {
          var _handleResolverNoBase2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(endpointUrl, httpVerb, payload) {
            var header, response, data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    header = {
                      method: httpVerb,
                      body: JSON.stringify(payload),
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      }
                    };
                    _context2.next = 3;
                    return fetch(endpointUrl, header);
    
                  case 3:
                    response = _context2.sent;
    
                    if (!(response.status === 401)) {
                      _context2.next = 7;
                      break;
                    }
    
                    window.location.assign(window.location);
                    return _context2.abrupt("return");
    
                  case 7:
                    _context2.next = 9;
                    return response.json();
    
                  case 9:
                    data = _context2.sent;
    
                    if (!response.ok) {
                      _context2.next = 12;
                      break;
                    }
    
                    return _context2.abrupt("return", data);
    
                  case 12:
                    return _context2.abrupt("return", Promise.reject(data));
    
                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
    
          function _handleResolverNoBase(_x4, _x5, _x6) {
            return _handleResolverNoBase2.apply(this, arguments);
          }
    
          return _handleResolverNoBase;
        }()
      }]);
    
      return Vtexjs;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/scss/main.scss":
    /*!****************************!*\
      !*** ./src/scss/main.scss ***!
      \****************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
    
    /***/ }),
    
    /***/ 0:
    /*!**************************************************!*\
      !*** multi ./src/js/App.js ./src/scss/main.scss ***!
      \**************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! ./src/js/App.js */"./src/js/App.js");
    module.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=frn.lojapiticas.general.js.map