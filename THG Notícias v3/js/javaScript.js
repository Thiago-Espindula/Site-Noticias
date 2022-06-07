//Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', function(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('alternar-menu');
    menuMobile.classList.toggle('alternar-menuMobile');
}); 
