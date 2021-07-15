import { REQUEST_FORECAST, SUBMIT_FORECAST } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  weatherForecast: {},
};

function WeatherCardReducer(state = INITIAL_STATE, action) {
  const { type, loading, weatherForecast } = action;

  switch (type) {
    case REQUEST_FORECAST:
      return { ...state, loading };
    case SUBMIT_FORECAST:
      return { ...state, loading, weatherForecast};
    default:
      return state;
  }
}

export default WeatherCardReducer;