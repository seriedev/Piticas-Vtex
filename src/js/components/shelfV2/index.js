import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, tap } from 'rxjs/operators';

import FrnComponent from '../frn.component';
import getCatalogService from 'Services/catalogService';
import LoadMoreController from './_loadMoreController';
import RenderProductController from './_renderProductController';
import PaginationController from './_paginationController';

export default class ShelfComponentV2 extends FrnComponent {
  constructor() {
    super();

    this._getCatalog = new getCatalogService();
    this._renderProductController = new RenderProductController();

    this.departamentUrl = '';

    /**
     * Numero de itens por paginas para renderizar produtos
     */
    this.fromNumberParam = 0;
    this.numberOfProductsToShow = 35;
    this.toNumberParam = 35;
    this.toSearchNumberParam = window.innerWidth > 1543 ? 29 : 35;

    this.paramsFilter = [];
    this.totalProducts = '';

    /**
     * False quando nao vai ter um carregar mais com scroll
     * True quando vai ter carregar mais com scroll
     */
    this.infintyLoad = false;

    this.isBrandPage = document
      .querySelector('body')
      .classList.contains('frn-brand');

    this.isSearchPage = document
      .querySelector('body')
      .classList.contains('frn-search');

    this.shelfClass = '.vitrine';
    this.shelfLoadingClass = 'vitrine__loading';

    this.getShelfElement = () => {
      return this.getElement(this.shelfClass);
    };

    this.getLoadMoreElement = () => {
      return this.getElement(`${this.shelfClass}__loadmore`);
    };
  }

  /**
   * Metodo que faz a chamada para api pra renderizar os produtos na tela
   * ele passa por um paramsBuilder para colocar o numero de produtos renderizados
   */

  __update(params) {
    this._addLoading();

    if (params) {
      const paramsFormatted = this.paramsBuilder(params);

      this.__tiggerSearchApi__(paramsFormatted, params);
    }
  }

  /**
   * Ele é um oberserver de RXJS onde faz a chamada para api
   * Cria o loading
   *
   */
  __tiggerSearchApi__(params, paramsUnFormatted) {
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
      let header = response[0].xhr.getResponseHeader('resources');
      this._paginationController = new PaginationController(
        'lojapiticas',
        params,
        20,
        header
      );
      this._paginationController.load();

      let products = response[0].response;

      this.totalProducts = products.length;
      this._renderProductController._resolver(products);
    });
  }

  /**
   * Criar o carregar mais na tela, ele chama um sub-controller que faz a chamada para api dentro dele
   * nao encontrei uma forma de fazer uma classe abstracta desse controller para no perder o codigo de
   * __tiggerSearchApi__.
   */
  createdInfinityLoadElement(params) {
    this.getLoadMoreElement().innerHTML = `
        <a href="javascript:;" class="category-shelf__button js-shelf-button-load-more">
          Carregar mais produtos
        </a>
      `;

    if (!this.infintyLoad) {
      this._loadmoreController = new LoadMoreController();
      this._loadmoreController._loadMore_(params);
    } else {
      const loadBtn = document.querySelector('.js-shelf-button-load-more');
      this._loadmoreController = new LoadMoreController();

      let triggered = false;

      window.addEventListener('scroll', () => {
        if (
          loadBtn.getBoundingClientRect().bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!triggered && !this.outOfProducts) {
            this._loadmoreController._inityLoad_(params);

            triggered = true;
            setTimeout(() => (triggered = false), 2000);
          }
        }
      });

      window.addEventListener('touchmove', () => {
        if (
          loadBtn.getBoundingClientRect().bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!triggered && !this.outOfProducts) {
            this._loadmoreController.infinyLoad();
            triggered = true;
            setTimeout(() => (triggered = false), 2000);
          }
        }
      });
    }
  }

  /**
   * Ele revice os parametros do metodo update e faz um format e coloca o numero de produtos pedidos nao api
   */
  paramsBuilder(params) {
    const paramsFormatted =
      typeof params != 'string' ? params.join('') : params;
    const queries = params.length > 0 ? `${paramsFormatted}` : '';
    if (this.isSearchPage || this.isBrandPage) {
      console.log('this.toSearchNumberParam', this.toSearchNumberParam)
      return `${queries}&_from=${this.fromNumberParam}&_to=${this.toSearchNumberParam}`;
    } else {
      return `${queries}&_from=${this.fromNumberParam}&_to=${this.toNumberParam}`;
    }
  }

  /**
   * Coloca um loading na tela <3
   */
  _addLoading() {
    const vitrineOpacity = document.querySelector('.vitrine__results');

    if (!vitrineOpacity.classList.contains('opacity-none')) {
      vitrineOpacity.classList.add('opacity-none');
    }

    const vitrineWrapperElement_ = document.querySelector('.vitrine__wrapper');
    vitrineWrapperElement_.insertAdjacentHTML(
      'afterbegin',
      `<div class="loader">Loading...</div>`
    );
  }
}
