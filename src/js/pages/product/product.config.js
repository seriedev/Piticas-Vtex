const developmentProductId = () => {
  const id = 738;

  return id;
};

const handleShareLinks = () => {
  if (window.skuJson) {
    const pageUrl = window.location.href;
    const imgUrl = `/${document
      .querySelector('.productPage__image-zoom > img')
      .getAttribute('src')}`;

      const src = document.querySelector('.productPage__image-zoom > img');
      console.log(src);

      const facebookElement = document.querySelector(
        `.productPage__share-item--facebook`
        );
      const pinterestElement = document.querySelector(
        `.productPage__share-item--pinterest`
        );
      const twitterElement = document.querySelector(
        `.productPage__share-item--twitter`
        );
      const emailElement = document.querySelector(
        `.productPage__share-item--email`
        );

      if (facebookElement) {
        facebookElement.setAttribute(
          'href',
          `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
          );
      }

      if (pinterestElement) {
        pinterestElement.setAttribute(
          'href',
          `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imgUrl}&description=Veja que lindo esse(a) ${skuJson.name}`
          );
      }

      if (twitterElement) {
        twitterElement.setAttribute(
          'href',
          `https://twitter.com/intent/tweet?url=${pageUrl}`
          );
      }

      if (emailElement) {
        emailElement.setAttribute('href', `mailto:?subject=${pageUrl}`);
      }
    }
  };

  const handleShelfSlide = (prevArrow, nextArrow) => {
    const collections = document.querySelectorAll('.productPage__collections');
    collections.forEach(col => {
      col.querySelectorAll('.helperComplement').forEach(el => {
        el.remove();
      });
    });

    const slickConfig = {
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      ],
    };

    $('.productPage__collections ul').slick(slickConfig);
  };

  const zoomImagesSlider = () => {
    const prevArrow = `<button class="slick-arrow-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M12.3 17.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71z"/>
    </svg>
    </button>`;

    const nextArrow = `<button class="slick-arrow-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M13.8 24.196c.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414z"/>
    </svg>
    </button>`;
   

    $('.productPage__image-zoom').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow,
      nextArrow,
      asNavFor: '.js-image-thumbs',
    });
    if ($(window).width() < 1024) { 
      $('.productPage__image-zoom').slick('unslick');
    }
  };
  const syncSliders = (from, to) => {
    const images = document.querySelectorAll(from)
    images && images.forEach(image => {
      image.addEventListener('click', e => {
        e.preventDefault()
        const index = e.target.closest('[data-slick-index]').getAttribute('data-slick-index')
        $(to).slick('slickGoTo', index)
      })
    })
  }


  const thumbsSlider = () => {
    
    const thumbs = document.querySelectorAll('.js-image-thumbs li');
    let slidesToShow = thumbs.length <= 3 ? thumbs.length : 3;

    const prevArrow = `<button class="slick-arrow-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M12.3 17.71l6.486 6.486c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L14.418 17l5.782-5.782c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L12.3 16.29c-.196.196-.292.452-.292.71 0 .258.096.514.292.71z"/>
    </svg>
    </button>`;

    const nextArrow = `<button class="slick-arrow-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M13.8 24.196c.39.39 1.024.39 1.414 0L21.7 17.71c.196-.196.294-.454.292-.71 0-.258-.096-.514-.292-.71l-6.486-6.486c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L19.582 17 13.8 22.782c-.39.39-.39 1.024 0 1.414z"/>
    </svg>
    </button>`;

    $('.js-image-thumbs').slick({
      slidesToShow: slidesToShow,
      infinite: false,
      arrows: true,
      prevArrow,
      nextArrow,
      asNavFor: '.productPage__image-zoom',
    /*responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: slidesToShow < 2 ? thumbs.length : 2,
        },
      },
      ],*/
    });
    syncSliders('.productPage__image-item', '.productPage__image-zoom' );
    $('.slick-initialized').slick('setPosition');
  };  

  export default {
    handleShareLinks,
    handleShelfSlide,
    zoomImagesSlider,
    thumbsSlider,
    developmentProductId,
  };
