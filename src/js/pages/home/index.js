import yall from 'yall-js';

import Helpers from 'Helpers/index';
import Config from './home.config';
class Home {
  constructor() {
    this.helpers = new Helpers();

    this.pitNews();

    this.prevArrow = `<button class="slick-arrow-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
        <path d="M20.2 9.804c-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414zM17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm0 28C9.832 30 4 24.168 4 17S9.832 4 17 4s13 5.832 13 13-5.832 13-13 13z"/>
    </svg>
    </button>`;

    this.nextArrow = `<button class="slick-arrow-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
        <path d="M21.7 16.29l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71zM17.072 2.144c-8.244 0-14.928 6.684-14.928 14.928S8.828 32 17.072 32 32 25.316 32 17.072 25.316 2.144 17.072 2.144zm0 27.856C9.944 30 4.144 24.2 4.144 17.072s5.8-12.928 12.928-12.928S30 9.944 30 17.072 24.2 30 17.072 30z"/>
    </svg>
      </button>`;    

    this.componentBuilder();
  }

  _initSlick() {
    Config.handleShelfSlide(this.prevArrow, this.nextArrow);
    Config.handleSlickDesktop(this.prevArrow, this.nextArrow);
  }

  handleSkuModal() {
    const products = document.querySelectorAll('.productCard');

    products.forEach(product => {
      this.skuSelectorOnShelf.skuSelectorOnShelf(product);
    });
  }

  lazyLoading() {
    yall({
      observeChanges: true,
    });
  }

  pitNews() { 
    let quantityPosts = 5;
    let postsContainer = document.querySelector(".pitnews__wrapper");
    
    const getPosts = async () => {
      const response = await fetch(`https://www.pitinews.com.br/wp-json/wp/v2/posts?_embed&per_page=${quantityPosts}`);
      const data = await response.json();

      data.map( post => {
        const innerContent =
        `
        <div class="pitnews__item">
          <a href="${post.link}" target="_blank" css="pitnews__link">
              <img src="${post._embedded['wp:featuredmedia']['0'].media_details.sizes['banner-370x370'].source_url}" class="pitnews__img" alt="" srcset="">
              <div class="pitnews__item--title">${post.title.rendered}</div>
              <div class="pitnews__item--content">
                ${post.excerpt.rendered}
              </div>
          </a>
        </div>
        `
        postsContainer.innerHTML += innerContent; 
         
      });

      if ($(window).width() < 1024) {
        const pitnewsSlide = $('.pitnews__wrapper');
        const autoplaySpeed = 4000;
        const transitionSpeed = 500;
        await pitnewsSlide.slick({
            infinite: true,
            autoplaySpeed: autoplaySpeed,
            speed: transitionSpeed,
            slidesToShow: 6,
            slidesToScroll: 6,
            swipe: true,
            dots: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                },
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                },
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
            ],
          });
      }      
    }  

    getPosts();
  }


  /**
   * ComponentBuilder, he is running all your methods.
   */
  componentBuilder() {
    document.addEventListener('DOMContentLoaded', () => {
      this._initSlick();
      this.lazyLoading();
    });
  }
}

new Home();