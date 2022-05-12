const APIKEY = '40950c7271250babae1c93007b9ba7c0';

let submit = document.getElementById('search');
let cityName = document.getElementById('city');
let content = document.getElementsByClassName('content');
let form = document.getElementById('form');

//Calling API by clicking "search" button / Shaking animation if no city is entered
submit.addEventListener('click', function (e) {
    if (cityName.value === '') {
        console.log('Please enter a city name');
        form.classList.add('shake');
        setTimeout(function () {
            form.classList.remove('shake');
        }, 0.5 * 1000);
        return;
    }
    CallAPI(cityName.value);
    e.preventDefault();
});

//Calling API with "ENTER" key / Shaking animation if no city is entered
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        if (cityName.value === '') {
            console.log('Please enter a city name');
            form.classList.add('shake');
            setTimeout(function () {
                form.classList.remove('shake');
            }, 0.5 * 1000);
            return;
        }
        CallAPI(cityName.value);
        e.preventDefault();
    }
});


function CallAPI(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let wind = document.querySelector('.wind');
    let humidity = document.querySelector('.humidity');
    let weather = document.querySelector('.weather');
    let weather_icon = document.querySelector('.weather_icon');
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
        meteo_icon = data.weather[0].icon;
        weather.innerHTML = "<img src='http://openweathermap.org/img/wn/" + meteo_icon + "@2x.png'>" + meteo_description;
        coord.innerHTML = "Coordonnées : " + data.coord.lat + " / " + data.coord.lon;
    });
}
