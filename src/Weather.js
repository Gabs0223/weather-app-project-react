import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      cityName: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.cityName}</h1>
            <h2>
              <FormatedDate date={weatherData.date} />
            </h2>
            <h3 className="text-capitalize">{weatherData.description}</h3>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                  alt="Mostly Cloudy"
                />
              </div>
              <div className="col-6">
                <span className="temp">{weatherData.temperature}</span>
                <span className="unit">°C</span>
                <h5>Wind: {weatherData.wind} km/h</h5>
                <h5>Humidity: {weatherData.humidity}%</h5>
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
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
