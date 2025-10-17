// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeBtn.textContent = isLight ? '🌙 Dark Mode' : '🌞 Light Mode';
});

// Surprise button
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
btn.addEventListener('click', () => {
  surprise.classList.remove('hidden');
  surprise.innerHTML = `<p style="animation: fadeIn 0.8s;">🎉 CI/CD test successful — Smooth scroll version active!</p>`;
  btn.textContent = 'Clicked ✔';
  btn.disabled = true;
});

// Scroll animation: sections visible on scroll
const sections = document.querySelectorAll('section');
const revealSections = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
};
window.addEventListener('scroll', revealSections);
revealSections();

// Contact form handling
const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  responseDiv.classList.remove('hidden');
  responseDiv.innerHTML = `<p>✅ Thanks ${name}! Your message has been recorded for DevOps CI/CD test.</p>`;
  form.reset();
});
