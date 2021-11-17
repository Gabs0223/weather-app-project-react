import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
            </div>
            <div className="col-6">
              <WeatherTemperature celcius={props.data.temperature} />
              <h5>Wind: {props.data.wind} km/h</h5>
              <h5>Humidity: {props.data.humidity}%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
