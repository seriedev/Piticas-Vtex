export default class RenderFilterType {
  constructor(getFilterListElement) {
    this.getFilterListElement = getFilterListElement();
  }
  /**
   * @param {*} brands
   */

  renderBrandList(brands) {
    this.getFilterListElement.insertAdjacentHTML(
      'afterbegin',
      `
        <li class="filter__item">
          <span class="filter__name">
            Marcas
            <span class="filter__name--active"><i class="fas fa-chevron-down"></i></span>
          </span>
          <div class="filter__popover">
            <ul class="filter__types js-filter-popover" data-specification-group="marcas">
              ${this.renderBrandItem(brands)}
            </ul>
          </div>
        </li>
      `
    );
  }

  /**
   * @param {*} brands
   */

  renderBrandItem(brands) {
    let brandItem = '';

    brands.forEach(({ Name, Value, Quantity }) => {
      brandItem += `
          <li class="filter__type">
            <label class="filter__label js-filter-label">
              <input type="checkbox" class="filter__input js-filter-input" name="${Name}" data-category-name="/${Value}" value=",b">
              ${Name} <span>(${Quantity})</span>
            </label>
          </li>
        `;
    });

    return brandItem;
  }

  /**
   * @param {*} categories
   */

   renderCategoryList(categories) {
    this.getFilterListElement.insertAdjacentHTML(
      'afterbegin',
      `
        <li class="filter__item">
          <span class="filter__name">
            Categorias
            <span class="filter__name--active"><i class="fas fa-chevron-down"></i></span>
          </span>
          <div class="filter__popover">
            <ul class="filter__types js-filter-popover" data-specification-group="categories">
              ${this.renderCategoryItem(categories)}
            </ul>
          </div>
        </li>
      `
    );
  }

  /**
   * @param {*} categories
   */

   renderCategoryItem(categories) {
    let categoryItem = '';

    categories.forEach(({ Name, Value, link, Quantity }) => {
      categoryItem += `
          <li class="filter__type">
            <label class="filter__label js-filter-label">              
              <input type="checkbox" class="filter__input js-filter-input" name="${Name}" data-category-name="/${Value}" value=",c">
              ${Name} <span>(${Quantity})</span>
            </label>
          </li>
        `;
    });

    return categoryItem;
  }

  /**
   * @param {*} priceRanges
   */

 renderPriceRanges(item) {
   console.log('item', item)
  this.getFilterListElement.insertAdjacentHTML(
    'afterbegin',
    `
      <li class="filter__item filter__item--${item.Slug}">
        <span class="filter__name">
        Preços
          <span class="filter__name--active"><i class="fas fa-chevron-down"></i></span>
        </span>
        <div class="filter__popover">
          <ul class="filter__types js-filter-popover" data-specification-group="prices">
            ${this.renderPriceItem(item)}
          </ul>
        </div>
      </li>
    `
  ); 
  
  this.toggleFilterList();
}

/**
 * @param {*} priceRanges
 */

 renderPriceItem(priceRangesValues) {
  let priceItem = '';  

  priceRangesValues.forEach(({ Name, Slug }, index) => {
    let slugPrice = Slug.split("-");
    let valuePriceIntOne = parseInt(slugPrice[1]);
    let valuePriceIntTwo = parseInt(slugPrice[3]);
    
    priceItem += `
        <li class="filter__type--price">
          <label class="filter__label--price js-filter-label">         
            <div class="filter__type--price-input">
              <div class="slider-track"></div>
              <input type="range" min="${slugPrice[1]}" max="${slugPrice[3]}" value="${valuePriceIntOne}" id="ageInputIdPriceOne" name="ageInputPriceOne" oninput="ageOutputIdPriceOne.value = ageInputIdPriceOne.value" data-filter-index=${index} data-category-name="/${Name}" class="js-filter-input-price filter-input-price-one">
              <input type="range" min="${slugPrice[1]}" max="${slugPrice[3]}" value="${valuePriceIntTwo}" id="ageInputIdPriceTwo" name="ageInputPriceTwo" oninput="ageOutputIdPriceTwo.value = ageInputIdPriceTwo.value" data-filter-index=${index} data-category-name="/${Name}" class="js-filter-input-price filter-input-price-two">
            </div>
            <div class="filter__type--price-result">
            <span>
              R$ <output name="ageOutputPriceOne" id="ageOutputIdPriceOne">${valuePriceIntOne}</output>
            </span>
            <span>
              R$ <output name="ageOutputPriceTwo" id="ageOutputIdPriceTwo">${valuePriceIntTwo}</output>
            </span>          
            </div>
          </label>          
        </li>
      `;
  });

  return priceItem;
  
}

  renderSpecification(item) {
    this.getFilterListElement.insertAdjacentHTML(
      'afterbegin',
      `
      <li class="filter__item filter__item--${item[0]}">
        <span class="filter__name">
          ${item[0]}
          
          <span class="filter__name--active"><i class="fas fa-chevron-down"></i></span>
        </span>
        <div class="filter__popover">
          <ul class="filter__types js-filter-popover" data-specification-group="">
            ${this.renderSpecificationItem(item[1])}
            
          </ul>
        </div>
      </li>
    `
    );

    this.toggleFilterList();
  }

  

  renderSpecificationItem(specificationValues) {
    let specificationItems = '';
    console.log(specificationValues)
    const dimensionsModel = ['UNI', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '21 AO 26', '22', '24', '26', '28', '30', '32', '33 AO 38', '34', '36', '38', '38 AO 44', '40', '42', '44', '46', '48', '50', 'BLPP', 'BLP', 'BLG', 'BLGG', 'PP', 'P', 'P/M', 'M', 'G', 'G/GG', 'GG', 'XP', 'XG', 'XGG']
    const availablesSpecification = [];
    dimensionsModel.forEach((dimension) => {
      
      for (let index = 0; index < specificationValues.length; index++) {

        if(dimension === specificationValues[index].Name) {
          availablesSpecification.push(specificationValues[index])
          // console.log('Contém', specificationValues[index].Name)
  
        } else {
          null
        }
      }
    })

    availablesSpecification.forEach(({ Name, Map, Value }, index) => {
      //console.log('Name', specificationsName)

      specificationItems += `
          <li class="filter__type">
            <label class="filter__label js-filter-label">
              <input type="checkbox" data-filter-index=${index} class="filter__input js-filter-input" name="${Name}" data-category-name='/${Value}' value=",${Map}">
              ${Name}
            </label>
          </li>
        `;
    });

    return specificationItems;
  }

  toggleFilterList() {
   // toggle filterlist
   let filterTitle = document.querySelectorAll('.filter__especification .filter__name');
   filterTitle.forEach(element => {
     element.addEventListener('click', e => {
       e.preventDefault();

       element.classList.toggle('active');
       element.parentNode.classList.toggle('active');

       if (element.classList.contains('active')) {
         element.querySelector('span').innerHTML = '<i class="fas fa-chevron-right"></i>';
       } else {
         element.querySelector('span').innerHTML = '<i class="fas fa-chevron-down"></i>';
       }
     });
   })
 }

}
