const colorThemes = document.querySelectorAll('[name="theme"]');

// Store theme
const storeTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

// Apply theme
const setTheme = function () {
  const activeTheme = localStorage.getItem('theme');

  // Set radio button state
  colorThemes.forEach((themeOption) => {
    themeOption.checked = themeOption.id === activeTheme;
  });

  // Apply class to document element
  if (activeTheme) {
    document.documentElement.className = activeTheme;
  }
};

// Event listeners
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener('change', () => {
    storeTheme(themeOption.id);
    // Update theme immediately after change
    setTheme();
  });
});

document.addEventListener('DOMContentLoaded', setTheme);
