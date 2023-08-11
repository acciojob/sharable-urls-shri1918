function updateUrl() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    
    var queryString = "";
    
    if (name) {
        queryString += "?name=" + encodeURIComponent(name);
    }
    
    if (year) {
        if (queryString === "") {
            queryString += "?year=" + year;
        } else {
            queryString += "&year=" + year;
        }
    }
    
    document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
}