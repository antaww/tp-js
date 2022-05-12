const APIKEY = '40950c7271250babae1c93007b9ba7c0';

let submit = document.getElementById('search');
let cityName = document.getElementById('city');
let content = document.getElementsByClassName('content');

submit.addEventListener('click', function (e) {
    CallAPI(cityName.value);
    e.preventDefault();
});


/**
 * Il prend un nom de ville comme paramètre, puis utilise l'API Fetch pour appeler l'API OpenWeatherMap et obtenir les
 * données météorologiques de la ville
 * @param cityName - Le nom de la ville pour laquelle vous voulez obtenir la météo.
 */
function CallAPI(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let wind = document.querySelector('.wind');
    let humidity = document.querySelector('.humidity');
    let weather = document.querySelector('.weather');
    let coord = document.querySelector('.coord');

    // display content
    content[0].style.display = 'flex';
    fetch(url).then(response => response.json()).then(data => {
        city.innerHTML = "Météo de \n " + data.name;
        if (data.main.temp > 21) {
            temp.innerHTML = "<i class=\"fa-solid fa-temperature-high\"></i>" + data.main.temp + "°C";
        } else if (data.main.temp < 10) {
            temp.innerHTML = "<i class=\"fa-solid fa-temperature-low\"></i>" + data.main.temp + "°C";
        } else {
            temp.innerHTML = "<i class=\"fa-solid fa-temperature-half\"></i>" + data.main.temp + "°C";
        }
        wind.innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + " m/s";
        humidity.innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + " %";
        meteo_description = data.weather[0].description;
        meteo_description = meteo_description.charAt(0).toUpperCase() + meteo_description.slice(1);
        weather.innerHTML = "Temps : " + meteo_description;
        coord.innerHTML = "Coordonnées : " + data.coord.lat + " / " + data.coord.lon;
    });
}
