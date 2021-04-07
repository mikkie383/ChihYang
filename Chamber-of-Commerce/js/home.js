//weather data
//city Rexburg latitude and longitude: 43.8231° N, 111.7924° W
const lat = 43.8231;
const lon = -111.7924;
// API KEY 
const key = "35049d5dd83bcba24b8fb7425d086641";

let temp = document.getElementById('temp');
let temp1 = document.getElementById('temp1');
let temp2 = document.getElementById('temp2');
let temp3 = document.getElementById('temp3');
let weatherimg1 = document.getElementById('weatherimg1');
let weatherimg2 = document.getElementById('weatherimg2');
let weatherimg3 = document.getElementById('weatherimg3');
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.daily[1].weather[0].icon + '.png';
    let imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.daily[2].weather[0].icon + '.png';
    let imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.daily[3].weather[0].icon + '.png';
    weatherimg1.setAttribute("src", imagesrc1);
    weatherimg1.setAttribute("alt", jsObject.daily[1].weather[0].main);
    weatherimg2.setAttribute("src", imagesrc2);
    weatherimg2.setAttribute("alt", jsObject.daily[2].weather[0].main);
    weatherimg3.setAttribute("src", imagesrc3);
    weatherimg3.setAttribute("alt", jsObject.daily[3].weather[0].main);
    document.getElementById('desc').textContent = jsObject.current.weather[0].description;
    temp.textContent = (jsObject.current.temp).toFixed(0);
    document.getElementById('hum').textContent = jsObject.current.humidity;
    temp1.textContent = (jsObject.daily[1].temp.day).toFixed(0);
    temp2.textContent = (jsObject.daily[2].temp.day).toFixed(0);
    temp3.textContent = (jsObject.daily[3].temp.day).toFixed(0);
  });

//count future 3 days
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let todayPlus2 = new Date();
todayPlus2.setDate(todayPlus2.getDate() + 2);
let todayPlus3 = new Date();
todayPlus3.setDate(todayPlus3.getDate() + 3);

day1.textContent = tomorrow.toString().substr(0, 3);
day2.textContent = todayPlus2.toString().substr(0, 3);
day3.textContent = todayPlus3.toString().substr(0, 3);