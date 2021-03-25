//city id
const cityName = "Soda Springs";
// API KEY 
const key = "35049d5dd83bcba24b8fb7425d086641";

let temp = document.getElementById('temp');
let windSpeed = document.getElementById('windSpeed');
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},id,usa&units=imperial&appid=${key}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      
    document.getElementById('desc').textContent = jsObject.weather[0].main;
    let temp1 = (jsObject.main.temp).toFixed(1);
    temp.textContent = temp1;
    document.getElementById('hum').textContent = jsObject.main.humidity;
    let windSpeed1 = jsObject.wind.speed;
    windSpeed.textContent = jsObject.wind.speed.toFixed(1);

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
const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},id,usa&appid=${key}`;
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    
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
            div.textContent = ((jsObject.list[i].main.temp - 273.15) * 9 / 5 + 32).toFixed(0) + "°F";
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

  //pull twon data from json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];
    
    let marquee = document.createElement('p');

    let text1 = towns[0].events[0];
    let text2 = towns[0].events[1];
    let text3 = towns[0].events[2];
    
    marquee.innerHTML = "Events: ~~" + text1 + "~~&emsp;~~" + text2 + "~~&emsp;~~" + text3 + "~~";
    marquee.setAttribute('class', 'marquee');

    document.querySelector('.eventlist').appendChild(marquee);    
    
  });