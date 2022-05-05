const handleSlickDesktop = (prevArrow, nextArrow) => {
  const autoplaySpeed = 4000;
  const transitionSpeed = 500;

  $('.js-full-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: true,
  });
  $('.js-full-banner').slick('setPosition');

  $('.js-full-banner--mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: true,
  });
  $('.js-full-banner--mobile').slick('setPosition');

  if ($(window).width() < 768) {
    $('.js-benefits').slick({
      slidesToShow: 1,
      variableWidth: false,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    });
  }

  if ($(window).width() > 768) {
    const brandsList = $('.js-brand-list');

    brandsList.slick({
      infinite: true,
      autoplaySpeed: autoplaySpeed,
      speed: transitionSpeed,
      slidesToShow: 6,
      slidesToScroll: 6,
      swipe: true,
      dots: false,
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
      ],
    });
  }  

  if ($(window).width() < 1024) {
    
      const generalSlide = $('.js-general-slide');

      generalSlide.slick({
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
  
};

const handleShelfSlide = (prevArrow, nextArrow) => {
  const collections = document.querySelectorAll('.home__collections');

  collections.forEach(col => {
    col.querySelectorAll('.helperComplement').forEach(el => {
      col.querySelector('h2').classList.add('collection__title');
      el.remove();
    });
  });

  const slickConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 634,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  $('.home__collections ul').slick(slickConfig);
};

export default { handleSlickDesktop, handleShelfSlide };
