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

// Hero Animation
gsap.from("#hero h1", { y: 100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#hero p", { y: 50, opacity: 0, duration: 1, delay: 0.8 });
gsap.from("#hero button", { scale: 0.8, opacity: 0, duration: 0.8, delay: 1.2 });

// Section Reveal
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

// Typewriter Effect
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const heroP = document.querySelector('#hero p');
    const fullText = "Data Scientist | Machine Learning Engineer | Business Intelligence Analyst";
    typeWriter(heroP, fullText, 50);

    // === PARTICLE CURSOR TRAIL ===
    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 80 },
            color: { value: "#ffd700" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffd700",
                opacity: 0.3,
                width: 1
            }
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.8 } },
                push: { quantity: 4 }
            }
        },
        background: { color: "transparent" }
    });

    // === DARK MODE TOGGLE ===
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
    });
});

console.log('Particles + Dark Mode Activated!');