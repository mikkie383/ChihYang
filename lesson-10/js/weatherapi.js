//city id
const cityId = 5604473;
// API KEY 
const key = "35049d5dd83bcba24b8fb7425d086641";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = ((jsObject.main.temp - 273) * 9 / 5 + 32).toFixed(2);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });