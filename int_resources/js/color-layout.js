/* Layout List && Display Layout */
// Array with layout options (buttons to display the layout)
const layoutArray = [
    "Layout a 1",
    "Layout b 2",
    "Layout c 3",
    "Layout d 4"
];
// HTML Elements
const layoutList = document.querySelector(".layout-list");
const layoutListInner = document.querySelector(".layout-list-inner");
const layoutsParent = document.querySelector(".layouts");
const currLayout = document.querySelector(".current-item");
const layouts = document.querySelectorAll(".layout");
// Add the display-layout class to the first element on page load
layouts[0].classList.add("display-layout");
// Display the first layout in the layout list
if (currLayout) {
    currLayout.innerHTML = layoutArray[0];
}
// Set the layouts parent div height
if (layoutsParent) {
    layoutsParent.style.height = layouts[0].offsetHeight.toString() + "px";
}
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
    // Do sum cool stuff on the layout-btn click
    let layBtn = document.getElementById("layout-btn" + layout);
    layBtn?.addEventListener("click", function () {
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
        if (currLayout) {
            currLayout.innerHTML = layoutArray[layout];
        }
    });
}
/* Open / Close the layout-list */
layoutList?.addEventListener("click", function () {
    layoutListInner?.classList.toggle("open-list");
});
window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches(".layout-list") &&
        !target.closest(".layout-list")) {
        layoutListInner?.classList.remove("open-list");
    }
});
