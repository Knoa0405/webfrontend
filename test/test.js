
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(255, 255, 255)";
const OTHER_COLOR = "#e5e5e5";



function Art() {
    const currentColor = title.style.color;
    console.log(currentColor);
    console.log(title.style.color);
    console.log(BASE_COLOR);
    console.log(Boolean(currentColor === BASE_COLOR))
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
        console.log("hello")
    } 
};

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener('click', Art);
};
init();
