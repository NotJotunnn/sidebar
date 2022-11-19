const btn = document.getElementById('bars');
btn.classList.add('clicked');
btn.classList.toggle('clicked');

function changeVisibilityMenu() {
    const menu = document.getElementById('menu');

    menu.classList.toggle('non-viewable');
    btn.classList.toggle('clicked');
}