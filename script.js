// Mobile menu toggle
const navLinks = document.getElementById('navLinks'),
      hamburger = document.getElementById('hamburger'),
      themeToggle = document.getElementById('themeToggle');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dark / Light mode toggle
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Vanilla-Tilt on skill icons
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 15,
    speed: 400,
    scale: 1.05,
    glare: true,
    'max-glare': 0.2
  });
}
