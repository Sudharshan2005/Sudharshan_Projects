let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let btn = document.getElementById("button");
let background = document.getElementById("bgContainer");

function changeColor() {
    let rand = Math.ceil(Math.random() * 10);
    if (rand > 8) {
        rand = rand - 8;
    }
    background.style.backgroundColor = bgColorsArray[rand];
}