window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const progressBars = document.querySelectorAll('.progress');

  setTimeout(() => {
    preloader.style.display = 'none';

    // Após o preloader sumir, inicia as animações das barras
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-progress');
      bar.style.width = value + '%';
    });

  }, 1000); // 1500 = 1.5 segundos
});

// Dark mode
const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
