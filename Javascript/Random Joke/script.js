let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function getJoke() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let text = JSON.stringify(json.value);
            jokeText.textContent = text;
        });
}
jokeBtn.addEventListener("click", getJoke);