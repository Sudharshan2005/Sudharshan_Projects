let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

let options = {
    name: "",
    url: ""
};

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    options.name = event.target.value;
});

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
    options.url = event.target.value;
});

function onCreateAndAppendUrlBox() {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("url-box");
    li.appendChild(div);
    let heading = document.createElement("p");
    heading.textContent = options.name;
    heading.classList.add("url-heading");
    div.appendChild(heading);
    let url = document.createElement("a");
    url.setAttribute("href", options.url);
    url.textContent = options.url;
    url.classList.add("url");
    div.appendChild(url);
    bookmarksList.appendChild(li);
}

function validation() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        return false;
    } else if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        return false;
    } else {
        siteUrlErrMsg.textContent = "";
        siteNameErrMsg.textContent = "";
        return true;
    }
}

bookmarkForm.addEventListener("submit", function(event) {
    submitBtn.style.backgroundColor = "blue";
    event.preventDefault();
    if (validation()) {
        onCreateAndAppendUrlBox();
    }
});