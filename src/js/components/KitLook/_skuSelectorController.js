import Swal from 'sweetalert2';

import getCatalogService from 'Services/catalogService';

class SkuSelectorController {
  constructor() {
    this._getCatalag = new getCatalogService();

    this.skuFinal = '';
    this.skuIDFinal = '';
    this.mainVariation = [];
    this.variationTypes = [];
    this.productInformation = [];
    this.totalSkusAvailable = new Set();

    this.skuSelected = [];
    this.inPageSKUS = [];
    this.skuClicked = new Set();
  }

  async _pipeData(productId, index) {
    let params = {
      type: this._getCatalag.VTEX_ENDPOINTS.VARIATIONS,
      id: productId,
    };

    const result = await this._getCatalag.getCatalog(params);
    this._variationType(result, index);
  }

  _variationType(result, index) {
    const { dimensionsMap, skus } = result;
    const types = Object.keys(dimensionsMap);

    const skuSelectorElementContainer = document.querySelectorAll(
      '.productCard__skuSelector'
    )[index];

    let obj = {};
    let variations = [];
    let mainVariation = [];

    types.forEach((type, typeIndex) => {
      if (typeIndex == 0) {
        mainVariation.push(type);
      }
      variations.push(type);
      const formatedToObj = { [type]: '' };
      const returnedTarget = Object.assign(obj, formatedToObj);
    });

    this.skuSelected.push(obj);
    this.variationTypes.push([variations]);
    this.mainVariation.push([mainVariation]);

    types.map(type => {
      const { dimensionsMap, skus } = result;
      const types = Object.keys(dimensionsMap);

      const skuSelectorElementContainer = document.querySelectorAll(
        '.productCard__skuSelector'
      )[index];

      let productIndex =
        skuSelectorElementContainer.parentElement.dataset.index;

      // Set the property className in this querySelector

      const variationsOptions = this.getVariationOptions(skus, type);

      variationsOptions.forEach((option, index) => {
        this.renderVariationsType(
          option,
          index,
          skuSelectorElementContainer,
          type
        );
      });
    });

    this.handleOptionsSelected(
      skus,
      true,
      false,
      index,
      skuSelectorElementContainer
    );
    this.filterByOptionSelected();
    this.totalSkusAvailable.add(skus);
  }

  getVariationOptions(skus, type) {
    const options = [];

    skus.forEach(sku => {
      if (!options.includes(sku.dimensions[`${type}`]) && sku.available == true)
        options.push(sku.dimensions[`${type}`]);
    });

    return options;
  }

  renderVariationsType(option, index, classContainer, type) {
    const optionName = option.toLowerCase();
    const buttonSelectorElement = document.createElement('label');

    buttonSelectorElement.textContent = option;
    buttonSelectorElement.setAttribute('data-sku-camp', type);
    buttonSelectorElement.setAttribute('data-sku-value', option);

    buttonSelectorElement.classList.add(
      'variation__option',
      `variation__option--${optionName}`
    );

    if (index == 0) {
      const productIndex = classContainer.parentElement.dataset.index;
      buttonSelectorElement.classList.add('option-selected');

      this.skuSelected[productIndex][type] = option;
    }

    classContainer.appendChild(buttonSelectorElement);
    this.inPageSKUS = document.querySelectorAll('.variation__option');
  }

  filterByOptionSelected() {
    const skuSelectorElementContainers = document.querySelectorAll(
      '.productCard__skuSelector'
    );

    [...skuSelectorElementContainers].map(skuSelectorElementContainer => {
      const variationOptions = skuSelectorElementContainer.querySelectorAll(
        '.variation__option'
      );

      variationOptions.forEach((option, index) => {
        const skuCamp = option.dataset.skuCamp;
        const skuValue = option.dataset.skuValue;

        option.addEventListener('click', e => {
          const productIndex =
            e.target.parentElement.parentElement.dataset.index;

          this.skuSelected[productIndex][skuCamp] = skuValue;

          const hasSelectedOptionSKUS = this._verifySkus(
            skuValue,
            skuCamp,
            e.target.parentElement.parentElement.dataset.index
          );

          this.handleOptionsSelected(hasSelectedOptionSKUS, false, e);
        });
      });
    });
  }

  _verifySkus(value, type, target) {
    const skus = [...this.totalSkusAvailable].map((item, index) => {
      return item;
    });

    const skuAvailable = skus[target].filter(sku => {
      return sku.dimensions[type] == value;
    });

    return skuAvailable;
  }

  handleOptionsSelected(
    skus,
    isItFirstRender,
    event = false,
    index,
    element = false
  ) {
    let productIndex =
      typeof index == 'number'
        ? index
        : event.target.parentElement.parentElement.dataset.index;

    if (event) {
      const selectedItems = document.querySelectorAll('.option-selected');
      selectedItems.forEach(option => {
        if (option.parentElement.parentElement.dataset.index == productIndex) {
          if (
            event.target.attributes['data-sku-camp'].value ==
            this.mainVariation[productIndex][0]
          ) {
            option.classList.remove('option-selected');
          }
          if (
            option.attributes['data-sku-camp'].value ==
            event.target.attributes['data-sku-camp'].value
          ) {
            option.classList.remove('option-selected');
          }
          if (
            event.target.attributes['data-sku-camp'].value ==
            this.mainVariation[productIndex][0]
          ) {
            const otherVariations = this.variationTypes[productIndex][0].filter(
              type => {
                return type != this.mainVariation[productIndex][0];
              }
            );

            otherVariations.forEach(variation => {
              this.skuSelected[productIndex][variation] = '';
            });
          }
        }
      });
    }

    const selectedOptionsObject = this.skuSelected[productIndex];
    const filteredSKUS = skus.filter(sku => {
      return (
        JSON.stringify(sku.dimensions) === JSON.stringify(selectedOptionsObject)
      );
    });

    const parentElement = element
      ? element.parentElement
      : event.target.parentElement.parentElement;

    if (filteredSKUS.length != 0) {
      //caso o numero de skus validos encontrados seja diferente de zero
      const skuId = filteredSKUS[0].sku;
      const sku = filteredSKUS[0];

      parentElement.dataset.skuSelectedId = skuId;

      this.skuFinal = sku;
      this.skuIDFinal = skuId;
    } else {
      console.log(
        'Invalid combination, filteredSKUS Function did not return anything'
      );

      parentElement.dataset.skuSelectedId = '';
      this.skuFinal = '';
      this.skuIDFinal = '';
    }

    this.combinationResultSKU = filteredSKUS;

    //verify if all options are selected and only then show AVISEME
    let isAllOptionsSelected = Object.keys(
      this.skuSelected[productIndex]
    ).every(k => this.skuSelected[productIndex][k]);

    if (filteredSKUS.length == 0 && isAllOptionsSelected) {
      Swal.fire({
        title: 'Combinação invalida',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
      });
    }

    isItFirstRender == true
      ? null
      : event.target.classList.add('option-selected');
  }
}

export default SkuSelectorController;
