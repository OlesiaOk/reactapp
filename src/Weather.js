import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3b6b66f380d0f8c6b4889aa8f7d07c34&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Weather App</h2>;
}
