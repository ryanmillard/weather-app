const API_KEY = `39e68d119d9e483aa75202618242004`;
const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=`;

const locationInput = document.getElementById('location-name');

async function getWeatherData() {
  let location = locationInput.value;
  let url = WEATHER_URL + location;
  let response = await fetch(url, {mode: 'cors'});
  
  if (response.status === 400) {
    console.log('Place does not exist!');
    return;
  }
  
  let data = await response.json();
  console.log(data.location.name);
  console.log("Data:", data);
}

document.forms['get_weather'].addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData().catch((e) => console.log("KWADPOAKSPOD"));
});