//Menu Mobile
let menuMobile = document.getElementById('menu-mobile');
menuMobile.addEventListener('click', alternar);

function alternar() {    
    let menu = document.getElementById('menu');
    menu.classList.toggle('alternar');
}