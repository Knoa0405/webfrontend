
const title = document.querySelector("#title");

const ClICKED_CLASS = "clicked";


function HandleClick() {
    const hasClass = title.classList.contains(ClICKED_CLASS)
    // const currentClass = title.className;
    // if (currentClass === ClICKED_CLASS) {
        // title.className = "";
    if(hasClass) {
        title.classList.remove(ClICKED_CLASS);   
    } else {
        // title.className = ClICKED_CLASS;
        title.classList.add(ClICKED_CLASS);
    }
    // title.classList.toggle(ClICKED_CLASS); - 이거면 위에 방법대로 안하고
    // 바로 적용가능
    
};

function init() {
    title.addEventListener('click', HandleClick);
};

init();
