const INITIAL_STATE = {
  loading: false,
  backgroundImage: '',
};

function WeatherCardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default WeatherCardReducer;