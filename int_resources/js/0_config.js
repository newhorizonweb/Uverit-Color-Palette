/* CP Program Settings */
// Dark Mode (true/false)
const darkMode = false;
// Color Palette Color Names (Main, Accent, etc.)
const cpColorNames = [
    "Secondary",
    "Main",
    "Background",
    "Accent",
    "Secondary Accent"
];
/* CP Brand Settings */
// Color Palette Name
const cpName = "Uverit";
// Main Color
let ucp1 = "#07ABDB";
const ucp1name = "Cerulean";
const ratio1 = 25;
// Secondary Color
let ucp1a = "#62D2FD";
const ucp1aname = "Malibu";
const ratio1a = 15;
// Accent Color
let ucp2 = "#CC1EEC";
const ucp2name = "Neon Purple";
const ratio2 = 15;
// Secondary Accent Color
let ucp2a = "#C254E5";
const ucp2aname = "Tyrian Purple";
const ratio2a = 5;
// Background Color
let ucp3 = "#F8FAFE";
const ucp3name = "Ghost White";
const ratio3 = 40;
const darkBackground = false;
// HEX Values (true/false)
const hexValues = true;
// RGB Values (true/false)
const rgbValues = true;
// HSL Values (true/false)
const hslValues = true;
// CMYK Values (true/false)
const cmykValues = true;
// Color Types (first the main color, then lightest to darkest)
// Grayscale:
// white
// silver
// gray
// greige (gray + gold / tan)
// graphite (dark gray + blue)
// black
// Blues:
// blue
// sky blue (light blue)
// cyan (lighter, more blue turquoise)
// turquoise
// teal (greener and darker than turquoise)
// navy_blue (very dark blue)
// Reds:
// red
// peach
// pink
// burgundy (dark red)
// Purples/Violets:
// purple (more red)
// violet (more blue)
// lavender (very light violet)
// fuchsia (neon pink)
// magenta (neon purple)
// plum (desaturated, reddish purple)
// Greens:
// green
// mint
// lime
// olive
// Yellows/Oranges:
// yellow
// orange
// gold
// rust (reddish orange)
// brown (dark orange)
// Light Colors:
// beige (brown cream)
// cream (yellow beige)
// tan (more saturated than beige, slightly brown / green)
// khaki (green tan)
// Main color
const colorType1 = "cyan";
// Accent color
const colorType2 = "magenta";
/* Layout */
// Landing Page - Banner Type
// "vr" -       technology, space, AI, apps, internet, new ideas, science, creativity
// "meeting" -  business, stock market, office, analytics, work, startup
// "vintage" -  old-school, luxury, music, books, poetry, DIY, hobby
// "yoga" -     sport, dance, meditation, relax, spirituality, cosmetics, beauty-related
let landingPageBanner = "vr";
/* Typefaces */
// Typefaces (true/false)
const typefaces = true;
// Typeface presentation text
const fontTestTxt = "Cool, February 9th is Pizza Day!";
// If the main typeface is too big
const bigFont1 = false;
// If the secondary typeface is too big
const bigFont2 = false;
// Main typeface
const cpFont1 = "Sriracha-Regular.ttf";
const cpFontName1 = "Sriracha";
const cpFontDesc1 = "The new Ubuntu Font Family was started to enable the personality of Ubuntu to be seen and felt in every menu, button and dialog. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens.";
// Secondary typeface
const cpFont2 = "Ubuntu-Regular.ttf";
const cpFontName2 = "Ubuntu";
const cpFontDesc2 = "Sriracha is a new Thai + Latin handwriting typeface, with an informal loopless + sans serif design. It has 2 stylistic set alternate glyph designs and intelligent OpenType features to recreate the impression of handwriting.";
//*--|*|--*\\_____// Settings \\_____//*--|*|--*\\
/* Color CSS Variables */
const root = document.documentElement;
// Make the HEX values uppercase
ucp1a = ucp1a.toUpperCase();
ucp1 = ucp1.toUpperCase();
ucp3 = ucp3.toUpperCase();
ucp2 = ucp2.toUpperCase();
ucp2a = ucp2a.toUpperCase();
const colorArray = [
    ucp1a,
    ucp1,
    ucp3,
    ucp2,
    ucp2a
];
const colorNameArray = [
    ucp1aname,
    ucp1name,
    ucp3name,
    ucp2name,
    ucp2aname
];
/* Color CSS Classes */
root.style.setProperty("--cp-name", cpName);
root.style.setProperty("--ucp1", ucp1);
root.style.setProperty("--ucp1a", ucp1a);
root.style.setProperty("--ucp2", ucp2);
root.style.setProperty("--ucp2a", ucp2a);
root.style.setProperty("--ucp3", ucp3);
root.style.setProperty("--ucp1-name", "'" + ucp1name + "'");
root.style.setProperty("--ucp1a-name", "'" + ucp1aname + "'");
root.style.setProperty("--ucp2-name", "'" + ucp2name + "'");
root.style.setProperty("--ucp2a-name", "'" + ucp2aname + "'");
root.style.setProperty("--ucp3-name", "'" + ucp3name + "'");
root.style.setProperty("--color-type1", "'" + colorType1 + "'");
root.style.setProperty("--color-type2", "'" + colorType2 + "'");
// Gradient from all of the colors
root.style.setProperty("--ucp-grad1", "linear-gradient(to right," + ucp1 + "," + ucp1a + "," + ucp3 + "," + ucp2a + "," + ucp2 + ")");
// Gradient without the background color
root.style.setProperty("--ucp-grad2", "linear-gradient(to right," + ucp1 + "," + ucp1a + "," + ucp2a + "," + ucp2 + ")");
/* Layout */
const colorClassArray = [
    "ucp1a",
    "ucp1",
    "ucp3",
    "ucp2",
    "ucp2a"
];
landingPageBanner = landingPageBanner.toLowerCase();
/* Typefaces */
root.style.setProperty("--cp-font1-name", "'" + cpFontName1 + "'");
root.style.setProperty("--cp-font2-name", "'" + cpFontName2 + "'");
let docPath = "";
if (document.title === "Uverit Color Palette") {
    docPath = "int_resources";
}
else {
    docPath = "..";
}
const typefacesStyle = document.createElement('style');
if (typefaces) {
    typefacesStyle.innerHTML = `
        @font-face{
            font-family: 'cp-font1';
            src: url('${docPath}/fonts_client/${cpFont1}');
        }
        @font-face{
            font-family: 'cp-font2';
            src: url('${docPath}/fonts_client/${cpFont2}');
        }
    `;
}
else {
    typefacesStyle.innerHTML = `
        @font-face{
            font-family: 'cp-font1';
            src: url('${docPath}/fonts/Quicksand-SemiBold.ttf');
        }
        @font-face{
            font-family: 'cp-font2';
            src: url('${docPath}/fonts/Roboto-Regular.woff2');
        }
    `;
}
document.head.appendChild(typefacesStyle);
// Add a class to the body if the chosen font is too big / wide
document.addEventListener("DOMContentLoaded", function () {
    if (typefaces && bigFont1) {
        document.querySelector("body")?.classList.add("s-font1");
    }
    if (typefaces && bigFont2) {
        document.querySelector("body")?.classList.add("s-font2");
    }
});
/* Program Settings */
document.addEventListener("DOMContentLoaded", function () {
    if (darkMode) {
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
    if (darkBackground) {
        document.getElementsByTagName("body")[0].classList.add("dark-bg-color");
    }
});
//*--|*|--*\\_____// Color Conversion \\_____//*--|*|--*\\
/* HEX */
if (hexValues) {
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i < colorArray.length; i++) {
            const elem = document.querySelector(".ucp-hex" + i);
            if (elem) {
                elem.innerHTML = colorArray[i];
            }
        }
    });
}
/* HEX to RGB */
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    let r;
    let g;
    let b;
    if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }
    else if (hex.length === 3) {
        r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
        g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
        b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
    }
    let rgb = r + ", " + g + ", " + b;
    return rgb;
}
if (rgbValues) {
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i < colorArray.length; i++) {
            const elem = document.querySelector(".ucp-rgb" + i);
            if (elem) {
                elem.innerHTML = hexToRgb(colorArray[i]);
            }
        }
    });
}
/* RGB to HSL */
if (hslValues) {
    function rgbToHsl(rgb) {
        let rgbSplit = rgb.split(",");
        let r = parseInt(rgbSplit[0]) / 255;
        let g = parseInt(rgbSplit[1]) / 255;
        let b = parseInt(rgbSplit[2]) / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        }
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        let hsl = Math.round(h * 360) + ", " +
            Math.round(s * 100) + "%, " +
            Math.round(l * 100) + "%";
        return hsl;
    }
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i < colorArray.length; i++) {
            const elem = document.querySelector(".ucp-hsl" + i);
            if (elem) {
                elem.innerHTML = rgbToHsl(hexToRgb(colorArray[i]));
            }
        }
    });
}
/* RGB to CMYK */
if (cmykValues) {
    function rgbToCmyk(rgb) {
        // Split the RGB values into an array
        let rgbArray = rgb.split(",");
        // Get the R, G, B values
        let r = parseInt(rgbArray[0]) / 255;
        let g = parseInt(rgbArray[1]) / 255;
        let b = parseInt(rgbArray[2]) / 255;
        // Find the maximum value among the RGB values
        let max = Math.max(r, g, b);
        // Calculate the black (K) value
        let k = 1 - max;
        // Handle the case where K is 1 (the color is black)
        if (k === 1) {
            return "0,0,0,1";
        }
        // Calculate the cyan (C), magenta (M), and yellow (Y) values
        let c = (1 - r - k) / (1 - k);
        let m = (1 - g - k) / (1 - k);
        let y = (1 - b - k) / (1 - k);
        // Return the CMYK values as a string
        return `${Math.round(c * 100)}, ${Math.round(m * 100)}, ${Math.round(y * 100)}, ${Math.round(k * 100)}`;
    }
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i < colorArray.length; i++) {
            const elem = document.querySelector(".ucp-cmyk" + i);
            if (elem) {
                elem.innerHTML = rgbToCmyk(hexToRgb(colorArray[i]));
            }
        }
    });
}
