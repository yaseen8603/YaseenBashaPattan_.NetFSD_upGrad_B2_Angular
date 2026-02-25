const fetchWeather = async (city) => {
  try {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return `
    ----- Weather Report -----
    City: ${data.name}
    Temperature: ${data.main.temp}°C
    Condition: ${data.weather[0].description}
    `;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

(async () => {
  const report = await fetchWeather("Hyderabad");
  console.log(report);
})();