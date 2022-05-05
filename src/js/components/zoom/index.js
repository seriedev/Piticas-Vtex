import Hammer from 'hammerjs';
import Swal from 'sweetalert2';

import FrnComponent from '../frn.component';

class Zoom extends FrnComponent {
  constructor() {
    super();

    this.zoomImg = 'js-image-zoom';
    this.modalZoom = 'js-modal-zoom';
    this.modalImg = 'js-modal-zoom__img';
    this.modalImgZoom = 'js-modal-zoom--on';

    this.zoomWidth = ``;
    this.zoomHeight = ``;
  }

  handleImageSelector() {
    const image = document.querySelector(`.${this.zoomImg}`);
    image.addEventListener('click', e => {
      this.handleOpenModal(e);
    });
  }

  handleOpenModal(e) {
    const imgs = document.querySelectorAll(`.js-image-thumbs li img`);
    const Zoomwidth = this.zoomWidth;
    const Zoomheigth = this.zoomHeight;
    let initialSlide = this.handleImageSelected(e);

    const zoomImgs = () => {
      const listItems = Array.from(imgs).map(img => {
        const width = img.getAttribute('width');
        const height = img.getAttribute('height');

        const src = img
          .getAttribute('src')
          .replace(
            `-${width}-${height}`,
            `-${this.zoomWidth}-${this.zoomHeight}`
          );

        return `<li class="zoom__carousel-item">
                    <span class="zoom__img js-modal-zoom__img" style="background-image :url(${src})" />
                </li>`;
      });

      return `<ul class="zoom__carousel">
                    ${listItems.join('')}
              </ul>`;
    };

    Swal.fire({
      html: `${zoomImgs()}`,
      showConfirmButton: false,
      customClass: {
        container: 'zoom',
      },
    });

    this.handleImageZoom();

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

    $('.zoom__carousel').slick({
      initialSlide: parseInt(initialSlide),
      dots: true,
      prevArrow,
      nextArrow,
      swipeToSlide: false,
      swipe: false,
      infinite: false,
    });
  }

  handleImageSelected(e) {
    const thumbs = document.querySelectorAll('.productPage__image-item');
    let indexToReturn;

    thumbs.forEach(thumb => {
      
      const thisThumbSrcSplitArray = thumb.children[0].src.split('/');
      const comparisonSrc =
      thisThumbSrcSplitArray[thisThumbSrcSplitArray.length - 1];


      const eventSplitArray = e.target.src.split('/');
      const eventComparisonSrc = eventSplitArray[eventSplitArray.length - 1];

      comparisonSrc == eventComparisonSrc
      ? (indexToReturn = thumb.dataset.productImageIndex)
      : null;
        
    });

    return indexToReturn;
  }

  handleImageZoom() {
    const zoomImgs = document.querySelectorAll('.js-modal-zoom__img');

    zoomImgs.forEach(zoomImg => {
      zoomImg.addEventListener('click', () => {
        Swal.close();
      });

      zoomImg.addEventListener(
        'mouseenter',
        function() {
          this.style.backgroundSize = '150%';
        },
        false
      );

      zoomImg.addEventListener(
        'mousemove',
        function(e) {
          let dimentions = this.getBoundingClientRect();

          let x = e.clientX - dimentions.left;
          let y = e.clientY - dimentions.top;

          let xpercent = Math.round(100 / (dimentions.width / x));
          let ypercent = Math.round(100 / (dimentions.height / y));

          zoomImg.style.backgroundPosition = xpercent + '% ' + ypercent + '%';
        },
        false
      );

      zoomImg.addEventListener(
        'mouseleave',
        function() {
          zoomImg.style.backgroundSize = 'cover';
          zoomImg.style.backgroundPosition = 'center';
        },
        false
      );

      this.handleGestures();
    });
  }

  handleZoomPan(img) {
    img.addEventListener('mousemove', e => {
      const dimentions = img.getBoundingClientRect();
      let x = e.clientX - dimentions.left;
      let y = e.clientY - dimentions.top;
      let xpercent = Math.round(100 / (dimentions.width / x));
      let ypercent = Math.round(100 / (dimentions.height / y));

      img.style.transformOrigin = `${xpercent}% ${ypercent}%`;
    });
  }

  handleGestures() {
    const elm = document.querySelector('.swal2-content');
    const hammertime = new Hammer(elm, {});
    hammertime.get('pinch').set({
      enable: true,
    });

    let posX = 0,
      posY = 0,
      scale = 1,
      last_scale = 1,
      last_posX = 0,
      last_posY = 0,
      max_pos_x = 0,
      max_pos_y = 0,
      transform = '',
      el = elm;

    hammertime.on('doubletap pan pinch panend pinchend', function(ev) {
      if (ev.type == 'doubletap') {
        transform = 'translate3d(0, 0, 0) ' + 'scale3d(2, 2, 1) ';
        scale = 2;
        last_scale = 2;
        try {
          if (
            window
              .getComputedStyle(el, null)
              .getPropertyValue('-webkit-transform')
              .toString() != 'matrix(1, 0, 0, 1, 0, 0)'
          ) {
            transform = 'translate3d(0, 0, 0) ' + 'scale3d(1, 1, 1) ';
            scale = 1;
            last_scale = 1;
          }
        } catch (err) {
          console.log(err);
        }
        el.style.webkitTransform = transform;
        transform = '';
      }

      if (scale != 1) {
        posX = last_posX + ev.deltaX;
        posY = last_posY + ev.deltaY;
        max_pos_x = Math.ceil(((scale - 1) * el.clientWidth) / 2);
        max_pos_y = Math.ceil(((scale - 1) * el.clientHeight) / 2);
        if (posX > max_pos_x) {
          posX = max_pos_x;
        }
        if (posX < -max_pos_x) {
          posX = -max_pos_x;
        }
        if (posY > max_pos_y) {
          posY = max_pos_y;
        }
        if (posY < -max_pos_y) {
          posY = -max_pos_y;
        }
      }

      //pinch
      if (ev.type == 'pinch') {
        scale = Math.max(0.999, Math.min(last_scale * ev.scale, 4));
      }
      if (ev.type == 'pinchend') {
        last_scale = scale;
      }

      //panend
      if (ev.type == 'panend') {
        last_posX = posX < max_pos_x ? posX : max_pos_x;
        last_posY = posY < max_pos_y ? posY : max_pos_y;
      }

      if (scale != 1) {
        transform =
          'translate3d(' +
          posX +
          'px,' +
          posY +
          'px, 0) ' +
          'scale3d(' +
          scale +
          ', ' +
          scale +
          ', 1)';
      }

      if (transform) {
        el.style.webkitTransform = transform;
      }
    });
  }

  load(zoomWidth, zoomHeight) {
    this.zoomWidth = zoomWidth;
    this.zoomHeight = zoomHeight;

    this.handleImageSelector();
  }
}

export default Zoom;
