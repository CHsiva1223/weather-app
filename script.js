// Weather data for all Indian states + Union Territories
const weatherData = {
const globalWeatherData = {
  // India - States & Capitals
  "andhra pradesh": { temp: 32, condition: "Sunny", humidity: 50, wind: 10 },
  "amaravati": { temp: 32, condition: "Sunny", humidity: 50, wind: 10 },
  "arunachal pradesh": { temp: 22, condition: "Cloudy", humidity: 70, wind: 8 },
  "itanagar": { temp: 22, condition: "Cloudy", humidity: 70, wind: 8 },
  "assam": { temp: 28, condition: "Rainy", humidity: 80, wind: 12 },
  "dispur": { temp: 28, condition: "Rainy", humidity: 80, wind: 12 },
  "bihar": { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  "patna": { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  "chhattisgarh": { temp: 33, condition: "Sunny", humidity: 45, wind: 9 },
  "raipur": { temp: 33, condition: "Sunny", humidity: 45, wind: 9 },
  "goa": { temp: 30, condition: "Humid", humidity: 70, wind: 12 },
  "panaji": { temp: 30, condition: "Humid", humidity: 70, wind: 12 },
  "gujarat": { temp: 36, condition: "Hot & Dry", humidity: 35, wind: 14 },
  "gandhinagar": { temp: 36, condition: "Hot & Dry", humidity: 35, wind: 14 },
  "haryana": { temp: 35, condition: "Sunny", humidity: 40, wind: 10 },
  "chandigarh": { temp: 35, condition: "Sunny", humidity: 40, wind: 10 },
  "himachal pradesh": { temp: 25, condition: "Cloudy", humidity: 60, wind: 8 },
  "shimla": { temp: 25, condition: "Cloudy", humidity: 60, wind: 8 },
  "jharkhand": { temp: 33, condition: "Sunny", humidity: 45, wind: 10 },
  "ranchi": { temp: 33, condition: "Sunny", humidity: 45, wind: 10 },
  "karnataka": { temp: 31, condition: "Sunny", humidity: 50, wind: 10 },
  "bengaluru": { temp: 31, condition: "Sunny", humidity: 50, wind: 10 },
  "kerala": { temp: 29, condition: "Rainy", humidity: 80, wind: 12 },
  "thiruvananthapuram": { temp: 29, condition: "Rainy", humidity: 80, wind: 12 },
  "madhya pradesh": { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  "bhopal": { temp: 34, condition: "Hot & Dry", humidity: 40, wind: 10 },
  "maharashtra": { temp: 32, condition: "Sunny", humidity: 55, wind: 11 },
  "mumbai": { temp: 32, condition: "Sunny", humidity: 55, wind: 11 },
  "manipur": { temp: 27, condition: "Cloudy", humidity: 65, wind: 9 },
  "imphal": { temp: 27, condition: "Cloudy", humidity: 65, wind: 9 },
  "meghalaya": { temp: 24, condition: "Rainy", humidity: 85, wind: 10 },
  "shillong": { temp: 24, condition: "Rainy", humidity: 85, wind: 10 },
  "mizoram": { temp: 26, condition: "Rainy", humidity: 80, wind: 10 },
  "aizawl": { temp: 26, condition: "Rainy", humidity: 80, wind: 10 },
  "nagaland": { temp: 25, condition: "Cloudy", humidity: 70, wind: 9 },
  "kohima": { temp: 25, condition: "Cloudy", humidity: 70, wind: 9 },
  "odisha": { temp: 33, condition: "Sunny", humidity: 50, wind: 11 },
  "bhubaneswar": { temp: 33, condition: "Sunny", humidity: 50, wind: 11 },
  "punjab": { temp: 35, condition: "Hot & Dry", humidity: 35, wind: 12 },
  "rajasthan": { temp: 38, condition: "Hot & Dry", humidity: 20, wind: 15 },
  "sikkim": { temp: 23, condition: "Cloudy", humidity: 65, wind: 8 },
  "tamil nadu": { temp: 32, condition: "Humid", humidity: 70, wind: 10 },
  "telangana": { temp: 33, condition: "Sunny", humidity: 45, wind: 10 },
  "tripura": { temp: 28, condition: "Rainy", humidity: 80, wind: 10 },
  "uttar pradesh": { temp: 36, condition: "Hot & Dry", humidity: 35, wind: 12 },
  "uttarakhand": { temp: 26, condition: "Cloudy", humidity: 60, wind: 9 },
  "west bengal": { temp: 31, condition: "Humid", humidity: 70, wind: 10 },

  // Union Territories
  "andaman and nicobar islands": { temp: 30, condition: "Sunny", humidity: 75, wind: 12 },
  "port blair": { temp: 30, condition: "Sunny", humidity: 75, wind: 12 },
  "dadra and nagar haveli and daman and diu": { temp: 33, condition: "Hot & Dry", humidity: 35, wind: 12 },
  "daman": { temp: 33, condition: "Hot & Dry", humidity: 35, wind: 12 },
  "delhi": { temp: 36, condition: "Hot & Dry", humidity: 30, wind: 14 },
  "new delhi": { temp: 36, condition: "Hot & Dry", humidity: 30, wind: 14 },
  "jammu and kashmir": { temp: 24, condition: "Cloudy", humidity: 60, wind: 9 },
  "srinagar": { temp: 24, condition: "Cloudy", humidity: 60, wind: 9 },
  "jammu": { temp: 24, condition: "Cloudy", humidity: 60, wind: 9 },
  "ladakh": { temp: 20, condition: "Cold", humidity: 50, wind: 8 },
  "leh": { temp: 20, condition: "Cold", humidity: 50, wind: 8 },
  "lakshadweep": { temp: 31, condition: "Humid", humidity: 75, wind: 12 },
  "kavaratti": { temp: 31, condition: "Humid", humidity: 75, wind: 12 },
  "puducherry": { temp: 32, condition: "Humid", humidity: 70, wind: 10 },

  // Major World Cities
  "new york": { temp: 22, condition: "Cloudy", humidity: 60, wind: 8 },
  "los angeles": { temp: 25, condition: "Sunny", humidity: 50, wind: 10 },
  "chicago": { temp: 18, condition: "Rainy", humidity: 65, wind: 12 },
  "london": { temp: 15, condition: "Foggy", humidity: 70, wind: 6 },
  "paris": { temp: 20, condition: "Sunny", humidity: 55, wind: 8 },
  "berlin": { temp: 17, condition: "Cloudy", humidity: 60, wind: 9 },
  "tokyo": { temp: 27, condition: "Sunny", humidity: 65, wind: 11 },
  "beijing": { temp: 26, condition: "Cloudy", humidity: 50, wind: 10 },
  "singapore": { temp: 30, condition: "Rainy", humidity: 80, wind: 12 },
  "sydney": { temp: 23, condition: "Sunny", humidity: 60, wind: 9 },
  "melbourne": { temp: 20, condition: "Cloudy", humidity: 55, wind: 8 },
  "cairo": { temp: 32, condition: "Hot & Dry", humidity: 30, wind: 14 },
  "johannesburg": { temp: 25, condition: "Sunny", humidity: 50, wind: 10 },
  "rio": { temp: 28, condition: "Rainy", humidity: 75, wind: 12 },
  "buenos aires": { temp: 22, condition: "Cloudy", humidity: 65, wind: 10 },
  "dubai": { temp: 38, condition: "Sunny", humidity: 20, wind: 15 },
  "riyadh": { temp: 40, condition: "Hot & Dry", humidity: 15, wind: 12 }
};

// Function to get weather
function getWeather() {
  let city = document.getElementById("city").value.trim().toLowerCase();
  let result = document.getElementById("result");

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
    result.innerHTML = `<p style="color:red;">State/UT not found. Example: Andhra Pradesh Amaravati, Arunachal Pradesh Itanagar, Assam Dispur, Bihar Patna, Chhattisgarh Raipur, Goa Panaji, Gujarat Gandhinagar, Haryana Chandigarh, Himachal Pradesh Shimla, Jharkhand Ranchi, Karnataka Bengaluru, Kerala Thiruvananthapuram, Madhya Pradesh Bhopal, Maharashtra Mumbai, Manipur Imphal, Meghalaya Shillong, Mizoram Aizawl, Nagaland Kohima, Odisha Bhubaneswar, Punjab Chandigarh, Rajasthan Jaipur, Sikkim Gangtok, Tamil Nadu Chennai, Telangana Hyderabad, Tripura Agartala, Uttar Pradesh Lucknow, Uttarakhand Dehradun, West Bengal Kolkata, Andaman and Nicobar Islands Port Blair, Chandigarh Chandigarh, Dadra and Nagar Haveli and Daman and Diu Daman, Delhi New Delhi, Jammu and Kashmir Srinagar Jammu, Ladakh Leh, Lakshadweep Kavaratti, Puducherry new york, los angeles, chicago, london, paris, berlin, tokyo, beijing, singapore, sydney, melbourne, cairo, johannesburg, rio, buenos aires, dubai, riyadh
</p>`;
  }
}
