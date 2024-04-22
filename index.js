const API_KEY = `39e68d119d9e483aa75202618242004`;
const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;

const locationInput = document.getElementById('location-name');

async function getWeatherData(location) {
  let url = WEATHER_URL + location;
  let response = await fetch(url, {mode: 'cors'});
  
  if (response.status === 400) {
    console.log('Place does not exist!');
    return;
  }

  let data = await response.json();

  let locationName = document.getElementById('location');
  let locationExtended = document.getElementById('location-extended');
  let weatherCondition = document.getElementById('weather-condition');
  let currentTemp = document.getElementById('current-temp');

  locationName.textContent = data.location.name;
  locationExtended.textContent = `${data.location.region}, ${data.location.country}`;
  weatherCondition.textContent = data.forecast.forecastday[0].day.condition.text.toUpperCase();
  currentTemp.textContent = `${data.current.temp_c}`;

  let feelsLike = document.getElementById('feels-like');
  let windSpeed = document.getElementById('wind-speed');
  let humidity = document.getElementById('humidity');

  feelsLike.textContent = `Feels like: ${parseInt(data.current.feelslike_c)}ºC`;
  windSpeed.textContent = `Wind Speed: ${parseInt(data.current.wind_mph)} MPH`;
  humidity.textContent = `Humidity: ${parseInt(data.current.humidity)}%`;

  console.log(data.location.name);
  console.log("Data:", data);
}

document.forms['get_weather'].addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(locationInput.value).catch((e) => console.log("KWADPOAKSPOD"));
});

getWeatherData('london');