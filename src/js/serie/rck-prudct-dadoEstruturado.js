window.onload = function () {
  let head                    = document.querySelector("head");
  
  let nameRichSnippet         = skuJson.name;
  nameRichSnippet             = nameRichSnippet.replaceAll(`"`, `'`);

  let descriptionRichSnippet  = document.querySelector('meta[name="description"]').content;
  
  let imageRichSnippet        = skuJson.skus[0].image;
  
  let strUrl = document.URL;

  let regexUrl = new RegExp(".*.[/p|P]");

  let regexSku = new RegExp("idsku=.*");

  let resultRegexUrl;
  
  let resultRegexSku;

  let urlSkuProduct = new Array();

  let priceVariation = false;

  let skuRichSnippet          = skuJson.productId;
  
	let aggregateRatingValue = "";

	let aggregateBestRating = "";

	let aggregateRatingCount = "";

	if (document.querySelector('span[itemprop="ratingValue"]') != null) {
		aggregateRatingValue = document.querySelector('span[itemprop="ratingValue"]').innerText.trim();
		aggregateBestRating = document.querySelector('span[itemprop="bestRating"]').innerText.trim();
		aggregateRatingCount = document.querySelector('span[itemprop="reviewCount"]').innerText.trim();
	}

	let aggregateRating = {
		"@type": "AggregateRating",
		"ratingValue": `${aggregateRatingValue}`,
		"bestRating": `${aggregateBestRating}`,
		"ratingCount": `${aggregateRatingCount}`,
	}

	// ---------------------- REVIEW ------------------------------------------

	let arrayRatingValue = document.querySelectorAll('span[itemprop="ratingValue"]');
	let arrayNameReview = document.querySelectorAll('span[itemprop="name"]');
	let arrayReviewBody = document.querySelectorAll('div[class="ts-review"]');

	let review = "";
	let rating;
	let nameReview = "";

	//arrayName
	let auxNameReview;
	let nameReviewFinal = new Array();
	let n = 0;

	for (i = 0; i < arrayNameReview.length; i++) {
		auxNameReview = arrayNameReview[i].innerHTML

		if (auxNameReview[0] == " ") {
			nameReviewFinal[n] = arrayNameReview[i].innerHTML.trim();
			nameReviewFinal[n] = nameReviewFinal[n].replace("....", ".")
			nameReviewFinal[n] = JSON.stringify(nameReviewFinal[n])
			n++
		}
	}

	n = 0;

	//ratingValue
	let auxRatingValue;
	let ratingValueFinal = new Array();

	for (i = 0; i < arrayRatingValue.length; i++) {
		auxRatingValue = arrayRatingValue[i].innerText

		if (auxRatingValue[1] != "." && auxRatingValue[1] != " ") {
			ratingValueFinal[n] = arrayRatingValue[i].innerText
			ratingValueFinal[n] = JSON.stringify(ratingValueFinal[n])
			n++
		}
	}

	// reviewBody
	let reviewBodyFinal = new Array();

	for (i = 0; i < arrayReviewBody.length; i++) {
		reviewBodyFinal[i] = arrayReviewBody[i].innerText
		reviewBodyFinal[i] = reviewBodyFinal[i].replace('"', '')
		reviewBodyFinal[i] = reviewBodyFinal[i].replace('"', '').trim()
		reviewBodyFinal[i] = JSON.stringify(reviewBodyFinal[i])
	}

	// construção do dado de review
	if (arrayRatingValue.length > 1) {
		for (i = 0; i < ratingValueFinal.length; i++) {

			rating = ratingValueFinal[i]
			nameReview = nameReviewFinal[i]

			if (i < ratingValueFinal.length - 1) {
				review += `{"@type": "Review","reviewRating": {"@type": "Rating","ratingValue": ${rating}},"author": {"@type": "Person","name": ${nameReview}},"reviewBody": ${reviewBodyFinal[i]}},`
			} else {
				review += `{"@type": "Review","reviewRating": {"@type": "Rating","ratingValue": ${rating}},"author": {"@type": "Person","name": ${nameReview}},"reviewBody": ${reviewBodyFinal[i]}}`
			}
		}
	}

	// ---------------------- REVIEW ------------------------------------------    
	aggregateRating = JSON.stringify(aggregateRating);

  let brandRichSnippet;
  if(document.querySelector(".productPage__brand")){
      brandRichSnippet   = document.querySelector(".productPage__brand").textContent
  }else{brandRichSnippet = dataLayer[0].productBrandName;} 

  let gTinTamanho        = (dataLayer[0].productEans) ? dataLayer[0].productEans[0].length : null;
  let gTinRichSnippet    = (dataLayer[0].productEans) ? dataLayer[0].productEans[0] : null;

  let countSkus = skuJson.skus.length;
  let priceRichSnippet = new Array();
  let bestPriceRichSnippet = new Array();

  for (i = 0; i < skuJson.skus.length; i++){
      if (skuJson.skus[i].available){
		    priceRichSnippet[i] = skuJson.skus[i].fullSellingPrice
			priceRichSnippet[i] = priceRichSnippet[i].replace("R$", "").replace(" ", "").replaceAll(".", "").replace(",", ".")
			bestPriceRichSnippet[i] = skuJson.skus[i].bestPriceFormated
			bestPriceRichSnippet[i] = bestPriceRichSnippet[i].replace("R$", "").replace(" ", "").replaceAll(".", "").replace(",", ".")
		}

	}
  
	let filterBestPrice = bestPriceRichSnippet.filter((item) => item != undefined)

	let menor = "";
	let maior = "";
	if (filterBestPrice.length != 0) {
		menor = parseFloat(filterBestPrice[0]).toFixed(2);
		maior = parseFloat(filterBestPrice[0]).toFixed(2);
	}

	for (i = 0; i < filterBestPrice.length; i++) {

		if (menor > parseFloat(filterBestPrice[i])) {
			menor = parseFloat(filterBestPrice[i]).toFixed(2);
		}

		if (maior < parseFloat(filterBestPrice[i])) {
			maior = parseFloat(filterBestPrice[i]).toFixed(2);
		}
	}

//verificação se o produto tem variação de preço conforme o tamanho

	let auxSkuVariation = 0;

  for(i = 0; i < skuJson.skus.length - 1; i++)
  {
	 if((skuJson.skus[i].bestPrice/100).toFixed(2) != (skuJson.skus[i+1].bestPrice/100).toFixed(2))
	 {
		 priceVariation = true;
	 }
  }


  if(strUrl.match(regexSku)!=null){
		resultRegexSku = strUrl.match(regexSku)
		resultRegexSku = resultRegexSku[0].replace(/[^0-9]/g,'');
  }

  for(i = 0; i < skuJson.skus.length ; i++)
  {
	if(skuJson.skus[i].sku == resultRegexSku)
	{
		auxSkuVariation =  i;
	}
  }

// Info Offers

  let idSku = new Array();
  let auxIdSku = new Array();
  let offers = ""

  if(strUrl.match(regexUrl)!=null)
    {
        resultRegexUrl = strUrl.match(regexUrl);
    }
    else{
        resultRegexUrl = document.URL;
    }
    for (let sku = 0; sku < skuJson.skus.length; sku ++){        
		idSku[sku] = "?idsku=" + skuJson.skus[sku].sku;
		auxIdSku[sku] = skuJson.skus[sku].sku;
		let available   = (skuJson.skus[sku].available) ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
		
	   if(strUrl.match(regexUrl)!=null){
		   urlSkuProduct[sku] = resultRegexUrl + idSku[sku];
	   }
	   else{
		   urlSkuProduct[sku] = resultRegexUrl;
	   }    

	   if(priceVariation == true && resultRegexSku != undefined && priceRichSnippet[auxSkuVariation] != undefined && priceRichSnippet[auxSkuVariation] != null && priceRichSnippet[auxSkuVariation] != "") {
				offers = `{"@type": "Offer","url": "${strUrl}","price": "${priceRichSnippet[auxSkuVariation]}","priceCurrency": "BRL","sku": "${resultRegexSku}","availability": "https://schema.org/InStock"}`
				break;
	   	 } else if(priceVariation == true && resultRegexSku != undefined && priceRichSnippet[auxSkuVariation] == undefined || priceRichSnippet[auxSkuVariation] == null || priceRichSnippet[auxSkuVariation] == "")
		 {
			offers = `{"@type": "Offer","url": "${strUrl}","sku": "${resultRegexSku}","availability": "https://schema.org/OutOfStock"}`
		 }
		 
		 else if (priceRichSnippet[sku] != undefined && priceRichSnippet[sku] != null && priceRichSnippet[sku] != "") {
			   if (sku == skuJson.skus.length-1){
			   offers += `{"@type": "Offer","url": "${urlSkuProduct[sku]}","price": "${priceRichSnippet[sku]}","priceCurrency": "BRL","sku": "${auxIdSku[sku]}","availability": "${available}"}`
		   } else{
				 offers += `{"@type": "Offer","url": "${urlSkuProduct[sku]}","price": "${priceRichSnippet[sku]}","priceCurrency": "BRL","sku": "${auxIdSku[sku]}","availability": "${available}"},`
			   }
		 } else {
			 if (sku == skuJson.skus.length - 1) {
				 offers += `{"@type": "Offer","url": "${urlSkuProduct[sku]}","sku": "${auxIdSku[sku]}","availability": "${available}"}`
			 } else {
				 offers += `{"@type": "Offer","url": "${urlSkuProduct[sku]}","sku": "${auxIdSku[sku]}","availability": "${available}"},`
			 }
		 }	 
	 }

	let aggregateOffer = "";

	if (filterBestPrice.length > 0) {
		aggregateOffer = `"lowPrice": "${menor}","highPrice": "${maior}","priceCurrency": "BRL",`;
	}

  let productInfos = ""
	if(priceVariation == true && resultRegexSku != undefined){
		if (review == "") {
			productInfos = `{"@context": "https://schema.org","@type": "Product","name": "${nameRichSnippet}","gtin${gTinTamanho}": "${gTinRichSnippet}","image": "${imageRichSnippet}","description": "${descriptionRichSnippet}","sku": "${skuRichSnippet}","brand": {"@type": "Brand","name": "${brandRichSnippet}"},"offers": ${offers}}`
		} else {
			productInfos = `{"@context": "https://schema.org","@type": "Product","name": "${nameRichSnippet}","gtin${gTinTamanho}": "${gTinRichSnippet}","image": "${imageRichSnippet}","description": "${descriptionRichSnippet}","sku": "${skuRichSnippet}","brand": {"@type": "Brand","name": "${brandRichSnippet}"},"offers": ${offers}, "review": [${review}],"aggregateRating": ${aggregateRating}}`
		}
	}

	else{
	if (review == "") {
		productInfos = `{"@context": "https://schema.org","@type": "Product","name": "${nameRichSnippet}","gtin${gTinTamanho}": "${gTinRichSnippet}","image": "${imageRichSnippet}","description": "${descriptionRichSnippet}","sku": "${skuRichSnippet}","brand": {"@type": "Brand","name": "${brandRichSnippet}"},"offers": {"@type": "AggregateOffer",${aggregateOffer}"offers": [${offers}],"offerCount": "${countSkus}"}}`
	} else {
		productInfos = `{"@context": "https://schema.org","@type": "Product","name": "${nameRichSnippet}","gtin${gTinTamanho}": "${gTinRichSnippet}","image": "${imageRichSnippet}","description": "${descriptionRichSnippet}","sku": "${skuRichSnippet}","brand": {"@type": "Brand","name": "${brandRichSnippet}"},"offers": {"@type": "AggregateOffer",${aggregateOffer}"offers": [${offers}],"offerCount": "${countSkus}"}, "review": [${review}],"aggregateRating": ${aggregateRating}}`
	}
	}
	let breadCrumb;
	let auxBreadCrumbList = document.querySelectorAll('div[class="bread-crumb"] ul li').length;
	let positionBreadCrumb = 0;
	let nameBreadCrumb = "";
	let urlBreadCrumb = "";
	let itemListElement = new Array()

	for (i = 0; i < auxBreadCrumbList; i++) {
		positionBreadCrumb = i + 1;
		positionBreadCrumb = JSON.stringify(positionBreadCrumb);
		nameBreadCrumb = document.querySelectorAll('a span[itemprop="name"]')[i].textContent;
		nameBreadCrumb = JSON.stringify(nameBreadCrumb);
		urlBreadCrumb = document.querySelectorAll('a[itemprop="item"]')[i].href;
		urlBreadCrumb = JSON.stringify(urlBreadCrumb);

		if (i < auxBreadCrumbList - 1) {
			itemListElement += `{"@type": "ListItem","position": ${positionBreadCrumb},"name": ${nameBreadCrumb},"item": ${urlBreadCrumb}},`
		} else {
			itemListElement += `{"@type": "ListItem","position": ${positionBreadCrumb},"name": ${nameBreadCrumb},"item": ${urlBreadCrumb}}`
		}
	}

	breadCrumb = `{"@context": "https://schema.org","@type": "BreadcrumbList","name": "${nameRichSnippet}","itemListElement": [${itemListElement}]}`

  let scriptElemento = document.createElement("script")
  scriptElemento.setAttribute("type", "application/ld+json");
  scriptElemento.setAttribute("id", "product-rich-snippet");
  scriptElemento.innerText = productInfos;
  head.appendChild(scriptElemento)

  let scriptElementoBreadCrumb = document.createElement("script")
  scriptElementoBreadCrumb.setAttribute("type", "application/ld+json");
  scriptElementoBreadCrumb.setAttribute("id", "breadCrumb-rich-snippet");
  scriptElementoBreadCrumb.innerText = breadCrumb;
  head.appendChild(scriptElementoBreadCrumb)

  let k = document.querySelectorAll("*[itemprop]").length

  for (i = 0; i < k; i++) {
	document.querySelectorAll("*[itemprop]")[0].removeAttribute("itemprop")
  }

  let l = document.querySelectorAll("*[itemtype]").length

  for (i = 0; i < l; i++) {
	document.querySelectorAll("*[itemtype]")[0].removeAttribute("itemtype")
  }

  let m = document.querySelectorAll("*[itemscope]").length

  for (i = 0; i < m; i++) {
  	document.querySelectorAll("*[itemscope]")[0].removeAttribute("itemscope")
  }
}