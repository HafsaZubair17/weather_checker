import "./App.scss";
import React, { useState } from "react";
import Header from "./Views/Header";
import DailyWeather from "./Views/Daily_Weather";

function App() {
  const [daily_data, setDaily_data] = useState("");
  const [city, setCity] = useState("");
  const [daily_display, setDaily_display] = useState(false);

  return (
    <>
      <Header
        setDaily_data={setDaily_data}
        setCity={setCity}
        setDaily_display={setDaily_display}
      />
      {daily_display ? (
        <>
          <DailyWeather daily_data={daily_data} city={city} />
          {/* <Card /> */}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
