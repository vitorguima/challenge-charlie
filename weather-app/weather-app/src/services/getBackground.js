const getBackground = async () => {
  const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
  const url_api = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
  const url_bing = 'https://www.bing.com';

  const request = await fetch(url_api);
  const response = await request.json();
  return(url_bing + response.images[0].url);
}

export default getBackground;

