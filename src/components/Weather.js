import { useState, useEffect } from "react";
import Background from "./Background";
import { Container } from "react-bootstrap";
import { fetchWeatherData } from "../services/WeatherService";

function Weather(props) {
  const [weatherData, setData] = useState(null);

  useEffect(() => {
    getWeatherData(props.city);
  }, []);

  async function getWeatherData(city) {
    const data = await fetchWeatherData(city);
    console.log(data);
    setData(data);
  }
  // const [image, setImage] = useState("");

  // function getBackgroundImage(weatherData) {
  //   console.log();
  //   const condition = weatherData?.weather[0]?.main;
  //   if (condition === "Clear") {
  //     setImage("../images/clear.jpg");
  //   } else if (condition === "Clouds") {
  //     setImage("../images/clouds.jpg");
  //   } else if (condition === "Fog") {
  //     setImage("../images/fog.jpg");
  //   } else if (condition === "Rain") {
  //     setImage("../images/rain.jpg");
  //   } else if (condition === "Snow") {
  //     setImage("../images/snow.jpg");
  //   } else {
  //     setImage("");
  //   }
  // }
  // useEffect(
  //   (weatherData) => {
  //     getBackgroundImage();
  //   },
  //   [weatherData]
  // );

  // const backgroundStyle = {
  //   backgroundImage: `url(${getBackgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   minHeight: "100vh",
  // };

  return (
    <div
    // style={{
    //   backgroundImage: `url(${getBackgroundImage})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   minHeight: "100vh",
    //}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {weatherData && (
              <div>
                <h2>
                  {props.city}: {weatherData.weather[0].main}
                </h2>
                <p>Temprature: °C</p>
                <p>Felt air temprature: °C</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
