// This code uses the GSAP library to create a smooth, natural scroll animation
// and handles the header visibility on scroll.

document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Links ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, {
                // UPDATED: Increased duration for a much slower, more graceful scroll
                duration: 5, 
                scrollTo: targetId,
                ease: "power2.inOut" // A very smooth, natural easing function
            });
        });
    });

    // --- Hide/Show Header on Scroll ---
    const header = document.querySelector('header');
    let lastScrollTop = 0; // Variable to store the last scroll position

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if user is scrolling down and is past the header height
        if (scrollTop > lastScrollTop && scrollTop > 100) { 
            // Scrolling Down
            header.classList.add('header-hidden');
        } else {
            // Scrolling Up
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});

