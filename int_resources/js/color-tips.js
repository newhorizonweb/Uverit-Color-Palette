/* SVG */
const doIcon = "<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path class='icon-symbol' d='M198.5,5.8h0a10.6,10.6,0,0,0-17.4-1.2l-77.7,95.8a4.5,4.5,0,0,1-7.2-.3L77.5,73.5a16.8,16.8,0,0,0-26.6-1.2h0A16.8,16.8,0,0,0,50,92.8l38.1,54.5a11.6,11.6,0,0,0,19.1-.1l10.9-15.7,80-114.1A10.8,10.8,0,0,0,198.5,5.8Z'/><path class='icon-ring' d='M100,200A100,100,0,0,1,100,0a97.7,97.7,0,0,1,38.9,7.9,8.9,8.9,0,0,1,4.8,11.6A9,9,0,0,1,132,24.2,82.4,82.4,0,0,0,17.8,100a82.2,82.2,0,0,0,164.4,0,80.4,80.4,0,0,0-2.8-21.3,9,9,0,0,1,6.3-10.9,8.9,8.9,0,0,1,10.9,6.3A98,98,0,0,1,200,100,100.2,100.2,0,0,1,100,200Z'/></svg>";
const dontIcon = "<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path class='icon-symbol' d='M147.4,133.5,113.9,100l33.5-33.5a9.8,9.8,0,0,0-13.9-13.9L100,86.1,66.5,52.6A9.8,9.8,0,1,0,52.6,66.5L86.1,100,52.6,133.5a9.9,9.9,0,0,0,0,13.9,9.8,9.8,0,0,0,13.9,0L100,113.9l33.5,33.5a9.8,9.8,0,0,0,13.9-13.9Z'/><path class='icon-ring' d='M100,200A100,100,0,1,1,200,100,100.2,100.2,0,0,1,100,200Zm0-182.2A82.2,82.2,0,1,0,182.2,100,82.3,82.3,0,0,0,100,17.8Z'/></svg>";
/* Color Tips */
// Variables
const iconDoElem = document.querySelectorAll(".ct-icon-do");
const iconDontElem = document.querySelectorAll(".ct-icon-dont");
// Do Icon
iconDoElem.forEach((elem) => {
    elem.innerHTML = doIcon;
});
// Dont Icon
iconDontElem.forEach((elem) => {
    elem.innerHTML = dontIcon;
});
