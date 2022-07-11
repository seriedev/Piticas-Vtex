///////////////////////////////////////////////////////////////////////////////////////////////////////////

// refatored #2 functions: hide icon chat in click on minicart and trade the image icon, this is merge of other older script

// identify an element to observe
let mycartElement     = document.querySelector(".cart-mini"),
    mycartDivElement  = document.querySelector("div.itens-right");
    
const cartObserver = new MutationObserver(function() {
    let chatDiv = document.querySelector("#md-app-widget");
    mycartElement.classList.contains("cart-mini--active") ? chatDiv.style.zIndex = '9' : chatDiv.style.zIndex    = "999"
    mycartElement.classList.contains("cart-mini--active") ? mycartDivElement .style.zIndex = '5' : mycartDivElement .style.zIndex  = '4'
});
cartObserver.observe(mycartElement, {attributes: true});
   
const chatObserver = new MutationObserver(function(){
    
    let defaultImgChatOpen  = document.querySelector(".md-chat-widget-btn-icon > svg"),
        defaultImgChatClose = document.querySelector(".md-chat-widget-btn-close-icon > svg");
    
    if(defaultImgChatOpen){
        let newImgChatOpen      = document.createElement("img");
            newImgChatOpen.src  = "https://lojapiticas.vteximg.com.br/arquivos/pitiIconOpenChat.png";
            newImgChatOpen.alt  = "piti - abrir chat";
        let newImgChatClose     = document.createElement("img");
            newImgChatClose.src = "https://lojapiticas.vteximg.com.br/arquivos/pitiIconCloseChat.png";
            newImgChatClose.alt = "piti - fechar chat"; 
        
        defaultImgChatOpen.replaceWith(newImgChatOpen);
        defaultImgChatClose.replaceWith(newImgChatClose); 
        chatObserver.disconnect();
    }
})
chatObserver.observe(document.body, {childList: true});