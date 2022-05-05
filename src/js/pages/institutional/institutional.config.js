const handleShelfSlide = (prevArrow, nextArrow) => {
  const collections = document.querySelectorAll('.colection');

  collections.forEach(col => {
    col.querySelectorAll('.helperComplement').forEach(el => {
      el.remove();
    });
  });

  const slickConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  $('.colection ul').slick(slickConfig);

  const autoplaySpeed = 4000;
  const transitionSpeed = 500;

  if ($(window).width() < 768) {
    $('.js-benefits').slick({
      slidesToShow: 1,
      variableWidth: false,
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    });
  }

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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  });

  if ($(window).width() < 768) {
    const mediaList = $('.institucional__media--items');

  mediaList.slick({
    infinite: true,
    autoplaySpeed: autoplaySpeed,
    speed: transitionSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
  });
  }
  
};

export default { handleShelfSlide };
