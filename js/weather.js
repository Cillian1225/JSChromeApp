const API_KEY = "6def6f5458e3226a4a33490f6635e269";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat + lng);
  console.log("You live in ", lat, "/", lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = ` ${Math.ceil(data.main.temp)} °C @`;
    });
}
function onGeoError() {
  alert("Browser does not find your location to show your weather");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
