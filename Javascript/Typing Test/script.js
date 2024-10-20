let speedTypingTest = document.getElementById("speedTypingTest");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let timer = document.getElementById("timer1");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let options = {
    method: "GET"
};

let resultValues = {
    given: "",
    typed: "",
    time: 0
};

function getQuote() {
    speedTypingTest.classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            quoteDisplay.textContent = json.content;
            resultValues.given = json.content;
        });
}
getQuote();
speedTypingTest.classList.add("d-none");
let counter = 0;
let timeInterval = setInterval(function() {
    timer.textContent = counter;
    counter += 1;
    resultValues.time = counter;
}, 1000);
submitBtn.onclick = function() {
    if (quoteInput.value === resultValues.given) {
        timer.textContent = resultValues.time;
        clearInterval(timeInterval);
        result.textContent = "You typed in " + resultValues.time + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence.";
    }
}

resetBtn.onclick = function() {
    resultValues = {
        given: "",
        typed: "",
        time: 0
    };
    counter = 0;
    getQuote();
    speedTypingTest.classList.add("d-none");
    result.textContent = "";
    quoteInput.value = "";
}