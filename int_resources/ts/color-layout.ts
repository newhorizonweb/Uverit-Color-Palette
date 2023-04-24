


    /* Layout List && Display Layout */

// Array with layout options (buttons to display the layout)
const layoutArray:string[] = [
    "Landing Page",
    "Page Section",
    "Page Section 2",
    "Product Page",
    "Contact Page",
    "Social Media Icons"
];

// Layout displayed on the page load
const startLayout:number = 5;

// HTML Elements
const layoutList:HTMLElement | null = document.querySelector(".layout-list");
const listSelect:HTMLElement | null = document.querySelector(".ll-select");
const currItem:HTMLElement | null = document.querySelector(".current-item");
const listSelectArrow:HTMLElement | null = document.querySelector(".ll-select-arrow");

const layoutListInner:HTMLElement | null = document.querySelector(".layout-list-inner");
const layoutsParent:HTMLElement | null = document.querySelector(".layouts");
const layouts:NodeListOf<Element> = document.querySelectorAll(".layout");

    /* Some stuff on page load */

// Add an arrow icon to the Layout List Select
document.addEventListener("DOMContentLoaded", function(){
    (document.querySelectorAll(".layout-btn")[startLayout] as HTMLElement).classList.add("current-layout");
});

// Add the display-layout class to the first element on page load
layouts[startLayout].classList.add("display-layout");

// Display the first layout in the layout list
if (currItem){
    currItem.innerHTML = layoutArray[startLayout];
}

document.addEventListener("DOMContentLoaded", function(){

    // Add an arrow icon to the Layout List Select
    if (listSelectArrow){
        listSelectArrow.innerHTML = arrowIcon;
    }

});

    /* Create Layout Buttons */
    
for (let layout = 0; layout < layoutArray.length; layout++){

    // Create new button
    const newLayout:HTMLElement = document.createElement("p");

    // Add class, id and content
    newLayout.classList.add("layout-btn");
    newLayout.setAttribute("id", "layout-btn"+layout);
    newLayout.innerHTML = layoutArray[layout];

    // Append it to the layout list
    layoutListInner?.appendChild(newLayout);

    // Add an individual class to the layout
    if (layouts[layout]){
        layouts[layout].classList.add("layout"+layout);
    }

}

    /* Layout Button Click */
    
for (let layout = 0; layout < layoutArray.length; layout++){

    const layBtns:NodeListOf<Element> = document.querySelectorAll(".layout-btn");

    layBtns[layout]?.addEventListener("click", function(){

            /* Add a current-layout class to the button for the current layout */
        
        // Remove the display-layout class from every layout
        layBtns.forEach(function(thisBtn){
            thisBtn.classList.remove("current-layout");
        });

        // Add the display-layout class to the selected layout
        (layBtns[layout] as HTMLElement).classList.add("current-layout");
    
            /* Display Layout */

        // Remove the display-layout class from every layout
        layouts.forEach(function(thisLayout){
            thisLayout.classList.remove("display-layout");
        });

        // Add the display-layout class to the selected layout
        let displayLayout:Element = layouts[layout];
        displayLayout.classList.add("display-layout");

        // Display the current layout in the layout list
        if (currItem){
            currItem.innerHTML = layoutArray[layout];
        }

    });

}

    /* Open / Close the layout-list */

layoutList?.addEventListener("click", function(){
    layoutList?.classList.toggle("open-list");
});

window.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (!target.matches(".layout-list") &&
    !target.closest(".layout-list")){
        layoutList?.classList.remove("open-list");
    }
});