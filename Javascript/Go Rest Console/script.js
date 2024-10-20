let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let sendRequestBtn = document.getElementById("sendRequestBtn");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

let data = "";

let options = {
    method: "",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer cb052a6ed6ebb2f7a7da5cc2867f572a2d5f51658f4da7240330cac5829e973c"
    },
    body: ""
};

let url = requestUrl.value;

requestMethod.addEventListener("change", function(event) {
    options.method = event.target.value;
});

requestBody.addEventListener("change", function(event) {
    let data = event.target.value;
    options.body = data;
});


function validateUrl() {
    if (requestUrl.value.trim() === "") {
        requestUrlErrMsg.textContent = "Required*";
        return false;
    } else {
        requestUrlErrMsg.textContent = "";
        return true;
    }
}

consoleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    url = requestUrl.value;
    if (validateUrl()) {
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                responseStatus.value = JSON.stringify(json.code);
                responseBody.value = JSON.stringify(json);
            });
    }
});