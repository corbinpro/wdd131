document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const navUl = navMenu ? navMenu.querySelector('ul') : null;
    
    if (menuBtn && navUl) {
        menuBtn.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
});
