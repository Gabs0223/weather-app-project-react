import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednesday 07:00",
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
      description: response.data.weather.description,
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.cityName}</h1>
            <h2>{weatherData.date}</h2>
            <h3>{weatherData.description}</h3>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                  alt="Mostly Cloudy"
                />
              </div>
              <div className="col-4">
                <span className="temp">{weatherData.temperature}</span>
                <span className="unit">°C</span>
                <h4>{weatherData.wind}km/h</h4>
                <h4>{weatherData.humidity}%</h4>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City Name..."
                className="form-control"
                autoFocus="on"
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
    const apiKey = "0f228e3e7aa18774ac951c893270d5e1";
    let city = "Mexico City";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
