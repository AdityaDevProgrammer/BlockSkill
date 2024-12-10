const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});
function gotoStudy() {
    window.location.href = 'study.html';
}
function gotoLectures() {
    window.location.href = 'lectures.html';
}
