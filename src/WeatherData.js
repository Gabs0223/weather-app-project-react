import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <h2>
            <FormatedDate date={props.data.date} />
          </h2>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="col-6">
              <span className="temp">{props.data.temperature}</span>
              <span className="unit">°C</span>
              <h5>Wind: {props.data.wind} km/h</h5>
              <h5>Humidity: {props.data.humidity}%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
