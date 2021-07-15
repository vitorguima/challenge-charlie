const getWeatherForecast = async (latitude, longitude) => {
  const KEY = 'dba255a5a0780d1f0da3f074f5ee0cfc';
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${KEY}`;
  const response = await fetch(URL);
  const receivedData = await response.json();
  console.log(receivedData);
  return receivedData;
}

export default getWeatherForecast;