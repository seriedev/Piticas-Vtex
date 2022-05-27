window.onload = ()=>{
  var it = setInterval(()=>{
    if( typeof TrustvoxCertificateWidget !== 'undefined' && TrustvoxRatesWidget !== 'undefined' ){
      clearInterval(it);
        getTrust()
    }
  },1000);
};

function getTrust(){
  var prodCard = document.querySelectorAll('article.productCard')
  prodCard.forEach(function(el){
    var idProd = el.dataset.productId;
    el.querySelector('.productCard__price').insertAdjacentHTML('beforebegin', `<div class="trustvox-showcase" style="text-align: center"><divs data-trustvox-product-code="${idProd}"></div></div>`);
  });
}

window.addEventListener("paginationRendered", function(evt) {
  getTrust()
}, false);
