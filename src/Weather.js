import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-5">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Edmonton</h1>
      <ul>
        <li>Sunday 04:54</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn-icons.flaticon.com/png/128/3222/premium/3222801.png?token=exp=1644193363~hmac=9ace378286bffefe1aadc205e4b97af8"
            width="80"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:51%</li>
            <li>Wind:26km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
