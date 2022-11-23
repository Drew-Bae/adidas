/* Toggle Nav */
const collapsible = document.getElementById('collapsible');
const collapsibleContent = document.getElementById('collapsible__content');

collapsible.addEventListener("click", function() {
    if (collapsibleContent.classList.contains('collapsible--expanded') === false) {
        collapsible.setAttribute("style", "box-shadow: 0 0 0 3px #666; border-radius: 5px;");
        collapsibleContent.setAttribute("style", "max-height: 100vh; opacity: 1;")
        collapsibleContent.classList.add('collapsible--expanded');
    }
    else if (collapsibleContent.classList.contains('collapsible--expanded') === true) {
        collapsible.setAttribute("style", "inital; border-radius: inital;");
        collapsibleContent.setAttribute("style", "max-height: 0vh; opacity: 0;")
        collapsibleContent.classList.remove('collapsible--expanded');
    }
});

/* Toggle Mobile Search */
const mobileSearchCollapsible = document.getElementById('searchIcon');
const mobileSearchCollapsibleContent = document.getElementById('mobileSearch');

mobileSearchCollapsible.addEventListener("click", function() {
    if (window.innerWidth <= 768) {
        if (mobileSearchCollapsible.classList.contains('x') === false) {
            mobileSearchCollapsibleContent.setAttribute("style", "display: block");
            mobileSearchCollapsible.classList.add('x');
        }
        else if (mobileSearchCollapsible.classList.contains('x') === true) {
            mobileSearchCollapsibleContent.setAttribute("style", "display: none");
            mobileSearchCollapsible.classList.remove('x');
        }
    }
});

/* Toggle Web-User's Search */
const webSearchCollapsible = document.getElementById('searchIcon');
const webSearchCollapsibleContent = document.getElementById('webSearch');

webSearchCollapsible.addEventListener("click", function() {
    if (window.innerWidth > 768) {
        if (webSearchCollapsible.classList.contains('x') === false) {
            webSearchCollapsibleContent.setAttribute("style", "display: block");
            webSearchCollapsible.classList.add('x');
        }
        else if (webSearchCollapsible.classList.contains('x') === true) {
            webSearchCollapsibleContent.setAttribute("style", "display: none");
            webSearchCollapsible.classList.remove('x');
        }
    }
});

/* Toggle Mobile User */
const mobileUserCollapsible = document.getElementById('userIcon');
const mobileUserCollapsibleContent = document.getElementById('login');
const mobileUserClose = document.getElementById('close');
const body = document.getElementById('body');
const nav = document.getElementById('nav');

mobileUserCollapsible.addEventListener("click", function() {
    if (mobileUserCollapsible.classList.contains('x') === false) {
        mobileUserCollapsibleContent.setAttribute("style", "display: block");
        nav.setAttribute("style", "background: rgba(0, 0, 0, 0.006)");
        body.setAttribute("style", "background: rgba(0, 0, 0, 0.4)");
        mobileUserCollapsible.classList.add('x');
    }
    mobileUserClose.addEventListener("click", function() {
        mobileUserCollapsibleContent.setAttribute("style", "display: none");
        body.setAttribute("style", "background: inital");
        nav.setAttribute("style", "background: inital");
        mobileUserCollapsible.classList.remove('x');
    });
});

/* Toggle Cart */
const webCartCollapsible = document.getElementById('cartIcon');
const webCartCollapsibleContent = document.getElementById('webCart');

webCartCollapsible.addEventListener("click", function() {
    if (window.innerWidth > 768) {
        if (webCartCollapsible.classList.contains('x') === false) {
            webCartCollapsibleContent.setAttribute("style", "display: block");
            webCartCollapsible.classList.add('x');
        }
        else if (webCartCollapsible.classList.contains('x') === true) {
            webCartCollapsibleContent.setAttribute("style", "display: none");
            webCartCollapsible.classList.remove('x');
        }
    }
});

/* Dropdown Menu */
const menDropShow = document.getElementById('mobileMen');
const menDropShowContent = document.getElementById('mobileMenShow');
const womenDropShow = document.getElementById('mobileWomen');
const womenDropShowContent = document.getElementById('mobileWomenShow');
const kidsDropShow = document.getElementById('mobileKids');
const kidsDropShowContent = document.getElementById('mobileKidsShow');

menDropShow.addEventListener("click", function() {
    if (window.innerWidth <= 768) {
        if (menDropShow.classList.contains('mobileDropDown') === false) {
            menDropShowContent.setAttribute("style", "display: block;");
            menDropShow.classList.add('mobileDropDown');
        }
        else if (menDropShow.classList.contains('mobileDropDown') === true) {
            menDropShowContent.setAttribute("style", "display: none;");
            menDropShow.classList.remove('mobileDropDown');
        }
    }
}); 

womenDropShow.addEventListener("click", function() {
    if (window.innerWidth <= 768) {
        if (womenDropShow.classList.contains('mobileDropDown') === false) {
            womenDropShowContent.setAttribute("style", "display: block;");
            womenDropShow.classList.add('mobileDropDown');
        }
        else if (womenDropShow.classList.contains('mobileDropDown') === true) {
            womenDropShowContent.setAttribute("style", "display: none;");
            womenDropShow.classList.remove('mobileDropDown');
        }
    }
}); 

kidsDropShow.addEventListener("click", function() {
    if (window.innerWidth <= 768) {
        if (kidsDropShow.classList.contains('mobileDropDown') === false) {
            kidsDropShowContent.setAttribute("style", "display: block;");
            kidsDropShow.classList.add('mobileDropDown');
        }
        else if (kidsDropShow.classList.contains('mobileDropDown') === true) {
            kidsDropShowContent.setAttribute("style", "display: none;");
            kidsDropShow.classList.remove('mobileDropDown');
        }
    }
}); 

/* Banner */
const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;
const slideWidth = 1400;
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