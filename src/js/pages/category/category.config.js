const brandsList = (prevArrow, nextArrow) => {
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
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    swipe: true,
    dots: false,

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
};

export default { brandsList };
