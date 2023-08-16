const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherContainer = document.getElementById('weatherContainer');

searchButton.addEventListener("click", () => {
    const cityName = cityInput.value;
    if (cityName.trim() !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherContainer.innerHTML = `
                    <h2>${cityName}</h2>
                    <p>${temperature}°C, ${description}</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherContainer.innerHTML = "Error fetching weather data";
            });
    }
});
