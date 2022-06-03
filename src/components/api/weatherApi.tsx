import axios from "axios";
import { useEffect, useState } from "react";

export type stateFilled = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  cod?: string;
  message?: string;
};
type weatherProps = {
  city: string;
};
function Weather({ city }: weatherProps) {
  const [state, setState] = useState<stateFilled | undefined>(
    {} as stateFilled
  );
  useEffect(() => {
    fetchWeather();
    setTimeout(() => console.log(state?.name), 3000);
  }, []);
  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c83594dd15b82e8b1ed09847827831b3`
      )
      .then((data: any) => setState(data));
    // .catch((error) => setState(error));
  };
  return <div>{state?.name && <p>ok</p>}</div>;
}
export default Weather;
