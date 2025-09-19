function getWeather() {
  let city = document.getElementById("city").value.toLowerCase();
  let result = document.getElementById("result");

  // Dummy weather data
  const weatherData = {
    hyderabad: { temp: 30, condition: "Sunny", humidity: 40, wind: 10 },
    delhi: { temp: 35, condition: "Hot & Dry", humidity: 25, wind: 12 },
    mumbai: { temp: 29, condition: "Rainy", humidity: 80, wind: 15 },
    chennai: { temp: 33, condition: "Humid", humidity: 70, wind: 14 }
  };

  if (weatherData[city]) {
    let data = weatherData[city];
    result.innerHTML = `
      <h3>${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
      <p>🌡 Temp: ${data.temp} °C</p>
      <p>🌥 Weather: ${data.condition}</p>
      <p>💧 Humidity: ${data.humidity}%</p>
      <p>💨 Wind: ${data.wind} km/h</p>
    `;
  } else {
    result.innerHTML = `<p style="color:red;">City not found (Demo only supports: Hyderabad, Delhi, Mumbai, Chennai)</p>`;
  }
}
