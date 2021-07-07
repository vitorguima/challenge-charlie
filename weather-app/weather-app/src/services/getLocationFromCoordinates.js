export const getLocationFromCoordinates = async (latitude, longitude) => {
  const KEY = '09e883a8d78647929b62c631b7eed17b';
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${KEY}`;
  const response = await fetch(URL);
  const receivedData = await response.json();
  console.log(receivedData.results[0].components.city);
}