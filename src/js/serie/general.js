openMenuMob = () => {
  $('.header-mobile .menu__sticky').on('click', function(){
    $('.menu-mobile').css('left','0');
    $('.menuToggle-title,.menuToggle__menu').css('left','0');
    $('.menuToggle-icon-close').css('left','283px');
    $('.menuToggle').addClass('menuToggle--open');
    $('.menuToggle-overlay').show();
  })

  $('.menuToggle-icon-close,.menuToggle-overlay').on('click', function(){
    $('.menuToggle-title,.menuToggle-icon-close,.menuToggle__menu').css('left','-283px');
    $('.menuToggle-overlay').hide();
    $('.menu-mobile').css('left','-283px');
  })
}

openPesquisa = () => {
  $('.open-pesquisa > svg').on('click', function(){
    $('.header-mobile .header__wrapper:nth-of-type(2)').slideDown();
    $('.close-pesquisa').show();
    $(this).hide();
  })

  $('.close-pesquisa').on('click', function(){
    $('.header-mobile .header__wrapper:nth-of-type(2)').slideUp();
    $('.close-pesquisa').hide();
    $('.open-pesquisa > svg').show();
  })
}


$(document).ready(function(){
  openMenuMob();
  openPesquisa();
})