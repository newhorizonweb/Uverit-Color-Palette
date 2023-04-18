/* Remove transition on page load (remove flash) */
document.getElementsByTagName("body")[0].classList.add("remove-transition");
setTimeout(function () {
    document.getElementsByTagName("body")[0].classList.remove("remove-transition");
}, 20);
/* Background gradient */
// Gradient speed (0.1 slow, 10 fast as F) - currently 0.5 in (window.pageYOffset * ->0.5<-)...
// Gradient direction (L-R = speed positive, CSS style left:0;)
// Gradient direction (R-L = speed negative, CSS style left:-100%;)
const grad = document.getElementById('main-bg-grad');
const mblDevice = 768;
let position = 0;
// Calculate translate3D for the gradient image
function updateGradient() {
    position = (window.pageYOffset * 1) % grad.clientWidth / 2;
    grad.style.transform = `translate3d(${position}px, 0, 0)`;
}
window.addEventListener('load', updateGradient);
// Use this so the eventListener can be removed
let scrollListener = function () {
    requestIdleCallback(updateGradient);
};
// If the screen is wider than 768px, add the updateGradient();
if (window.innerWidth > mblDevice) {
    window.addEventListener("scroll", scrollListener, { passive: true });
}
// Add / remove the scroll eventListener
window.addEventListener("resize", function () {
    if (window.innerWidth > mblDevice) {
        window.addEventListener("scroll", scrollListener, { passive: true });
    }
    else {
        grad.style.transform = `translate3d(0, 0, 0)`;
        window.removeEventListener("scroll", scrollListener);
    }
});
/* Set the page to always load at the left side */
function scrollToTopLeft() {
    setTimeout(function () {
        window.scrollTo(0, window.pageYOffset);
    }, 0);
}
window.addEventListener('load', scrollToTopLeft);
window.addEventListener('resize', scrollToTopLeft);
/* Scroll-to-top */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
// Debouncing function
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}
let scrollTopBtn = document.getElementById("scrolltop");
function scrollTopClass() {
    if (window.scrollY > window.innerHeight / 0.7) {
        scrollTopBtn.classList.add("scrolltop-displayed");
    }
    else {
        scrollTopBtn.classList.remove("scrolltop-displayed");
    }
}
// When it doesn't detect this id on the page the nav isn't hiding after scroll
if (scrollTopBtn) {
    scrollTopClass();
    window.addEventListener("scroll", debounce(scrollTopClass, 80));
}
// Embed the svg arrow icon
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".scrollarrow").innerHTML = arrowIcon;
});
/* Print the page (PDF) */
// Print / download PDF on click
document.querySelector(".pdf-btn").addEventListener("click", function () {
    window.print();
});
// Add the PDF icon
document.querySelector(".pdf-btn").innerHTML += pdfIcon;
