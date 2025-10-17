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
  surprise.innerHTML = `<p style="animation: fadeIn 0.8s;">🎉 CI/CD test v5 successful — Projects added!</p>`;
  btn.textContent = 'Clicked ✔';
  btn.disabled = true;
});

// Scroll animation
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

// Contact form
const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('formResponse');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  if (!name) return alert("Please enter your name!");
  responseDiv.classList.remove('hidden');
  responseDiv.innerHTML = `<p>✅ Thanks ${name}! Your message has been recorded in v5.</p>`;
  form.reset();
});

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
