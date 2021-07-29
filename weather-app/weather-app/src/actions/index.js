import getBackground from '../services/getBackground';
import getWeatherForecast from '../services/getWeatherForecast';

export const REQUEST_BACKGROUND = 'REQUEST_BACKGROUND';
export const SUBMIT_BACKGROUND = 'SUBMIT_BACKGROUND';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';
export const REQUEST_FORECAST = 'REQUEST_FORECAST';
export const SUBMIT_FORECAST = 'SUBMIT_FORECAST';
export const CHANGE_UNIT = 'CHANGE_UNIT';

export const requestBackground = () => ({ 
  type: REQUEST_BACKGROUND,
  loading: true,
});

export const submitBackground = (response) => ({
  type: SUBMIT_BACKGROUND,
  loading: false,
  backgroundImage: response,
})

export const dispatchGetBackground = () => {
  return (dispatch) => {
    dispatch(requestBackground());
    return (getBackground()
      .then((background) => dispatch(submitBackground(background))))
  }
}

export const requestForecast = () => ({
  type: REQUEST_FORECAST,
  loading: true,
})

export const submitForecast = (forecast) => ({
  type: SUBMIT_FORECAST,
  loading: false,
  weatherForecast: forecast,
})

export const dispatchGetForecast = (latitude, longitude) => {
  return (dispatch) => {
    dispatch(requestForecast());
    return (getWeatherForecast(latitude, longitude))
      .then((forecast) => dispatch(submitForecast(forecast)))
  }
}

export const changeTemperatureUnit = (newUnit) => ({
  type: CHANGE_UNIT,
  temperatureUnit: newUnit,
})
