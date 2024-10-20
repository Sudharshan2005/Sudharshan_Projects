let BgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let btn = document.getElementById("customButton");

function change() {
    btn.style.backgroundColor = BgColor.value;
    btn.style.color = fontColor.value;
    btn.style.fontSize = fontSize.value;
    btn.style.fontWeight = fontWeight.value;
    btn.style.padding = padding.value;
    btn.style.borderRadius = borderRadius.value;
}