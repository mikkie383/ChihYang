WebFont.load({google: {families: ["Acme", "Open Sans"]}});

const year = document.querySelector('.year');
const time = document.querySelector('.date');
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const date = new Date();

year.textContent = date.getFullYear();
time.innerHTML = `Last Updated: ${date.toLocaleDateString("en-AU", options)}`;

const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');
const pancake = document.getElementById('pancake');

hamButton.addEventListener('click', () =>{
    mainMenu.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        
        mainMenu.classList.remove('responsive');
        
    }
};

if(date.getDay() == 5){
    pancake.style.display = "block";
}

//city id
const cityId = 5604473;
// API KEY 
const key = "35049d5dd83bcba24b8fb7425d086641";

let temp = document.getElementById('temp');
let windSpeed = document.getElementById('windSpeed');
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('desc').textContent = jsObject.weather[0].main;
    let temp1 = ((jsObject.main.temp - 273) * 9 / 5 + 32).toFixed(0);
    temp.textContent = temp1;
    document.getElementById('hum').textContent = jsObject.main.humidity;
    let windSpeed1 = jsObject.wind.speed;
    windSpeed.textContent = jsObject.wind.speed.toFixed(0);

    if (temp1 <= 50 && windSpeed1 >= 3) {
        document.querySelector(".windChill").innerHTML = windChill(temp1, windSpeed1) + "°F";
    }
    else {
        document.querySelector(".windChill").innerHTML = "N/A";
    }
  });

//cal windchill function

function windChill(t, s) {
    
    let f = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    return f;
}

//5day forecast
const forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${key}`;
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let i;
    for(i = 0; i <= jsObject.list.length; i++){

        let sixPM = jsObject.list[i].dt_txt.substr(11, 8);
        if(sixPM == "18:00:00"){
            let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';

            let section = document.createElement('section');
            let p = document.createElement('p');
            let image = document.createElement('img');
            let div = document.createElement('div');
            section.setAttribute('class', 'day');
            div.setAttribute('class', 'forecast-temp');

            let count = 0;
            let d = new Date(jsObject.list[i].dt_txt);
            p.textContent = d.toString().substr(0, 3);
            div.textContent = ((jsObject.list[i].main.temp - 273) * 9 / 5 + 32).toFixed(0) + "°F";
            image.setAttribute('src', imagesrc);
            image.setAttribute('alt', jsObject.list[i].weather[0].description);

            section.appendChild(p);
            section.appendChild(image);
            section.appendChild(div);

            document.querySelector('div.forecast-info').appendChild(section);
            count++;
        }
    }
    
  });