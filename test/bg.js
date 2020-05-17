const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./photo${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.onload = function(){
    //     console.log("load complete!")
    // };
    // 이미지를 로컬스토리지에 저장해뒀다가 그 이미지를
    // 꺼내오는 방식 생각해보기!
};


function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
 const randomNumber = genRandom();
 paintImage(randomNumber);
}

init();