let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let timer = 0;

function timeInterval(timer) {
    let counter = timer;
    let intervalId = setInterval(function() {
        timerText.textContent = counter + " seconds left";
        counter -= 1;
        if (counter === -1) {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
}

twentySecondsBtn.onclick = function() {
    timer = 20;
    timerText.textContent = 20;
    timeInterval(timer);

}
thirtySecondsBtn.onclick = function() {
    timer = 30;
    timerText.textContent = 30;
    timeInterval(timer);
}
fortySecondsBtn.onclick = function() {
    timer = 40;
    timerText.textContent = 40;
    timeInterval(timer);
}
oneMinuteBtn.onclick = function() {
    timer = 60;
    timerText.textContent = 60;
    timeInterval(timer);
}