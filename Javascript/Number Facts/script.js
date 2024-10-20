let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function displayFact(value) {
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/numbers-fact?number=" + value;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            spinner.classList.add("d-none");
            fact.textContent = json.fact;
        });
}

userInput.addEventListener("keydown", function(event) {
    let userInputValue = userInput.value;
    if (event.key === "Enter" && userInputValue !== "") {
        fact.textContent = "";
        displayFact(userInputValue);
    } else if (userInputValue === "" && event.key === "Enter") {
        alert("Enter a number");
    }
})