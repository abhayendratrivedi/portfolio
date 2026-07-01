// Typing Animation
const typingText = document.querySelector('.highlight');
const words = ['businesses', 'startups', 'restaurants', 'clinics', 'you'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 80 : 120);
}

type();

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