function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Resume Modal
function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'flex';
    gsap.from(modal, { opacity: 0, scale: 0.8, duration: 0.4, ease: "back.out(1.7)" });
}
function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    gsap.to(modal, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => modal.style.display = 'none' });
}
window.onclick = e => { if (e.target.classList.contains('modal')) closeResumeModal(); };

// Copy text
document.querySelectorAll('.contact-text').forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.dataset.copy).then(() => {
            const txt = el.innerHTML;
            el.innerHTML = "Copied!";
            setTimeout(() => el.innerHTML = txt, 1000);
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

// Init
document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load("tsparticles", { particles: { number: { value: 80 }, color: { value: "#ffd700" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 3, random: true }, move: { enable: true, speed: 6, outModes: "out" }, links: { enable: true, distance: 150, color: "#ffd700", opacity: 0.3, width: 1 } }, interactivity: { events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } }, modes: { grab: { distance: 200, links: { opacity: 0.8 } }, push: { quantity: 4 } } }, background: { color: "transparent" } });
    lucide.createIcons();

    // Sync toggles
    const toggle1 = document.getElementById('dark-mode-toggle');
    const toggle2 = document.getElementById('dark-mode-toggle-hero');
    [toggle1, toggle2].forEach(t => t.addEventListener('change', e => {
        document.body.classList.toggle('dark-mode', e.target.checked);
        toggle1.checked = toggle2.checked = e.target.checked;
    }));
});

// Scroll Animation
let isShrunk = false;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const nav = document.getElementById('floating-nav');
    const portrait = document.querySelector('.hero-portrait');
    const name = document.querySelector('.hero-name');
    const tagline = document.querySelector('.tagline');
    const heroNav = document.querySelector('.hero-nav');
    const brand = document.querySelector('.nav-brand');

    if (scrollY > 150 && !isShrunk) {
        isShrunk = true;
        nav.classList.add('visible', 'scrolled');
        gsap.to(portrait, { width: 44, height: 44, borderRadius: '50%', duration: 0.6, ease: "back.out(1.7)" });
        gsap.to(name, { fontSize: '1.1em', x: -80, duration: 0.6 });
        gsap.to(tagline, { opacity: 0, duration: 0.4 });
        gsap.to(heroNav, { opacity: 0, duration: 0.4 });
        gsap.to(brand, { opacity: 1, x: 0, duration: 0.5, delay: 0.3 });
    } else if (scrollY <= 150 && isShrunk) {
        isShrunk = false;
        nav.classList.remove('visible', 'scrolled');
        gsap.to(portrait, { width: 280, height: 'auto', borderRadius: '20px', duration: 0.6, ease: "back.out(1.7)" });
        gsap.to(name, { fontSize: '3.5em', x: 0, duration: 0.6 });
        gsap.to(tagline, { opacity: 1, duration: 0.5 });
        gsap.to(heroNav, { opacity: 1, duration: 0.5 });
        gsap.to(brand, { opacity: 0, x: -50, duration: 0.3 });
    }

    // Active link
    document.querySelectorAll('section').forEach(sec => {
        const r = sec.getBoundingClientRect();
        if (r.top <= 180 && r.bottom >= 180) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-section="${sec.id}"]`).forEach(l => l.classList.add('active'));
        }
    });
});

// Carousel
let currentIndex = 0;
let autoSlideInterval;
const totalSlides = 3;

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.dot');

    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentIndex);
    });
    dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
    });

    resetAutoSlide();
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Init carousel
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });
    resetAutoSlide();
});

// Nav Click
document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', e => {
        e.preventDefault();
        scrollToSection(l.dataset.section);
    });
});