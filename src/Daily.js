import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Daily(props) {
  function tempMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function tempMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="Daily">
      <div className="Day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="TempF">
        <span className="TempFmax">{tempMax()}°C</span>
        <span className="TempFmin">{tempMin()}°C</span>
      </div>
    </div>
  );
}
