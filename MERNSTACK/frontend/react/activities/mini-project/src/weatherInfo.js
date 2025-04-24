const API_URL = "https://api.openweathermap.org/data/2.5/find";
const API_KEY = "c72c818d218cb7c7c56f872645cccebb";

let getWeatherInfo = async (city) => {
  let response = await fetch(`${API_URL}?q=${city}&&appid=${API_KEY}&&units=metric`);
  let jsonRes = await response.json();
  return {...jsonRes.list[0].main,weather:jsonRes.list[0].weather[0].description,city:city};
};

export default getWeatherInfo;