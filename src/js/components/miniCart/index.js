import { forkJoin, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, tap, pluck } from 'rxjs/operators';
import Swal from 'sweetalert2';

import CartService from 'Services/cartService';
import getCatalogService from 'Services/catalogService';
import Helpers from 'Helpers//index';
import QuantityController from '../autocomplete/_quantityController';
import FrnComponent from '../frn.component';
import FreeShippingController from './_freeShippingController';
import MessagesController from './_messagesController';

export default class MiniCartComponent extends FrnComponent {
  constructor() {
    super();
    this._vtexjsCartService = new CartService();
    this._vtexjsCatalogService = new getCatalogService();
    this._helper = new Helpers();

    this._freeShippingController = new FreeShippingController();
    this._messagesController = new MessagesController();
    this._quantityController = new QuantityController();

    this.miniCartLink = 'cart__link';
    this.miniCartContent = 'cart-mini';
    this.miniCartCloseLink = 'cart-mini__close';

    this.miniCartItemCountTotal = 'cart__total';
    this.miniCartList = 'cart-mini__list';
    this.miniCartListItem = 'js-cart-mini-listItem';
    this.miniCartListItemTemplate = 'js-cart-mini-listItem-template';
    this.minicartItem = 'cart-mini__item';
    this.miniCartItemImage = 'js-miniCart-item-image';
    this.miniCartItemName = 'js-miniCart-item-name';
    this.miniCartItemPrice = 'js-miniCart-item-price';
    this.miniCartItemPriceOld = 'js-miniCart-item-price-old';
    this.miniCartItemPriceNew = 'js-miniCart-item-price-new';

    this.productCarts = 'productCard';
    this.productCartBuy = 'productCard__buy';

    this.miniCartRemoveItem = 'remove-item';
    this.miniCartItemList = 'js-cart-mini-list-item';

    this.cartMiniCountItemsElement = 'cart-mini__items-count';

    this.buttonQtyActionSelector = 'js-product-qty-action';
    this.listItemQtySelector = '.js-product-qty';

    this.cartMiniFinalPrice = 'cart-mini__final-price';

    this.orderFormId = [];
    this.indexMensaggems = [];
  }

  handleToggleMiniCart() {
    const miniCartLink = document.querySelector(`.${this.miniCartLink}`);
    const miniCartTotal = document.querySelector(
      `.${this.miniCartItemCountTotal}`
    );
    const miniCartCloseLink = document.querySelector(
      `.${this.miniCartCloseLink}`
    );

    this._handleCartActions();

    if (miniCartLink && miniCartCloseLink) {
      miniCartLink.addEventListener('click', async e => {
        e.preventDefault();
        const getCurrentCart = await this._vtexjsCartService.getCurrentCart();
        if (!getCurrentCart.items.length <= 0) {
          this._handleOpen();
        } else {
          Swal.fire({
            icon: 'question',
            title: 'Oops...',
            text: 'Voce nao tem nada em seu carrinho!!',
          });
        }
      });

      miniCartTotal.addEventListener('click', async e => {
        e.preventDefault();
        const getCurrentCart = await this._vtexjsCartService.getCurrentCart();
        if (!getCurrentCart.items.length <= 0) {
          this._handleOpen();
        } else {
          Swal.fire({
            icon: 'question',
            title: 'Oops...',
            text: 'Voce nao tem nada em seu carrinho!!',
          });
        }
      });

      miniCartCloseLink.addEventListener('click', () => {
        this._handleClose();
      });
    }
  }

  _handleOpen() {
    const cartMiniContent = document.querySelector(`.${this.miniCartContent}`);
    const divOverlayElement = document.querySelector('.overlay__minicart');

    divOverlayElement.classList.add('overlay__minicart--show');
    cartMiniContent.classList.add('cart-mini--active');
    this._handleCloseClickOverlay();
  }

  _handleClose() {
    const cartMiniContent = document.querySelector(`.${this.miniCartContent}`);
    const divOverlayElement = document.querySelector('.overlay__minicart');

    divOverlayElement.classList.remove('overlay__minicart--show');
    cartMiniContent.classList.remove('cart-mini--active');
  }

  _handleCloseClickOverlay() {
    const divOverlayElement = document.querySelector('.overlay__minicart');
    divOverlayElement.addEventListener('click', () => {
      this._handleClose();
    });
  }

  _handleCartActions() {
    const keepBuyElement_ = document.querySelectorAll(
      '.cart-mini__buy-actions > a'
    );

    keepBuyElement_[1].addEventListener('click', e => {
      e.preventDefault();
      this._handleClose();
    });
  }

  async handleRenderItemIntoTheCart() {
    const getCurrentCart = await this._vtexjsCartService.getCurrentCart();

    this.orderFormId = getCurrentCart;

    const miniCartItemCountTotal = document.querySelector(
      `.${this.miniCartItemCountTotal}`
    );
    const miniCartListItems = document.querySelectorAll(
      `.${this.miniCartListItem}`
    );
    const miniCartListItemTemplateElement = document.querySelector(
      `.${this.miniCartListItemTemplate}`
    );

    const miniCartList = document.querySelector(`.${this.miniCartList}`);

    for (let i = 0; i < miniCartListItems.length; i++) {
      const miniCartListItem = miniCartListItems[i];

      if (miniCartListItem !== miniCartListItemTemplateElement) {
        miniCartList.removeChild(miniCartListItem);
      }
    }

    miniCartItemCountTotal.innerHTML = getCurrentCart.items.length;

    if (getCurrentCart.items.length <= 0) {
      this._handleClose();
      this._freeShippingController.handleFreeShippingProgress(getCurrentCart);
    } else {
      const products = getCurrentCart.items;
      const cartMiniCountItemsElement = document.querySelector(
        `.${this.cartMiniCountItemsElement}`
      );

      cartMiniCountItemsElement.innerHTML = products.length;
      this._messagesController.showMessages(
        getCurrentCart,
        this.indexMensaggems,
        false
      );

      for (let i = 0; i < products.length; i++) {
        this._freeShippingController.handleFreeShippingProgress(getCurrentCart);

        let productsName = products[i].name.toLowerCase();
        let priceFormated = products[i].sellingPrice;
        miniCartList.innerHTML += `
        <li class='cart-mini__item js-cart-mini-listItem js-cart-mini-listItem-template js-cart-mini-list-item' data-mini-cart-item-index=${i}>
          <div class='cart-mini__image'>
            <img src='${products[i].imageUrl}' />
          </div>

          <div class='cart-mini__content'>
            <span>${productsName}</span>            
            <span class='cart-mini__price-item'>R$ ${this._helper._formatPrice(
              priceFormated
            )}</span>
            
          </div>
          <div class='cart-mini__content-last'>
            <span class='cart-mini__content-quantity'>Quantidade</span>
            <a class="remove-item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATZJREFUeNp80z1LA0EQgGFzRglYhYAiFgqiVfwNKWyEYGGhnRYRi3gWWgQM1goWCn6gjY2QUhAljT/AJqWFIhLLEEFMoyL4Ed+FWRiGTRYe2L3d2Z2du0vEcdzTpQ2gjc/QZBR4lsU5XvGODzRxholOwQmUcYclZNTcEJbxgLVQ8CZ2ZJNOrRdHKOpgl+q2WnQbCLxHS/oHGPPBJXXin6R/oQJrWFCF68NGUgZ5U4dLTGMQKRRwhRG1Lp+U15ExKbrxNWZkMxc4btaMRvIeQ60pV3Hz/YH5diT3eDETNUnVnX6CWbyZNc++YFVT1YJKNYctzJngqg/exa/0h3Fj7jiPYzX+wr4PfsK69NOmqr5Nqf4KGvoLczuv4rvLF+ZOXEQl9GOcYhKHqONHNnvEnlyl4hf/CzAAHuU9H3DZa8UAAAAASUVORK5CYII=" /></a>                    
            <div class='cartActions'>              
              <a class='cartProduct__quantity--action js-product-qty-action js-minicart-qty-action' data-product-qty-action-factor="-1">-</a>
              <input type="text" class='cartProduct__quantity--number js-product-qty' data-mini-cart-item-index=${i}  data-product-sku='${
                  products[i].productId
                }' value=${products[i].quantity}>
              <a class='cartProduct__quantity--action js-product-qty-action js-minicart-qty-action' data-product-qty-action-factor="+1" >+</a>
            </div>
          </div>          
        </li>
        `;
      }
      this.handleShowFinalPrice();
      this.handleRemoveItemIntoTheCart();
    }

    this.handleQuantityActionsPlusAndMinus();
  }

  handleShowFinalPriceByQuantity(response) {
    const cartMiniFinalSubPrice = document.querySelector(
      `.${this.cartMiniFinalPrice}`
    );

    const cartMiniTotalPrice = document.querySelector(
      '.cart-mini__final-price-total'
    );

    cartMiniFinalSubPrice.innerHTML = `R$ ${this.helper_._formatPrice(
      response.totalizers[0].value
    )}`;

    cartMiniTotalPrice.innerHTML = `R$ ${this.helper_._formatPrice(
      response.value
    )}`;
  }

  async handleShowFinalPrice() {
    const getCurrentCart = await this._vtexjsCartService.getCurrentCart();
    const cartMiniFinalSubPrice = document.querySelector(
      `.${this.cartMiniFinalPrice}`
    );

    const cartMiniTotalPrice = document.querySelector(
      '.cart-mini__final-price-total'
    );

    cartMiniFinalSubPrice.innerHTML = `R$ ${this.helper_._formatPrice(
      getCurrentCart.totalizers[0].value
    )}`;

    cartMiniTotalPrice.innerHTML = `R$ ${this.helper_._formatPrice(
      getCurrentCart.value
    )}`;
  }

  handleRemoveItemIntoTheCart() {
    const miniCartListItems = document.querySelectorAll(
      `.${this.miniCartItemList}`
    );

    [...miniCartListItems].forEach(miniCartListItem => {
      const ItemIndex = miniCartListItem.dataset.miniCartItemIndex;
      const removeButton = miniCartListItem.querySelector(
        `.${this.miniCartRemoveItem}`
      );

      removeButton.addEventListener('click', async () => {
        await this._vtexjsCartService.removeCurrentItem(ItemIndex);
        this.handleShowModalToast('error', 'Eliminado com sucesso');
        this.handleRenderItemIntoTheCart();
      });
    });
  }

  handleAddItemIntoTheCart() {
    const productCarts = document.querySelectorAll(`.${this.productCarts}`);

    [...productCarts].forEach(productCart => {
      const productCartBuyButton = productCart.querySelector(
        `.${this.productCartBuy}`
      );

      productCartBuyButton &&
        productCartBuyButton.addEventListener('click', async e => {
          e.preventDefault();
          const id = productCart.dataset.productId;

          let params = {
            type: this._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_SKU,
            skuId: id,
            productQuantity: 1,
          };

          await this._vtexjsCartService.addCurrentItem(params);

          this.handleShowModalToast('success', 'Adicionado com sucesso');
          this.handleRenderItemIntoTheCart();
          this._handleOpen();
        });
    });
  }

  handleQuantityActionsPlusAndMinus() {
    const qtyActionButtons = document.querySelectorAll(`.${this.buttonQtyActionSelector}`);

    if (qtyActionButtons) {
      qtyActionButtons.forEach(qtyActionButton => {
        const element = qtyActionButton.parentElement.querySelector(`${this.listItemQtySelector}`);

        fromEvent(element, 'input')
          .pipe(
            pluck('target', 'value'),
            map(value => {
              if (!value || value.length === 0) {
                return 1;
              }
              return value;
            }),

            switchMap(item => {
              return forkJoin(
                ajax({
                  url: `/api/checkout/pub/orderForm/${this.orderFormId.orderFormId}/items`,
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: {
                    orderItems: [
                      {
                        index: element.dataset.miniCartItemIndex,
                        quantity: +item,
                      },
                    ],
                  },
                })
              );
            }),
            tap(data => {
              if (data[0].status == 200) {
                this._freeShippingController.handleFreeShippingProgress(data[0].response);
                this.handleShowFinalPrice(data[0].response);
                this._messagesController.showMessages(data[0].response, this.indexMensaggems);
              }
            })
          )
          .subscribe();

        fromEvent(qtyActionButton, 'click')
          .pipe(
            map(e => {
              const actionFactor = e.currentTarget.dataset.productQtyActionFactor;
              const element = qtyActionButton.parentElement.querySelector(
                `${this.listItemQtySelector}`
              );

              const currentQuantity = this._quantityController._handleQuantity(
                actionFactor,
                element
              );

              let params = {
                index: currentQuantity.index,
                productQuantity: currentQuantity.currentQuantity,
              };

              this.indexMensaggems = params.index;
              return params;
            }),
            switchMap(item => {
              return forkJoin(
                ajax({
                  url: `/api/checkout/pub/orderForm/${this.orderFormId.orderFormId}/items`,
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: {
                    orderItems: [
                      {
                        index: item.index,
                        quantity: +item.productQuantity,
                      },
                    ],
                  },
                })
              );
            }),
            tap(data => {
              if (data[0].status == 200) {
                this._freeShippingController.handleFreeShippingProgress(data[0].response);
                this.handleShowFinalPriceByQuantity(data[0].response);
                this._messagesController.showMessages(data[0].response, this.indexMensaggems);
              }
            })
          )
          .subscribe({
            next() {
              // console.log('got value ' + x);
            },
            error(err) {
              console.error('something wrong occurred: ' + err);
            },
            complete() {
              console.log('termino');
            },
          });
      });
    }
  }

  handleShowModalToast(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  async _addProduct(skuId, quantity) {
    let params = {
      type: this._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_SKU,
      skuId: skuId,
      productQuantity: +quantity,
    };

    await this._vtexjsCartService.addCurrentItem(params);

    this.handleShowModalToast('success', 'Adicionado com sucesso');
    this.handleRenderItemIntoTheCart();
    this._handleOpen();
  }

  async _addMultipleProducts(skus) {
    await this._vtexjsCartService.addMultipleProducts(skus);

    this.handleShowModalToast('success', 'Adicionado com sucesso');
    this.handleRenderItemIntoTheCart();
    this._handleOpen();
  }

  refresh() {
    this.handleRenderItemIntoTheCart();
  }

  load() {
    this.handleToggleMiniCart();
    this.handleRenderItemIntoTheCart();
    this.handleAddItemIntoTheCart();
  }
}
