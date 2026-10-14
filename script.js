document.addEventListener('DOMContentLoaded', () => {
    // 1. SCROLL-BASED ANIMATION (Fades sections in as the user scrolls)
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Optional: Add a subtle cyan glow class on view
                entry.target.style.filter = 'brightness(1)';
            }
        );
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    // Set initial state for sections to be 'hidden'
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });


    // 2. HEADLINE EFFECT (A subtle typewriter/data stream effect on the main title)
    const titleElement = document.querySelector('.data-title');
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = ''; // Clear the original text

        let i = 0;
        const speed = 10; // Typing speed

        function typeWriter() {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                requestAnimationFrame(typeWriter);
            } else {
                // After typing, add a small "glitch" pause
                setTimeout(() => {
                    titleElement.style.transition = 'color 0.1s';
                    titleElement.style.color = '#ff00ff'; // Flash magenta
                    setTimeout(() => {
                        titleElement.style.color = 'var(--color-accent-magenta)';
                    }, 50);
                }, 500);
            }
        }
        
        // Start the typing process
        typeWriter();
    }
});
