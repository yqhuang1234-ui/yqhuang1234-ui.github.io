(function () {
  var root = document.documentElement;

  // Force a fixed light scheme and ignore OS-level dark mode.
  root.setAttribute('data-default-color-scheme', 'light');
  root.setAttribute('data-user-color-scheme', 'light');

  try {
    localStorage.removeItem('Fluid_Color_Scheme');
  } catch (e) {}

  function hideToggleButtons() {
    var desktop = document.getElementById('color-toggle-btn');
    if (desktop) desktop.style.display = 'none';

    var mobile = document.getElementById('mobile-color-toggle-btn');
    if (mobile) mobile.style.display = 'none';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideToggleButtons);
  } else {
    hideToggleButtons();
  }
})();
