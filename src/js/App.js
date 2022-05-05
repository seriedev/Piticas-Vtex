import Hammer from 'hammerjs';

import AutoCompleteComponent from 'Components/autocomplete/index';
import Footer from 'Components/Footer/index';
import MiniCartComponent from 'Components/miniCart/index';
import NewsletterComponent from 'Components/newsletter/index';
import quickBuy from 'Components/quickBuy/index';
import WishListComponent from 'Components/wishlist/index';

class AppController {
  constructor() {
    this.footer = new Footer();
    this.carrousel_ = new NewsletterComponent();
    this.miniCart_ = new MiniCartComponent();
    this.autocomplete_ = new AutoCompleteComponent();
    this.wishList_ = new WishListComponent();
    this.shelfSku = new quickBuy();

    this.eventHandlerBinds();
  }

  storeBennefitsCarousel() {
    const prevArrow = `<button class="slick-arrow-left">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"><path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M7.955,2.878 L2.385,7.402 L7.955,11.927 C8.378,12.271 8.523,13.032 8.279,13.628 C8.034,14.223 7.493,14.427 7.070,14.083 L0.633,8.854 C0.266,8.556 0.126,7.948 0.250,7.402 C0.126,6.857 0.266,6.249 0.633,5.951 L7.070,0.722 C7.493,0.378 8.034,0.582 8.279,1.177 C8.523,1.773 8.378,2.534 7.955,2.878 Z"/></svg>
                      </button>`;

    const nextArrow = `<button class="slick-arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px"><path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M8.447,8.537 L2.010,13.766 C1.587,14.110 1.046,13.906 0.802,13.310 C0.557,12.715 0.702,11.953 1.126,11.609 L6.695,7.085 L1.126,2.561 C0.702,2.217 0.557,1.456 0.802,0.860 C1.046,0.265 1.587,0.061 2.010,0.404 L8.447,5.634 C8.814,5.931 8.954,6.539 8.831,7.085 C8.954,7.631 8.814,8.239 8.447,8.537 Z"/></svg>
                      </button>`;

    $('.bennefits-list__carousel').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    });
  }

  handleSlickTopbar() {
    const prevArrow = `<button class="slick-arrow-left">
                        <img src="/arquivos/arrow-left.png" alt="left" srcset="" />
                      </button>`;

    const nextArrow = `<button class="slick-arrow-right">
                        <img src="/arquivos/arrow-right.png" alt="left" srcset="" />
                      </button>`;


    $('.header__topbar--item--row-slide').slick({
      slidesToShow: 1,
      variableWidth: false,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    });

  }

  inputSearchMenu() {
    /* Search Desktop */
    if ($(window).width() > 1024) {

      /* Altera borda input ao digitar */
      const inputSearch = document.querySelector(".header .search #search-input");

      inputSearch.addEventListener("input", _ => {

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

      const buttonSearchMobile = document.querySelector('.searchIcon');
      const searchModalMobileContent = document.querySelector('.search');

      buttonSearchMobile.addEventListener('click', () => searchModalMobileContent.classList.add('show-search-mobile'));

      searchModalMobileContent.addEventListener('click', () => {
        if (searchModalMobileContent.classList.contains('show-search-mobile')) {
          searchModalMobileContent.classList.remove('show-search-mobile');
        }
      });

      searchModalMobileContent.addEventListener('click', e => {
        if (e.target.matches('#search-input')) {
          searchModalMobileContent.classList.toggle('show-search-mobile');
        }
      });

      const inputSearch = document.querySelector(".header .search #search-input");

      inputSearch.addEventListener("input", _ => {

        if (inputSearch.value.length > 1) {
          inputSearch.classList.add("borderInvisible");
          $(".search").addClass("show-search-mobile");
          if (inputSearch.value.length == 1) {
            $(".search").addClass("show-search-mobile");
          }
        } else {
          inputSearch.classList.remove("borderInvisible");
          if (inputSearch.value.length == 0) {
            $(".search").removeClass("show-search-mobile");
          }
        }
      });
    }
  }

  scrollHeader() {
    let floatingBar = document.querySelector('.header');

    window.addEventListener(
      'scroll',
      e => {
        if (window.scrollY > floatingBar.offsetHeight) {
          document.body.classList.add('floating-header');
        } else {
          document.body.classList.remove('floating-header');
          $('.header__topbar--item--row-slide').slick('setPosition');
        }
      },
      false
    );
  }

  handleHeaderMenu() {
    const menuToggler = document.querySelector('header .menuToggle');

    const menuTogglerDesktop = document.querySelector('.header__bottom');
    const menuListElement_ = document.querySelectorAll('.menuToggle__menu-list');

    const subMenus = document.querySelectorAll('.submenu-title')
    const subMenusUl = document.querySelectorAll('.submenu-ul')
    const products = document.querySelectorAll('.submenu-product')

    const subMenuGroupWrapper = document.querySelector('.menu__group-sub-wrapper')
    
    const productsWithoutVitrineClass = document.querySelectorAll('.submenu-product .n2colunas')
    const productsWithoutVitrineClassTwo = document.querySelectorAll('.menu__group-sub-products .n2colunas')

    productsWithoutVitrineClass.forEach((product) => {
      product.classList.remove('vitrine')
    })
    productsWithoutVitrineClassTwo.forEach((product) => {
      product.classList.remove('vitrine')
    })

    subMenuGroupWrapper.addEventListener('mouseleave', () => {
      products.forEach((product) => {
        product.classList.remove('product--active')
      })
      subMenusUl.forEach((subMenuUl) => {
        subMenuUl.classList.remove('product--active')
      })
  });


    for (let index = 0; index < subMenus.length; index++) {

      subMenus[index].addEventListener("mouseenter", () => {
        products.forEach((product) => {
          product.classList.remove('product--active')
        })
        subMenusUl.forEach((subMenuUl) => {
          subMenuUl.classList.remove('product--active')
        })

        products[index].classList.add('product--active')
        subMenusUl[index].classList.add('product--active')
      })

    }



    const el = document.querySelector('.header__top .menu__sticky .menu__group-item a');

    el.addEventListener('click', function () {
      menuTogglerDesktop.classList.toggle('visible-menu-desktop');
    });

    menuToggler.addEventListener('click', e => {
      if (e.target.matches('.menuToggle input') || e.target.matches('.menuToggle-icon-close svg') || e.target.matches('.menuToggle-overlay')) {
        menuToggler.classList.toggle('menuToggle--open');
      }
    });

    menuListElement_.forEach(li => {
      li.addEventListener('click', e => {
        const subMenu = li.querySelector('.menuToggle__group-sub-items');

        if (e.target.matches('.menuToggle__group-sub-first-item .fas') || e.target.matches('.menuToggle__group-sub-items-text')) {
          e.preventDefault();

          if (subMenu) {
            if (subMenu.style.maxHeight) {
              li.classList.remove('mobile-menu__menu-list--active');
              subMenu.classList.remove('menuToggle__group-sub-items--active');
              subMenu.style.maxHeight = null;
            } else {
              subMenu.classList.add('menuToggle__group-sub-items--active');
              li.classList.add('mobile-menu__menu-list--active');
              subMenu.style.maxHeight = '100vh';
            }
          }
        } else {
          this.unbind(e);
        }
      });
    });

    this.handleOpenGesture();
    this.handleCloseGesture();

    $('.header .menu .menu__group').clone().appendTo('.mobile-menu__menu');

    // submenu mobile
    const query = window.matchMedia('(max-width: 991px)');
    if (query.matches) {
      const submenu = document.querySelectorAll('.menu__group-item.haschild > span');
      submenu.forEach(element => {
        element.addEventListener('click', e => {
          e.preventDefault();
          element.nextElementSibling.classList.toggle('menu__group-sub--open');
        });
      });
    }
  }

  handleOpenGesture() {
    const checkbox = document.querySelector('.header .menuToggle > input');
    const mainElement = document.querySelector('main');
    const hammer = new Hammer(mainElement, {});

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

    const checkIfFilterIsOpen = () => {
      const filter = document.querySelector('.js-filter');

      if (filter)
        return filter.classList.contains('filter__show') ? true : false;
    };

    hammer.on('swiperight', function (ev) {
      let isSlide = false;
      let isFilterOpen = false;

      let nodes = [];
      let element = ev.target;
      nodes.push(element);

      while (element.parentNode) {
        nodes.unshift(element.parentNode);
        element = element.parentNode;
        let slide = checkIfItsSlide(element.parentNode);
        let filter = checkIfFilterIsOpen();

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

  handleCloseGesture() {
    const checkbox = document.querySelector('.header .menuToggle > input');
    const menuBody = document.querySelector('.header .menuToggle__menu');
    const hammer = new Hammer(menuBody, {});

    hammer.on('swipeleft', function (ev) {
      checkbox.click();
      checkbox.checked = false;
    });
  }



  handleSkuModal() {
    const products = document.querySelectorAll('.productCard');
    if (products.length) {
      products.forEach(product => {
        this.shelfSku.skuSelectorOnShelf(product);
      });
    }
  }

  eventHandlerBinds() {
    document.addEventListener('DOMContentLoaded', () => {
      this.carrousel_.load();
      this.miniCart_.load();
      this.autocomplete_.load();

      this.scrollHeader();
      this.handleHeaderMenu();

      this.inputSearchMenu();

      this.handleSkuModal();
      this.shelfSku._categoryQuickBuy();

      this.footer.handleDropdown();
      this.storeBennefitsCarousel();
      this.handleSlickTopbar()

      this.wishList_.load();
    });
  }
}

new AppController();