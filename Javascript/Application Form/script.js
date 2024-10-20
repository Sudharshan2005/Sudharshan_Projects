let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatus = document.getElementById("status");
let genderMale = document.getElementById("genderMale");
let genderFemale = document.getElementById("genderFemale");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};



nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

workingStatus.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

genderMale.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemale.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function formLevelValidation() {
    if (nameEl.value === "") {
        alert("Enter Valid Name");
    } else if (emailEl.value === "") {
        alert("Enter Valid Email");
    }
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer cb052a6ed6ebb2f7a7da5cc2867f572a2d5f51658f4da7240330cac5829e973c"
        },
        body: JSON.stringify(formData)
    };
    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            if (json.code === 422) {
                if (json.data[0].message === "has already been taken" && json.data[0].field === "email") {
                    emailErrMsgEl.textContent = "Email Already Exists";
                }
            }
        });
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    formLevelValidation();
    submitFormData(formData);
});