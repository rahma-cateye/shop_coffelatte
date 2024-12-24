// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.querySelector('.search-form');
const hamburger = document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-menu');
const navbar = document.querySelector('.navbar');

// ketika hamburger menu di click sidebar muncul
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

document.querySelector('#search-menu').onclick = () => {
    searchForm.classList.toggle('active');
};

// click di luar sidebar untuk menghilangkan sidebar 
document.addEventListener('click', function(e) {
    if ((!hamburger.contains(e.target) && !navbarNav.contains(e.target)) 
    )
    { navbarNav.classList.remove('active');}
});

// searchform menghilang ketika hamburger menu di click
function handleScreenSizeChange(e) {
    if (e.matches) {
        document.addEventListener('click', handleOutsideClick);
    } else {
        document.removeEventListener('click', handleOutsideClick);
    }
}

function handleOutsideClick(e) {
    if ((hamburger.contains(e.target))) {
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