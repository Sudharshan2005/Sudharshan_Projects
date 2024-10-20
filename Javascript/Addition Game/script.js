let num1 = document.getElementById("firstNumber");
let num2 = document.getElementById("secondNumber");
let inputValue = document.getElementById("userInput");
let resultText = document.getElementById("gameResult");
num1.textContent = Math.ceil(Math.random() * 100);
num2.textContent = Math.ceil(Math.random() * 100);

function checkResult() {
    inputValue.value = parseInt(inputValue.value);
    let result = parseInt(num1.textContent) + parseInt(num2.textContent);
    if (parseInt(inputValue.value) === result) {
        resultText.textContent = "Congratulations! You got it right";
        resultText.classList.add("game-result");
        resultText.style.backgroundColor = "#028a0f";
    } else {
        resultText.textContent = "Please Try Again!";
        resultText.classList.add("game-result");
        resultText.style.backgroundColor = "#1e217c";
    }
}

function restartGame() {
    num1.textContent = Math.ceil(Math.random() * 100);
    num2.textContent = Math.ceil(Math.random() * 100);
    inputValue.value = "";
    resultText.textContent = "";
}
restartGame();