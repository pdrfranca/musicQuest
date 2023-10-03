const moon = document.querySelector('.fa-moon')

function toggleDarkMode() {
    const body = document.body;
    moon.classList.toggle('fa-moon')
    moon.classList.toggle('fa-sun')
    body.classList.toggle('dark');
}

function checkThemeOnLoad() {
    const body = document.body;
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        body.classList.add('dark');
    }
}

moon.addEventListener('click', toggleDarkMode);

window.addEventListener('load', checkThemeOnLoad);
