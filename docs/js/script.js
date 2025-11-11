// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll event for navbar background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav'); // We'll add nav later
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Typewriter effect for hero text (optional cool feature)
function typeWriter(element, text, speed = 100) {
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add typewriter effect to hero subtitle
    const heroSubtitle = document.querySelector('#hero p');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 50);
    }
    
    // Add click listeners to all "My Journey" buttons
    const journeyButtons = document.querySelectorAll('button[onclick*="scrollToSection"]');
    journeyButtons.forEach(button => {
        button.addEventListener('click', function() {
            scrollToSection('about');
        });
    });
});

// Project card hover effects (we'll add this later)
function initProjectCards() {
    // Coming when we add project cards
}

console.log('Portfolio JS loaded successfully! 🚀');