const APIKEY = '40950c7271250babae1c93007b9ba7c0';

let submit = document.getElementById('search');
let cityName = document.getElementById('city');

submit.addEventListener('click', function (e) {
    CallAPI(cityName.value);
    e.preventDefault();
});


function CallAPI(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let wind = document.querySelector('.wind');
    let humidity = document.querySelector('.humidity');
    let weather = document.querySelector('.weather');
    let coord = document.querySelector('.coord');


    fetch(url).then(response => response.json()).then(data => {
        city.innerHTML = "Ville : " + data.name;
        temp.innerHTML = "Température: " + data.main.temp + "°C";
        wind.innerHTML = "<i class='fa-solid fa-wind'></i>" + "Vent : " + data.wind.speed + " m/s";
        humidity.innerHTML = "Humidité : " + data.main.humidity + " %";
        meteo_description = data.weather[0].description;
        meteo_description = meteo_description.charAt(0).toUpperCase() + meteo_description.slice(1);
        weather.innerHTML = "Temps : " + meteo_description;
        coord.innerHTML = "Coordonnées : " + data.coord.lat + " / " + data.coord.lon;
    });
}
