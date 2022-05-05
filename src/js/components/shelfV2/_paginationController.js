import Swal from 'sweetalert2';

import FrnComponent from '../frn.component';
import Vtexjs from '../../services/vtex';
import RenderProductController from './_renderProductController';

export default class PaginationController extends FrnComponent {
  constructor(account, term, numberOfItensByPage, header) {
    super();

    this._vtexjs = new Vtexjs();
    this._renderProductController = new RenderProductController();

    this.account = account;
    this.term = term;
    this.numberOfItensByPage = 35;
    this.header = header;

    this.fromNumberParam = -35;
    this.fromSearchNumberParam = window.innerWidth > 1543 ? -29 : -35;

    this.toNumberParam = 0;
    this.numberOfProductsToShow = 35;

    this.numberOfSearchProductsToShow = window.innerWidth > 1543 ? 29 : 35;


    this.resources = '';
    this.countPages = '';
    this.current_page = 1;

    this.step = 3;
    this.indexOfPage = '';

    this.isBrandPage = document
      .querySelector('body')
      .classList.contains('frn-brand');

    this.isSearchPage = document
      .querySelector('body')
      .classList.contains('frn-search');

    this.getPaginationContainer = () => {
      return this.getElement('.pagination');
    };
  }

  _renderCountResults() {
    const sectionSearchElement_ = document.querySelector(
      '.vitrine__general-results-title'
    );
    if (sectionSearchElement_) {
      sectionSearchElement_.innerHTML = `<span>Mostrando ${this.current_page}-${this.countPages} de ${this.resources} </span>`;
    }
  }

  __calc__() {
    let resources = this.header;

    const numberOfMaxItens = resources.split('/')[1];
    const numberOfItensByPage = this.numberOfItensByPage;

    this.resources = numberOfMaxItens;

    const calculateTotalPageItens = numberOfMaxItens / numberOfItensByPage;
    const totalPages = calculateTotalPageItens.toFixed();
    this.countPages = +totalPages;
    this._renderCountResults();

    let number = new Array(+totalPages);
    this.__render__(number);
  }

  __render__(number) {
    if (this.getPaginationContainer()) {
      this.getPaginationContainer().innerHTML = `
        <div class="pagination__wrapper">
          <button class="pagination__button pagination__button--first" data-page="1" data-from="0" data-to="23"> << </button>
          <button class="pagination__button pagination__button--prev" data-page="0" data-from="0" data-to="23">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M20.2 9.804c-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414zM17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm0 28C9.832 30 4 24.168 4 17S9.832 4 17 4s13 5.832 13 13-5.832 13-13 13z"/>
            </svg>
          </button>

            <div class="pagination__items">
              ${this.__renderItem__(number)}
            </div>

          <button class="pagination__button pagination__button--next" data-page="2" data-from="48" data-to="71">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M21.7 16.29l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71zM17.072 2.144c-8.244 0-14.928 6.684-14.928 14.928S8.828 32 17.072 32 32 25.316 32 17.072 25.316 2.144 17.072 2.144zm0 27.856C9.944 30 4.144 24.2 4.144 17.072s5.8-12.928 12.928-12.928S30 9.944 30 17.072 24.2 30 17.072 30z"/>
            </svg>
          </button>
          <button class="pagination__button pagination__button--last" data-page="8" data-from="168" data-to="191"> >> </button>
        </div>
      `;
      this.__init__();
    }
  }

  __renderItem__(number) {
    if (number == 0) {
      number = new Array(1);
    }

    let item = '';

    for (let i = 0; i < number.length; i++) {
      this.handlerPagination('increment');

      item += `
        <button class="pagination__button js-pagination-button" data-page-number="${i +
        1}" data-from-number="${this.isBrandPage || this.isSearchPage ? this.fromSearchNumberParam : this.fromNumberParam}" data-to-number="${this.toNumberParam
        }">${i + 1}</button>
      `;
    }
    return item;
  }

  __init__() {
    this.handleFirstPage();
    this.handleSelectPage();
    this.handleNextPage();
    this.handleClickPage();
    this.handlePrevPage();
    this.handleLastPage();
    this.__cannotlistMoreProducts__();
  }

  handleFirstPage() {
    this.getFirstButton = () => this.getElement('.pagination__button--first');

    this.getFirstButton().addEventListener('click', () => {
      this.current_page = 1;
      this.__changeCurrentPage__();
      $('.pagination__items')
        .stop()
        .animate({ scrollLeft: '-10000000' }, 400);
    });
  }

  handleSelectPage() {
    this.getAllPaginationbutton = () =>
      this.getAllElements('.js-pagination-button');

    for (let i = 0; i < this.getAllPaginationbutton().length; i++) {
      if (i == this.current_page - 1) {
        this.getAllPaginationbutton()[i].style.opacity = '1.0';
        this.getAllPaginationbutton()[i].classList.add(
          'pagination__button--current'
        );
      } else {
        this.getAllPaginationbutton()[i].style.opacity = '0.5';
        this.getAllPaginationbutton()[i].classList.remove(
          'pagination__button--current'
        );
      }
    }
  }

  __movePaginationRight__() {
    const itemsElement_ = document.querySelector('.pagination__items');

    if (this.current_page >= 10) {
      $('.pagination__items')
        .stop()
        .animate({ scrollLeft: '+=45' }, 0);
    } else if (this.current_page >= 100) {
      {
        $('.pagination__items')
          .stop()
          .animate({ scrollLeft: '+=60' }, 0);
      }
    }
  }

  __movePaginationLeft__() {
    if (this.current_page >= 10) {
      $('.pagination__items')
        .stop()
        .animate({ scrollLeft: '-=55' }, 0);
    } else if (this.current_page >= 100) {
      {
        $('.pagination__items')
          .stop()
          .animate({ scrollLeft: '-=60' }, 0);
      }
    }
  }

  handleNextPage() {
    this.getNextButton = () => this.getElement('.pagination__button--next');

    this.getNextButton().addEventListener('click', () => {
      if (this.current_page < this.countPages) {
        this.current_page++;
        this.indexOfPage++;
        this.__changeCurrentPage__();

        this.__movePaginationRight__();
      }
    });
  }

  handleClickPage() {
    this.getAllPaginationbutton = () =>
      this.getAllElements('.js-pagination-button');

    this.getAllPaginationbutton().forEach(button => {
      button.addEventListener('click', ({ target }) => {
        const dataPageNumber = target.dataset.pageNumber;

        this.current_page = +dataPageNumber;

        this.__changeCurrentPage__();
      });
    });
  }

  handlePrevPage() {
    this.getPrevButton = () => this.getElement('.pagination__button--prev');
    this.getPrevButton().addEventListener('click', () => {
      if (this.current_page > 1) {
        this.current_page--;
        this.__changeCurrentPage__();

        this.__movePaginationLeft__();
      }
    });
  }

  handleLastPage() {
    this.getLastButton = () => this.getElement('.pagination__button--last');

    this.getLastButton().addEventListener('click', () => {
      this.current_page = this.countPages;
      this.__changeCurrentPage__();
      $('.pagination__items')
        .stop()
        .animate({ scrollLeft: '+10000000' }, 400);
    });
  }

  __changeCurrentPage__() {
    if (this.current_page === 145) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Utilize nosso filtro lateral para afunilar a sua pesquisa',
      });

      if (this.current_page < 1) {
        this.current_page = 1;
      }

      if (this.current_page > this.countPages - 1) {
        this.current_page = this.countPages;
      }

      this.getAllPaginationbutton = () =>
        this.getAllElements('.js-pagination-button');

      this.getAllPaginationbutton().forEach(button => {
        if (button.dataset.pageNumber == this.current_page) {
          const datasetFrom = button.dataset.fromNumber;
          const datasetTo = button.dataset.toNumber;

          this.__getProducts(datasetFrom, datasetTo);
        }
      });

      this.handleSelectPage();
    } else {
      if (this.current_page < 1) {
        this.current_page = 1;
      }

      if (this.current_page > this.countPages - 1) {
        this.current_page = this.countPages;
      }

      this.getAllPaginationbutton = () =>
        this.getAllElements('.js-pagination-button');

      this.getAllPaginationbutton().forEach(button => {
        if (button.dataset.pageNumber == this.current_page) {
          const datasetFrom = button.dataset.fromNumber;
          const datasetTo = button.dataset.toNumber;

          this.__getProducts(datasetFrom, datasetTo);
        }
      });

      this.handleSelectPage();
    }
  }

  __getProducts(from, to) {
    this.term = this.term.split('&_from')[0];

    this._vtexjs
      .get(
        `/catalog_system/pub/products/search/${this.term}&_from=${from}&_to=${to}`
      )
      .then(response => {
        window.scrollTo(0, 200);
        this._renderProductController._resolver(response);
      });
  }

  handlerPagination(type) {
    switch (type) {
      case 'increment':
        if (this.isBrandPage || this.isSearchPage) {
          this.fromSearchNumberParam =
            this.fromSearchNumberParam + this.numberOfSearchProductsToShow;
          this.toNumberParam = this.toNumberParam + this.numberOfSearchProductsToShow;
        } else {
          this.fromNumberParam =
            this.fromNumberParam + this.numberOfProductsToShow;
          this.toNumberParam = this.toNumberParam + this.numberOfProductsToShow;
        }
        break;
      case 'reset':

        if (this.isBrandPage || this.isSearchPage) {
          this.fromSearchNumberParam = 0;
          this.toNumberParam = this.numberOfSearchProductsToShow;
        } else {
          this.fromNumberParam = 0;
          this.toNumberParam = this.numberOfProductsToShow;
        }

        break;
      default:
        break;
    }
  }

  _addLoading() {
    if (!document.querySelector('.loader')) {
      document.querySelector('.vitrine__group').innerHTML = '';
      const vitrineOpacity = document.querySelector('.vitrine__results');

      if (!vitrineOpacity.classList.contains('opacity-none')) {
        vitrineOpacity.classList.add('opacity-none');
      }

      const vitrineWrapperElement_ = document.querySelector(
        '.vitrine__wrapper'
      );
      vitrineWrapperElement_.insertAdjacentHTML(
        'afterbegin',
        `<div class="loader">Loading...</div>`
      );
    }
  }

  __cannotlistMoreProducts__() {
    const paginationItemElements_ = document.querySelectorAll(
      '.js-pagination-button'
    );
    const paginationElementsToArray = Array.from(paginationItemElements_);
    const maxValue = paginationElementsToArray.filter(
      item => item.dataset.pageNumber >= 146
    );

    if (maxValue) {
      maxValue.forEach(item => {
        item.remove();
      });

      const paginationItemElements_ = document.querySelectorAll(
        '.js-pagination-button'
      );
      this.countPages = Array.from(paginationItemElements_).length;
    }
  }

  load() {
    this.__calc__();
  }
}
