// Hamburger menu functionality
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('change');
    navigation.classList.toggle('hide');
});
