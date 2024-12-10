document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', (event) => {
        alert(`Navigating to ${card.querySelector('h2').textContent}`);
    });
});
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

