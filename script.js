const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '🔆';
    } else {
        btn.textContent = '🌙';
    }
});
