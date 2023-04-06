/* CP Brand Settings */
// Color Palette Name
const cpName = "--Brand-Name--";
// Secondary Color
const ucp1 = "#07bbaa";
const ucp1name = "Color Name1";
const ratio1 = 15;
// Main Color
const ucp2 = "#07abdb";
const ucp2name = "Color Name2";
const ratio2 = 20;
// Background Color
const ucp3 = "#07aaaa";
const ucp3name = "Color Name3";
const ratio3 = 50;
// Accent Color
const ucp4 = "#07cc55";
const ucp4name = "Color Name4";
const ratio4 = 10;
// Secondary Accent Color
const ucp5 = "#0765d3";
const ucp5name = "Color Name5";
const ratio5 = 5;
// Main and Accent Color Types
// blue, red.....
const colorType1 = "purple";
const colorType2 = "blue";
/* Typefaces */
// Typefaces (true/false)
const typefaces = true;
const cpFont1 = "Barlow-Regular.ttf";
const cpFontName1 = "Barlow";
const cpFont2 = "Inter-Regular.ttf";
const cpFontName2 = "Inter";
const fontTestTxt = "March 14th is the greatest day ever!";
/* CP Program Settings */
// CMYK Color Values (true/false)
const cmykValues = true;
// Dark Mode (true/false)
const darkMode = false;
//*--|*|--*\\_____//*--|*|--*\\_____//*--|*|--*\\
/* Apply Settings */
/* Color CSS Variables */
const root = document.documentElement;
root.style.setProperty("--cp-name", cpName);
root.style.setProperty("--ucp1", ucp1);
root.style.setProperty("--ucp2", ucp2);
root.style.setProperty("--ucp3", ucp3);
root.style.setProperty("--ucp4", ucp4);
root.style.setProperty("--ucp5", ucp5);
root.style.setProperty("--ucp1-name", ucp1name);
root.style.setProperty("--ucp2-name", ucp2name);
root.style.setProperty("--ucp3-name", ucp3name);
root.style.setProperty("--ucp4-name", ucp4name);
root.style.setProperty("--ucp5-name", ucp5name);
// Gradient from all of the colors
root.style.setProperty("--ucp-grad1", "linear-gradient(to right," + ucp1 + "," + ucp2 + "," + ucp3 + "," + ucp4 + "," + ucp5 + ")");
// Gradient without the background color
root.style.setProperty("--ucp-grad2", "linear-gradient(to right," + ucp1 + "," + ucp2 + "," + ucp4 + "," + ucp5 + ")");
/* Color Ratio */
// Show an alert when ratio is not equal to 100%
const ratioAll = ratio1 + ratio2 + ratio3 + ratio4 + ratio5;
if (ratioAll != 100) {
    alert("Color ratio is not equal to 100%\n"
        + "The current color ratio is equal to " + ratioAll);
}
/* Typefaces */
const typefacesStyle = document.createElement('style');
if (typefaces) {
    typefacesStyle.innerHTML = `
        @font-face{
            font-family: 'cp-font1';
            src: url('int_resources/fonts_client/${cpFont1}');
        }
        @font-face{
            font-family: 'cp-font2';
            src: url('int_resources/fonts_client/${cpFont2}');
        }
    `;
}
else {
    typefacesStyle.innerHTML = `
        @font-face{
            font-family: 'cp-font1';
            src: url('int_resources/fonts/Quicksand-VariableFont_wghtbold.woff2');
        }
        @font-face{
            font-family: 'cp-font2';
            src: url('int_resources/fonts/Roboto-Regular.woff2');
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
