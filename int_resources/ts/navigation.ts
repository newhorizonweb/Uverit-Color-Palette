
const paletteVersion:string = "v2.9.8";

// Uverit URL
const uveritLink:string = "https://github.com/newhorizonweb";

    /* Page Arrays */

// Arrays with page urls and names
let filesArray:string[];

if (document.title === "Uverit Color Palette"){
    filesArray = [
        "index.html",
        "int_resources/pages/ColorMeaning.html",
        "int_resources/pages/ColorChart.html",
        "int_resources/pages/ColorTones.html",
        "int_resources/pages/ColorSaturation.html",
        "int_resources/pages/ColorGradient.html",
        "int_resources/pages/ColorTips.html",
        "int_resources/pages/Typefaces.html",
        "int_resources/pages/TypeSpecimens.html",
        "int_resources/pages/CharacterSets.html",
        "int_resources/pages/ColorLayout.html"
    ];
} else {
    filesArray = [
        "../../index.html",
        "ColorMeaning.html",
        "ColorChart.html",
        "ColorTones.html",
        "ColorSaturation.html",
        "ColorGradient.html",
        "ColorTips.html",
        "Typefaces.html",
        "TypeSpecimens.html",
        "CharacterSets.html",
        "ColorLayout.html"
    ];
}

let filesNames:string[] = [
    "Color Palette",
    "Color Meaning",
    "Color Chart",
    "Color Tones",
    "Color Saturation",
    "Color Gradient",
    "Color Tips",
    "Typefaces",
    "Type Specimens",
    "Character Sets",
    "Color Layout"
];

// The number of typeface pages
const typefacePages:number = 3;

// Remove the typeface pages
if (typefaces == false){
    const startIndex = filesNames.indexOf("Typefaces");
    if (startIndex !== -1) {
        filesArray.splice(startIndex, typefacePages);
        filesNames.splice(startIndex, typefacePages);
    }
}

    /* Navbar Dots */

// Create page link elements from the array
// Find the current page in the array based on window pathname
let navbarDots:string = "";

// Had to convert the pathname (page URL title) to lower case or it wouldn't work
const thisUrl:string = (window.location.pathname.split('/').pop() as string).toLowerCase();
let thisUrlNumber:number = 0;

for (let file = 0; file < filesArray.length; file++){
    navbarDots += `<a href="${filesArray[file]}" class='navbar-dot'></a>`;

    // Convert array urls to lower case and get the current site
    const arrayFile:string = filesArray[file].toLowerCase();
    if (arrayFile.includes(thisUrl)){
        thisUrlNumber = file;
    }
}
console.log(thisUrlNumber)
    /* Navbar Arrows */

// Set the prev / next arrow buttons based on the current page
let prevPageUrl: string = "";
let prevPageTitle: string = "";

if (thisUrlNumber > 0){
    prevPageUrl = filesArray[thisUrlNumber - 1];
    prevPageTitle = filesNames[thisUrlNumber - 1];
} else {
    prevPageUrl = filesArray[filesArray.length - 1];
    prevPageTitle = filesNames[filesArray.length - 1];
}

let nextPageUrl: string = "";
let nextPageTitle: string = "";

if (thisUrlNumber < filesArray.length - 1){
    nextPageUrl = filesArray[thisUrlNumber + 1];
    nextPageTitle = filesNames[thisUrlNumber + 1];
} else {
    nextPageUrl = filesArray[0];
    nextPageTitle = filesNames[0];
}

    /* Create the navigation elements */

// Get the page name
const thisDocTitle:string = filesNames[thisUrlNumber];

// Create the nav elements
const baseNavContent: string =  
"<div class='nav-wrapper wrapper'>" +

    `<a href='${filesArray[0]}' class='nav-logo uverit-logo'>` +
        uveritLogo +
    "</a>" +

    "<div class='navbar'>" +
        `<a href="${prevPageUrl}" class='navbar-arrow prev-arrow'>` +
            arrowIcon +
        "</a>" +

        "<div class='navbar-inner'>" +
            "<div class='nav-title-div'>" +
                "<h4 class='nav-page-title'>"+thisDocTitle+"</h4>" +
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
function baseNav(){
    const nav: HTMLElement = document.getElementsByTagName("nav")[0];
    nav.innerHTML = baseNavContent;

        /* Change the nav page title on navbar elements hover */

    const prevPageArrow:HTMLElement | null = document.querySelector(".prev-arrow");
    const nextPageArrow:HTMLElement | null = document.querySelector(".next-arrow");
    const pageArrows:NodeListOf<Element> = document.querySelectorAll(".prev-arrow, .next-arrow");
    const navPageTitle:HTMLElement | null = document.querySelector(".nav-page-title");
    const navDots:NodeListOf<HTMLElement> = document.querySelectorAll(".navbar-dot");

    // Mark the current page (dots)
    navDots[thisUrlNumber].classList.add("current-page");

    // Set a small "fade-in" animation when navigating
    function pageTitleAnimation(){
        navPageTitle!.style.transition = "none";
        navPageTitle!.style.top = "-100%";

        setTimeout(function(){
            navPageTitle!.style.transition = "";
            navPageTitle!.style.top = "0";
        }, 100);
    }

    // Previous Arrow
    prevPageArrow!.addEventListener("mouseenter", function(){
        pageTitleAnimation();
        navPageTitle!.innerHTML = prevPageTitle;

        let pageNumber:number;

        if (thisUrlNumber > 0){
            pageNumber = thisUrlNumber - 1;
        } else {
            pageNumber = filesArray.length - 1;
        }

        navDots[pageNumber].classList.add("hovered-page");
    });

    // Next Arrow
    nextPageArrow!.addEventListener("mouseenter", function(){
        pageTitleAnimation();
        navPageTitle!.innerHTML = nextPageTitle;

        let pageNumber:number;

        if (thisUrlNumber < filesArray.length - 1){
            pageNumber = thisUrlNumber + 1;
        } else {
            pageNumber = 0;
        }

        navDots[pageNumber].classList.add("hovered-page");
    });

    // Change the nav page title back to the current page title 
    // Delete the hovered-page class
    let debounceTimer: number;

    pageArrows!.forEach(pageArrow => {
        pageArrow!.addEventListener("mouseleave", function(){
            debounceTimer = setTimeout(function(){
                pageTitleAnimation();
                navPageTitle!.innerHTML = thisDocTitle;

                navDots.forEach(function(navDot){
                    navDot.classList.remove("hovered-page");
                });
            }, 10);
        });
    });

    // Nav Dots
    Array.from(navDots).forEach((dot: HTMLElement, index: number) => {
        dot.addEventListener("mouseover", (e: MouseEvent) => {
            if (thisUrlNumber !== index){
                pageTitleAnimation();
            }
            
            const hoverIndex = Array.from(navDots).indexOf(e.target as HTMLElement);
            navPageTitle!.innerHTML = filesNames[hoverIndex];
        });
    });

    document.querySelector(".navbar-dots")?.addEventListener("mouseleave", (e) => {
        if (navPageTitle!.innerHTML !== thisDocTitle){
            pageTitleAnimation();
        }

        navPageTitle!.innerHTML = thisDocTitle;
    });
}

    /* Footer */

const footerContent: string =  
"<div class='wrapper'>" +
    "<div class='brand'>" +
        "<div class='brand-logo uverit-logo' onclick='scrollToTop()'>" +
            uveritLogo +
        "</div>" +

        "<div class='socials'>" +
            "<h6>Uverit on GitHub</h6>" +
            `<a href='${uveritLink}' class='social-btn' target='_blank' rel='noreferrer'>` +
                footerSocialIcon +
            "</a>"+
        "</div>" +
    "</div>" +

    "<div class='credits'>" +
        `<a href='${uveritLink}' target='_blank' rel='noreferrer'>` + 
            "© Uverit Color Palette " + paletteVersion + " - 2024</a>" +
    "</div>" +
"</div>";

function baseFooter(){
    const footer:HTMLElement = document.getElementsByTagName("footer")[0];
    footer.innerHTML = footerContent;
}

    /* Main Header */

const mainHeaderContent:string = 
"<div class='pdf-logo uverit-logo'>" +
    uveritLogo +
"</div>" +
"<h1 class='mh-title'>" + thisDocTitle + "<h1>" +
"<h2 class='mh-brand'>" + cpName + "<h2>";

function mainHeader(){
    document.querySelector(".main-header")!.innerHTML = mainHeaderContent;
}