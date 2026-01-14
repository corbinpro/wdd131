
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let page = document.querySelector('.page');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#1f1f1f";
        page.style.backgroundColor = "#333";
        document.body.style.color = "#ffffff";
        logo.src = "byui-logo-white.webp";
    } else {
        document.body.style.backgroundColor = "#f2f2f2";
        page.style.backgroundColor = "#fff";
        document.body.style.color = "#111";
        logo.src = "byui-logo-blue.webp";
    }
}           
                    