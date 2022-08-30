function tagFrete() {

    // Valor mínimo para ser aplicado a tag de frete grátis
    let valorMinimo = 350.00;

    let createElementDiv, priceValidated;
	let spanFreteGratis = `<span>Frete grátis</span>`;

	// obtenção do valor e verificação se é maior que R$350, caso seja será adicionado o span de Frete Grátis
	function freteGratisFunction() {

		for (let i = 0; i < document.getElementsByClassName('productCard__brand').length; i++) {

			priceValidated = document.getElementsByClassName('productCard__price--best')[i].innerHTML;
			priceValidated = priceValidated.replace("R$ ", '');
			priceValidated = priceValidated.replace(",", '.');
			priceValidated = parseFloat(priceValidated);

			if (priceValidated > valorMinimo) {
				createElementDiv = document.createElement('div');
				createElementDiv.classList.add('tagFreteGratis');
				createElementDiv.innerHTML = spanFreteGratis;
				document.getElementsByClassName('productCard__brand')[i].appendChild(createElementDiv);
			}
		}
	}

	// Corrigindo possíveis duplicidades de atribuição
	function freteGratisFix() {
		for (let i = 0; i < document.getElementsByClassName('productCard__brand').length; i++) {

			let fixDuplicityFrete = document.querySelectorAll("span[class='productCard__brand']")[i]

			if (fixDuplicityFrete.children[1] != undefined) {
				if (fixDuplicityFrete.children[0].innerHTML == fixDuplicityFrete.children[1].innerHTML) {
					fixDuplicityFrete.children[1].remove()
				}
			}
		}
	}

	//Mutation Observer para caso navegue para outra paginação o span seja adicionado aos produtos
	const productsObserverved = document.querySelector("ul[class='vitrine__group']");

	if (productsObserverved != null) {
		const observerProducts = new MutationObserver(() => {
			freteGratisFunction()
			freteGratisFix()
		})
		observerProducts.observe(productsObserverved, {
			childList: true
		});
	}

	//Mutation Observer para cards da smarthint da HOME
	const homeObserved = document.querySelector("div[class='tabs']");

	if (homeObserved != null) {
		const observerHome = new MutationObserver(() => {

			for (let i = 0; i < document.querySelectorAll("div[class='smarthint']").length; i++) {

				const childrenHomeObserved = document.querySelectorAll("div[class='smarthint']")[i];

				if (childrenHomeObserved != null) {
					const observerChildrenHome = new MutationObserver(() => {
						freteGratisFunction()
						freteGratisFix()
					})

					observerChildrenHome.observe(childrenHomeObserved, {
						attributes: true
					});
				}
			}
		})

		observerHome.observe(homeObserved, {
			childList: true
		});
	}
    
	//Mutation Observer para pesquisa dinâmica da SmartHint (incluindo o "veja mais")
	const searchObserved = document.querySelector("html");

	if (searchObserved != null) {

		const observerSearch = new MutationObserver(() => {
			freteGratisFunction()
			freteGratisFix()

			const searchViewMoreObserved = document.querySelector("div[id='smarthint-search-products']");

			if (searchViewMoreObserved != null) {
				const observerSearchViewMore = new MutationObserver(() => {
					freteGratisFunction()
					freteGratisFix()
				})
				observerSearchViewMore.observe(searchViewMoreObserved, {
					childList: true
				})
			}
		})
		observerSearch.observe(searchObserved, {
			attributes: true
		})
	}
}

window.addEventListener("DOMContentLoaded", tagFrete());