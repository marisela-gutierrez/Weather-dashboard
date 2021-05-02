var searchFormEl =document.getElementById("searchForm");
var searchInputEl = document.getElementById("citySearch");
var currentWeatherCon = document.getElementById("currentWeatherCon");
var forecastCon = document.getElementById("forecastCon");

var todayDate = moment().format("(MM/DD/YYYY)");

var getCurrenWeather = function(city) {
  $("#city-date").html("<h3>" + city + "" + todayDate + "</h3");
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + "88ab5694ae8be95b14ad32b45072a328";
  
}

var formSubmitHandler = function(event) {
  event.preventDefault();
  // get value from input element
  var weatherSearch = searchInputEl.value.trim();

  if (weatherSearch) {
    getCurrenWeather(weatherSearch);
    searchInputEl.value = "";
  } else {
    alert("Please valid City");
  }
  console.log(event);
};

getCurrenWeather();
// add event listeners to forms
searchFormEl.addEventListener("submit", formSubmitHandler);