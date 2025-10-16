// show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// on page load animation message
window.addEventListener('load', () => {
  console.log("✅ Site loaded successfully - DevOps auto deployment test");
  const header = document.querySelector('.site-header h1');
  header.style.textShadow = '0 0 10px cyan';
  setTimeout(() => header.style.textShadow = 'none', 1500);
});

// button interaction
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

btn.addEventListener('click', () => {
  surprise.classList.remove('hidden');
  surprise.innerHTML = `
    <p style="animation: fadeIn 0.8s ease;">🎉 Great job! This version was updated via CI/CD.</p>
  `;
  btn.textContent = 'Clicked ✔';
  btn.disabled = true;

  // add a fun temporary color animation to body
  const body = document.body;
  body.style.background = 'linear-gradient(180deg, #111827, #0f172a, #0ea5e9)';
  setTimeout(() => {
    body.style.background = 'linear-gradient(180deg,var(--bg), #0b1120)';
  }, 1500);
});

