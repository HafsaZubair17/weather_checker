import "../Style/style.scss";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";

const HourCard = ({
  date,
  image,
  temp,
  humidity,
  wind,
  max_temp,
  min_temp,
}) => {
  return (
    <>
      <div className="card">
        <img src={image}></img>
        <Typography variant="h5">Date={date}</Typography>
        <Typography variant="h6">Weather={temp}</Typography>
        <Typography variant="h6">Temperature(C)={min_temp}</Typography>
        <Typography variant="h6">Temperature(F)={max_temp}</Typography>
        <Typography variant="h6">Wind(mph)={wind}</Typography>
        <Typography variant="h6">Humidity={humidity}</Typography>
      </div>
    </>
  );
};

export default HourCard;
