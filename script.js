// Typing effect removed

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