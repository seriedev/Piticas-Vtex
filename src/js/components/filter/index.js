import FilterService from 'Services/filterService';
import FrnComponent from '../frn.component';
import ShelfComponentV2 from '../shelfV2';
import RenderFilterType from './_renderFilterTypeController';

export default class FilterComponent extends FrnComponent {
  constructor() {
    super();

    /**
     * Variables que tem os dados do
     * '?map=c,c,c' e do pathname /roupa/casaco/meia
     */
    this.map = '';
    this.locationPathname = '';
    this.searchParams = new Set();

    this.seletedSpecification = new Set();

    this.containerClass = '.js-filter';
    this.specificationListClass = `${this.containerClass}-list`;
    this.specificationInputClass = `${this.containerClass}-input`;
    this.specificationInputClassPrice = `${this.containerClass}-input-price`;
    
    this.filterInputPriceOne = document.querySelector('.filter-input-price-one');
    this.filterInputPriceTwo = document.querySelector('.filter-input-price-two');

    this.orderByItemClass = '.js-filter-orderBy-item';
    this.orderByLabelClass = '.js-order-by-current';

    /**
     * Para fazer validacoes por paginas
     */
    this.isBrandPage = document
      .querySelector('body')
      .classList.contains('frn-brand');

    this.isSearchPage = document
      .querySelector('body')
      .classList.contains('frn-search');

    /**
     * Fazer o querySelector dos dados que estao já no html do site
     * PD: é mais performatico...
     *
     * Sao helpers, extends do FRNComponent
     */
    this.getFilterContainerElement = () => {
      return this.getElement(this.containerClass);
    };

    this.getFilterListElement = () => {
      return this.getElement(this.specificationListClass);
    };

    this.getFilterSelectedContainerElement = () => {
      return this.getElement('.filter__selected-items');
    };

    this._filterService = new FilterService();
    this._renderFilterType = new RenderFilterType(this.getFilterListElement);
    this.shelfComponent_ = new ShelfComponentV2();
  }

  /**
   * Render ele é chamado so no primer momento de inicar a pagina
   * para fazer as validacoes se for pagina de "busqueda"
   *
   * Se for pagina de busqueda ele tem que consultar un enpoint diferente.
   */
  _render_() {
    if (!this.isSearchPage) {
      this._urlBuilder_();
    } else {
      this._searchByTerm_();
    }
  }

  /**
   * Ele é o que faz a troca para renderizar os produtos da busqueda
   *
   * Pq faço de novo uma verificao para chamar o this.urlBuilder
   * Tem casos que as paginas de busquedas tem aquele parametro '?map='
   * de ai ele faria de novo a construcaco da url para pegar os produtos e chamar outra api
   */
  _searchByTerm_() {
    if (
      window.location.search.indexOf('specificationFilter') != -1 ||
      window.location.search.indexOf('productClusterIds') != -1
    ) {
      this._urlBuilder_();
    } else {
      const term = `?ft=${window.dataLayer[0]?.siteSearchTerm}`;
      this.searchParams.add(term);
      this._renderProducts_(this.searchParams);
    }
  }

  /**
   * Ele faz um build da url quando nao tiver na url o '?map='
   * so tomo o valor da url de ali faz o build da url para consultar as api
   * para renderizar o filtro e os produtos no primer momento.
   *
   * Quando na url tiver '?map=' ele so deixa ignora o build e pega esse search da url
   * para renderizar o filtro e produtos
   */
  _urlBuilder_() {
    this.locationPathname = window.location.pathname;
    this.locationSearch = window.location.search;

    // Se tiver na url uma queryString
    if (
      this.locationSearch.indexOf('specificationFilter') != -1 ||
      this.locationSearch.indexOf('productClusterIds') != -1
    ) {
      let params = `${this.locationPathname}${this.locationSearch}`;

      this.searchParams.add(params);
      this.__tiggerPayloadFacets(params);
      this._renderProducts_(this.searchParams);
    } else if (this.isBrandPage) {
      // Brand Page
      let params = `${this.locationPathname}?map=b`;
      this.searchParams.add(params);
      this._renderProducts_(this.searchParams);
    } else {
      // Category & Departament 
      
      let countCategoriesPathname = this.locationPathname
        .split('/')
        .filter(Boolean).length;
      let map = 'c'.repeat(countCategoriesPathname);

      this.map = map.split('').join(',');

      let params = `${this.locationPathname}?map=${this.map}`;
      this.searchParams.add(params);

      this.__tiggerPayloadFacets(params);
      this._renderProducts_(this.searchParams);
    }
  }

  /**
   * Esse metodo é uma dispach que faz para consultar api de facets para obter o filtro
   * Marcas - Specifications.
   * Ele recive os parametros que estao na url (location.pathname -  location.search)
   */
  async __tiggerPayloadFacets(params) {
    const specifications = await this._filterService.getSpecificationValues(
      params
    );
    console.log("specifications >>>", specifications);
    const brandList = specifications.Brands;
    const categoryList = specifications.Departments;
    const priceRanges = specifications.PriceRanges;

    if (!this.isBrandPage && !this.isSearchPage) {
      this._renderFilterType.renderBrandList(brandList);
      this._renderFilterType.renderCategoryList(categoryList);
      this._renderFilterType.renderPriceRanges(priceRanges);

      /* Faixa de Preço */
      let inputPrices = document.querySelectorAll('.filter__type--price-input input[type=range]');
      let sliderTrack = document.querySelector(".slider-track");

      inputPrices.forEach(( price ) => {
        let percent1 = (parseInt(inputPrices[0].value) /parseInt(inputPrices[0].max)) * 100;
        let percent2 = (parseInt(inputPrices[1].value) / parseInt(inputPrices[1].max)) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #eaeaea ${percent1}% , #666 ${percent1}% , #666 ${percent2}%, #eaeaea ${percent2}%)`;

        price.addEventListener('input', (item) => {
          
          item.slidePriceOnePercent = inputPrices[0];
          item.slidePriceTwoPercent = inputPrices[1];

          percent1 = (item.slidePriceOnePercent.value / item.slidePriceOnePercent.max) * 100;
          percent2 = (item.slidePriceTwoPercent.value / item.slidePriceTwoPercent.max) * 100;
          sliderTrack.style.background = `linear-gradient(to right, #eaeaea ${percent1}% , #666 ${percent1}% , #666 ${percent2}%, #eaeaea ${percent2}%)`;
        });
        
        price.addEventListener('click', (item) => {
          
          item.slidePriceOne = parseInt(inputPrices[0].value);
          item.slidePriceTwo = parseInt(inputPrices[1].value);

          let query = `${this.locationPathname}/de-${item.slidePriceOne}-a-${item.slidePriceTwo}?map=c,priceFrom`;          
          this.shelfComponent_.__update(query);
        });
        
        return price
      });

      
    }

    const specificationsList = Object.entries(
      specifications.SpecificationFilters
    );

    specificationsList.forEach((item, index) => {
      this._renderFilterType.renderSpecification(item, index);
    });

  }

  /**
   * Ele é um metodo que voce chama em cada funcao para renderizar os produtos,
   * ele recive os parametros para fazer um update da shelve de produtos
   */
  _renderProducts_(params) {
    this.shelfComponent_.__update(...params);
  }

  /**
   * Filtra por cada resultado obtenido da api de facets
   */
  __getSpecificationParams__() {
    const resetButton = document.querySelector('.filter__reset-button')    

    resetButton.classList.add("hide");
    
    document.addEventListener('change', ({ target }) => {
      if (target.matches(this.specificationInputClass)) {
        if (target.checked) {
          console.log('target.checked', target);
          this.locationPathname = this.locationPathname.concat(
            target.dataset.categoryName
          );
          this.map = this.map.concat(target.value);

          let query = `${this.locationPathname}?map=${this.map}`;
          this.shelfComponent_.__update(query);

          this._seletedSpecification_(target);

          if (resetButton.classList.contains("hide") ) {
            resetButton.classList.remove("hide");
            resetButton.classList.add("show");
          }  
        } else {
          const categoryName = target.dataset.categoryName;
          const paramValue = target.value;

          if (resetButton.classList.contains("show") ) {
            resetButton.classList.remove("show");
            resetButton.classList.add("hide");
          }
          
          this.locationPathname = this.locationPathname.replace(
            categoryName,
            ''
          );
          this.map = this.map.replace(paramValue, '');

          this._removeSeletedSpecification_(target);

          let query = `${this.locationPathname}?map=${this.map}`;
          this.shelfComponent_.__update(query);
        }
        
        target.parentNode.classList.toggle('filter__label--active');
      }
    });
  }

  /**
   * Troca o ordem dos produtos por precos
   */
  __updateOrderByParams__() {
    const filter = document.querySelector('.filter');
    const filterButtonClose = document.querySelectorAll('.filter-mobile__link');

    [...document.querySelectorAll(this.orderByItemClass)].map(item => {
      item.addEventListener('click', _event => {
        _event.preventDefault();

        if (filter.classList.contains('filter__show')) {
          filter.classList.remove('filter__show');
        }

        [...filterButtonClose].forEach(button => {
          if (button.classList.contains('filter-mobile__link--close')) {
            button.classList.remove('filter-mobile__link--close');
          }
        });

        [...this.searchParams].map(param => {
          if (param.indexOf('O=') >= 0) {
            this.searchParams.delete(param);
          }
        });

        this.searchParams.add(`&O=${_event.target.dataset.filterValue}`);

        let params = [...this.searchParams].join('');

        this._renderProducts_([params]);

        document.querySelector(this.orderByLabelClass).innerHTML = `
          ${_event.target.innerText}
          <i class="orderBy__icon fas fa-chevron-down"></i>
        `;
      });
    });
  }

  /**
   * ele recive o dados do filtro selecionado para colocar na tela
   *
   * @param {html} target
   */
  _seletedSpecification_(target) {
    this.getFilterSelectedContainerElement().insertAdjacentHTML(
      'beforeend',
      `
      <li class="filter__selected-item" data-filter-name="${target.dataset.categoryName}" data-filter-value="${target.value}"><i class="fas fa-times js-remove-filter"></i> ${target.name}</li>
    `
    );
  }

  /**
   * Ele recive os dados do filtro selecionado para tirar da tela quando é clicado
   * no input(checkbox)
   * @param {html} target
   */
  _removeSeletedSpecification_(target) {
    const actives = document.querySelectorAll('.filter__selected-items > li');
    const targetElment_ = Array.from(actives).find(
      node => node.dataset.filterName === target.dataset.categoryName
    );

    targetElment_.remove();

  }

  /**
   * Ele é chamado no init para deletar e desmarcar o filtro quando vc faz click
   * no X do lado do nome do filtro selecionado
   */
  _removeSeletedSpecificationByClick_() {
    this.getFilterSelectedContainerElement().addEventListener('click', e => {
      if (e.target.matches('.js-remove-filter')) {  
        const categoryName = e.target.parentElement.dataset.filterName;
        const paramValue = e.target.parentElement.dataset.filterValue;

        this.locationPathname = this.locationPathname.replace(categoryName, '');

        this.map = this.map.replace(paramValue, '');

        let query = `${this.locationPathname}?map=${this.map}`;
        this.shelfComponent_.__update(query);
        e.target.parentElement.remove();

        const checkboxes = document.querySelectorAll('.js-filter-input');
        const input = Array.from(checkboxes).find(
          checkbox => checkbox.dataset.categoryName === categoryName
        );

        input.checked = false;
        input.parentElement.classList.remove('filter__label--active');
      }
      if (document.querySelector('.filter__reset-button').classList.contains("hide")) {
        document.querySelector('.filter__reset-button').classList.add("show");
        document.querySelector('.filter__reset-button').classList.remove("hide");
      } else {
        document.querySelector('.filter__reset-button').classList.add("hide");
        document.querySelector('.filter__reset-button').classList.remove("show");
      }
    });
  }

  /**
   * Metodo iniit para chamar as funcoes antes de as coisas ser renderizada na tela
   */
  __init__() {
    this._render_();
    this.__updateOrderByParams__();
    this.__getSpecificationParams__();
    this._removeSeletedSpecificationByClick_();
  }

  load() {
    this.__init__();
  }
}
