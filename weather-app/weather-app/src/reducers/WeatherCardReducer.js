import {
  REQUEST_FORECAST,
  SUBMIT_FORECAST,
  CHANGE_UNIT,
} from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  weatherForecast: false,
  temperatureUnit: true,
};

function WeatherCardReducer(state = INITIAL_STATE, action) {
  const {
    type,
    loading,
    weatherForecast,
    temperatureUnit,
  } = action;

  switch (type) {
    case REQUEST_FORECAST:
      return {
        ...state,
        loading,
      };
    case SUBMIT_FORECAST:
      return {
        ...state,
        loading,
        weatherForecast,
      };
    default:
      return state;
    case CHANGE_UNIT:
      return {
        ...state,
        temperatureUnit,
      }
  }
}

export default WeatherCardReducer;