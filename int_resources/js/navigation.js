const paletteVersion = "v2.7.0";
/* Page Arrays */
// Arrays with page urls and names
let filesArray;
if (document.title === "Uverit Color Palette") {
    filesArray = [
        "ColorPalette.html",
        "int_resources/pages/ColorMeaning.html",
        "int_resources/pages/ColorChart.html",
        "int_resources/pages/ColorTones.html",
        "int_resources/pages/ColorSaturation.html",
        "int_resources/pages/ColorGradient.html",
        "int_resources/pages/ColorTips.html",
        "int_resources/pages/ColorLayout.html",
        "int_resources/pages/Typefaces.html"
    ];
}
else {
    filesArray = [
        "../../ColorPalette.html",
        "ColorMeaning.html",
        "ColorChart.html",
        "ColorTones.html",
        "ColorSaturation.html",
        "ColorGradient.html",
        "ColorTips.html",
        "ColorLayout.html",
        "Typefaces.html"
    ];
}
let filesNames = [
    "Color Palette",
    "Color Meaning",
    "Color Chart",
    "Color Tones",
    "Color Saturation",
    "Color Gradient",
    "Color Tips",
    "Color Layout",
    "Typefaces"
];
// The number of typeface pages
const typefacePages = 3;
// Remove the typeface pages
if (typefaces == false) {
    filesArray.splice(-typefacePages, typefacePages);
    filesNames.splice(-typefacePages, typefacePages);
}
/* Navbar Dots */
// Create page link elements from the array
// Find the current page in the array based on window pathname
let navbarDots = "";
// Had to convert the pathname (page URL title) to lower case or it wouldn't work
const thisUrl = window.location.pathname.split('/').pop().toLowerCase();
let thisUrlNumber = 0;
for (let file = 0; file < filesArray.length; file++) {
    navbarDots += `<a href="${filesArray[file]}" class='navbar-dot'></a>`;
    // Convert array urls to lower case and get the current site
    const arrayFile = filesArray[file].toLowerCase();
    if (arrayFile.includes(thisUrl)) {
        thisUrlNumber = file;
    }
}
/* Navbar Arrows */
// Set the prev / next arrow buttons based on the current page
let prevPageUrl = "";
let prevPageTitle = "";
if (thisUrlNumber > 0) {
    prevPageUrl = filesArray[thisUrlNumber - 1];
    prevPageTitle = filesNames[thisUrlNumber - 1];
}
else {
    prevPageUrl = filesArray[filesArray.length - 1];
    prevPageTitle = filesNames[filesArray.length - 1];
}
let nextPageUrl = "";
let nextPageTitle = "";
if (thisUrlNumber < filesArray.length - 1) {
    nextPageUrl = filesArray[thisUrlNumber + 1];
    nextPageTitle = filesNames[thisUrlNumber + 1];
}
else {
    nextPageUrl = filesArray[0];
    nextPageTitle = filesNames[0];
}
/* Create the navigation elements */
// Get the page name
const thisDocTitle = filesNames[thisUrlNumber];
// Create the nav elements
const baseNavContent = "<div class='nav-wrapper wrapper'>" +
    `<a href='${filesArray[0]}' class='nav-logo uverit-logo'>` +
    uveritLogo +
    "</a>" +
    "<div class='navbar'>" +
    `<a href="${prevPageUrl}" class='navbar-arrow prev-arrow'>` +
    arrowIcon +
    "</a>" +
    "<div class='navbar-inner'>" +
    "<div class='nav-title-div'>" +
    "<h4 class='nav-page-title'>" + thisDocTitle + "</h4>" +
    "</div>" +
    "<div class='navbar-dots'>" +
    navbarDots +
    "</div>" +
    "</div>" +
    `<a href="${nextPageUrl}" class='navbar-arrow next-arrow'>` +
    arrowIcon +
    "</a>" +
    "</div>" +
    "</div>";
// Insert the nav elements, make sure plonkas know their place
function baseNav() {
    const nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = baseNavContent;
    /* Change the nav page title on navbar elements hover */
    const prevPageArrow = document.querySelector(".prev-arrow");
    const nextPageArrow = document.querySelector(".next-arrow");
    const pageArrows = document.querySelectorAll(".prev-arrow, .next-arrow");
    const navPageTitle = document.querySelector(".nav-page-title");
    const navDots = document.querySelectorAll(".navbar-dot");
    // Mark the current page (dots)
    navDots[thisUrlNumber].classList.add("current-page");
    // Set a small "fade-in" animation when navigating
    function pageTitleAnimation() {
        navPageTitle.style.transition = "none";
        navPageTitle.style.top = "-100%";
        setTimeout(function () {
            navPageTitle.style.transition = "";
            navPageTitle.style.top = "0";
        }, 100);
    }
    // Previous Arrow
    prevPageArrow.addEventListener("mouseenter", function () {
        pageTitleAnimation();
        navPageTitle.innerHTML = prevPageTitle;
        let pageNumber;
        if (thisUrlNumber > 0) {
            pageNumber = thisUrlNumber - 1;
        }
        else {
            pageNumber = filesArray.length - 1;
        }
        navDots[pageNumber].classList.add("hovered-page");
    });
    // Next Arrow
    nextPageArrow.addEventListener("mouseenter", function () {
        pageTitleAnimation();
        navPageTitle.innerHTML = nextPageTitle;
        let pageNumber;
        if (thisUrlNumber < filesArray.length - 1) {
            pageNumber = thisUrlNumber + 1;
        }
        else {
            pageNumber = 0;
        }
        navDots[pageNumber].classList.add("hovered-page");
    });
    // Change the nav page title back to the current page title 
    // Delete the hovered-page class
    let debounceTimer;
    pageArrows.forEach(pageArrow => {
        pageArrow.addEventListener("mouseleave", function () {
            debounceTimer = setTimeout(function () {
                pageTitleAnimation();
                navPageTitle.innerHTML = thisDocTitle;
                navDots.forEach(function (navDot) {
                    navDot.classList.remove("hovered-page");
                });
            }, 10);
        });
    });
    // Nav Dots
    Array.from(navDots).forEach((dot, index) => {
        dot.addEventListener("mouseover", (e) => {
            if (thisUrlNumber !== index) {
                pageTitleAnimation();
            }
            const hoverIndex = Array.from(navDots).indexOf(e.target);
            navPageTitle.innerHTML = filesNames[hoverIndex];
        });
    });
    document.querySelector(".navbar-dots")?.addEventListener("mouseleave", (e) => {
        if (navPageTitle.innerHTML !== thisDocTitle) {
            pageTitleAnimation();
        }
        navPageTitle.innerHTML = thisDocTitle;
    });
}
/* Footer */
const footerDate = new Date().getFullYear();
const footerContent = "<div class='wrapper'>" +
    "<div class='brand'>" +
    "<div class='brand-logo uverit-logo' onclick='scrollToTop()'>" +
    uveritLogo +
    "</div>" +
    "<div class='socials'>" +
    "<h6>Services on Fiverr</h6>" +
    "<a href='https://www.fiverr.com/new_horizon_web' class='social-btn' target='_blank' rel='noreferrer'>" +
    fiIcon +
    "</a>" +
    "</div>" +
    "</div>" +
    "<div class='credits'>" +
    "<a href='https://www.fiverr.com/new_horizon_web' target='_blank' rel='noreferrer'>" +
    "© Uverit Color Palette " + paletteVersion + " - " + footerDate +
    "</a>" +
    "</div>" +
    "</div>";
function baseFooter() {
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = footerContent;
}
/* Main Header */
const mainHeaderContent = "<div class='pdf-logo uverit-logo'>" +
    uveritLogo +
    "</div>" +
    "<h1 class='mh-title'>" + thisDocTitle + "<h1>" +
    "<h2 class='mh-brand'>" + cpName + "<h2>";
function mainHeader() {
    document.querySelector(".main-header").innerHTML = mainHeaderContent;
}
