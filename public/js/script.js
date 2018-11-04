let menu = document.getElementById('menu-container');
let sideMenu = document.getElementById('side-menu');

function burgerMenu () {
   
    // sideMenu.classList.toggle('show');
    // sideMenu.style.display = "block";
    if(sideMenu.style.display === "block"){
        sideMenu.style.display = "none";
    }

    else {
        sideMenu.style.display = "block";
    }
    sideMenu.classList.toggle('fadeIn');
    this.classList.toggle('change');
}
menu.addEventListener('click', burgerMenu, false);



