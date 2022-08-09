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