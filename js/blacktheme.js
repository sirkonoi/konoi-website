document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    // Cambia l'icona tra sole ☀︎ e luna 🌙
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = '⏾';
        localStorage.setItem('theme', 'dark');
    } else {
        this.textContent = '☀︎';
        localStorage.setItem('theme', 'light');
    }
});

// Imposta il tema all'avvio
window.addEventListener('load', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').textContent = '⏾';
    }
});
