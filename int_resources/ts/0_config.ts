    
    
    
    /* CP Program Settings */



// Dark Mode (true/false)
const darkMode:boolean = false;



    /* CP Brand Settings */

// Color Palette Name
const cpName:string =       "--Brand-Name--";

// Main Color
let ucp1:string =           "#88FfBb";
const ucp1name:string =     "Main";
const ratio1:number =       20;

// Secondary Color
let ucp1a:string =          "#07bbaa";          
const ucp1aname:string =    "Secondary";
const ratio1a:number =      15;



// Accent Color
let ucp2:string =           "#c066ee";
const ucp2name:string =     "Accent";
const ratio2:number =       10;

// Secondary Accent Color
let ucp2a:string =          "#0765d3";
const ucp2aname:string =    "Secondary Accent";
const ratio2a:number =      5;



// Background Color
let ucp3:string =           "#fcfffe";
const ucp3name:string =     "Background";
const ratio3:number =       50;



// Main and Accent Color Types
// blue, red.....
const colorType1:string =   "purple";
const colorType2:string =   "blue";



// HEX Values (true/false)
const hexValues:boolean = true;

// RGB Values (true/false)
const rgbValues:boolean = true;

// HSL Values (true/false)
const hslValues:boolean = true;

// CMYK Values (true/false)
const cmykValues:boolean = true;



    /* Typefaces */



// Typefaces (true/false)
const typefaces:boolean = true;

const cpFont1:string =      "Barlow-Regular.ttf";
const cpFontName1:string =  "Barlow";

const cpFont2:string =      "Inter-Regular.ttf";
const cpFontName2:string =  "Inter";

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

const colorArray: string[] = [
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
root.style.setProperty(
    "--ucp-grad1", "linear-gradient(to right,"+ucp1+","+ucp1a+","+ucp3+","+ucp2+","+ucp2a+")"
);

// Gradient without the background color
root.style.setProperty(
    "--ucp-grad2", "linear-gradient(to right,"+ucp1+","+ucp1a+","+ucp2+","+ucp2a+")"
);

    /* Color Ratio */

// Show an alert when ratio is not equal to 100%
const ratioAll:number = ratio1 + ratio1a + ratio3 + ratio2 + ratio2a;

if (ratioAll != 100){
    alert("Color ratio is not equal to 100%\n"
    +"The current color ratio is equal to "+ratioAll);
}

    /* Typefaces */

const typefacesStyle:HTMLStyleElement = document.createElement('style');
if (typefaces){
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
} else {
    typefacesStyle.innerHTML = `
        @font-face{
            font-family: 'cp-font1';
            src: url('int_resources/fonts/Quicksand-SemiBold.ttf');
        }
        @font-face{
            font-family: 'cp-font2';
            src: url('int_resources/fonts/Roboto-Regular.woff2');
        }
    `;
}

document.head.appendChild(typefacesStyle);

    /* Program Settings */

document.addEventListener("DOMContentLoaded", function(){
    if (darkMode){
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
});



//*--|*|--*\\_____// Color Conversion \\_____//*--|*|--*\\



    /* HEX */

if (hexValues){
    document.addEventListener("DOMContentLoaded", function(){
        for (let i = 0; i < colorArray.length; i++){
            document.querySelector(".ucp-hex"+i)!.innerHTML = colorArray[i];
        }
    });
}

    /* HEX to RGB */

function hexToRgb(hex) {
    hex = hex.replace("#", "");

    let r:any;
    let g:any;
    let b:any;

    if (hex.length === 6){
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else if (hex.length === 3){
        r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
        g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
        b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
    }

    let rgb:string = r+", "+g+", "+b;
    return rgb;
}

if (rgbValues){
    document.addEventListener("DOMContentLoaded", function(){
        for (let i = 0; i < colorArray.length; i++){
            document.querySelector(".ucp-rgb"+i)!.innerHTML = hexToRgb(colorArray[i]);
        }
    });
}

    /* RGB to CMYK */

if (cmykValues){

    function rgbToCmyk(rgb){

        // Split the RGB values into an array
        let rgbArray:number = rgb.split(",");
    
        // Get the R, G, B values
        let r:number = parseInt(rgbArray[0]) / 255;
        let g:number = parseInt(rgbArray[1]) / 255;
        let b:number = parseInt(rgbArray[2]) / 255;
    
        // Find the maximum value among the RGB values
        let max:number = Math.max(r, g, b);
    
        // Calculate the black (K) value
        let k:number = 1 - max;
    
        // Handle the case where K is 1 (the color is black)
        if (k === 1){
            return "0,0,0,1";
        }
    
        // Calculate the cyan (C), magenta (M), and yellow (Y) values
        let c:number = (1 - r - k) / (1 - k);
        let m:number = (1 - g - k) / (1 - k);
        let y:number = (1 - b - k) / (1 - k);
    
        // Return the CMYK values as a string
        return `${Math.round(c * 100)}, ${Math.round(m * 100)}, ${Math.round(y * 100)}, ${Math.round(k * 100)}`;
    }

    document.addEventListener("DOMContentLoaded", function(){
        for (let i = 0; i < colorArray.length; i++){
            document.querySelector(".ucp-cmyk"+i)!.innerHTML = rgbToCmyk(hexToRgb(colorArray[i]));
        }
    });

}


    /* RGB to HSL */

if (hslValues){

    function rgbToHsl(rgb){

        let rgbSplit:string[] = rgb.split(",");

        let r:number = parseInt(rgbSplit[0]) / 255;
        let g:number = parseInt(rgbSplit[1]) / 255;
        let b:number = parseInt(rgbSplit[2]) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max == min){

            h = s = 0;

        } else {

            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max){
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
        
        let hsl:string =    Math.round(h * 360) + ", " + 
                            Math.round(s * 100) + "%, " + 
                            Math.round(l * 100) + "%";

        return hsl;

    }

    document.addEventListener("DOMContentLoaded", function(){
        for (let i = 0; i < colorArray.length; i++){
            document.querySelector(".ucp-hsl"+i)!.innerHTML = rgbToHsl(hexToRgb(colorArray[i]));
        }
    });

}