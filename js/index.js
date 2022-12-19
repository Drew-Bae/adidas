/* Mobile Nav (Open/Close) */
const toggleMobileNavOpen = document.getElementById('collapsible');
const toggleMobileNavClose = document.getElementById('nav-greyarea');
const mobileNavContainer = document.getElementById('nav-mobile-container');

toggleMobileNavOpen.addEventListener("click", function() {
    mobileNavContainer.setAttribute("style", "width: 100vw");
});

toggleMobileNavClose.addEventListener("click", function() {
    mobileNavContainer.setAttribute("style", "width: 0");
});

/* Mobile Nav (Switch To Section) */
const mobileNav = document.getElementById('nav-mobile');
const toggleMenSectionOpen = document.getElementById('toggle-men-section-open');
const toggleMenSectionClose = document.getElementById('toggle-men-section-close');
const mobileMenSection = document.getElementById('nav-men-section');

const toggleWomenSectionOpen = document.getElementById('toggle-women-section-open');
const toggleWomenSectionClose = document.getElementById('toggle-women-section-close');
const mobileWomenSection = document.getElementById('nav-women-section');

const toggleKidsSectionOpen = document.getElementById('toggle-kids-section-open');
const toggleKidsSectionClose = document.getElementById('toggle-kids-section-close');
const mobileKidsSection = document.getElementById('nav-kids-section');

const toggleGiftsSectionOpen = document.getElementById('toggle-gifts-section-open');
const toggleGiftsSectionClose = document.getElementById('toggle-gifts-section-close');
const mobileGiftsSection = document.getElementById('nav-gifts-section');

const toggle3SectionOpen = document.getElementById('toggle-3-section-open');
const toggle3SectionClose = document.getElementById('toggle-3-section-close');
const mobile3Section = document.getElementById('nav-3-section');

const toggleSaleSectionOpen = document.getElementById('toggle-sale-section-open');
const toggleSaleSectionClose = document.getElementById('toggle-sale-section-close');
const mobileSaleSection = document.getElementById('nav-sale-section');

toggleMenSectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobileMenSection.setAttribute("style", "width: 80vw");
});

toggleMenSectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobileMenSection.setAttribute("style", "width: 0");
});

toggleWomenSectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobileWomenSection.setAttribute("style", "width: 80vw");
});

toggleWomenSectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobileWomenSection.setAttribute("style", "width: 0");
});

toggleKidsSectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobileKidsSection.setAttribute("style", "width: 80vw");
});

toggleKidsSectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobileKidsSection.setAttribute("style", "width: 0");
});

toggleGiftsSectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobileGiftsSection.setAttribute("style", "width: 80vw");
});

toggleGiftsSectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobileGiftsSection.setAttribute("style", "width: 0");
});

toggle3SectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobile3Section.setAttribute("style", "width: 80vw");
});

toggle3SectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobile3Section.setAttribute("style", "width: 0");
});

toggleSaleSectionOpen.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 0");
    mobileSaleSection.setAttribute("style", "width: 80vw");
});

toggleSaleSectionClose.addEventListener("click", function() {
    mobileNav.setAttribute("style", "width: 80vw");
    mobileSaleSection.setAttribute("style", "width: 0");
});

/* Nav Appear and Disappear on Scroll */
const scrollNav = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        scrollNav.setAttribute("style", "display: none");
    }
    else {
        scrollNav.setAttribute("style", "display: block");
    }

    lastScrollY = window.scrollY;
});

/* Login (Open/Close) */
const toggleLoginOpen = document.getElementById('loginLogo');
const toggleLoginClose = document.getElementById('close');
const loginSection = document.getElementById('login');

toggleLoginOpen.addEventListener("click", function() {
    loginSection.setAttribute("style", "display: block");
});

toggleLoginClose.addEventListener("click", function() {
    loginSection.setAttribute("style", "display: none");
});

/* Search (Open/Close) */
const toggleSearchOpen = document.getElementById('searchLogo');
const toggleSEarchClose = document.getElementById('toggleSearchClose');
const searchSection = document.getElementById('search');

toggleSearchOpen.addEventListener("click", function() {
    if (toggleSearchOpen.classList.contains('x') === false) {
        searchSection.setAttribute("style", "display: block");
        toggleSearchOpen.classList.add('x');
    }

    else if (toggleSearchOpen.classList.contains('x') === true) {
        searchSection.setAttribute("style", "display: none");
        toggleSearchOpen.classList.remove('x');
    }
});

toggleSEarchClose.addEventListener("click", function() {
    searchSection.setAttribute("style", "display: none");
    searchSection.classList.remove('x');
});

/* Banner */
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;

var slideWidth;
changeWidth();
window.addEventListener('resize', changeWidth);

function changeWidth() {
    if (window.innerWidth <= 768) {
        slideWidth = 400;
    }
    else {
        slideWidth = 1400;
    }
}

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

/* Auto Click */
const a = document.querySelector(`div[data-id="${0}"]`);
const b = document.querySelector(`div[data-id="${1}"]`);
const c = document.querySelector(`div[data-id="${2}"]`);
const d = document.querySelector(`div[data-id="${3}"]`);
const e = document.querySelector(`div[data-id="${4}"]`);

function changeImage() {
    if (a.classList.contains('highlighted') === true) {
        b.click();
    }
    else if (b.classList.contains('highlighted') === true) {
        c.click();
    }
    else if (c.classList.contains('highlighted') === true) {
        d.click();
    }
    else if (d.classList.contains('highlighted') === true) {
        e.click();
    }
    else if (e.classList.contains('highlighted') === true) {
        a.click();
    }
};

setInterval('changeImage();', 5000);

/* Recent Products */
const heart = document.getElementById('duramo');
const heart1 = document.getElementById('TRX');
const heart2 = document.getElementById('NMD');
const heart3 = document.getElementById('campus');
const heart4 = document.getElementById('Samba');
const heart5 = document.getElementById('Mexico');
const heart6 = document.getElementById('Ultraboost');
const heart7 = document.getElementById('World');
const heart8 = document.getElementById('NMD2');
const heart9 = document.getElementById('Trefoil');
const heart10 = document.getElementById('Adicolor');
const heart11 = document.getElementById('Allover');
const heart12 = document.getElementById('Disney');
const heart13 = document.getElementById('Ultraboost2');
const heart14 = document.getElementById('Big');
const heart15 = document.getElementById('Running');
const heart16 = document.getElementById('Terrex');
const heart17 = document.getElementById('Crewneck');
const heart18 = document.getElementById('Mock');


const arrayHeart = [heart, heart1, heart2, heart3, heart4, heart5, heart6, heart7, heart8, heart9,
     heart10, heart11, heart12, heart13, heart14, heart15, heart16, heart17, heart18];

for (const i of arrayHeart ) {
    i.addEventListener("click", function() {
        if (i.classList.contains('x') === false) {
            i.setAttribute("style", "color: red;");
            i.classList.add('x');
        }
        else if (i.classList.contains('x') === true) {
            i.setAttribute("style", "color: grey;");
            i.classList.remove('x');
        }
    });
}

/* New, Trending, & Member Products */
const newProduct = document.getElementById('newProduct');
const memberProduct = document.getElementById('memberProduct');
const newScroll = document.getElementById('newScroll');
const memberScroll = document.getElementById('memberScroll');

newProduct.addEventListener("click", function() {
    if (newProduct.classList.contains('selected') === false) {
        newProduct.setAttribute("style", "background-color: #e0e0e0;");
        memberProduct.setAttribute("style", "background-color: inital");
        newProduct.classList.add('selected');
        memberProduct.classList.remove('selected');

        newScroll.setAttribute("style", "display: flex");
        memberScroll.setAttribute("style", "display: none");
    }
});

memberProduct.addEventListener("click", function() {
    if (memberProduct.classList.contains('selected') === false) {
        newProduct.setAttribute("style", "background-color: white");
        memberProduct.setAttribute("style", "background-color: #e0e0e0");
        newProduct.classList.remove('selected');
        memberProduct.classList.add('selected');

        newScroll.setAttribute("style", "display: none");
        memberScroll.setAttribute("style", "display: flex");
    }
});