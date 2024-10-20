let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function calculate() {
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("seconds-box");
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.remove("seconds-box");
    } else {
        errorMsg.textContent = "";
        let seconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60;
        timeInSeconds.textContent = seconds + "s";
        timeInSeconds.classList.add("seconds-box");
    }
}

convertBtn.addEventListener("click", function() {
    calculate();
});