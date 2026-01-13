// Typing effect with CSS

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

// Form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('https://formspree.io/f/xrbooree', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Votre message a été envoyé avec succès !';
            formMessage.style.display = 'block';
            formMessage.style.color = '#b74b4b';
            contactForm.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    })
    .catch(error => {
        formMessage.textContent = 'Erreur lors de l\'envoi. Veuillez réessayer.';
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
    });
});