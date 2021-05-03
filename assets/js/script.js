var searchFormEl =document.getElementById("searchForm");
var searchInputEl = document.getElementById("citySearch");
var currentWeatherCon = document.getElementById("currentWeatherCon");
var forecastCon = document.getElementById("forecastCon");

var todayDate = moment().format("(MM/DD/YYYY)");

var getCurrenWeather = function(city) {
  $("#city-date").html("<h3>" + city + "" + todayDate + "</h3");
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + "88ab5694ae8be95b14ad32b45072a328";
  
  
};

var fiveDayForecast = function(city) {
  var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + "88ab5694ae8be95b14ad32b45072a328";
  // make a request to the url
  fetch(apiURL).then(function(data) {
    displayWeather(data, city)
  });
};

var formSubmitHandler = function(event) {
  event.preventDefault();
  // get value from input element
  var weatherSearch = searchInputEl.value.trim();

  if (weatherSearch) {
    getCurrenWeather(weatherSearch);
    searchInputEl.value = "";
  } else {
    alert("Please enter valid City");
  }
  console.log(event);
};

var displayWeather = function(weather, city) {
  currentWeatherCont.innerHTML = `<div class="card"><h2 class="card-title">${city.toUpperCase()} (${currentDate})</h2>
    <img src=${currentWeatherImg} class="imageStyle" />
    <p class="card-text">Temp: ${weather.current.feels_like}°F</p>
    <p class="card-text">Wind: ${weather.current.wind_speed}mph</p>
    <p class="card-text">Humidty: ${weather.current.humidity}%</p>
    <p class="card-text">UV Index: ${weather.current.uvi}</p></div> `; 

  forecastCont.innerHTML = `
  <h3>5-Day Forecast:</h3>
  <div class="row justify-content-around">
    <div class="card col-12 col-lg-2">
      <h4 class="card-title">${currentDate.add(1, "days").format("l")}</h4>
      <p class="card-text">Hi: ${weather.daily[1].temp.max}°F</p>
      <p class="card-text">Low: ${weather.daily[1].temp.min}°F</p>
      <p class="card-text">Wind: ${weather.daily[1].wind_speed}mph</p>
      <p class="card-text">Humidty: ${weather.daily[1].humidity}%</p>
  </div> `;
};
  

// add event listeners to forms
searchFormEl.addEventListener("submit", formSubmitHandler);