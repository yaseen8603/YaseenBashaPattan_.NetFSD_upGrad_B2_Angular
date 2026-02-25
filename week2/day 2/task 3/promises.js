const fetchWeatherWithPromise = (city) => {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch weather");
      return response.json();
    })
    .then(data => `
      Weather Report for ${data.name}
      Temperature: ${data.main.temp}°C
      Condition: ${data.weather[0].description}
    `)
    .catch(error => `Error: ${error.message}`);
};

fetchWeatherWithPromise("Hyderabad")
  .then(report => console.log(report));