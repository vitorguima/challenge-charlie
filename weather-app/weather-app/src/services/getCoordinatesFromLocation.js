export const getCoordinatesFromLocation = async (location) => {
  const KEY = '09e883a8d78647929b62c631b7eed17b';
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${KEY}`;
  const response = await fetch(URL);
  const receivedData = await response.json();
  const coordinates = await receivedData.results[0].geometry;
  console.log(coordinates);
  return coordinates;
}