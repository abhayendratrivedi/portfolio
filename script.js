// Mobile Menu
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('open');
}

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    reveals.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
});