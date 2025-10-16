// show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// button interaction
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

btn.addEventListener('click', () => {
  surprise.classList.remove('hidden');
  surprise.innerHTML = `<p>Nice! You clicked the button — commit this change and push to GitHub to see CI/CD in action 🚀</p>`;
  btn.textContent = 'Clicked ✔';
  btn.disabled = true;
});
