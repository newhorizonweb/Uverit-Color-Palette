    


    /* Color Tones Content */

let percentage:string = "<p class='percent-gap'></p>";
let percentage2:string = "<p class='percent-gap'></p>";


let colorGroupNames:string = "";

let shadeContent:string = "";
let tintContent:string = "";

if (thisUrl === "colortones.html"){

    for (let i = 0; i < 5; i++){

        // Percentage
        let currPercent:string = 100 - (i * 20) + "%";
        percentage += `<p>${currPercent}</p>`;
    
        // Color Names
        colorGroupNames += 
        "<div class='color-name tone-cell'>" +
            `<p class='color-name-inner' style='border-color:${colorArray[i]};'>` +
                colorNameArray[i] +
            "</p>" +
        "</div>";
    
        // Section Content
        let toneCellContent:string = "";
        
        for (let j = 0; j < 5; j++){
            toneCellContent += `<div class='tone-cell ${colorClassArray[i]}'></div>`;
        }
    
        shadeContent += `<div class='tone-section shade-section'>${toneCellContent}</div>`;
        tintContent += `<div class='tone-section tint-section'>${toneCellContent}</div>`;
    }

} else if (thisUrl === "colorsaturation.html"){

    for (let i = 0; i < 6; i++){

        // Percentage
        let currPercent:string = 100 - (i * 20) + "%";
        percentage += `<p>${currPercent}</p>`;

        // Percentage 2
        let currPercent2:string = 100 + (i * 20) + "%";
        percentage2 += `<p>${currPercent2}</p>`;

    }

    for (let i = 0; i < 5; i++){

        // Color Names
        colorGroupNames += 
        "<div class='color-name tone-cell'>" +
            `<p class='color-name-inner' style='border-color:${colorArray[i]};'>` +
                colorNameArray[i] +
            "</p>" +
        "</div>";
    
        // Section Content
        let toneCellContent:string = "";
        
        for (let j = 0; j < 6; j++){
            toneCellContent += `<div class='tone-cell ${colorClassArray[i]}'></div>`;
        }
    
        shadeContent += `<div class='tone-section shade-section'>${toneCellContent}</div>`;
        tintContent += `<div class='tone-section tint-section'>${toneCellContent}</div>`;
    }

}

// Insert content into divs
const groupPercentage:NodeListOf<Element> = document.querySelectorAll(".group-percentage");
groupPercentage.forEach(function(thisGroup){
    thisGroup.innerHTML = percentage;
});

const colorGroupNamesDiv:NodeListOf<Element> = document.querySelectorAll(".color-names");
colorGroupNamesDiv.forEach(function(thisGroup){
    thisGroup.innerHTML = colorGroupNames;
});

const vividColorPercentage:HTMLElement | null = document.querySelector(".cgi-vivid .group-percentage");

if(vividColorPercentage){
    vividColorPercentage.innerHTML = percentage2;
}

document.querySelector(".color-shades")!.innerHTML = shadeContent;
document.querySelector(".color-tints")!.innerHTML = tintContent;

    /* Color Names - Open / Hide */

const colorGroupInner:NodeListOf<Element> = document.querySelectorAll(".color-group-inner");

colorGroupInner.forEach(function(thisGroup){
    thisGroup.querySelector(".tone-group")!.addEventListener("click", function(){
        thisGroup.querySelector(".color-names")!.classList.toggle("color-names-open");
    });

    window.addEventListener("click", function(e){
        if(!(e.target! as HTMLElement).matches(".color-group-inner") &&
        !(e.target! as HTMLElement).closest(".color-group-inner")){
            thisGroup.querySelector(".color-names")!.classList.remove("color-names-open");
        }
    });

    window.addEventListener("resize", function(e){
        thisGroup.querySelector(".color-names")!.classList.remove("color-names-open");
    });
});