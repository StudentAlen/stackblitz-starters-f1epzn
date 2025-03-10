document.addEventListener('DOMContentLoaded', () => {
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  
  // Load saved theme
  const savedTheme = localStorage.getItem('userTheme');
  if (savedTheme) {
    document.getElementById(savedTheme).checked = true;
  }

  // Save theme selection
  themeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      localStorage.setItem('userTheme', e.target.id);
    });
  });
});