const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "3b65b7812d7cea62669eecb6b2177bda";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    discription.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "./imges/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "./imges/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "./imges/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "./imges/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "./imges/snow.png";
            break;
        default:
            weatherImg.src = "./assets/cloud.png"; // Default image
        break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
        checkWeather(inputBox.value);
});

