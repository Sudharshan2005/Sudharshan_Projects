let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");

let searchInputValue = "";
let countriesList = [];

function createAndAppendCountry(country) {
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountries.appendChild(countryEl);

    let countryFlag = document.createElement("img");
    countryFlag.src = country.flag;
    countryFlag.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(countryFlag);

    let countryInfo = document.createElement("div");
    countryInfo.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfo);

    let countryName = document.createElement("p");
    countryName.textContent = country.name;
    countryName.classList.add("country-name");
    countryInfo.appendChild(countryName);

    let countryPopulation = document.createElement("p");
    countryPopulation.textContent = country.population;
    countryPopulation.classList.add("country-population");
    countryInfo.appendChild(countryPopulation);
}

function displaySearchResults() {
    resultCountries.textContent = "";
    for (let country of countriesList) {
        let countryName = country.name;
        if (countryName.includes(searchInputValue)) {
            createAndAppendCountry(country);
        }
    }
}

function getCountries() {
    spinner.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/countries-data", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            spinner.classList.add("d-none");
            countriesList = json;
            displaySearchResults();
        });
}

function onChangeSearchInput(event) {
    searchInputValue = event.target.value;
    displaySearchResults();
}

getCountries();
searchInput.addEventListener("keyup", onChangeSearchInput);