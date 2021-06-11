import "./App.scss";
import React, { useState } from "react";
import Header from "./Views/Header";
import DailyWeather from "./Views/Daily_Weather";
import HourlyWeather from "./Views/Hourly_Weather";

function App() {
  const [daily_data, setDaily_data] = useState("");
  const [city, setCity] = useState("");
  const [daily_display, setDaily_display] = useState(false);
  const [hourlyData, sethourlyData] = useState(false);

  return (
    <>
      <Header
        setDaily_data={setDaily_data}
        setCity={setCity}
        setDaily_display={setDaily_display}
        sethourlyData={sethourlyData}
      />
      {daily_display ? (
        <>
          <DailyWeather
            daily_data={daily_data}
            city={city}
            sethourlyData={sethourlyData}
          />
          {/* <Card /> */}
        </>
      ) : (
        <div></div>
      )}

      {hourlyData ? (
        <>
          <HourlyWeather daily_data={daily_data} />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
