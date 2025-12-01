const themeToggleBtn = document.getElementById('moes');
const html = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark-mode');
});


