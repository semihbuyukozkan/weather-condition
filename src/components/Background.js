import React, { useState } from "react";
import Weather from "./Weather";

function Background(props) {
  const [backgroundImage, setBackgroundImage] = useState("");

  const backgroundStyle = {
    backgroundImage: `url('${props.backgroundImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

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

  return <div style={backgroundStyle}>{props.children}</div>;
}

export default Background;
