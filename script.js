const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherBox = document.getElementById("weatherResult");

  if (!city) {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherBox.innerHTML = <p>❌ City not found</p>;
      return;
    }

    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];

    weatherBox.innerHTML = `
      <h2>${name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
      <p><strong>${temp}°C</strong></p>
      <p>${description}</p>
      <p>💧 Humidity: ${humidity}%</p>
    `;
  } catch (error) {
    weatherBox.innerHTML = "<p>⚠ Error fetching weather data.</p>";
  }
}