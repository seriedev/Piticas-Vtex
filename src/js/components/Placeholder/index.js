import Helpers from 'Helpers//index';

export default class PlaceHolderLoading {
  constructor() {
    this._helpers = new Helpers();
  }

  loaderController(loading, parentElement, name) {
    const uglifiedName = this._helpers._slugifyString(name);
    const template = this.handleChooseTemplate(name);
    const body = document.getElementsByTagName('body');

    if (loading == true) {
      parentElement.setAttribute(
        'style',
        'visibility: hidden; position: relative;'
      );

      parentElement.insertAdjacentHTML(
        `beforeend`,
        `${template(`${uglifiedName}__placeholder`)}`
      );

      const placeholder = document.querySelector(
        `.${uglifiedName}__placeholder`
      );

      placeholder.setAttribute(
        'style',
        'visibility:visible; position:sticky; bottom:100%; width: 100%;'
      );
    } else {
      parentElement.setAttribute(
        'style',
        'visibility: visible!important; pointer-events:auto; position:unset; top:unset; width: 100%;'
      );

      body[0].setAttribute('style', 'overflow: auto');

      if (document.querySelector(`.${uglifiedName}__placeholder`)) {
        console.log(`removing ${name} placeholder`);
        document.querySelector(`.${uglifiedName}__placeholder`).remove();
      }
    }
  }

  handleChooseTemplate(name) {
    switch (name) {
      case 'productPage':
        return this.handleLoadProductPage;
      case 'productPage__sku-selector':
        return this.handleLoadShelf;
      case 'shelf__sku-selector':
        return this.handleLoadShelf;
      case 'home':
        return this.handleLoadProductPage;
      case 'autocomplete':
        return this.handleLoadShelf;
      case 'filter':
        return this.handleLoadFilters;
      case 'video':
        return this.handleVideo;
      case 'spinner':
        return this.handleSpinningLoader;
    }
  }

  handleVideo(classe) {
    return `<div class="loader ${classe}"></div>`;
  }

  handleSpinningLoader(classe) {
    return `<div class="loader ${classe}"></div>`;
  }

  handleLoadFilters(classe) {
    return `<div class="ph-item ${classe}">
          <div class="ph-col-12">
              <div class="ph-col-6 empty"></div>
              <div class="ph-col-12"></div>
            </div>
          </div>`;
  }

  handleLoadProductPage(classe) {
    return `<div class="ph-item ${classe}">
          <div class="ph-col-4">
            <div class="ph-picture picture-product"></div>
            <div class="ph-picture picture-product"></div>
            <div class="ph-picture picture-product"></div>
          </div>
          <div>
          <div class="ph-row">
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
          </div>
        </div>
        <div class="ph-col-12 line-margin">
          <div class="ph-row">
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8"></div>
            <div class="ph-col-4 empty"></div>
            <div class="ph-col-12"></div>
          </div>
        </div>
        
        
      </div>`;
  }

  handleLoadBanner() {
    //Logica
  }

  handleLoadShelf(classe) {
    return `<div class="ph-item ${classe}">
      <div class="ph-col-12">
          <div class="ph-picture"></div>
          <div class="ph-row">
              <div class="ph-col-6 big"></div>
              <div class="ph-col-4 empty big"></div>
              <div class="ph-col-2 big"></div>
              <div class="ph-col-4"></div>
              <div class="ph-col-8 empty"></div>
              <div class="ph-col-6"></div>
              <div class="ph-col-6 empty"></div>
              <div class="ph-col-12"></div>
          </div>
      </div>
      <div class="ph-col-12">
          <div class="ph-row">
              <div class="ph-col-6 big"></div>
              <div class="ph-col-4 empty big"></div>
              <div class="ph-col-2 big"></div>
              <div class="ph-col-4"></div>
              <div class="ph-col-8 empty"></div>
              <div class="ph-col-6"></div>
              <div class="ph-col-6 empty"></div>
              <div class="ph-col-12"></div>
          </div>
      </div>
  </div>`;
  }

  _productCard() {
    return `
    <div class="col-12 col-sm-6">

      <div class="ph-item">
        <div class="ph-col-12">
          <div class="ph-picture"></div>
          <div class="ph-row">
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-12"></div>
          </div>
        </div>
        <div class="ph-col-2">
          <div class="ph-avatar"></div>
        </div>
        <div>
          <div class="ph-row">
            <div class="ph-col-12"></div>
            <div class="ph-col-2"></div>
            <div class="ph-col-10 empty"></div>
            <div class="ph-col-8 big"></div>
            <div class="ph-col-4 big empty"></div>
          </div>
        </div>
      </div>

  </div>
    `;
  }
}
