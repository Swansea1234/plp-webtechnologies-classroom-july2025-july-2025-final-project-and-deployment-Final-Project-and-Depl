document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        hamburger.classList.toggle('open');
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('form-message');

            if (name && email && message) {
                formMessage.style.color = 'green';
                formMessage.textContent = 'Message sent successfully!';
                contactForm.reset();
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Please fill out all fields.';
            }
        });
    }
});