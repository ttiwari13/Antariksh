document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    console.log(navMenu, navToggle, navClose); // Check if elements are correctly selected

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            console.log('Toggle clicked'); // Check if event is triggered
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            console.log('Close clicked'); // Check if event is triggered
            navMenu.classList.remove('show-menu');
        });
    }
});
const navLink = document.querySelectorAll('nav__link')
const LinkAction =()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', LinkAction))