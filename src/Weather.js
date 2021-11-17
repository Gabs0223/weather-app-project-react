import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searching() {
    const apiKey = "0f228e3e7aa18774ac951c893270d5e1";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searching();
  }

  function handleCityName(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherData data={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City Name..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityName}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="🔎"
                className="btn btn-primary w-80"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
