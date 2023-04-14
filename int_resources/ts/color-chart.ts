


    /* Ring Chart Settings */

// Set the ring stroke width (x/100)
const ringWidth:number = 15;

// Chart gap (x/100)
const chartGap:number = 0.25;

// Change the hover color (if the color is brighter than thix value - in percent)
// For example, if the color is brighter than 90% of 765 (total RGB value)
const brightness:number = 0.85; // 0 = 0% (dark) | 1 = 100% (bright)

// Change the hover color (if the color is darker than thix value - in percent)
// For example, if the color is darker than 15% of 765 (total RGB value)
const darkness:number = 0.1; // 0 = 0% (dark) | 1 = 100% (bright)

// Color ratio array
const ringArr:number[] = [
    ratio1,     // Main
    ratio1a,    // Secondary
    ratio3,     // Background
    ratio2a,    // Secondary Accent
    ratio2      // Accent
]

// Color name array
const colorNameArr:string[] = [
    ucp1name,   // Main
    ucp1aname,  // Secondary
    ucp3name,   // Background
    ucp2aname,  // Secondary Accent
    ucp2name    // Accent
]



    /* Chart */



// Every ring
const rings:HTMLCollectionOf<Element> = document.getElementsByClassName("ring");

// Ratio rings
const ringItems:HTMLCollectionOf<Element> = document.getElementsByClassName("rc-item");

// Set the svg width (whole element)
const chartWidth:number = 100;

// Set the svg viewBox attribute
document.getElementsByClassName("ring-chart")[0].setAttribute(
    "viewBox", "0 0 " + chartWidth.toString() + " " + chartWidth.toString()
);

// SVG center
const ringCenter:number = chartWidth / 2;

// Ring radius
const ringRad:number = (chartWidth - ringWidth) / 2;

// Ring circumference
let ringCircum:number = ringRad * Math.PI * 2;
document.documentElement.style.setProperty("--ring-circum", ringCircum.toString());

// Ring width (percent)
document.documentElement.style.setProperty("--ring-width", ringWidth.toString()+"%");

// Chart inner text (inside the circle)
const ratioTxt:HTMLElement | null = document.querySelector(".ratio-txt");
const colorTxt:HTMLElement | null = document.querySelector(".color-txt");

    /* Change the chart text */

function changeChartTxt(){
    ratioTxt!.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("txt1");
    ratioTxt!.style.display = "none";
    colorTxt!.innerHTML = cpName;
}

changeChartTxt();

window.addEventListener("mouseover", function(event){

    const eTarget:Element = (event.target as Element);

    if (!eTarget?.matches('.ring-chart') &&
        !eTarget?.matches('.rc-ring') &&
        !eTarget?.matches('.chart-txt *')){

        changeChartTxt();
    }
});

    /* Chart - Ring */

for (let ring = 0; ring < rings.length; ring++){

    let ringElem:Element = rings[ring];

    // Center the rings
    ringElem.setAttribute("cx", ringCenter.toString());
    ringElem.setAttribute("cy", ringCenter.toString());

    // Set the stroke width
    ringElem.setAttribute("stroke-width", ringWidth.toString());

    // Set the ring radius
    ringElem.setAttribute("r", ringRad.toString());

}

// Set the ring ratio
let currNum:number = 25 - (chartGap / 2);

for (let ring = 0; ring < ringItems.length; ring++){

    // This ring
    let ringElem:Element = ringItems[ring];

    // Ratio
    let thisRatio:number = ringArr[ring] - chartGap;

    // Absolute offset
    currNum += thisRatio + chartGap;

    // Ring offset (relative to the ring circumference)
    let ringOffset:number = (currNum / 100) * ringCircum;

    ringElem.setAttribute("stroke-dashoffset", ringOffset.toString());


    // Ring ratio (colored part, relative to the ring circumference)
    let currRingRatio:number = (thisRatio / 100) * ringCircum;
    let dashArray:string = currRingRatio.toString() +" "+ (ringCircum - currRingRatio).toString();

    ringElem.setAttribute("stroke-dasharray", dashArray);

        /* Hovering over the ring section */

    ringElem.addEventListener("mouseenter", function(){

        // Get the stroke color
        let strokeColor:string = window.getComputedStyle(this).getPropertyValue('stroke');
        let rgbValues:RegExpMatchArray | null = strokeColor.match(/\d+/g);
        
        if (rgbValues){

            // Get the R, G, B values
            let red:number = parseInt(rgbValues[0]);
            let green:number = parseInt(rgbValues[1]);
            let blue:number = parseInt(rgbValues[2]);

            // Add the values (max for RGB is 765, so 3x 255)
            let colorVal:number = red + green + blue;

            const colorBrightness:number = 765 * brightness;
            const colorDarkness:number = 765 * darkness;

            if (colorVal < colorDarkness){
                // Very dark color = very bright hover
                this.classList.add("very-light-hover");
                strokeColor = `rgb(${red + 128}, ${green + 128}, ${blue + 128})`

            } else if (colorVal < colorDarkness * 2){
                // Normal color = bright hover
                this.classList.add("light-hover");
                strokeColor = `rgb(${red + 128}, ${green + 128}, ${blue + 128})`

            } else if (colorVal < colorBrightness){
                // Normal color = bright hover
                this.classList.add("light-hover");

            } else {
                // Very light color = dark hover
                this.classList.add("dark-hover");
                strokeColor = `rgb(${red - 100}, ${green - 100}, ${blue - 100})`

            }

            // Change the chart text
            ratioTxt!.style.color = strokeColor;
            ratioTxt!.style.display = "block";
            ratioTxt!.innerHTML = ringArr[ring]+"%";

            colorTxt!.innerHTML = colorNameArr[ring];

        }

    });

}

    /* Ring Chart Alert */

// Show an alert when ratio is not equal to 100%
const ratioAll:number = ratio1 + ratio1a + ratio3 + ratio2 + ratio2a;

if (ratioAll != 100){
    alert("Color ratio is not equal to 100%\n"
    +"The current color ratio is equal to "+ratioAll);
}

    /* Color Ratio */

const colorRatioArray: number[] = [
    ratio1a,
    ratio1,
    ratio3,
    ratio2,
    ratio2a
];

const colorRatioDiv:HTMLElement | null = document.querySelector(".color-ratio");

for (let i = 0; i < colorArray.length; i++){

    colorRatioDiv!.innerHTML += 
    `<div class='cr-item cr-item${i}'>` +

        `<p class='cr-name cr-name${i}'>` +
            colorNameArray[i] +
        '<p>' +

        `<div class='cr-ratio cr-ratio${i}'>` +
            "<p>" +
                colorRatioArray[i]+"%" +
            "</p>" +
        '<div>' +

    "</div>";

}

for (let i = 0; i < colorClassArray.length; i++){
    
    let crRatio:HTMLCollectionOf<Element> = document.getElementsByClassName("cr-ratio");

    crRatio[i].addEventListener("mouseenter", function(){
        this.classList.add(colorClassArray[i]);
    });

    crRatio[i].addEventListener("mouseleave", function(){
        this.classList.remove(colorClassArray[i]);
    });

}











