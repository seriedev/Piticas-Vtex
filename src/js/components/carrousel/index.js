import FrnComponent from '../frn.component';

class CarrouselComponent extends FrnComponent {
  constructor() {
    super();
    //call all the services
    this.tagCarrousel = 'js-slick';
  }

  //Methods
  handleCarrousel() {
    const container = $(`.${this.tagCarrousel}`);
    container.slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
    });
  }

  // Loader, always call this mathod in AppController
  load() {
    this.handleCarrousel();
  }
}

export default CarrouselComponent;
