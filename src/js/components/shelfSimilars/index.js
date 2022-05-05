import getCatalogService from '../../services/catalogService';
import Helpers from 'Helpers//index';

class ShelfSizes {
  constructor(product, classELement) {
    this._vtexjsCatalog = new getCatalogService();

    this._containerToRender = classELement;
    this._productCard = product;
    this._sizesContainer = product.querySelector(`.${this._containerToRender}`);
    this._productInfo = '';
    this._sizes = '';

    this.helpers = new Helpers();

    this.dimensions = '';
  }

  slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    let from =
      'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
    let to =
      'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str
      .replace(/[^a-z0-9 -]/g, '')
      // Collapse whitespace and replace by -
      .replace(/\s+/g, '-')
      // Collapse dashes
      .replace(/-+/g, '-');

    return str;
  }

  async fetchSizesFromApi() {
    const id = this._productCard.dataset.productId;

    let params = {
      type: this._vtexjsCatalog.VTEX_ENDPOINTS.VARIATIONS,
      id: id,
    };

    const response = await this._vtexjsCatalog.getCatalog(params);

    this._data = await response;

    this._productInfo = response.dimensions.includes('Cor') ? response : null;

    this.dimensions = response.dimensionsMap.Cor;
  }

  getSizesFromJSON() {
    const sizes = [];

    if (this._productInfo) {
      this._productInfo.skus.map(sku => {
        sizes.push(sku.dimensions.Cor);
      });
    }

    this._sizes = sizes;

    const newSizes = this.dimensions.filter(item => sizes.includes(item));
    this._sizes = newSizes;
  }

  renderSizesOnProductCard() {
    const container = this._sizesContainer;
    const sizes = this._sizes;

    container &&
      sizes.map(size => {
        const productInfo = this._productInfo;

        const skuToGetThumbOf = productInfo.skus.filter(
          sku => sku.dimensions.Cor == size
        );

        let image = skuToGetThumbOf[0].image;

        container.insertAdjacentHTML(
          'beforeend',
          `<li>
            ${
              size == 'Unica'
                ? ''
                : `

            <img data-size-element="${size}" data-image="${image}" src="/arquivos/color-icon-${this.slugify(
                    size
                  )}.jpg"/>`
            }


         </li>
          `
        );
      });
  }

  handleHoverImgChanges() {
    const imgs = this._productCard.querySelectorAll(
      '.productCard__sizes ul li img'
    );
    const productInfo = this._productInfo;

    [...imgs].forEach(img => {
      img.addEventListener('mouseover', e => {
        console.log('object');
        const thumb = this._productCard.querySelector(
          '.productCard__image img'
        );

        const hoveredSizeValue = e.target.dataset.sizeElement;

        if ((hoveredSizeValue, productInfo)) {
          const skuToGetThumbOf = productInfo.skus.filter(
            sku => sku.dimensions.Cor == hoveredSizeValue
          );

          const newThumbSrc = skuToGetThumbOf[0]
            ? skuToGetThumbOf[0].image
            : thumb.src;

          let image = newThumbSrc;
          image = image.replace('-292-292', '-281-380');

          thumb.setAttribute('src', image);
        }
      });
    });
  }

  async init() {
    await this.fetchSizesFromApi();
    this.getSizesFromJSON();
    this.renderSizesOnProductCard();
    this.handleHoverImgChanges();
  }
}

export default ShelfSizes;
