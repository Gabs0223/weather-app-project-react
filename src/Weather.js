import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Mexico City</h1>
          <h2>Wednesday 07:00</h2>
          <h3>Cloudy</h3>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alr="Mostly Cloudy"
              />
            </div>
            <div className="col-4">
              <span className="temp">13</span>
              <span className="unit">°C</span>
              <h4>Wind</h4>
              <h4>Humidity</h4>
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
            <input type="submit" value="🔎" className="btn btn-primary w-80" />
          </div>
        </div>
      </form>
    </div>
  );
}
