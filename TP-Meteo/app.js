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
            e.preventDefault();
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


/**
 * It takes a city name as a parameter, then it uses the Fetch API to make a request to the OpenWeatherMap API, then it
 * displays the data in the HTML
 * @param cityName - The name of the city you want to get the weather for.
 */
function CallAPI(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=fr`;
    // error 404
    let city = document.querySelector('.city');
    let wind = document.querySelector('.wind');
    let humidity = document.querySelector('.humidity');
    let weather = document.querySelector('.weather');
    let coord = document.querySelector('.coord');

    //TEMPERATURE
    let temp = document.querySelector('.temp');
    let feelsLike = document.querySelector('.feels-like');
    let tempMin = document.querySelector('.temp-min');
    let tempMax = document.querySelector('.temp-max');

    // error 404
    let alert = document.querySelector('.alert');

    fetch(url).then(response => response.json()).then(data => {
        if (data.cod === '404') {
            // display alert
            alert.style.display = 'flex';
            // hide content
            content[0].style.display = 'none';
        } else {
            content[0].style.display = 'flex';
            alert.style.display = 'none';
            console.log(data);
            city.innerHTML = "Météo de \n " + data.name;
            if (data.main.temp > 21) {
                temp.innerHTML = "Température actuelle<i class=\"fa-solid fa-temperature-high\"></i>" + data.main.temp + "°C";
                // change background color
                temp.style.backgroundColor = 'rgba(242,41,41,0.75)';
            } else if (data.main.temp < 10) {
                temp.innerHTML = "Température actuelle<i class=\"fa-solid fa-temperature-low\"></i>" + data.main.temp + "°C";
                temp.style.backgroundColor = 'rgba(41,225,242,0.75)';
            } else {
                temp.innerHTML = "Température actuelle<i class=\"fa-solid fa-temperature-half\"></i>" + data.main.temp + "°C";
                temp.style.backgroundColor = 'rgba(255,180,0,0.75)';
            }
            wind.innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + " m/s";
            humidity.innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + " %";
            meteo_description = data.weather[0].description;
            meteo_description = meteo_description.charAt(0).toUpperCase() + meteo_description.slice(1);
            meteo_icon = data.weather[0].icon;
            //round to 2 numbers after the decimal


            weather.innerHTML = "<img src='http://openweathermap.org/img/wn/" + meteo_icon + "@2x.png'>" + meteo_description;
            coord.innerHTML = "Latitude " + Math.round(data.coord.lat * 100) / 100 + "° Longitude " + Math.round(data.coord.lon * 100) / 100 + "°";
            feelsLike.innerHTML = "Température ressenti <i class=\"fa-solid fa-temperature-high\"></i>" + data.main.feels_like + "°C";
            tempMin.innerHTML = "Température la plus froide<i class=\"fa-solid fa-temperature-arrow-down\"></i>" + data.main.temp_min + "°C";
            tempMax.innerHTML = "Température la plus chaude<i class=\"fa-solid fa-temperature-arrow-up\"></i>" + data.main.temp_max + "°C";
        }
    });
}