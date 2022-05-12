///////////////////////////////////////////////////////////////////////////////////////////////////////////
// refatored function hide icon chat in click, this is merge of other older script
function hideIconChat(){
    let chatWidget = document.querySelector("#md-app-widget"), 
    chatContainer = document.querySelector("#md-app-widget > div.md-chat-widget-container.md-fade-when-visible"), 
    chatBtn = document.querySelector("#md-app-widget > div.md-chat-widget-btn-container"),
    miniCartOverlay = document.querySelector(".cart-mini"),
    miniCartBtn = document.querySelector(".cart.js-minicart.cart");

    chatBtn.addEventListener('click', ()=>{
        chatContainer.classList.contains('minimized') ? chatWidget.style.zIndex = "9" : chatWidget.style.zIndex = "99999"; 
    })
    miniCartBtn.addEventListener('click', ()=>{
        setTimeout(()=>{
            miniCartOverlay.classList.contains('cart-mini--active') ? chatWidget.style.zIndex = "9" : chatWidget.style.zIndex = "99999";
        },500);
    });
    
    executeInOthers = () => {
        document.querySelectorAll("a.productCard__sku-selector").forEach(e=>e.onclick = (()=>{
            let btnComprar = document.querySelector(".js-add-to-cart");
            btnComprar.onclick = (()=>{
                chatWidget.style.zIndex = "9"
            })}));
    }
    executeInPdp = () => {
        let btnComprar = document.querySelector(".js-add-to-cart");
            btnComprar.onclick = (()=>{
            chatWidget.style.zIndex = "9"
        });
    }
    document.URL.includes('/p') ? executeInPdp() : executeInOthers(); 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///função trocar icone ///

// Declara todas as variaveis que sofrem mutação durante o loop
let divChat,
    defaultImgChatOpen,
    defaultImgChatClose,
    parentDivClose,
    parentDivOpen ;   

//elemento HTML a ser verificado existencia
function elemento(){ 
divChat                 = document.querySelector("div.md-chat-widget-btn-container > div");
defaultImgChatOpen      = document.querySelector(".md-chat-widget-btn-icon > svg");
defaultImgChatClose     = document.querySelector(".md-chat-widget-btn-close-icon > svg");

// Procura o elemento que será substituído
parentDivClose          = defaultImgChatClose.parentNode;
parentDivOpen           = defaultImgChatOpen.parentNode;

}

function renderNewIcon(){

let imgChatDimension   = "height:100px; Width: 100px; filter: brightness(1.30)";
window.screen.width < 768 ? imgChatDimension   = "height: 69px; Width: 69px; filter: brightness(1.30)" : null;


////////// for open buttom chat //////////
let newImgChatOpen          = document.createElement("img");

// Adiciona os atributos para o elemento
newImgChatOpen.src          = "https://lojapiticas.vteximg.com.br/arquivos/pitiIconOpenChat.png";
newImgChatOpen.alt          = "piti - abrir chat";
newImgChatOpen.style        = imgChatDimension;


////////// for close buttom chat //////////
let newImgChatClose         = document.createElement("img");

// Adiciona os atributos para o elemento
newImgChatClose.src         = "https://lojapiticas.vteximg.com.br/arquivos/pitiIconCloseChat.png";
newImgChatClose.alt         = "piti - fechar chat";
newImgChatClose.style       = imgChatDimension;


        
// Substituí o elemento que já existe (defaultChatCloseImg) por o novo elemento (newImgChatClose)
    parentDivOpen.replaceChild(newImgChatOpen, defaultImgChatOpen);
// Substituí o elemento que já existe (defaultChatCloseImg) por o novo elemento (newImgChatClose)
    parentDivClose.replaceChild(newImgChatClose, defaultImgChatClose);
}

// armazena o setInterval
let myObeserver;

// Verifica se elemento existe e PARA o setInterval
function verifyElement(){
    if(divChat){
       
        clearInterval(myObeserver);

        //função principal 
        renderNewIcon();
        hideIconChat();
        // muda o tamanho do icone de chat 
        let divDimensions;
        
        if(window.screen.width < 768){

            divDimensions      = "height: 69px; Width: 69px;";
            divChat.style      = "height: 69px; width: 69px !important; ";
            
        }else{
            divDimensions      = "height:100px; Width: 100px;";
            divChat.style      = " width: 100px !important; height: 100px;";
        }
        
        //divs de cada uma das 2 imagens   
        divChat.children[0].style   = divDimensions; 
        divChat.children[1].style   = divDimensions;
        
    }else{
//      se elemento não existe ativa o loop
        myObeserver = setInterval(function(){
            elemento();
            verifyElement()
        },99)
    }
}

//inicia verificando elemento 
verifyElement()