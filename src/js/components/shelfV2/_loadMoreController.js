import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap } from 'rxjs/operators';

import getCatalogService from 'Services/catalogService';
import RenderProductController from './_renderProductController';

export default class LoadMoreController {
  constructor() {
    this._getCatalog = new getCatalogService();
    this._renderProductController = new RenderProductController();

    this.isBrandPage = document
      .querySelector('body')
      .classList.contains('frn-brand');

    this.isSearchPage = document
    .querySelector('body')
    .classList.contains('frn-search');

    this.departamentUrl = '';
    this.fromNumberParam = 0;
    this.toNumberParam = 35;
    this.numberOfProductsToShow = 35;
    this.toSearchNumberParam = window.innerWidth > 1543 ? 29 : 35;
    this.paramsFilter = [];
    this.totalProducts = '';

    this.shelfButtonLoadClass = '.js-shelf-button-load-more';
    this.shelfButtonLoadLoadingClass = 'category-shelf__button--loading';
    this.shelfButtonLoadEndClass = 'category-shelf__button--end';
  }

  _loadMore_(params) {
    const button = document.querySelector(this.shelfButtonLoadClass);

    button.addEventListener('click', ({ target }) => {
      this.handlerPagination('increment');

      target.classList.remove(this.shelfButtonLoadEndClass);

      target.classList.add(this.shelfButtonLoadLoadingClass);

      let newParams = this.paramsBuilder(params);

      this.__tiggerSearchApi__(newParams);
    });
  }

  __tiggerSearchApi__(params) {
    const button = document.querySelector(this.shelfButtonLoadClass);

    const observerByParam$ = of(params).pipe(
      map(() => {
        return {
          query: {
            type: this._getCatalog.VTEX_ENDPOINTS.PARAMS,
            params: params,
          },
        };
      }),
      switchMap(resp => {
        return forkJoin(
          ajax(
            `${this._getCatalog._apiService.VTEX_BASE_ENDPOINT.BASE_URL}${resp.query.type}${resp.query.params}`
          )
        );
      })
    );

    observerByParam$.subscribe(response => {
      let products = response[0].response;

      if (products.length > 0) {
        button.classList.remove(this.shelfButtonLoadLoadingClass);
        this.totalProducts = products.length;
        this._renderProductController._resolver(products, true);
      } else {
        button.setAttribute('disabled', 'disabled');

        setTimeout(() => {
          button.classList.remove(this.shelfButtonLoadLoadingClass);
          button.classList.add(this.shelfButtonLoadEndClass);
        }, 1500);
      }
    });
  }

  _inityLoad_(params) {
    const button = document.querySelector(this.shelfButtonLoadClass);

    this.handlerPagination('increment');

    let newParams = this.paramsBuilder(params);

    this.__tiggerSearchApi__(newParams);
  }

  paramsBuilder(params) {
    const paramsFormatted =
      typeof params != 'string' ? params.join('') : params;
    const queries = params.length > 0 ? `${paramsFormatted}` : '';

    if (this.isSearchPage || this.isBrandPage) {
      return `${queries}&_from=${this.fromNumberParam}&_to=${this.toSearchNumberParam}`;
    } else {
      return `${queries}&_from=${this.fromNumberParam}&_to=${this.toNumberParam}`;
    }
  }

  handlerPagination(type) {
    switch (type) {
      case 'increment':
        this.fromNumberParam =
          this.fromNumberParam + this.numberOfProductsToShow;
        this.toNumberParam = this.toNumberParam + this.numberOfProductsToShow;
        break;
      case 'reset':
        this.fromNumberParam = 0;
        this.toNumberParam = this.numberOfProductsToShow;
        break;
      default:
        break;
    }
  }

  load() {
    // this.categoryParamBuilder();
  }
}
