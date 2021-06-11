import axios from "axios";

export const getData = (
  loc,
  setDaily_Data,
  setCity,
  setDaily_display,
  sethourlyData
) => {
  axios({
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=3ee9908412104e03a2b184944211006&q=${loc}&days=10&aqi=no&alerts=no`,
  })
    .then((res) => {
      if (!res.data.error) {
        sethourlyData(false);
        setDaily_display(true);
        // console.log(res.data);
        setDaily_Data(res.data);
        // console.log(daily_data.forecast.forecastday);
        setCity(res.data.location.name);
        // console.log(res.data.forecast.forecastday);
        // console.log(res.data.location.name);
      } else {
        setDaily_Data("");
        setCity("");
      }
    })

    .catch((err) => {
      console.log(err, "Error getting weather information");
    });
};
