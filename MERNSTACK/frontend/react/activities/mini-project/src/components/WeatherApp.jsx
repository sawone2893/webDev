import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import getWeatherInfo from "../weatherInfo";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 27.41,
    grnd_level: 980,
    humidity: 15,
    pressure: 1005,
    sea_level: 1005,
    temp: 29.05,
    temp_max: 29.05,
    temp_min: 29.05,
    weather: "haze",
  });
  let updateWeatherInfo = async (city) => {
    setWeatherInfo(await getWeatherInfo(city));
  };
  return (
    <>
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
