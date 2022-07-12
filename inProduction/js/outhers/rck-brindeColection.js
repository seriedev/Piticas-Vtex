/*

                                                          _          
                                                         | |         
                                           _ __ ___   ___| | ___   _ 
                                          | '__/ _ \ / __| |/ / | | |
                                          | | | (_) | (__|   <| |_| |
                                          |_|  \___/ \___|_|\_\\__, |
                                                                __/ |
                                                               |___/ 
                                          
                Dev: Abraao santos
                date: 24/06/2022 sexta-feira
                Script function : filtra produtos que pertecem a uma coleção especifica no carrinho e implementa a barra de progresso por produtos de uma coleção especifica.
 */

//Logica
const promoProgressBar = async ()=>{
    
    // pega todos os produtos no carrinho
    let getCartProductItems = async () => vtexjs.checkout.getOrderForm().then(res=> res.items)

    //valor pra ganhar brinde da promo
    let brindePrice                 = Number(document.getElementById("brindeColectionPrice").textContent); 
    
    let colectionId                 = document.getElementById("brindeColectionId").textContent;
    let cartProductItems            = await getCartProductItems();
    let totalPromoProductsPrices    = 0;
    let toEarnAbrinde               = brindePrice;
    let cartProductIDS              = cartProductItems.map(item=>{
        return {itemID: item.productId, itemPrice: item.sellingPrice, quantity: item.quantity}
    });

    //retorna colecao(s) que o produto id faz parte;
    let getProductColections = cartProductIDS.map(async productID => {

        //get na api search
        return await fetch("https://www.piticas.com.br/api/catalog_system/pub/products/search/"+productID.itemID,
            {
                method: "GET",
                mode: "no-cors",
                headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
                
            }})
            .then(response => response.json())
            .then(response => Object.keys(response[0].productClusters))
        
    })

    // verifica se produto está incluso na coleção em evidencia
    for (let index = 0; index < getProductColections.length; index++) {

        let product = await getProductColections[index]
        if(product.includes(colectionId)){

            let productQuantity = cartProductIDS[index].quantity;
            totalPromoProductsPrices += cartProductIDS[index].itemPrice * productQuantity;

            //se total dos produtos da promoção for maior que valor minimo da promo, retorna um numero negativo
            toEarnAbrinde = brindePrice - totalPromoProductsPrices; 
        }
    }

    // UI
    let brindeProgressBar   = document.querySelector('.js-brindeColection-progress');
    let brindeIcon          = document.querySelector('.js-brindeColection-icon');
    let brindeTotalElement  = document.querySelector('.js-minicart-brindeColection-total');
    let goalEarnedBrinde    = document.querySelector('.cart-mini__brindeColection--goal-reached');

    //retorna quantos % do total dos produtos de valor pra obter brinde
    let resultCalcTotalPriceAndBrinde = totalPromoProductsPrices / brindePrice * 100;
    //seta o valor da estilização da barra de progresso 
    let resultFinal = resultCalcTotalPriceAndBrinde > 100 ? 100 : Number(resultCalcTotalPriceAndBrinde.toFixed(2));


    if (toEarnAbrinde < 0 && brindeTotalElement && brindeTotalElement.parentElement) {
    
        brindeTotalElement.parentElement.style.display = 'none';
        goalEarnedBrinde.style.display = 'block';
        document.querySelector('.js-brindeColection-container').style.display = 'none';
    
        goalEarnedBrinde.innerHTML = "Parab\xE9ns! Voc\xEA ganhou um <span class=\".--pink\">Brinde Exclusivo Piticas!</span><p>Finalize a compra para resgata-lo!</>";
  
    }else if (brindeTotalElement) {
    
        //valor restante pra obter brinde
        brindeTotalElement.innerText = (toEarnAbrinde/100).toFixed(2);
       
        brindeTotalElement.parentElement.style.display = 'flex';
        document.querySelector('.js-brindeColection-container').style.display = 'flex';
        goalEarnedBrinde.style.display = 'none';
    }

    //barra de progresso style
    brindeProgressBar.style.transform = "scaleX(".concat(resultFinal, "%)")

    brindeIcon.style.transform = resultFinal > 100 ? "translate(calc(".concat(resultFinal, "% - 1.75rem), 1.25rem)") : "translate(".concat(resultFinal, "%, 1.25rem)");
}

//inicializa 
promoProgressBar();


// identify an element to observe
const elementToObserve = document.querySelector("div.cart-mini__prices > div.cart-mini__prices-final")

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    promoProgressBar();
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {subtree: true, childList: true});