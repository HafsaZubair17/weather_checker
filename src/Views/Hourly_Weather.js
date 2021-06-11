import "../Style/style.scss";
import React, { useState } from "react";
import HourCard from "./HourlyCard";

const HourlyWeather = ({ daily_data }) => {
  return (
    <>
      {daily_data !== "" ? (
        <div className="daily_display">
          {daily_data.forecast.forecastday.forEach((dat) => {
            dat.hour.map((val2) => (
              //   <div>
              <HourCard
                date={val2.time}
                image={val2.condition.icon}
                temp={val2.condition.text}
                humidity={val2.humidity}
                wind={val2.wind_mph}
                max_temp={val2.temp_f}
                min_temp={val2.temp_c}
              />
              //   </div>
            ));
          })}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default HourlyWeather;
