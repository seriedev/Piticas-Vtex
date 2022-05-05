import Helpers from '../helpers/index';
/**
 * Base Component class
 */
class FrnComponent {
  /**
   * Base Component constructor
   * @param {Object} props Component's properties.
   */
  constructor() {
    this.helper_ = new Helpers();
  }

  /**
   * Component rendering
   * @param {String} _contentContainerSelector - Content's Conatainer selector.
   * @param {String} _htmlToRender - HTML to be render.
   */
  render(_contentContainerSelector, _htmlToRender) {
    const element = document.querySelector(String(_contentContainerSelector));

    if (element) {
      element.innerHTML = String(_htmlToRender);
    } else {
      console.info(`Element '${_contentContainerSelector}' not found on page!`);
    }
  }

  /**
   * Get element by selector
   * @param {*} elementSelector
   */
  getElement(elementSelector = '') {
    return document.querySelector(String(elementSelector));
  }

  /**
   * Get elements by selectors
   * @param {*} elementSelector
   */
  getElements(elementSelectors = []) {
    let elements = [];
    [...elementSelectors].forEach(selector => {
      const elementFound = document.querySelector(String(selector));

      if (elementFound) {
        elements.push(elementFound);
      }
    });

    return elements;
  }

  /**
   * Get all elements by selector
   * @param {*} elementSelector
   */
  getAllElements(elementSelector = '') {
    return document.querySelectorAll(String(elementSelector));
  }
}

export default FrnComponent;
