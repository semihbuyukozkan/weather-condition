import { useState, useEffect } from "react";

import { fetchWeatherData } from "../services/WeatherService";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetchWeatherData(props.city);
      setWeatherData(data);
      getBackgroundImage(data);
    }
    fetchData();
  }, [props.city]);

  function getBackgroundImage(data) {
    let condition = "";
    if (data && data.weather && data.weather[0] && data.weather[0].main) {
      condition = data.weather[0].main;
    }

    if (condition === "Clear") {
      setBackgroundImage(require("../images/clear.jpg")); //require: to import images into this component
    } else if (condition === "Clouds") {
      setBackgroundImage(require("../images/clouds.jpg"));
    } else if (condition === "Fog") {
      setBackgroundImage(require("../images/fog.jpg"));
    } else if (condition === "Rain") {
      setBackgroundImage(require("../images/rain.jpg"));
    } else if (condition === "Snow") {
      setBackgroundImage(require("../images/snow.jpg"));
    } else {
      setBackgroundImage("");
    }
  }

  console.log(backgroundImage);
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {weatherData && (
            <div>
              <h2>
                {props.city}: {weatherData.weather[0].main}
              </h2>
              <p>
                Temperature: {kelvinToCelsius(weatherData.main.temp).toFixed(2)}{" "}
                °C
              </p>
              <p>
                Felt air temperature:{" "}
                {kelvinToCelsius(weatherData.main.feels_like).toFixed(2)}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
