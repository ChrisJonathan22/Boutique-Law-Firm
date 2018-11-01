let menu = document.getElementById('menu-container');
let sideMenu = document.getElementById('side-menu');

function burgerMenu () {
   
    sideMenu.classList.toggle('show');
    this.classList.toggle('change');
}
menu.addEventListener('click', burgerMenu, false);



