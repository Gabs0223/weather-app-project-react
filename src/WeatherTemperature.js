import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setunit] = useState("celcius");

  function c2f(event) {
    event.preventDefault();
    setunit("fahrenheit");
  }

  function f2c(event) {
    event.preventDefault();
    setunit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={c2f}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={f2c}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
