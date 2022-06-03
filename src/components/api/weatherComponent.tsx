import axios from "axios";
import React, { useState } from "react";
import { stateFilled, weatherProps } from "../types";

function Weather({ city, handleChange }: weatherProps) {
  const [state, setState] = useState<stateFilled | undefined>(
    {} as stateFilled
  );

  const fetchWeather = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c83594dd15b82e8b1ed09847827831b3`
      )
      .then((data: any) => setState(data))
      .catch((error) => setState(error));
  };
  return (
    <>
      <div className="main">
        <input onChange={handleChange} value={city} />
        <button onClick={fetchWeather}>Search</button>
        {state?.message ? (
          <div className="error">
            <h1>{state.code}</h1>
            <p>{state.message}</p>
          </div>
        ) : (
          state?.data && (
            <div className="weather-info">
              <h1>
                {state.data.name}
                <sup>{state.data.sys.country}</sup>
              </h1>
              <p>{Math.floor(state.data.main.temp - 273)}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
export default Weather;
