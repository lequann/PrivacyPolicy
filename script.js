document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.toggle-section');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
  });
});
