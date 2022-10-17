import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(
          "Temperature at" +
            " " +
            city +
            " " +
            " is" +
            " " +
            Math.round(celsius) +
            "°C"
        );
        setCity("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="weather">
      <h1 className="title">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search temperature"
          onChange={handleChange}
          value={city}
        />
        <br></br>

        <input type="submit" value="Get Temperature" />
      </form>
      <h2>{result}</h2>
    </div>
  );
};

export default Weather;
