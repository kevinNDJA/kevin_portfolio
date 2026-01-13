// Typing effect
const typingText = document.querySelector('.typing-text span');
const words = ['Designer Graphique', 'Étudiant-Professeur', 'Créateur d\'Affiches', 'Éducateur', 'Développeur Web'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWriter, 300);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 150);
    }
}

typeWriter();

// Mobile nav toggle
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        nav.classList.remove('active'); // Close mobile nav after click
    });
});

// Image modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});