```js
import { useEffect, useState } from "react";
import { stateType, useWeather } from "./api/weatherApi";
var array: stateType;
function Container() {
  array = useWeather("tashkent");
  const [state, setState] = useState<stateType>();
  useEffect(() => {
    setTimeout(() => {
      setState(array);
      console.log(state);
    }, 3000);
  }, []);
  return (
    <>
      <div className="container">{state && state.name}</div>
    </>
  );
}

export default Container;
```
