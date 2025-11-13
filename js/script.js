function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function scrollToProject(index) {
    const id = `project-${index}`;
    scrollToSection(id);
    setTimeout(() => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.project-content').forEach(c => c.classList.remove('active'));
        document.querySelector(`#${id} .toggle-btn[data-mode="business"]`).classList.add('active');
        document.querySelector(`#${id} .project-content.business`).classList.add('active');
    }, 500);
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        const parent = btn.closest('.project-deep');
        parent.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.project-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        parent.querySelector(`.project-content.${mode}`).classList.add('active');
    });
});

function initTheme() {
    const toggle = document.getElementById('dark-mode-toggle');
    const saved = localStorage.getItem('theme');
    const isDark = saved !== 'light';
    document.body.classList.toggle('dark-mode', isDark);
    toggle.checked = isDark;
    toggle.addEventListener('change', () => {
        const willDark = toggle.checked;
        document.body.classList.toggle('dark-mode', willDark);
        localStorage.setItem('theme', willDark ? 'dark-mode' : 'light');
    });
}

lucide.createIcons();
document.addEventListener('DOMContentLoaded', initTheme);