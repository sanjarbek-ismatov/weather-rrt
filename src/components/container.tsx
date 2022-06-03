import { useState } from "react";
import Weather from "./api/weatherComponent";

function Container() {
  const [text, setText] = useState<string>("");
  return <Weather handleChange={(e) => setText(e.target.value)} city={text} />;
}

export default Container;
