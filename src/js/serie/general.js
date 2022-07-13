function openMenuMob(){
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

function openPesquisa() {
  $('.open-pesquisa > svg').on('click', function(){
    $('.header-mobile .header__wrapper:nth-of-type(2)').show();
    $('.close-pesquisa').show();
    $(this).hide();
  })

  $('.close-pesquisa').on('click', function(){
    $('.header-mobile .header__wrapper:nth-of-type(2)').hide();
    $('.close-pesquisa').hide();
    $('.open-pesquisa > svg').show();
  })

  $(document).on('scroll', function(){
    if( !$('body').hasClass('floating-header') ){
      $('.header-mobile .header__wrapper:nth-of-type(2)').show();
    }
  })
}

function openMenuTopoFixoDesk() {
  let tela = window.innerWidth;

  if(tela > 1024){
    $('.menu__sticky .menu__group-link').on('click', function(e){
      e.preventDefault();
  
      $(this).find('.fecha-menu').parent().toggleClass('menu-aberto');
      $(this).find('.fecha-menu').toggle();
      $(this).find('svg:nth-of-type(1)').toggle();
    });
  }
}


$(document).ready(function(){
  openMenuMob();
  openPesquisa();
  openMenuTopoFixoDesk();
})