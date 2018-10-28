let menu = document.getElementById('menu-container');

function burgerMenu () {
    this.classList.toggle('change');
}
menu.addEventListener('click', burgerMenu, false);



