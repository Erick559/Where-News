const overlayMenu = document.querySelector('.overlay-menu');
const overlay = document.querySelector('.overlay');
const hamburgerMenuButton = document.querySelector('.hamburger-menu');
const hamburgerCloseButton = document.querySelector('.hamburger-close');

let isOpen = false;

hamburgerMenuButton.addEventListener('click', () => {
    isOpen = true;

    openOverlayMenu();
});

hamburgerCloseButton.addEventListener('click', () => {
    isOpen = false;

    openOverlayMenu();
});

function openOverlayMenu(){
    if(isOpen) {
        overlayMenu.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    else{
        overlay.classList.remove('active');
        overlayMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}