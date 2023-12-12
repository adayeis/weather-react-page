import { useState } from "react";
import { Hearts } from "react-loader-spinner";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);

    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
    });
  }

  function callWeatherApi(event) {
    if (city) {
      let apiKey = "616b14cbd38253313b3b8852fa77335d";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(displayWeather);
      event.preventDefault();
    }
  }

  function setValue(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weather.temperature) {
    return (
      <div className="Search">
        <div>
          <h1>Weather App</h1>
          <form onSubmit={callWeatherApi}>
            <input
              type="search"
              placeholder="Search a city..."
              onChange={setValue}
            />
            <input type="submit" value="search" />
          </form>
        </div>
        <div className="display-weather">
          <ul>
            <li>Temperature: {weather.temperature}</li>
            <li>Wind: {weather.wind}</li>
            <li>Humidity: {weather.humidity}</li>
            <li>Description: {weather.description}</li>
            <li>
              <img src={weather.icon} alt="icon" />{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <h1>Weather App</h1>
        <form onSubmit={callWeatherApi}>
          <input
            type="search"
            placeholder="Search a city..."
            onChange={setValue}
          />
          <input type="submit" value="search" />
        </form>
        <div className="loader">
          <Hearts
            height="100%"
            width="100%"
            radius="9"
            color="#d3e9f5"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      </div>
    );
  }
}
