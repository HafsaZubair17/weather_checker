import "../Style/style.scss";
import React, { useState } from "react";
import Card from "./Card";

const DailyWeather = ({ daily_data, city, moreData }) => {
  const [hourlyData, sethourlyData] = useState(false);

  console.log(daily_data);
  return (
    <>
      <div className="heading">
        <h1 className="city">City={city}</h1>;
        {/* <h1 className="city">City={daily_data.location.name}</h1>; */}
      </div>
      <div className="daily_display">
        {daily_data.forecast.forecastday.map((val) => (
          <div>
            <Card
              date={val.date}
              image={val.day.condition.icon}
              temp={val.day.condition.text}
              humidity={val.day.avghumidity}
              wind={val.day.maxwind_mph}
              max_temp={val.day.maxtemp_c}
              min_temp={val.day.mintemp_c}
            />
          </div>
        ))}
      </div>
      <div className="hourly">
        <button className="button" onClick={() => sethourlyData(true)}>
          See Hourly Forecast
        </button>
      </div>

      {hourlyData ? (
        <>
          <div className="daily_display">
            {moreData.hour.map((val) => (
              <div>
                <Card
                  date={val.time}
                  image={val.condition.icon}
                  temp={val.condition.text}
                  humidity={val.humidity}
                  wind={val.wind_mph}
                  max_temp={val.temp_f}
                  min_temp={val.temp_c}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default DailyWeather;
