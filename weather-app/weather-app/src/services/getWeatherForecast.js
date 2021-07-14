export const getWeatherForecast = async (coordinates) => {
  const { lat, lng } = coordinates;
  const KEY = '09e883a8d78647929b62c631b7eed17b';
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=${KEY}`;
  const response = await fetch(URL);
  const receivedData = await response.json();
  console.log(receivedData);
}