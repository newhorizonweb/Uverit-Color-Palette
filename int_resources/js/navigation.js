function baseNav() {
}
function backNav() {
}
let footerDate = new Date().getFullYear();
const footerContent = "<div class='footer'>" +
    "<div class='wrapper'>" +
    "<div class='brand'>" +
    "<div id='brand-logo' onclick='scrollToTop()'>" +
    "<img src='int_resources/img/uverit-w.svg' alt='Business logo' oncontextmenu='window.event.returnValue=false;' id='footer-scrolltop'>" +
    "</div>" +
    "<div id='socials'>" +
    "<h6>Usługi na Fiverr:</h6>" +
    "<a href='https://www.fiverr.com/new_horizon_web' class='social-btn' target='_blank' rel='noreferrer'>" +
    "<img src='../img/fiicon.svg' alt='Fiverr icon'>" +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='credits'>" +
    "<a href='https://www.fiverr.com/new_horizon_web' target='_blank' rel='noreferrer'>" +
    "© Uverit Color Palette " + footerDate +
    "</a>" +
    "</div>" +
    "</div>";
function baseFooter() {
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = footerContent;
}
