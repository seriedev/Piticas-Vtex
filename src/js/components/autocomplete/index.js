import { fromEvent, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  pluck,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators';

import CartService from 'Services/cartService';
import getCatalogService from 'Services/catalogService';
import Helpers from 'Helpers/';
import MiniCartComponent from '../miniCart/index';
import PlaceHolderLoading from '../Placeholder';
import SkuSelectorControllerModal from './_skuSelectorController.js';
class AutoCompleteComponent {
  constructor() {
    this._getCatalog = new getCatalogService();
    this._cartService = new CartService();
    this._minircart = new MiniCartComponent();
    this.helpers = new Helpers();
    this.skuSelectorModalController_ = new SkuSelectorControllerModal();

    this.inputSearchBar = '#search-input';
    this.resultList = 'result-list';
    this.searchButton = '.js-send-search';

    this.loading = new PlaceHolderLoading();
  }

  showResults(resp, catalago, general) {
    let resultList = document.getElementById(this.resultList);
    resultList.innerHTML = '';

    this.loading.loaderController(true, resultList, 'autocomplete');
    resultList.classList.remove('result-list-show', 'result-list-show-no-item');

    let searchBar = document.querySelector(this.inputSearchBar);

    if (!searchBar.value && resp.itemsReturned === undefined) {
      this.loading.loaderController(false, resultList, 'autocomplete');
    }

    if (resp.itemsReturned === undefined) {
      return;
    }

    const items = resp.itemsReturned;

    let animationDelay = 0;

    if (items.length == 0) {
      this.showGeneralResults(general);
    } else {
      resultList.classList.add('result-list-show');
      items.forEach((item, index) => {
        if (item.items.length >= 1) {
          const thumb = () => {
            let thumbElement = ''
            if (item.thumb) {
              thumbElement = `
              <img width="25" height="25" src="${item.thumbUrl.replace('-25-25/', '-100-100/')}" />
              `
            }
            return thumbElement;
          }

          const resultItem = `
          <div data-index=${index} class="list-group-item animated fadeInUp" style="animation-delay: ${animationDelay}s;">

            <div class="list-image">
              ${thumb() || ''}
            </div>
            <div class="list-title">
              <a href=${item.href}>
                <h5>${item.name}</h5>                
              </a>
            </div>

            <div class="price-title">R$ <span class="price"></span></div>

            <div class="list-button"><button class="comprar">Comprar</button></div>
          </div>
                    `;
          resultList.insertAdjacentHTML('beforeend', resultItem);
          animationDelay += 0.1;
          setTimeout(() => {
            this.loading.loaderController(false, resultList, 'autocomplete');
          }, 1000);
        } else {
          console.log('departamento');
        }
      });

      this.resp = resp;
      this._setProductProperties(catalago);
    }
  }

  showGeneralResults(items) {
    console.log('items', items);
    let animationDelay = 0;
    let resultList = document.getElementById(this.resultList);

    if (items.length > 1) {
      resultList.classList.add('result-list-show');
      items.forEach((item, index) => {
        if (item.items.length > 1) {
          const resultItem = `
          <div data-index=${index} data-product-id="${
            item.productId
          }" class="list-group-item animated fadeInUp" style="animation-delay: ${animationDelay}s;">
  
            <div class="list-image small-image">
              <img width="100" height="100" src="${
                item.items[0].images[0].imageUrl
              }" />
            </div>
  
            <div class="list-title">
              <a href=${item.link}>
                <h5>${item.productName}</h5>                
              </a>
            </div>

            <div class="price-title">R$ <span class="price">${this.helpers._formatPrice(
              item.items[0].sellers[0].commertialOffer.Price
            )}</span></div>
            
            <div class="list-button"><button class="comprar" data-product-id="${
              item.productId
            }">Comprar</button></div>
          </div>
                    `;
          resultList.insertAdjacentHTML('beforeend', resultItem);
          animationDelay += 0.1;
          setTimeout(() => {
            this.loading.loaderController(false, resultList, 'autocomplete');
          }, 1000);
        } else {
          // console.log('departamento');
        }
      });
    } else {
      resultList.innerHTML = 'Nenhum item encontrado :(';
      resultList.classList.add('result-list-show', 'result-list-show-no-item');
    }

    this.skuSelectorModalController_.skuSelectorOnShelf();
  }

  showBlogItems(items) {}

  _setProductProperties(catalago) {
    const priceElements = document.querySelectorAll('.price');
    const buttonBuyElements = document.querySelectorAll('.comprar');
    const listElements = document.querySelectorAll('.list-group-item');

    const priceCatalg = catalago.catalagoItems.map((item, index) => {
      if (item.items[index] === undefined) return;
      return this.helpers._formatReal(item.items[0].sellers[0].commertialOffer.Price);
    });

    const productId = catalago.catalagoItems.map(item => {
      return item.items[0].itemId;
    });

    const productIdVariations = catalago.catalagoItems.map(item => {
      return item.productId;
    });

    [...priceElements].map((priceElement, index) => {
      if (!priceCatalg[index] == 0) {
        priceElement.innerHTML = priceCatalg[index];
      } else {
        priceElement.classList.add('hide');
        priceElement.parentElement.classList.add('hide');
      }
    });

    [...buttonBuyElements].map((buyElement, index) => {
      if (!priceCatalg[index] == 0) {
        buyElement.dataset.productId = productId[index];
      } else {
        buyElement.dataset.unavailable = true;
        buyElement.innerHTML = 'indisponível';
        buyElement.classList.add('primary-color');
      }
    });

    [...listElements].map((listElement, index) => {
      listElement.dataset.productId = productIdVariations[index];
    });

    this.skuSelectorModalController_.skuSelectorOnShelf();
  }

  setEventBuy(buttons) {
    [...buttons].map(button => {
      button.addEventListener('click', async e => {
        const id = e.target.dataset.productId;

        let params = {
          skuId: id,
          productQuantity: 1,
        };

        await this._cartService.addCurrentItem(params);
        this._minircart.handleRenderItemIntoTheCart();
      });
    });
  }

  setFocusOut() {
    let resultList = document.getElementById(this.resultList);

    window.addEventListener('click', event => {
      if (!event.target.matches(this.resultList)) {
        resultList.innerHTML = '';
        resultList.classList.remove('result-list-show');
      }
    });
  }

  setSearchEvent() {
    const buttonSearchElement_ = document.querySelector(this.searchButton);

    if (buttonSearchElement_) {
      buttonSearchElement_.addEventListener('click', () => {
        let searchBar = document.querySelector(this.inputSearchBar);
        const inputValue_ = searchBar.value;

        if (!inputValue_ == '') {
          window.location.href = `/${inputValue_}`;
        } else {
          searchBar.focus();
        }
      });

      const searchBar = document.querySelector(this.inputSearchBar);

      searchBar.addEventListener('keypress', e => {
        const inputValue_ = searchBar.value;

        if (e.key === 'Enter') {
          if (!inputValue_ == '') {
            window.location.href = `/${inputValue_}`;
          }
        }
      });
    }
  }

  resolver() {
    let searchInput = document.getElementById('search-input');

    const input$ = fromEvent(searchInput, 'input').pipe(
      pluck('target', 'value'),
      debounceTime(150),
      distinctUntilChanged(),
      switchMap(searchKey => {
        if (!searchKey || searchKey.length < 3) return of([]);
        return forkJoin(
          ajax(
            `/buscaautocomplete/?maxRows=5&productNameContains=${searchKey}&suggestionsStack=`
          ),
          ajax(
            `/api/catalog_system/pub/products/search?ft=${searchKey}&_from=0&_to=4`
          ),
          ajax(`/api/catalog_system/pub/products/search/${searchKey}`)
        );
      }),
      catchError((err, source) => {
        console.warn(err);
        return source;
      }),
      map(([autocomplete, catalago, general]) => {
        return {
          autocomplete,
          catalago,
          general,
        };
      }),
      distinctUntilChanged(),
      map(resp => {
        if (resp.autocomplete === undefined) {
          return of([]);
        }
        return resp;
      })
    );

    this._subscribe(input$);
  }

  _subscribe(input$) {
    input$.subscribe({
      next: response => {
        if (response.autocomplete === undefined) {
          this.showResults([], []);
        } else {
          this.showResults(
            response.autocomplete.response,
            {
              catalagoItems: response.catalago.response,
            },
            response.general.response
          );
        }
      },

      complete: () => {
        console.log('Se ha completado el ciclo');
      },
    });
  }

  load() {
    this.resolver();
    this.setFocusOut();
    this.setSearchEvent();
  }
}

export default AutoCompleteComponent;
