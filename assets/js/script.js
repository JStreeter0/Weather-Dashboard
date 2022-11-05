const cityBtnEl = document.getElementById("cityInput");
var apiKeyEl = "9bda1fa31bd767744c411e07b58aa39d";
var city;
var currentCityEl = document.querySelector("cardCityName");
var cityHistoryEl = document.querySelector("cityHistory");
var historyDiv = document.querySelector(".searchHistory");

// store searched cities
// function storeCity() {
//     var citySearch = document.getElementById("searchHistory");
//     citySearch.textContent = "";

//     var searchedCities = localStorage.getItem("visitedCities");
//     if (searchedCities

// }

// current weather function
function currentWeather(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKeyEl;

    fetch(queryURL)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
   
}


// 5 day forecast function

cityBtnEl.addEventListener("click", currentWeather);