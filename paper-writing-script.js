const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');
const physicsButton = document.querySelector('.physics-dropdown .option-button');
const dropdownContent = document.querySelector('.physics-dropdown .dropdown-content');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

physicsButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
});
const focusModeButton = document.querySelector('.focus-mode-button');

focusModeButton.addEventListener('click', () => {
    // Redirect to the focus page
    window.location.href = 'focused.html';
});
