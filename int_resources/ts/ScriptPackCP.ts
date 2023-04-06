    
    /* Remove transition on page load (remove flash) */

document.getElementsByTagName("body")[0].classList.add("remove-transition");
setTimeout(function(){
    document.getElementsByTagName("body")[0].classList.remove("remove-transition");
}, 20);

    /* Dark Mode */
/*
// It's not in order to maximize the performance (don't flash light theme on page load)

let dmBtn = document.getElementsByClassName("dm-btn")[0];
let body = document.getElementsByTagName("body")[0];

// Set visit counter
var visit: any = localStorage.getItem('visit');

// If user's device is set to dark mode, set it on the first page visit
if (visit == null){
    visit = 0;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dmBtn.checked = true;
        localStorage.setItem("dm-checkbox", dmBtn.checked);
    }
} 

// Get the dark mode state and set it to the dm toggle
let dmState = JSON.parse(localStorage.getItem("dm-checkbox"));    
if (dmState){
    body.classList.add("dark-mode");
}

// Check the dark-mode toggle
dmBtn.checked = dmState;

// Update the visit counter
visit++
localStorage.setItem('visit', visit);

// Set dark mode on toggle
dmBtn.addEventListener("click", function(){
    localStorage.setItem("dm-checkbox", dmBtn.checked);
    let dmState = JSON.parse(localStorage.getItem("dm-checkbox"));
    
    if (dmState){
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

*/









    /* Set the page to always load at the left side */

function scrollToTopLeft(){
    setTimeout(function(){
        window.scrollTo(0, window.pageYOffset);
    }, 0);
}

window.addEventListener('load', scrollToTopLeft);
window.addEventListener('resize', scrollToTopLeft);

    /* Scroll-to-top */

function scrollToTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

// Debouncing function
function debounce(func, wait){
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}

let scrollTopBtn: HTMLElement | null = document.getElementById("scrolltop");

function scrollTopClass(){
    if (window.scrollY > window.innerHeight / 0.7){
        scrollTopBtn!.classList.add("scrolltop-displayed");
    } else {
        scrollTopBtn!.classList.remove("scrolltop-displayed");
    }
}

// When it doesn't detect this id on the page the nav isn't hiding after scroll
if (scrollTopBtn){ 
    scrollTopClass();
    window.addEventListener('scroll', debounce(scrollTopClass, 80));
}

// Embed the svg arrow icon
const scrollArrowIcon: string = "<svg class='scrollicon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 426.3 255.4' xmlns:v='https://vecta.io/nano'><path d='M414 12.2l-.3-.2a43.13 43.13 0 0 0-29.4-12C373-.1 362.1 4.4 354 12.4L213.6 153.6h0 0 0L73.2 12.4C65.1 4.4 54.2-.1 42.9 0a43.13 43.13 0 0 0-29.4 12l-.3.2C-3.3 29-3.1 56 13.5 72.6l170.7 170.6c8.2 8 18.8 12.1 29.3 12.2h.1 0 0 0c10.6-.1 21.2-4.2 29.4-12.2L413.7 72.6c16.6-16.6 16.8-43.6.3-60.4z'/></svg>";

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".scrollarrow")!.innerHTML = scrollArrowIcon;
});

    /* Soften the bg height change (mobile browser address bar) */
/*
function handleResize() {
  requestAnimationFrame(() => {
    let winHeight: number = window.innerHeight;
    const mainBg: HTMLElement | null = document.querySelector(".main-background");
    mainBg!.style.height = winHeight + "px";
    console.log("sdfsdf")
  });
}
window.addEventListener('scroll', handleResize);
window.addEventListener('resize', handleResize);
handleResize();
*/




