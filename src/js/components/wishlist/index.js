import Swal from 'sweetalert2';

import getCatalogService from 'Services/catalogService';
import getMasterDataService from 'Services/masterDataService';
import UserService from 'Services/userService';
import PlaceholderLoading from '../../components/Placeholder';
import ProductCardComponent from '../../components/ProductCard/index';
import FrnComponent from '../frn.component';
import quickBuy from '../quickBuy';

class WishListComponent extends FrnComponent {
  constructor() {
    super();
    this._vtexUser = new UserService();
    this._masterData = new getMasterDataService();
    this._vtexjsCatalogService = new getCatalogService();
    this.productCard_ = new ProductCardComponent();
    this.loading_ = new PlaceholderLoading();
    this.userService_ = new UserService();
    this.shelfSku = new quickBuy()

    this._currentUser = {};
    this._userId = '';
    this._userEmail = '';
    this._currentUserFavorites = [];
    this.wishlistName = 'wishlist';
    this.wishlistContent = '';
    this.wishlistStorage = window.localStorage.getItem('wishlist');

    this.rootElement = 'js-favorite';
    this.countSelector = '.js-favorite-count';
    this.buttonAdd = '.productCard__wishList';
    this.wishlistContainerClass = '.js-wishlist-container';

    this.buttonAddElement = () => {
      return this.getAllElements(this.buttonAdd);
    };

    this.wishlistContainerElement = () => {
      return this.getElement(this.wishlistContainerClass);
    };

    this._initStorage();
  }

  _initStorage(data = []) {
    this.wishlistStorage = JSON.parse(this.wishlistStorage);
    const value = this.wishlistStorage !== null ? this.wishlistStorage : data;

    window.localStorage.setItem(this.wishlistName, JSON.stringify(value));
    this.wishlistContent = value;
  }

  _initSetItemStorage(item) {
    let wishlist = this.wishlistStorage;
    wishlist = wishlist ? wishlist : {};

    let indexOf = -1;

    wishlist.forEach((wishlistItem, index) => {
      if (wishlistItem.productId == item.productId) {
        indexOf = index;
        wishlist.splice(index, 1);
      }
    });

    if (wishlist != {} && indexOf == -1) {
      wishlist.push(item);

      Swal.fire({ text: 'Produto adicionado aos favoritos com sucesso!' });
    } else {
      Swal.fire({ text: 'Produto removido dos favoritos com sucesso!' });
    }

    window.localStorage.setItem(this.wishlistName, JSON.stringify(wishlist));
  }

  handleRemoveCardFromList() {
    const wishList = document.querySelector('.wishlist');
    const productCards = wishList.querySelectorAll('.productCard');

    Array.from(productCards).forEach(card => {
      const btnFavorite = card.querySelector('.productCard__wishList');

      btnFavorite.addEventListener('click', () => {
        card.remove();

        const list = wishList.querySelector('.wishlist__list');
        const remainingCards = wishList.querySelectorAll('.productCard');

        if (remainingCards.length == 0) {
          this._renderWishlistNoProductsFoundWarning(list);
        }
      });
    });
  }

  handleSkuModal() {
    const products = document.querySelectorAll('.productCard');
    if (products.length) {
      products.forEach(product => {
        this.shelfSku.skuSelectorOnShelf(product);
      });
    }
  }

  _verifyProductIdInLocalStorage(productId) {
    let itemLocalStorage = this._getLocalStorageWishlist();

    const id = itemLocalStorage.map(item => {
      return item.productId;
    });

    if (!id.includes(productId.productId)) {
      return true;
    }

    return false;
  }

  handleSetNewItem() {
    if (this._currentUser.IsUserDefined) {
      this.updateLocalStorageByMasterData();
    } else {
      window.localStorage.setItem(this.wishlistName, ['[]']);
    }

    [...this.buttonAddElement()].map(buttonAdd => {
      buttonAdd.addEventListener('click', e => {
        const currentProductId = e.target.dataset.productId;

        console.log('currentProductId', currentProductId)

        const productObject = {
          productId: Number(currentProductId),
        };

        if (this._currentUser.IsUserDefined) {
          if (this._verifyProductIdInLocalStorage(productObject) === true) {
            this._initSetItemStorage(productObject);

            const arrayProductId = window.localStorage.getItem('wishlist');
            e.target.classList.add('productCard__wishList--active');

            this.handleSetMasterData(arrayProductId, this._userEmail);
          } else {
            this._initSetItemStorage(productObject);
            e.target.classList.remove('productCard__wishList--active');

            const arrayProductId = window.localStorage.getItem('wishlist');
            this.handleSetMasterData(arrayProductId, this._userEmail);
          }
        } else {
          this.userService_.authenticateModal('pt-br', true);
        }
      });
    });
  }

  async updateLocalStorageByMasterData() {
    const entityCode = (this._masterData.entityCode = 'WL');

    let params = {
      type: this._masterData.VTEX_ENDPOINTS.Search(),
      params: `_where=userEmail=${this._userEmail}&_fields=userEmail,productList`,
    };

    await this._masterData.getMasterData(params).then((result) => {
      if (result.length > 0 && result[0].productList) {
        window.localStorage.removeItem(this.wishlistName);
        const list = result[0].productList;

        window.localStorage.setItem(this.wishlistName, `${list}`);
      }
    });
  }

  async handleSetMasterData(productId, userEmail) {
    const entityCode = (this._masterData.entityCode = 'WL');

    const paramsGetMD = {
      type: this._masterData.VTEX_ENDPOINTS.Search(),
      params: `_where=userEmail=${this._userEmail}&_fields=userEmail,productList,id`,
    };

    await this._masterData.getMasterData(paramsGetMD).then((result) => {
      if (result.length > 0) {
        let params = {
          type: this._masterData.VTEX_ENDPOINTS.DocumentId(entityCode, result[0].id),
        };

        const payload = {
          id: result[0].id,
          userEmail: userEmail,
          productList: productId,
        };

        this._masterData.addMasterData(params, payload);
      } else {
        let params = {
          type: this._masterData.VTEX_ENDPOINTS.Documents(entityCode),
        };

        const payload = {
          userEmail: userEmail,
          productList: productId,
        };

        this._masterData.addMasterData(params, payload);
      }
    });

  }

  async _init() {
    let params = {
      type: this._vtexUser.VTEX_ENDPOINTS.USER_INFO,
    };

    this._currentUser = await this._vtexUser.getUserInformation(params);

    this._userEmail = this._currentUser.Email

    this.render(this._currentUser);
  }

  handleGetLocalStorageWishList() {
    let itemLocalStorage = window.localStorage.getItem('wishlist');
    itemLocalStorage = JSON.parse(itemLocalStorage);

    this.renderActiveFavorite(itemLocalStorage);
  }

  renderActiveFavorite(data) {
    data.forEach(({ productId }) => {
      const item = document.querySelectorAll(
        `.productCard[data-product-id="${productId}"]`
      );

      [...item].forEach(product => {
        const wishlist = product.querySelector(`.productCard__wishList`);
        if (!wishlist.classList.contains(`productCard__wishList--active`)) {
          wishlist.classList.add(`productCard__wishList--active`);
        }
      });
    });
  }

  _renderWishlistNoProductsFoundWarning(element) {
    element.insertAdjacentHTML(
      'beforeend',
      '<h2 class="js-wishlist-noProductsFound wishlist__warning wishlist__warning--no-favorites">Você não possui produtos favoritos :(</h2>'
    );
  }

  _getLocalStorageWishlist() {
    let data = window.localStorage.getItem('wishlist');
    data = JSON.parse(data);

    return data;
  }

  async renderFavoritesList() {
    const data = this._getLocalStorageWishlist();

    const listELement = document.querySelector('.wishlist__list');

    //check if there is no favorites
    if (data.length == 0) {
      this._renderWishlistNoProductsFoundWarning(listELement);
    }

    if (listELement) {
      //init loader
      this.loading_.loaderController(true, listELement, 'spinner');

      const loop = data.map(async ({ productId }) => {
        if (!productId) return;

        let params = {
          type: this._vtexjsCatalogService.VTEX_ENDPOINTS.SEARCH_IMAGE_SKU_ID,
          id: productId,
        };

        let sizes = {
          width: 192,
          height: 192,
        };

        const response = await this._vtexjsCatalogService.getCatalog(params);

        listELement.insertAdjacentHTML(
          'beforeend',
          `${this.productCard_.renderCard(response[0], false, sizes)}`
        );
      });

      await Promise.all(loop);

      //remove loader
      this.loading_.loaderController(false, listELement, 'spinner');

      this.handleRemoveCardFromList();
      this._init();
    }
  }

  render(Auth) {
    this.handleSetNewItem(Auth);
    this.handleGetLocalStorageWishList();
    this.handleSkuModal()
  }

  checkIfItsWishlistPage() {
    const isThisWishListPage = document.querySelector('.wishlist-page');

    return isThisWishListPage ? true : false;
  }

  load() {
    const isWishlistPage = this.checkIfItsWishlistPage();

    if (isWishlistPage) {
      this.renderFavoritesList();
    } else {
      this._init();
    }
  }
}

export default WishListComponent;
