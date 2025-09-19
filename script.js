function getWeather() {
  let city = document.getElementById("city").value.toLowerCase();
  let result = document.getElementById("result");

  // Dummy weather data
const weatherData = {
  andhrapradesh: { temp: 32, condition: "Sunny", humidity: 50, wind: 10 },
  arunachalpradesh: { temp: 22, condition: "Cloudy", humidity: 70, wind: 8 },
  assam: { temp: 28, condition: "Rainy", humidity: 80, wind: 12 },
  bihar: { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  chhattisgarh: { temp: 33, condition: "Sunny", humidity: 45, wind: 9 },
  goa: { temp: 30, condition: "Humid", humidity: 70, wind: 12 },
  gujarat: { temp: 36, condition: "Hot & Dry", humidity: 35, wind: 14 },
  haryana: { temp: 35, condition: "Sunny", humidity: 40, wind: 10 },
  himachalpradesh: { temp: 25, condition: "Cloudy", humidity: 60, wind: 8 },
  jharkhand: { temp: 33, condition: "Sunny", humidity: 45, wind: 10 },
  karnataka: { temp: 31, condition: "Sunny", humidity: 50, wind: 10 },
  kerala: { temp: 29, condition: "Rainy", humidity: 80, wind: 12 },
  madhyapradesh: { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  maharashtra: { temp: 32, condition: "Sunny", humidity: 55, wind: 11 },
  manipur: { temp: 27, condition: "Cloudy", humidity: 65, wind: 9 },
  meghalaya: { temp: 24, condition: "Rainy", humidity: 85, wind: 10 },
  mizoram: { temp: 26, condition: "Rainy", humidity: 80, wind: 10 },
  nagaland: { temp: 25, condition: "Cloudy", humidity: 70, wind: 9 },
  odisha: { temp: 33, condition: "Sunny", humidity: 50, wind: 11 },
  punjab: { temp: 35, condition: "Hot & Dry", humidity: 35, wind: 12 },
  rajasthan: { temp: 38, condition: "Hot & Dry", humidity: 20, wind: 15 },
  sikkim: { temp: 23, condition: "Cloudy", humidity: 65, wind: 8 },
  tamilnadu: { temp: 32, condition: "Humid", humidity: 70, wind: 10 },
  telangana: { temp: 33, condition: "Sunny", humidity: 45, wind: 10 },
  tripura: { temp: 28, condition: "Rainy", humidity: 80, wind: 10 },
  uttarpradesh: { temp: 36, condition: "Hot & Dry", humidity: 35, wind: 12 },
  uttarakhand: { temp: 26, condition: "Cloudy", humidity: 60, wind: 9 },
  westbengal: { temp: 31, condition: "Humid", humidity: 70, wind: 10 },

  // Optional: Union Territories
  andamanandnicobarislands: { temp: 30, condition: "Sunny", humidity: 75, wind: 12 },
  chandigarh: { temp: 34, condition: "Sunny", humidity: 40, wind: 10 },
  dadraandnagarvelidamananddiu: { temp: 33, condition: "Hot & Dry", humidity: 35, wind: 12 },
  delhi: { temp: 36, condition: "Hot & Dry", humidity: 30, wind: 14 },
  jammuandkashmir: { temp: 24, condition: "Cloudy", humidity: 60, wind: 9 },
  ladakh: { temp: 20, condition: "Cold", humidity: 50, wind: 8 },
  lakshadweep: { temp: 31, condition: "Humid", humidity: 75, wind: 12 },
  puducherry: { temp: 32, condition: "Humid", humidity: 70, wind: 10 }

  // USA
  newyork: { temp: 22, condition: "Cloudy", humidity: 60, wind: 8 },
  losangeles: { temp: 25, condition: "Sunny", humidity: 50, wind: 10 },
  chicago: { temp: 18, condition: "Rainy", humidity: 65, wind: 12 },

  // Europe
  london: { temp: 15, condition: "Foggy", humidity: 70, wind: 6 },
  paris: { temp: 20, condition: "Sunny", humidity: 55, wind: 8 },
  berlin: { temp: 17, condition: "Cloudy", humidity: 60, wind: 9 },

  // Asia
  tokyo: { temp: 27, condition: "Sunny", humidity: 65, wind: 11 },
  beijing: { temp: 26, condition: "Cloudy", humidity: 50, wind: 10 },
  singapore: { temp: 30, condition: "Rainy", humidity: 80, wind: 12 },

  // Australia
  sydney: { temp: 23, condition: "Sunny", humidity: 60, wind: 9 },
  melbourne: { temp: 20, condition: "Cloudy", humidity: 55, wind: 8 },

  // Africa
  cairo: { temp: 32, condition: "Hot & Dry", humidity: 30, wind: 14 },
  johannesburg: { temp: 25, condition: "Sunny", humidity: 50, wind: 10 },

  // South America
  rio: { temp: 28, condition: "Rainy", humidity: 75, wind: 12 },
  buenosaires: { temp: 22, condition: "Cloudy", humidity: 65, wind: 10 },

  // Middle East
  dubai: { temp: 38, condition: "Sunny", humidity: 20, wind: 15 },
  riyadh: { temp: 40, condition: "Hot & Dry", humidity: 15, wind: 12 }
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
