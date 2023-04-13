


    /* Ring Chart Settings */

// Set the ring stroke width (x/100)
const ringWidth:number = 15;

// Chart gap (x/100)
const chartGap:number = 0.25;

// Change the hover color (brighter vs darker)
const brightness:number = 0.9; // 0 = 0% | 1 = 100%

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

            // Change the hover color if the section is too bright
            if (colorVal < colorBrightness){
                this.classList.add("light-hover");
            } else {
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
