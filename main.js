AOS.init();


const logoMenu = document.querySelector('.LogoMenu');
const navbar = document.querySelector('.nav-bar');
const arrList = document.querySelectorAll('.nav-list');

logoMenu.addEventListener('click', () => {

    if(navbar.className === 'nav-bar'){

        navbar.className += " responsive"
        logoMenu.style.width = "35px";
        logoMenu.style.top = "2px";
        logoMenu.src ="img/close-option.png";

    } else {
         
        navbar.className = "nav-bar";
        logoMenu.style.width = "35px";
        logoMenu.style.top = "2px";
        logoMenu.src ="img/square.png";
    }
})

arrList.forEach(item => {
    item.addEventListener('click', () => {
        navbar.className = 'nav-bar';
        logoMenu.src = 'img/square.png';
    })
})