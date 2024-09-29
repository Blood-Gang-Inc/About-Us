// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamically update the footer with the current year
document.addEventListener("DOMContentLoaded", () => {
    const footerYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');

    if (footerText) {
        footerText.innerHTML = `&copy; ${footerYear} Blood Gang™️, Inc. All rights reserved.`;
    }
});

// Alert and confirmation for external links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        const url = link.getAttribute('href');
        const isExternal = url.includes('http') && !url.includes(window.location.hostname);

        if (isExternal) {
            const confirmation = confirm('You are about to visit an external site. Do you want to continue?');
            if (!confirmation) {
                event.preventDefault(); // Prevent navigation if the user cancels
            }
        }
    });
});
