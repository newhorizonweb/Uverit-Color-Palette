/* Layout List && Display Layout */
// Array with layout options (buttons to display the layout)
const layoutArray = [
    "too long placeholder",
    "short placeholder",
    "placeholder",
    "plchldr"
];
// HTML Elements
const layoutList = document.querySelector(".layout-list");
const listSelect = document.querySelector(".ll-select");
const currItem = document.querySelector(".current-item");
const listSelectArrow = document.querySelector(".ll-select-arrow");
const layoutListInner = document.querySelector(".layout-list-inner");
const layoutsParent = document.querySelector(".layouts");
const layouts = document.querySelectorAll(".layout");
/* Some stuff on page load */
// Add an arrow icon to the Layout List Select
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".layout-btn")[0].classList.add("current-layout");
});
// Add an arrow icon to the Layout List Select
document.addEventListener("DOMContentLoaded", function () {
    if (listSelectArrow) {
        listSelectArrow.innerHTML = arrowIcon;
    }
});
// Add the display-layout class to the first element on page load
layouts[0].classList.add("display-layout");
// Display the first layout in the layout list
if (currItem) {
    currItem.innerHTML = layoutArray[0];
}
// Set the layouts parent div height
if (layoutsParent) {
    layoutsParent.style.height = layouts[0].offsetHeight.toString() + "px";
}
/* Create Layout Buttons */
for (let layout = 0; layout < layoutArray.length; layout++) {
    // Create new button
    const newLayout = document.createElement("p");
    // Add class, id and content
    newLayout.classList.add("layout-btn");
    newLayout.setAttribute("id", "layout-btn" + layout);
    newLayout.innerHTML = layoutArray[layout];
    // Append it to the layout list
    layoutListInner?.appendChild(newLayout);
    // Add an individual class to the layout
    if (layouts[layout]) {
        layouts[layout].classList.add("layout" + layout);
    }
}
/* Layout Button Click */
for (let layout = 0; layout < layoutArray.length; layout++) {
    const layBtns = document.querySelectorAll(".layout-btn");
    layBtns[layout]?.addEventListener("click", function () {
        /* Add a current-layout class to the button for the current layout */
        // Remove the display-layout class from every layout
        layBtns.forEach(function (thisBtn) {
            thisBtn.classList.remove("current-layout");
        });
        // Add the display-layout class to the selected layout
        layBtns[layout].classList.add("current-layout");
        /* Display Layout */
        // Remove the display-layout class from every layout
        layouts.forEach(function (thisLayout) {
            thisLayout.classList.remove("display-layout");
        });
        // Add the display-layout class to the selected layout
        let displayLayout = layouts[layout];
        displayLayout.classList.add("display-layout");
        // Set the layouts parent div height to the current layout's height
        if (layoutsParent) {
            layoutsParent.style.height = layouts[layout].offsetHeight.toString() + "px";
        }
        // Display the current layout in the layout list
        if (currItem) {
            currItem.innerHTML = layoutArray[layout];
        }
    });
}
/* Open / Close the layout-list */
layoutList?.addEventListener("click", function () {
    layoutList?.classList.toggle("open-list");
});
window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches(".layout-list") &&
        !target.closest(".layout-list")) {
        layoutList?.classList.remove("open-list");
    }
});
