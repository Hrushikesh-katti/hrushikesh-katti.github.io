// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation: Fade in + slide up
gsap.from("#hero h1", { y: 100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#hero p", { y: 50, opacity: 0, duration: 1, delay: 0.8 });
gsap.from("#hero button", { scale: 0.8, opacity: 0, duration: 0.8, delay: 1.2 });

// Section Reveal on Scroll
document.querySelectorAll('section').forEach((section) => {
    gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

// Typewriter Effect for Hero Subtitle
function typeWriter(element, text, speed = 60) {
    let i = 0;
    element.innerHTML = '';
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const heroP = document.querySelector('#hero p');
    const fullText = "Data Scientist | Machine Learning Engineer | Business Intelligence Analyst";
    typeWriter(heroP, fullText, 50);
});

console.log('GSAP Animations Loaded!');