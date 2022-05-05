import Hammer from 'hammerjs';

import FilterComponent from 'Components/filter';
import Helpers from 'Helpers/';

class Category {
  constructor() {
    this.filter_ = new FilterComponent();

    this.brandPage = document
      .querySelector('body')
      .classList.contains('frn-brand');

    this.componentBuilder();
  }

  dropdownFilter() {
    const isMobile = Helpers.isMobile();
    const itemsContainerElements_ = document.querySelectorAll('.filter__name');

    if (isMobile) {
      [...itemsContainerElements_].forEach(item => {
        const popoverElement_ = item.querySelector('.filter__popover');

        item.addEventListener('click', () => {
          popoverElement_.classList.toggle('filter__popover--show');
        });
      });
    }
  }

  _openFilterMobile() {
    const filterElement_ = document.querySelector('.js-filter');
    const filterOverlay_ = document.querySelector('.filter-overlay');
    const buttonCloseOverlay_ = document.querySelector('.filter-overlay');
    const buttonElements_ = document.querySelectorAll('.filter-mobile__open');

    [...buttonElements_].forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        filterElement_.classList.toggle('filter__show');
        filterOverlay_.classList.toggle('open-overlay');
        button.classList.toggle('filter-mobile__link--close');
      });
    });

    buttonCloseOverlay_.addEventListener('click', () => {
      if (filterOverlay_.classList.contains('open-overlay')) {
        filterOverlay_.classList.remove('open-overlay');
      }
    });
  }

  _openOrderMobile() {
    const orderElement_ = document.querySelector('.filter__orderBy--mobile');
    const orderOverlay_ = document.querySelector('.order-overlay');

    const buttonCloseOverlay_ = document.querySelector('.order-overlay');
    const buttonElements_ = document.querySelectorAll('.orderBy-mobile__open');

    [...buttonElements_].forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        orderElement_.classList.toggle('orderBy__show');
        orderOverlay_.classList.toggle('open-overlay');
      });
    });

    buttonCloseOverlay_.addEventListener('click', () => {
      if (orderOverlay_.classList.contains('open-overlay')) {
        orderOverlay_.classList.remove('open-overlay');
        orderElement_.classList.remove('orderBy__show');
      }
    });

  }

  openOrderByMobile() {
    const isMobile = Helpers.isMobile();
    const orderByElement_ = document.querySelector('.orderBy');
    const orderBySubElement_ = document.querySelector('.orderBy__sub');
    const filterElement_ = document.querySelector('.js-filter');
    const buttonCloseElement_ = document.querySelector('.filter__header');
    const filterItemNameElements_ = document.querySelectorAll('.filter__item');
    const filterBody_ = filterElement_.querySelector('.filter__wrapper');

    const filterOverlay_ = document.querySelector('.filter-overlay');
    const buttonCloseOverlay_ = document.querySelector('.filter-overlay');

    if (isMobile) {
      orderByElement_.addEventListener('click', () => {
        orderBySubElement_.classList.toggle('orderBy__sub--show');
      });

      [...filterItemNameElements_].forEach(item => {
        const filterSubPopoverElement_ = item.querySelector('.filter__popover');
        item.addEventListener('click', () => {
          filterSubPopoverElement_.classList.toggle('filter__popover--show');
        });
      });

      buttonCloseOverlay_.addEventListener('click', () => {
        if (filterElement_.classList.contains('filter__show')) {
          filterElement_.classList.remove('filter__show');
          filterOverlay_.classList.remove('open-overlay');
        }
      });
    }

    this.handleFilterGestures(filterBody_, buttonCloseElement_);
  }

  handleFilterGestures(filterBody_, buttonCloseElement_) {
    const mainElement = document.querySelector('main');

    const hammerClose = new Hammer(filterBody_, {});
    const hammerOpen = new Hammer(mainElement, {});

    hammerOpen.on('swipeleft', function(ev) {
      const filterToggle = document.querySelector('.filter-mobile__open');
      const filterElement_ = document.querySelector('.js-filter');

      let isSlide = false;
      let isMenu = false;

      const checkIfItsSlide = node => {
        if (node && node.classList) {
          if (
            node.classList.contains('slick-slide') ||
            node.classList.contains('slick-track') ||
            node.classList.contains('slick-list')
          ) {
            return true;
          }
        }
      };

      const checkIfItsMenu = node => {
        if (node && node.classList) {
          if (node.classList.contains('hamburger')) return true;
        }
      };

      let nodes = [];
      let element = ev.target;
      nodes.push(element);

      while (element.parentNode) {
        nodes.unshift(element.parentNode);
        element = element.parentNode;
        let slide = checkIfItsSlide(element.parentNode);
        let menu = checkIfItsMenu(element.parentNode);

        if (slide) {
          isSlide = true;
          return;
        }
      }

      //open gesture
      if (!isSlide && !isMenu) {
        if (!filterElement_.classList.contains('filter__show')) {
          filterToggle && filterToggle.click();
        }
      }
    });

    //close gesture
    if (filterBody_ && buttonCloseElement_) {
      hammerClose.on('swiperight', function(ev) {
        buttonCloseElement_.click();
      });
    }
  }

  bannerCategories () {
    const isMobile = Helpers.isMobile();
    let categoriesLocationPathName = this.filter_.locationPathname;
    const categoriesPathName = categoriesLocationPathName.substring(categoriesLocationPathName.lastIndexOf("/")+1);
    const bannerContent = document.querySelector('.banner-category__content');

    if (!isMobile) {
      bannerContent.insertAdjacentHTML(
        'afterbegin',
        `
          <div class="banner-category__content--desktop">
            <img width="1920" height="185" class="banner-category__content--img alt="${categoriesPathName}" src="/arquivos/${categoriesPathName}.png" />
          </div>
        `
      );
    } else {
      bannerContent.insertAdjacentHTML(
        'afterbegin',
        `
          <div class="banner-category__content--mobile">
            <img width="425" height="150" class="banner-category__content--img alt="${categoriesPathName}" src="/arquivos/${categoriesPathName}-mobile.png" />
          </div>
        `
      );
    }

    
    console.log("categoriesName >>>>", categoriesPathName );
  }

  componentBuilder() {
    document.addEventListener('DOMContentLoaded', () => {
      this.filter_.load();

      this._openFilterMobile();
      this._openOrderMobile();
      this.openOrderByMobile();

      setTimeout(() => {
        this.dropdownFilter();
      }, 3000);
    });
  }
}

new Category();
