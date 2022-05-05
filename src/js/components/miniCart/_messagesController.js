import CartService from 'Services/cartService';
import Swal from 'sweetalert2';

class MessagesController extends CartService {
  constructor() {
    super();
  }

  async showMessages(datas, index, revert = true) {
    const data = datas.messages;

    data.length === 0
      ? ' '
      : this.handleShowModalToast(`${data[0].status}`, `${data[0].text}`);
    await this.clearMessages();

    if (revert) {
      this.handleRevertQuantity(datas, index);
    }
  }

  handleRevertQuantity(datas, index) {
    const data = datas.messages;
    const inputQuantityElement = document.querySelectorAll('.js-product-qty');

    data.code === null
      ? ' '
      : (inputQuantityElement[index].value = datas.items[index].quantity);
  }

  handleShowModalToast(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }
}

export default MessagesController;
