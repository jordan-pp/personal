document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeText = document.getElementById('themeText');
    const body = document.body;

    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
        themeText.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});
