//CLS FIX
function rckRemoveStyle() {
    document.querySelector(".vitrine__wrapper li") ? document.querySelector(".vitrine__wrapper").removeAttribute("style") : reCheck()
}
function reCheck() {
    setTimeout(function() {
        rckRemoveStyle(),
        console.log("reCheck")
    }, 500)
}
rckRemoveStyle();
//END CLS FIX

//Filter "Order By" selection and style
document.querySelector(".orderBy__item > a") !== null ? filterOrderBy() : ""

function filterOrderBy(){
    let orderListButtons = document.querySelectorAll(".filter__orderBy > div > ul > li a")
    orderListButtons[orderListButtons.length-1].style.cssText = 'color: #ef7b00; font-weight: 600;';

    orderListButtons.forEach(btn=>btn.addEventListener('click',(e)=>{
    //atualiza o estado das cores dos botoes
        orderListButtons.forEach((btnColor)=>{btnColor.style.fontWeight="400"; btnColor.style.color="#666"});
        e.target.style.cssText = 'color: #ef7b00; font-weight: 600;'
    }));
}
//END Filter "Order By" selection and style