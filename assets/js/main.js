document.addEventListener('DOMContentLoaded', function () {
  // Mobile navbar burger toggle
  const navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
  }

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      // Save preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
      } else {
        localStorage.setItem('darkMode', 'false');
      }
    });
  }

  // Apply dark mode if previously set
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
