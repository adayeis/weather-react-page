import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function cityWeather(response) {
    setTemperature(`its ${response.data.main.temp} degree in ${props.city}`);
  }
  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(cityWeather);

  return (
    <div className="Weather">
      <h2>{temperature}</h2>
    </div>
  );
}
