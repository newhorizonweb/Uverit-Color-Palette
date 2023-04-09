/* CP Program Settings */
// Dark Mode (true/false)
const darkMode = false;
/* CP Brand Settings */
// Color Palette Name
const cpName = "Very Creative Placeholder";
// Main Color
let ucp1 = "#88FfBb";
const ucp1name = "Main";
const ratio1 = 20;
// Secondary Color
let ucp1a = "#07bbaa";
const ucp1aname = "Secondary";
const ratio1a = 15;
// Accent Color
let ucp2 = "#c066ee";
const ucp2name = "Accent";
const ratio2 = 10;
// Secondary Accent Color
let ucp2a = "#0765d3";
const ucp2aname = "Secondary Accent";
const ratio2a = 5;
// Background Color
let ucp3 = "#fcfffe";
const ucp3name = "Background";
const ratio3 = 50;
// Main and Accent Color Types
// blue, red.....
const colorType1 = "purple";
const colorType2 = "blue";
// HEX Values (true/false)
const hexValues = true;
// RGB Values (true/false)
const rgbValues = true;
// HSL Values (true/false)
const hslValues = true;
// CMYK Values (true/false)
const cmykValues = true;
/* Typefaces */
// Typefaces (true/false)
const typefaces = true;
const cpFont1 = "Barlow-Regular.ttf";
const cpFontName1 = "Barlow";
const cpFont2 = "Inter-Regular.ttf";
const cpFontName2 = "Inter";
const fontTestTxt = "March 14th is the greatest day ever!";
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
root.style.setProperty("--cp-name", cpName);
root.style.setProperty("--ucp1", ucp1);
root.style.setProperty("--ucp1a", ucp1a);
root.style.setProperty("--ucp2", ucp2);
root.style.setProperty("--ucp2a", ucp2a);
root.style.setProperty("--ucp3", ucp3);
root.style.setProperty("--ucp1-name", ucp1name);
root.style.setProperty("--ucp1a-name", ucp1aname);
root.style.setProperty("--ucp2-name", ucp2name);
root.style.setProperty("--ucp2a-name", ucp2aname);
root.style.setProperty("--ucp3-name", ucp3name);
// Gradient from all of the colors
root.style.setProperty("--ucp-grad1", "linear-gradient(to right," + ucp1 + "," + ucp1a + "," + ucp3 + "," + ucp2 + "," + ucp2a + ")");
// Gradient without the background color
root.style.setProperty("--ucp-grad2", "linear-gradient(to right," + ucp1 + "," + ucp1a + "," + ucp2 + "," + ucp2a + ")");
/* Color Ratio */
// Show an alert when ratio is not equal to 100%
const ratioAll = ratio1 + ratio1a + ratio3 + ratio2 + ratio2a;
if (ratioAll != 100) {
    alert("Color ratio is not equal to 100%\n"
        + "The current color ratio is equal to " + ratioAll);
}
/* Typefaces */
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
/* Program Settings */
document.addEventListener("DOMContentLoaded", function () {
    if (darkMode) {
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
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
