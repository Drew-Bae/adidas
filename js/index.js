/* Hero Variables */
const button = document.querySelector('.hero');
const leftCover = document.querySelector('.leftCover');
const rightCover = document.querySelector('.rightCover');
const cursor = document.querySelector('.circle');

/* Search Variables */
const openSearch = document.querySelector('.searchIcon');
const closeSearch = document.querySelector('.searchClose');

/* Nav Variables */
const openLogin = document.querySelector('.userIcon');
const closeLogin = document.querySelector('.close');

/* Main Variables */
const main = document.querySelector('.main');

/* After Hero */
button.addEventListener('click', function handleClick() {
    const changeRightCover = document.getElementById('DeleteRightCover');
    const changeLeftCover = document.getElementById('DeleteLeftCover');
    const deleteLogo = document.getElementById('adidas');

    setTimeout(function() { button.classList.add('animate__animated', 'animate__bounceOut') }, 500);
    leftCover.classList.add('animate__animated', 'animate__slideOutLeft');
    rightCover.classList.add('animate__animated', 'animate__slideOutRight');
    cursor.style.cursor = "default";

    setTimeout(function() { button.classList.add('delete') }, 1400);
    setTimeout(function() { leftCover.classList.add('delete') }, 1400);
    setTimeout(function() { rightCover.classList.add('delete') }, 1400);

    setTimeout(function() { changeRightCover.style.width = "0px" }, 1400);
    setTimeout(function() { changeRightCover.style.border = "0" }, 1400);
    setTimeout(function() { changeLeftCover.style.width = "0px" }, 1400);
    setTimeout(function() { changeLeftCover.style.border = "0" }, 1400);
    setTimeout(function() { deleteLogo.style.width = "0px" }, 1400);

    setTimeout(function() { button.style.display = "unset" }, 1400);
    setTimeout(function() { main.style.position = "unset" }, 1400);
    setTimeout(function() { main.style.top = "unset" }, 1400);
});

/* Search */
/* BUG DOES NOT WORK THE SECOND TIME */
openSearch.addEventListener('click', function handleClick() {
    var element = document.getElementById('search');
    if (element.style.height == 0) {
        element.style.height = "60px";
    } else {
        element.style.height = 0;
    }
});

/*
openSearch.addEventListener('click', function handleClick() {
    const searchSection = document.getElementById('search');
    
    searchSection.style.height = "60px";
});

closeSearch.addEventListener('click', function handleExitClick() {
    const searchSection = document.getElementById('search');

    searchSection.style.height = "0";
})
*/

/* Login */
openLogin.addEventListener('click', function handleClick() {
    const loginSection = document.getElementById('login');

    loginSection.style.width = "22%";
});

closeLogin.addEventListener('click', function handleExitClick() {
    const loginSection = document.getElementById('login');

    loginSection.style.width = "0%";
});

/* Cart */
function toggleCart() {
    var x = document.getElementById("cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}