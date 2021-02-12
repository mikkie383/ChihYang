let temperature = parseFloat(document.getElementById("temp").innerText);
let windspeed = parseFloat(document.getElementById("windSpeed").innerText);

if (temperature <= 50 && windspeed >= 3) {
    document.getElementById("windChill").innerHTML = windChill(temperature, windspeed);
}
else {
    document.getElementById("windChill").innerHTML = "N/A";
}

function windChill(t, s) {
    
    let f = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    return f;
}