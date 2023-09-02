import { useState, useEffect } from "react";
import "../style.css";
import { fetchWeatherData } from "../services/WeatherService";
import { Container } from "react-bootstrap";
import sunriseIcon from "../icons/sunriseIcon.png";
import sunsetIcon from "../icons/sunsetIcon.png";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    props.sendBackgroundImage(backgroundImage);
  }, [backgroundImage]);

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
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  const sunriseTimestamp = weatherData?.sys?.sunrise;
  const sunsetTimestamp = weatherData?.sys?.sunset;

  const sunriseTime = new Date(sunriseTimestamp * 1000);
  const sunsetTime = new Date(sunsetTimestamp * 1000);

  const sunriseHours = sunriseTime.getHours();
  const sunriseMinutes = sunriseTime.getMinutes();

  const sunsetHours = sunsetTime.getHours();
  const sunsetMinutes = sunsetTime.getMinutes();

  const formattedSunrise = `${sunriseHours
    .toString()
    .padStart(2, "0")}:${sunriseMinutes.toString().padStart(2, "0")}`;
  const formattedSunset = `${sunsetHours
    .toString()
    .padStart(2, "0")}:${sunsetMinutes.toString().padStart(2, "0")}`;

  return (
    <>
      <Container className="d-flex justify-content-start">
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "15px",
            width: "35%",
            marginTop: "5vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {weatherData && (
                  <div>
                    <br></br>
                    <h1 className="custom-heading">
                      {props.city}: {weatherData.weather[0].main}
                    </h1>
                    <p className="custom-text">
                      Temperature:{" "}
                      {kelvinToCelsius(weatherData.main.temp).toFixed(2)} °C
                    </p>
                    <p className="custom-text">
                      Felt air temperature:{" "}
                      {kelvinToCelsius(weatherData.main.feels_like).toFixed(2)}
                      °C
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "15px",
            width: "35%",
            marginTop: "5vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6"></div>
              <h3 className="custom-text">Sunrise and Sunset Times:</h3>
              <p className="custom-text">
                <img
                  src={require("../icons/sunriseIcon.png")}
                  alt="Sunrise Icon"
                />
                Sunrise: {formattedSunrise}
              </p>
              <p className="custom-text">
                <img
                  src={require("../icons/sunsetIcon.png")}
                  alt="Sunset Icon"
                />
                Sunset: {formattedSunset}
              </p>
            </div>
          </div>
        </Container>
        <Container
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "15px",
            width: "20%",
            marginTop: "5vh",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6"></div>
              <br />
              <br />
              <h3 className="custom-text">Humidity:</h3>
              <h4 className="custom-text">
                <img src={require("../icons/humidityIcon.png")} />
                {weatherData?.main?.humidity}%
              </h4>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Weather;
