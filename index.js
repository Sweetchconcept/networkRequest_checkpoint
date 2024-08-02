const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY_HERE';

const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const weatherDataContainer = document.getElementById('weather-data');

getWeatherButton.addEventListener('click', fetchWeatherData);

function fetchWeatherData() {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp,
                description: data.weather[0].description,
                location: data.name
            };
            displayWeatherData(weatherData);
        })
        .catch(error => console.error(error));
}

function displayWeatherData(weatherData) {
    const html = `
        <h2>Weather in ${weatherData.location}</h2>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Description: ${weatherData.description}</p>
    `;
    weatherDataContainer.innerHTML = html;
}