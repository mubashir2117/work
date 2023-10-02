debugger;
const inputbox = document.querySelector('.input_box');
const searchbtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidty = document.getElementById('humidty');
const windspeed = document.getElementById('windspeed');


async function checkWeather(city) {
    const api_key = "b6ba3d292588bc78d3754d147dff2ad7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json());

    temperature.innerHTML = `${weather_data.main.temp}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidty.innerHTML = `${weather_data.main.humidty}`;
    windspeed.innerHTML = `${weather_data.wind.speed}km/h`;
    // console.log(weather_data);
}


searchbtn.addEventListener('click', ()=> {
    checkWeather(inputbox.value);
});



