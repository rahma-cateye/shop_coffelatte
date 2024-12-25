// TOGGLE CLASS ACTIVE
// ketika hamburger menu di click sidebar muncul
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// click di luar sidebar untuk menghilangkan sidebar 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if ((!hamburger.contains(e.target) && !navbarNav.contains(e.target)) 
    )
    { navbarNav.classList.remove('active');}
});

// toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-menu').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// searchform menghilang ketika hamburger menu di click
const searchMenu = document.querySelector('#search-menu');

function handleScreenSizeChange(e) {
    if (e.matches) {
        document.addEventListener('click', handleOutsideClick);
    } else {
        document.removeEventListener('click', handleOutsideClick);
    }
}

function handleOutsideClick(e) {
    if (!searchForm || !searchMenu) return;

    if (!searchForm.contains(e.target) && !searchMenu.contains(e.target)) {
        searchForm.classList.remove('active');
    }
}

const mediaQuery = window.matchMedia("(max-width: 400px)");
mediaQuery.addEventListener('change', handleScreenSizeChange);

handleScreenSizeChange(mediaQuery);

// document.addEventListener('click', function(e) {
//     if ((!search.contains(e.target) && !searchForm.contains(e.target) && !navbar.contains(e.target)))
//     {
//         searchForm.classList.remove('active');
//     }
// })