// show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// theme toggle button
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeBtn.textContent = isLight ? '🌙 Dark Mode' : '🌞 Light Mode';
  console.log(`Theme changed to: ${isLight ? 'Light' : 'Dark'}`);
});

// on page load effect
window.addEventListener('load', () => {
  console.log("✅ Site loaded successfully - Light/Dark mode version deployed");
  const header = document.querySelector('.site-header h1');
  header.style.textShadow = '0 0 10px var(--accent)';
  setTimeout(() => (header.style.textShadow = 'none'), 1000);
});

// surprise button logic
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

btn.addEventListener('click', () => {
  surprise.classList.remove('hidden');
  surprise.innerHTML = `
    <p style="animation: fadeIn 0.8s ease;">🎉 CI/CD test successful — Theme toggle working too!</p>
  `;
  btn.textContent = 'Clicked ✔';
  btn.disabled = true;

  // background flash animation
  const body = document.body;
  body.style.background = 'linear-gradient(180deg, #111827, #0ea5e9)';
  setTimeout(() => {
    body.style.background = 'var(--bg)';
  }, 1200);
});
