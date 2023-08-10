import axios from "axios";
import { useState } from "react";

export async function fetchWeatherData(props) {
  return new Promise((resolve, reject) => {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      props +
      "&appid=2eb65467b4520c4c9bb27b38674946ca";
    axios.get(apiUrl).then((response) => {
      if (response) {
        resolve(response.data);
      } else {
        reject(response.data.error);
      }
    });
  });

  // const kelvinToCelcius = (kelvin) => kelvin - 273.15;
}
