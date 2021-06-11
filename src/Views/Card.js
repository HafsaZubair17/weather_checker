import "../Style/style.scss";
import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";

// Header of Web Page
const Card = ({
  date,
  image,
  temp,
  humidity,
  wind,
  max_temp,
  min_temp,
  sethourlyData,
}) => {
  return (
    <>
      <div className="card">
        <img src={image}></img>
        <Typography class="data" variant="h2">
          Date={date}
        </Typography>
        <Typography class="data" variant="h2">
          Weather={temp}
        </Typography>
        <Typography class="data" variant="h3">
          Minimum Temperature(C)={min_temp}
        </Typography>
        <Typography class="data" variant="h3">
          Maximum Temperature(C)={max_temp}
        </Typography>
        <Typography class="data" variant="h3">
          Wind(mph)={wind}
        </Typography>
        <Typography class="data" variant="h3">
          Humidity={humidity}
        </Typography>
        <button className="button" onClick={() => sethourlyData(true)}>
          Get Hourly Data
        </button>
      </div>
    </>
  );
};

export default Card;
