import "../Style/style.scss";
import { Typography } from "@material-ui/core";

const Card = ({ date, image, temp, humidity, wind, max_temp, min_temp }) => {
  return (
    <>
      <div className="card">
        <img src={image}></img>
        <Typography variant="h5">Date={date}</Typography>
        <Typography variant="h6">Weather={temp}</Typography>
        <Typography variant="h6">Minimum Temperature(C)={min_temp}</Typography>
        <Typography variant="h6">Maximum Temperature(C)={max_temp}</Typography>
        <Typography variant="h6">Wind(mph)={wind}</Typography>
        <Typography variant="h6">Humidity={humidity}</Typography>
      </div>
    </>
  );
};

export default Card;
