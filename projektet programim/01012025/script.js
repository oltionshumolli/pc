document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hiq vëzhgimin pas animimit
            }
        });
    }, {
        threshold: 0.2 // Aktivizo kur 20% e seksionit është në fushëpamje
    });

    // Apliko observer te të gjitha elementet me klasën 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
        el.style.setProperty('--order', index); // Renditja për vonesën
        observer.observe(el);
    });
});


    // Button hover animations
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Clickable project images
    const projectImages = document.querySelectorAll('.image-frame img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            alert(`You clicked on ${img.alt}`);
        });
    });

