const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherContainer = document.getElementById('weatherContainer');

searchButton.addEventListener('click', async () => {
    const cityName = cityInput.value;
    if (cityName.trim() !== "") {
        try {
            const response = await fetch(`/weather/${cityName}`);
            const data = await response.json();

            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherContainer.innerHTML = `
                <h2>${cityName}</h2>
                <p>${temperature}°C, ${description}</p>
            `;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML = "Error fetching weather data";
        }
    }
});
