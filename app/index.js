const hamBurger = document.getElementById('hamburger-btn');
const nav = document.getElementById('mobile-menu-id');
const body = document.getElementById('body');
const close = document.getElementById('close-btn');
const headerWrapper = document.getElementById('header-wrapper');

hamBurger.addEventListener("click", () => {
    nav.classList.toggle('active');
    body.classList.toggle('noscroll');
    hamBurger.classList.toggle('display-none');
    close.classList.toggle('display-none');
    headerWrapper.classList.toggle('header-overlay');
});

close.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('noscroll');
    hamBurger.classList.toggle('display-none');
    close.classList.toggle('display-none');
    headerWrapper.classList.toggle('header-overlay');
})