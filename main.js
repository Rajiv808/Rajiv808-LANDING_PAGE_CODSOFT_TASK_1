document.addEventListener('DOMContentLoaded', function() {
    const ScrollRevealOption = {
        distance: "500px",
        origin: "bottom",
        duration: 1000,
    };

    // Initialize ScrollReveal
    ScrollReveal().reveal('.header_image img', {
        ...ScrollRevealOption,
        origin: 'right',
    });

    ScrollReveal().reveal('.header_content h1', {
        ...ScrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal('.header_content p', {
        ...ScrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal('.header_content form', {
        ...ScrollRevealOption,
        delay: 1500,
    });
});
