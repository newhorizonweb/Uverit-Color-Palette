


// Elements
const mainTfName:HTMLElement | null = document.querySelector(".tf-main .tf-heading");
const secondTfName:HTMLElement | null = document.querySelector(".tf-secondary .tf-heading");

const mainTfDesc:HTMLElement | null = document.querySelector(".tf-main .tf-desc");
const secondTfDesc:HTMLElement | null = document.querySelector(".tf-secondary .tf-desc");

const mainHidDesc:HTMLElement | null = document.querySelector(".main-tf-desc");
const secondHidDesc:HTMLElement | null = document.querySelector(".secondary-tf-desc");

// Typeface Names
mainTfName!.innerHTML = cpFontName1;
secondTfName!.innerHTML = cpFontName2;



//*--|*|--*\\_____// Typefaces \\_____//*--|*|--*\\



    /* Typeface Description */

// Check if the HTML elements exist
if (mainTfDesc && mainHidDesc && secondTfDesc && secondHidDesc){

    // Insert description into the elements
    mainTfDesc!.innerHTML = cpFontDesc1;
    mainHidDesc!.innerHTML = cpFontDesc1;
    
    secondTfDesc!.innerHTML = cpFontDesc2;
    secondHidDesc!.innerHTML = cpFontDesc2;
    
    // Compare the text length and display an error 
    // if the main and secondary descriptions are too different in length
    // or if the description is too long
    const descTxtMaxDiff:number = 75;
    const descTxtMaxLength:number = 500;
    const mainDescLength:number = mainTfDesc!.innerHTML.length;
    const secondDescLength:number = secondTfDesc!.innerHTML.length;
    const descTxtDiff:number = Math.abs(mainDescLength - secondDescLength);
    
    if (descTxtDiff > descTxtMaxDiff){
        alert("The typeface descriptions' text length is too different." +
        "\nIt shouldn't be more than "+descTxtMaxDiff+" characters." +
        "\nCurrently, they differ by "+descTxtDiff);
    }
    
    if (mainDescLength > 500 || secondDescLength > 500){
        alert("The typeface description is too long.\nKeep them below "+descTxtMaxLength+" characters." +
        "\nCurrently: " +
        "\nMain description: "+mainDescLength+" characters." +
        "\nSecond desctiption: "+secondDescLength+" characters.");
    }
    
    
    
        /* Typeface Description Height */
    
    // Adjust the typeface description height (set the same height for both typeface desc)
    function setDescHeight(){
     
        // Set the height to auto, so the divs can have the height set dynamically
        mainTfDesc!.style.height = "auto";
        secondTfDesc!.style.height = "auto";
    
        // Set the same desc height for both descriptions
        if (window.innerWidth > 1200){
            let mainHeight:number = mainTfDesc!.offsetHeight;
            let secondHeight:number = secondTfDesc!.offsetHeight;
            let currHeight:number = Math.max(mainHeight, secondHeight);
            
            // Set the max height to both divs
            mainTfDesc!.style.height = currHeight + "px";
            secondTfDesc!.style.height = currHeight + "px";
        }
    
        // Set a CSS variable to be the same as the higher desctiption at 1440px wide window
        // Kinda stupid solution, but it works
        let mainHidHeight:number = mainHidDesc!.offsetHeight;
        let secondHidHeight:number = secondHidDesc!.offsetHeight;
        let hidDescHeight:number = Math.max(mainHidHeight, secondHidHeight);
       
        document.documentElement.style.setProperty("--desc-height", hidDescHeight.toString()+"px");
    }
    
    // Call the function on window load and resize events
    window.addEventListener('load', setDescHeight);
    window.addEventListener('resize', setDescHeight);
}



//*--|*|--*\\_____// Type Specimens \\_____//*--|*|--*\\



    /* Elements */

// Specimen parent divs
const specimens:NodeListOf<Element> = document.querySelectorAll(".specimen");

// Array with the font sizes and styles
const specTitles:string[] = [
    "Regular 400, 14px",
    "Bold 800, 14px",
    "Italic 400, 14px",
    "Bold - Italic 800, 14px",

    "Regular 400, 16px",
    "Bold 800, 16px",
    "Italic 400, 16px",
    "Bold - Italic 800, 16px",

    "Regular 400, 24px",
    "Bold 800, 24px",
    "Italic 400, 24px",
    "Bold - Italic 800, 24px"
]

// Number of sizes (px)
const numberOfSizes = 3;

// Number of styles (regular, bold, etc.)
const numberOfStyles = 4;



    /* Insert elements */

// Check if the HTML elements exist
if (specimens){

    specimens.forEach((specimen) => {

        // Append HTML elements
        for (let i = 0; i < specTitles.length; i++){
    
            // Append specimen item div
            let specItem:HTMLElement = document.createElement("div");
            specItem.classList.add("spec-item");
            specimen.appendChild(specItem);
        
            // Append specimen title
            let specTitle:HTMLElement = document.createElement("p");
            specTitle.classList.add("spec-title");
            specTitle.innerHTML = specTitles[i];
            specItem.appendChild(specTitle);
        
            // Append specimen text
            let specTxt:HTMLElement = document.createElement("p");
            specTxt.classList.add("spec-txt");
            specTxt.innerHTML = fontTestTxt;
            specItem.appendChild(specTxt);    
        }
    
        // Get the specimen parent class
        const thisSpecimen:string = specimen.parentElement!.className.split(" ")[1];
        const specTexts:NodeListOf<Element> = document.querySelectorAll("."+thisSpecimen+" .spec-txt");
    
        // Set a variable for keeping track of the current number
        let currNum = 0;
    
        for (let i = 0; i < numberOfSizes; i++){
    
            // Add the size classes
            for (let size = currNum; 
            size < specTitles.length / numberOfSizes + currNum;
            size++){
                let specTxt = specTexts[size];
                specTxt.classList.add("size"+i);
            }
    
            // Add the style classes
            for (let style = 0; style < numberOfStyles; style++){
                let specTxt = specTexts[style + currNum];
                specTxt.classList.add("style"+style);
            }
    
            // Update the current number variable
            currNum += specTitles.length / numberOfSizes;
        }
    
    });
        
}


//*--|*|--*\\_____// Character Sets \\_____//*--|*|--*\\



    /* Elements */

const charSet:NodeListOf<Element> = document.querySelectorAll(".set");

const alphabetSetElem:HTMLElement | null = document.querySelector(".alphabet-set");
const numberSetElem:HTMLElement | null = document.querySelector(".number-set");
const specialSetElem:HTMLElement | null = document.querySelector(".special-set");


// Alphabet
const alphabetSet:string[] = [
    "Aa",
    "Bb",
    "Cc",
    "Dd",
    "Ee",
    "Ff",
    "Gg",
    "Hh",
    "Ii",
    "Jj",
    "Kk",
    "Ll",
    "Mm",
    "Nn",
    "Oo",
    "Pp",
    "Qq",
    "Rr",
    "Ss",
    "Tt",
    "Uu",
    "Vv",
    "Ww",
    "Xx",
    "Yy",
    "Zz"
]

// Numbers
const numberSet:string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0" 
]

// Special Characters
const specialSet:string[] = [
    "!",
    "?",
    "@",
    "#",
    "$",
    "%",
    "&",
    ",",
    ";",
    "_",
    "+",
    "-",
    "=",
    "*",
    ">"
]

// Check if the HTML elements exist
if (charSet && alphabetSetElem && numberSetElem && specialSetElem){

    charSet.forEach((set) => {

        // Alphabet
        for (let i = 0; i < alphabetSet.length; i++){
            const setElem:HTMLElement = document.createElement("p");
    
            setElem.classList.add("set-item");
            setElem.innerHTML = alphabetSet[i];
            
            set.querySelector(".alphabet-set")!.appendChild(setElem);
        }
    
        // Numbers
        for (let i = 0; i < numberSet.length; i++){
            const setElem:HTMLElement = document.createElement("p");
    
            setElem.classList.add("set-item");
            setElem.innerHTML = numberSet[i];
    
            set.querySelector(".number-set")!.appendChild(setElem);
        }
    
        // Special Characters
        for (let i = 0; i < specialSet.length; i++){
            const setElem:HTMLElement = document.createElement("p");
    
            setElem.classList.add("set-item");
            setElem.innerHTML = specialSet[i];
    
            set.querySelector(".special-set")!.appendChild(setElem);
        }
    
    });

}