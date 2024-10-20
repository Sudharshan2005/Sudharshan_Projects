let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let message = document.getElementById("message");
let searchResults = document.getElementById("searchResults");
let heading = document.createElement("h1");

function appendSearchResults(search_results) {
    if (search_results.length < 1) {
        message.textContent = "No results found";
        searchResults.textContent = "";
        heading.textContent = "";
    } else {
        searchResults.textContent = "";
        message.textContent = "";
        heading.textContent = "Popular Books";
        searchResults.appendChild(heading);
        for (let item of search_results) {
            let title = item.title;
            let image = item.imageLink;
            let author = item.author;
            let imageEl = document.createElement("img");
            let textEl = document.createElement("p");
            imageEl.setAttribute("src", image);
            textEl.textContent = author;
            let div = document.createElement("div");
            div.appendChild(imageEl);
            div.appendChild(textEl);
            searchResults.appendChild(div);
            div.classList.add("col-5");
        }
    }
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        let searchInputvalue = searchInput.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputvalue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                let {
                    search_results
                } = json;
                appendSearchResults(search_results);
                spinner.classList.toggle("d-none");
            });
    }
})