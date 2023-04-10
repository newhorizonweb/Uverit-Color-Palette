


    /* Color Meaning */

// Set the key types
interface colorType{
    meaning:string;
    symbol:string;
}

// Color Meaning
const colorMeaning: {[key: string]:colorType} = {
    white: {
        meaning: "",
        symbol: ""
    },
    silver: {
        meaning: "",
        symbol: ""
    },
    gray: {
        meaning: "",
        symbol: ""
    },
    greige: {
        meaning: "",
        symbol: ""
    },
    graphite: {
        meaning: "",
        symbol: ""
    },
    black: {
        meaning: "",
        symbol: ""
    },



    blue: {
        meaning: "",
        symbol: ""
    },
    sky_blue: {
        meaning: "",
        symbol: ""
    },
    turquoise: {
        meaning: "",
        symbol: ""
    },
    teal: {
        meaning: "",
        symbol: ""
    },
    navy: {
        meaning: "",
        symbol: ""
    },



    red: {
        meaning: "",
        symbol: ""
    },
    peach: {
        meaning: "",
        symbol: ""
    },
    pink: {
        meaning: "",
        symbol: ""
    },
    burgundy: {
        meaning: "",
        symbol: ""
    },



    purple: {
        meaning: "",
        symbol: ""
    },
    violet: {
        meaning: "",
        symbol: ""
    },
    lavender: {
        meaning: "",
        symbol: ""
    },
    fuchsia: {
        meaning: "",
        symbol: ""
    },
    magenta: {
        meaning: "",
        symbol: ""
    },
    plum: {
        meaning: "",
        symbol: ""
    },



    green: {
        meaning: "",
        symbol: ""
    },
    mint: {
        meaning: "",
        symbol: ""
    },
    lime: {
        meaning: "",
        symbol: ""
    },
    olive: {
        meaning: "",
        symbol: ""
    },



    yellow: {
        meaning: "",
        symbol: ""
    },
    orange: {
        meaning: "",
        symbol: ""
    },
    gold: {
        meaning: "",
        symbol: ""
    },
    rust: {
        meaning: "",
        symbol: ""
    },
    brown: {
        meaning: "",
        symbol: ""
    },



    beige: {
        meaning: "",
        symbol: ""
    },
    cream: {
        meaning: "",
        symbol: ""
    },
    tan: {
        meaning: "",
        symbol: ""
    },
    khaki: {
        meaning: "",
        symbol: ""
    }
};

// Set color types from the config file to lower case
const mainType:string = colorType1.toLowerCase();
const accentType:string = colorType2.toLowerCase();

// Create variables to call the objects
const mainColor:colorType = colorMeaning[mainType];
const accentColor:colorType = colorMeaning[accentType];

// Insert the color meaning to the HTML elements
document.querySelector(".main-color .cm-meaning")!.innerHTML = mainColor.meaning;
document.querySelector(".main-color .cm-symbol")!.innerHTML = mainColor.symbol;

document.querySelector(".accent-color .cm-meaning")!.innerHTML = accentColor.meaning;
document.querySelector(".accent-color .cm-symbol")!.innerHTML = accentColor.symbol;

    /* Display Color */

let mainRepeat:string = "";
let accentRepeat:string = "";

for (let i = 0; i < 100; i++){
    mainRepeat += mainType+"&nbsp;";
    accentRepeat += accentType+"&nbsp;";
}

const mainRepeatElem:HTMLElement = document.createElement("p");
mainRepeatElem.innerHTML = mainRepeat;

const accentRepeatElem:HTMLElement = document.createElement("p");
accentRepeatElem.innerHTML = accentRepeat;

// Repeat Text
document.querySelector(".main-color .display-color-inner")!.appendChild(mainRepeatElem);
document.querySelector(".accent-color .display-color-inner")!.appendChild(accentRepeatElem);

// Color Type
document.querySelector(".main-color .cm-name")!.innerHTML = colorType1.replace(/_/g, " ");
document.querySelector(".accent-color .cm-name")!.innerHTML = colorType2.replace(/_/g, " ");

// Color Name
document.querySelector(".main-color .color-name")!.innerHTML = ucp1name;
document.querySelector(".accent-color .color-name")!.innerHTML = ucp2name;

    /* Create Color Value Elements */

const mainColorValues:HTMLElement | null = document.querySelector(".main-color .color-values");
const accentColorValues:HTMLElement | null = document.querySelector(".accent-color .color-values");

if (hexValues){
    let mainColorVal:HTMLElement = document.createElement("p");
    mainColorVal.innerHTML = ucp1;
    mainColorValues!.appendChild(mainColorVal);

    let accentColorVal:HTMLElement = document.createElement("p");
    accentColorVal.innerHTML = ucp2;
    accentColorValues!.appendChild(accentColorVal);
}

if (rgbValues){
    let mainColorVal:HTMLElement = document.createElement("p");
    mainColorVal.innerHTML = "rgb("+hexToRgb(ucp1)+")";
    mainColorValues!.appendChild(mainColorVal);

    let accentColorVal:HTMLElement = document.createElement("p");
    accentColorVal.innerHTML = "rgb("+hexToRgb(ucp2)+")";
    accentColorValues!.appendChild(accentColorVal);
}

if (hslValues){
    let mainColorVal:HTMLElement = document.createElement("p");
    mainColorVal.innerHTML = "hsl("+rgbToHsl(hexToRgb(ucp1))+")";
    mainColorValues!.appendChild(mainColorVal);

    let accentColorVal:HTMLElement = document.createElement("p");
    accentColorVal.innerHTML = "hsl("+rgbToHsl(hexToRgb(ucp2))+")";
    accentColorValues!.appendChild(accentColorVal);
}

if (cmykValues){
    let mainColorVal:HTMLElement = document.createElement("p");
    mainColorVal.innerHTML = "cmyk("+rgbToCmyk(hexToRgb(ucp1))+")";
    mainColorValues!.appendChild(mainColorVal);

    let accentColorVal:HTMLElement = document.createElement("p");
    accentColorVal.innerHTML = "cmyk("+rgbToCmyk(hexToRgb(ucp2))+")";
    accentColorValues!.appendChild(accentColorVal);
}










