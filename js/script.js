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

// GSAP Animations (only entrance)
gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero h1", { y: 100, opacity: 0, duration: 1, delay: 0.5 });
gsap.from("#hero p", { y: 50, opacity: 0, duration: 1, delay: 0.8 });
gsap.from("#hero button", { scale: 0.8, opacity: 0, duration: 0.8, delay: 1.2 });

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

// Typewriter
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

// Modals
function openModal(url) {
    const modal = document.getElementById('demo-modal');
    const iframe = document.getElementById('demo-iframe');
    iframe.src = url;
    modal.style.display = 'flex';
    gsap.from(modal, { opacity: 0, scale: 0.8, duration: 0.4, ease: "back.out(1.7)" });
}

function closeModal() {
    const modal = document.getElementById('demo-modal');
    gsap.to(modal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => {
            modal.style.display = 'none';
            document.getElementById('demo-iframe').src = '';
        }
    });
}

function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'flex';
    gsap.from(modal, { opacity: 0, scale: 0.8, duration: 0.4, ease: "back.out(1.7)" });
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    gsap.to(modal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => modal.style.display = 'none'
    });
}

window.onclick = function(event) {
    const demoModal = document.getElementById('demo-modal');
    const resumeModal = document.getElementById('resume-modal');
    if (event.target === demoModal) closeModal();
    if (event.target === resumeModal) closeResumeModal();
};

// === COPY TEXT ONLY (NO HOVER LOGIC) ===
document.querySelectorAll('.contact-text').forEach(text => {
    const copyText = text.getAttribute('data-copy');
    text.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(copyText).then(() => {
            const original = text.innerHTML;
            text.innerHTML = "Copied!";
            setTimeout(() => text.innerHTML = original, 1000);
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const heroP = document.querySelector('#hero p');
    const fullText = "Data Scientist | Machine Learning Engineer | Business Intelligence Analyst";
    typeWriter(heroP, fullText, 50);

    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 80 },
            color: { value: "#ffd700" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 6, direction: "none", outModes: "out" },
            links: { enable: true, distance: 150, color: "#ffd700", opacity: 0.3, width: 1 }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 200, links: { opacity: 0.8 } }, push: { quantity: 4 } }
        },
        background: { color: "transparent" }
    });

    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
    });

    lucide.createIcons();  // THIS LINE IS CRITICAL — ICONS RENDER HERE
});

console.log('ICONS + COPY + NO HOVER BUGS = FINAL');