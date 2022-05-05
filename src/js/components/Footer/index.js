export default class Footer {
  handleDropdown() {
    const initiateDropdown = query => {
      if (query.matches) {
        this.dropdown();
      } else {
        return;
      }
    };

    const query = window.matchMedia('(max-width: 991px)');

    setTimeout(() => {
      initiateDropdown(query);
      query.addListener(initiateDropdown);
    }, 2000);
  }

  dropdown() {
    const dropdownToggle = document.querySelectorAll('.accordion-toggle');

    dropdownToggle.forEach(toggle => {
      const panel = toggle.nextElementSibling;
      toggle.addEventListener('click', e => {
        e.target.classList.toggle('open-accordion');
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }
}
