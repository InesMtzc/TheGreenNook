const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu li a');

if (burgerMenu && menu) {
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
