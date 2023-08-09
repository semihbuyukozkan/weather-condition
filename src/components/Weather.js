import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function Weather(props) {
  console.log("Weather component props:", props.city);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (props.city !== "") {
      const API_KEY = "2eb65467b4520c4c9bb27b38674946ca";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        props.city +
        "&appid=2eb65467b4520c4c9bb27b38674946ca";

      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    } else {
      setWeatherData(null);
    }
  }, [props.city]);

  const kelvinToCelcius = (kelvin) => kelvin - 273.15;

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
                Temprature: {kelvinToCelcius(weatherData.main.temp).toFixed(2)}{" "}
                °C
              </p>
              <p>
                Felt air temprature:{" "}
                {kelvinToCelcius(weatherData.main.feels_like).toFixed(2)} °C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
