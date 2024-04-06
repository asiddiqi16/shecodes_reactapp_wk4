import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  [city, setCity] = useState("");
  [weather, setWeather] = useState(null);
  function showTemp(response) {
    console.log(response.data);
    let temp = response.data.temperature.current;
    let condition = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;
    let weatherIcon = response.data.condition.icon_url;
    let weather = [
      {
        temperature: temp,
        desc: condition,
        humidity: humidity,
        wind: windSpeed,
        icon: weatherIcon,
      },
    ];
    setWeather(weather);
  }
  function showWeather(event) {
    event.preventDefault();

    let apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(showTemp);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>

      <form onSubmit={showWeather}>
        <input
          type="text"
          placeholder="Enter a city..."
          required
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <Weather weather={weather} />
    </div>
  );
}
