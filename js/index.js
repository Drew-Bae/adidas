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

/* Banner */
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;
const slideWidth = 1590;
const bannerColor = document.querySelector(".banner");

const highlightThumbnail = () => {
  thumbnailContainer
    .querySelectorAll('div.highlighted')
    .forEach(el => el.classList.remove('highlighted'));
  const index = Math.floor(slideGallery.scrollLeft / slideWidth);
  thumbnailContainer
    .querySelector(`div[data-id="${index}"]`)
    .classList.add('highlighted');
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(index * slideWidth, 0);
  console.log(el);
};

thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}"></div>`)
  .join('');

thumbnailContainer.querySelectorAll('div').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => highlightThumbnail());

highlightThumbnail();

/* Change Banner Background */
const a = document.querySelector(`div[data-id="${0}"]`);
const b = document.querySelector(`div[data-id="${1}"]`);
const c = document.querySelector(`div[data-id="${2}"]`);
const d = document.querySelector(`div[data-id="${3}"]`);
const e = document.querySelector(`div[data-id="${4}"]`);

a.addEventListener('click', function changeBannera() {
    if (a.classList.contains('highlighted') === true) {
        bannerColor.style.background = "#7e221d";
    }
})
b.addEventListener('click', function changeBannerb() {
    bannerColor.style.background = "#1b4767";
})
c.addEventListener('click', function changeBannerb() {
    bannerColor.style.background = "#a6cbb2";
})
d.addEventListener('click', function changeBannerb() {
    bannerColor.style.background = "pink";
})
e.addEventListener('click', function changeBannerb() {
    bannerColor.style.background = "#919191";
})
slideGallery.addEventListener('scroll', function changeBannerb() {
    if (a.classList.contains('highlighted') === true) {
        bannerColor.style.background = "#7e221d";
    }
    else if (b.classList.contains('highlighted') === true) {
        bannerColor.style.background = "#1b4767";
    }
    else if (c.classList.contains('highlighted') === true) {
        bannerColor.style.background = "#a6cbb2";
    }
    else if (d.classList.contains('highlighted') === true) {
        bannerColor.style.background = "pink";
    }
    else if (e.classList.contains('highlighted') === true) {
        bannerColor.style.background = "#919191";
    }
})