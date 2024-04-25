const overlayMenu = document.querySelector('.overlay-menu');
const overlay = document.querySelector('.overlay');
const hamburgerMenuButton = document.querySelector('.hamburger-menu');
const hamburgerCloseButton = document.querySelector('.hamburger-close');

let isOpen = false;

hamburgerMenuButton.addEventListener('click', () => {
    isOpen = true;

    if (isOpen) {
        overlayMenu.classList.add('open');
        overlay.classList.add('active');
    }
    else {
        overlayMenu.classList.remove('open');
        overlay.classList.remove('active');
    }
});

hamburgerCloseButton.addEventListener('click', () => {
    isOpen = false;

    overlay.classList.remove('active');
    overlayMenu.classList.remove('open');
});