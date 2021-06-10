import axios from "axios";

export const getData = (city) => {
  axios({
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=3ee9908412104e03a2b184944211006&q=${city}&days=10&aqi=no&alerts=no`,
  })
    .then((res) => {
      if (!res.data.error) {
        console.log(res.data);
      } else {
        console.log("");
      }
    })

    .catch((err) => {
      console.log(err, "Error getting weather information");
    });
};
