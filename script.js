// This script handles animations and interactive elements for the website.
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Anchor Links ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, {
                duration: 2.5,
                scrollTo: targetId,
                ease: "power3.inOut"
            });
        });
    });

    // --- Hide/Show Header on Scroll ---
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // --- Section Animations on Scroll ---

    // 1. Problem Section Paragraph Fade-in
    gsap.from(".problem-section .subheader", {
        scrollTrigger: {
            trigger: ".problem-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
    });

    // 2. Generic Animation for Other Sections
    const sectionsToAnimate = [
        '.solution-section',
        '.how-it-works-section',
        '.story-badge-section',
        '.badges-section',
        '.testimonial-section',
        '.change-section'
    ];

    sectionsToAnimate.forEach(section => {
        const elements = gsap.utils.toArray(section + " > .container > *");

        gsap.from(elements, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2, // Adds a small delay between each element animating in
            ease: "power3.out"
        });
    });

    // 3. Social Media Section Animation
    gsap.utils.toArray('.social-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });

    // --- Mobile Menu Logic ---
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    menuButton.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

});

