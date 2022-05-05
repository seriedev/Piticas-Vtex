import Config from './institutional.config';

class Institucional {
  constructor() {
    this.componentBuilder();

    console.log('aa');

    this.prevArrow = `<button class="slick-arrow-left">
    <svg class="slick-arrow-left" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"><g><g opacity="1"><path fill="#b8b8b8" d="M10.614.006l1.172 1.122-9.47 10.508 9.679 9.204-1.063 1.171L.005 11.62l1.063-1.171.073.07z"/></g></g></svg>
    </button>`;

    this.nextArrow = `<button class="slick-arrow-right">
    <svg class="slick-arrow-right" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"><g><g opacity="1"><path fill="#b8b8b8" d="M.214 1.128L1.386.006l9.473 10.512.073-.07 1.063 1.171L1.068 22.011.005 20.84l9.678-9.204z"/></g></g></svg>
  </button>`;
  }

  handleBreadcrumb() {
    const breadcrumb = document.querySelectorAll(
      '.js-institucional-breadcrumb'
    );
    const title = document.getElementsByTagName('title');
    const account = title[0].textContent.split('Institucional – ')[1];
    const body = document.getElementsByTagName('body');

    let url = body[0].classList[1];

    url = url.split('/').pop();
    url = url.replace('-', ' ');
    url = url.replace(/(^|-)./g, s => s.slice(-1).toUpperCase());

    title[0].textContent = `${url} - ${account}`;

    breadcrumb[0].children[0].textContent = url;
  }

  _initSlick() {
    Config.handleShelfSlide(this.prevArrow, this.nextArrow);
  }

 handleSkuModal() {
    const products = document.querySelectorAll('.productCard');

    products.forEach(product => {
      this.skuSelectorOnShelf.skuSelectorOnShelf(product);
    });
  }

  componentBuilder() {
    document.addEventListener('DOMContentLoaded', () => {
      this._initSlick();
      this.handleSkuModal();
      this.handleBreadcrumb();
    });
  }
}

new Institucional();
