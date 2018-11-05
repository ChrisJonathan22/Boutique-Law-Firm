let menu = document.getElementById('menu-container');
let sideMenu = document.getElementById('side-menu');
let paraText = document.getElementById('parallax-text');

function burgerMenu () {
   
    // sideMenu.classList.toggle('show');
    // sideMenu.style.display = "block";
    if(sideMenu.style.display === "block"){
        sideMenu.style.display = "none";
        paraText.style.display = '';
    }

    else {
        sideMenu.style.display = "block";
        paraText.style.display = 'none';
    }
    sideMenu.classList.toggle('fadeIn');
    this.classList.toggle('change');
}
menu.addEventListener('click', burgerMenu, false);



