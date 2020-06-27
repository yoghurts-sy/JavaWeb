
/*添加厨师*/
function showAdd() {
    let bg = document.getElementById("background-id")
    bg.style.display = "inline";
    let add = document.getElementById("popup-add");
    add.style.display = "inline";
}
function cookAdd() {

}
function addCancel() {
    let bg = document.getElementById("background-id")
    bg.style.display = "none";
    let add = document.getElementById("popup-add");
    add.style.display = "none";
}


/*点菜*/
let waitingLi2 = document.getElementById("waiting-li-2");
waitingLi2.onclick = function () {
    let waiting = document.getElementById("waiting-face-2");
    let client = document.getElementById("client-face-1");
    client.innerHTML += waiting.innerHTML;
    client.style.backgroundImage = "linear-gradient(90deg,#FF2626 50%,#B20000 50%)";
    waiting.style.display = "none";

    let bg = document.getElementById("background-id")
    bg.style.display = "inline";

    /*菜单*/
    let menu = document.getElementById("popup-menu");
    menu.style.display = "inline";

    let menuFace = document.getElementById("menu-face");
    menuFace.innerHTML += waiting.innerHTML;

}
