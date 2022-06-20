window.onload = function () {
  let head                    = document.querySelector("head");
  
  let nameRichSnippet         = skuJson.name;
  nameRichSnippet             = nameRichSnippet.replaceAll(`"`, `'`);

  let descriptionRichSnippet  = document.querySelector('meta[name="description"]').content;
  
  let imageRichSnippet        = skuJson.skus[0].image;
  
  let urlRichSnippet          = document.URL;

  let skuRichSnippet          = skuJson.productId;
  
  let brandRichSnippet;
  if(document.querySelector(".productPage__brand")){
      brandRichSnippet   = document.querySelector(".productPage__brand").textContent
  }else{brandRichSnippet = dataLayer[0].productBrandName;} 

  let gTinTamanho        = (dataLayer[0].productEans) ? dataLayer[0].productEans[0].length : null;
  let gTinRichSnippet    = (dataLayer[0].productEans) ? dataLayer[0].productEans[0] : null;

  

  let countSkus = skuJson.skus.length;
  let priceRichSnippet = ""
  let bestPriceRichSnippet = ""
  for (i = 0; priceRichSnippet == ""; i++){
      if (skuJson.skus[i].available){
          priceRichSnippet     = skuJson.skus[i].fullSellingPrice
          priceRichSnippet     = priceRichSnippet.replace("R$", "").replace(" ", "").replaceAll(".", "").replace(",", ".")
          bestPriceRichSnippet = skuJson.skus[i].bestPriceFormated
          bestPriceRichSnippet = bestPriceRichSnippet.replace("R$", "").replace(" ", "").replaceAll(".", "").replace(",", ".")
      }
  }
  // Info Offers
  let offers = ""
  for (let sku = 0; sku < skuJson.skus.length; sku ++){        
      let idSku       = skuJson.skus[sku].sku
      let size        = skuJson.skus[sku].dimensions.Tamanho
      let available   = (skuJson.skus[sku].available) ? "InStock" : "OutOfStock"        
      
      if (sku == skuJson.skus.length-1){
          offers += `{"@type": "Offer","url": "${urlRichSnippet}","price": "${priceRichSnippet}","priceCurrency": "BRL","sku": "${idSku}","availability": "${available}"}`
      }
      else{
          offers += `{"@type": "Offer","url": "${urlRichSnippet}","price": "${priceRichSnippet}","priceCurrency": "BRL","sku": "${idSku}","availability": "${available}"},`
      }
  }
  
  let productInfos = ""
  productInfos     = `{"@context": "https://schema.org","@type": "Product","name": "${nameRichSnippet}","gtin${gTinTamanho}": "${gTinRichSnippet}","image": "${imageRichSnippet}","description": "${descriptionRichSnippet}","sku": "${skuRichSnippet}","brand": {"@type": "Brand","name": "${brandRichSnippet}"}, "offers": {"@type": "AggregateOffer","lowPrice": "${bestPriceRichSnippet}","priceCurrency": "BRL","offers": [${offers}],"offerCount": "${countSkus}"}}`

  let scriptElemento = document.createElement("script")
  scriptElemento.setAttribute("type", "application/ld+json");
  scriptElemento.setAttribute("id", "product-rich-snippet");
  scriptElemento.innerText = productInfos;
  head.appendChild(scriptElemento)
 
}