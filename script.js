const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const hamburger = document.querySelector('.hamburger');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

function closeMobileMenu() {
    if (!hamburger || !nav) {
        return;
    }

    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('active');
}

navLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) {
            return;
        }

        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.forEach((item) => item.classList.remove('active'));
        anchor.classList.add('active');

        closeMobileMenu();
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger || !nav) {
        return;
    }

    if (!nav.classList.contains('active')) {
        return;
    }

    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        closeMobileMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach((img) => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });
}

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://formspree.io/f/xrbooree', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Echec de la requete');
            }

            formMessage.textContent = 'Votre message a ete envoye avec succes.';
            formMessage.style.display = 'block';
            formMessage.style.color = '#8add9f';
            contactForm.reset();
        } catch (error) {
            formMessage.textContent = "Echec de l'envoi. Reessayez dans un instant.";
            formMessage.style.display = 'block';
            formMessage.style.color = '#ff8a8a';
        }
    });
}
