let aboutTab = document.getElementById("aboutTab");
let visitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");
let aboutBtn = document.getElementById("aboutButton");
let visitBtn = document.getElementById("timeToVisitButton");
let attractionBtn = document.getElementById("attractionsButton");

visitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

function about() {
    aboutTab.classList.remove("d-none");
    visitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
    aboutBtn.classList.add("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionBtn.classList.remove("selected-button");
}

function visit() {
    aboutTab.classList.add("d-none");
    visitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");
    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.add("selected-button");
    attractionBtn.classList.remove("selected-button");
}

function attraction() {
    aboutTab.classList.add("d-none");
    visitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");
    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionBtn.classList.add("selected-button");
}