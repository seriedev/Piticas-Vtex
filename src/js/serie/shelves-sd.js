window.onload = ()=>{
  var it = setInterval(()=>{
    if( typeof TrustvoxCertificateWidget !== 'undefined' && TrustvoxRatesWidget !== 'undefined' ){
      clearInterval(it);
      setTimeout(function(){
        var prodCard = document.querySelectorAll('article.productCard')
        prodCard.forEach(function(el){
          var idProd = el.dataset.productId;
          el.querySelector('.productCard__price').insertAdjacentHTML('beforebegin', `<div class="trustvox-showcase" style="text-align: center"><divs data-trustvox-product-code="${idProd}"></div></div>`);
        });
      },500)
    }
  },1000);
};
