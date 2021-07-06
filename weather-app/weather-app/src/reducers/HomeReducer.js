import { REQUEST_API_START, GET_RESPONSE, REQUEST_API_FAIL } from '../actions';

const INITIAL_STATE = {
  loading: false,
  backgroundImage: '',
  error: '',
};

function HomeReducer(state = INITIAL_STATE, { type, loading, backgroundImage }) {
  switch (type) {
    case REQUEST_API_START:
      return ({
        ...state,
        loading,
      });
    case GET_RESPONSE:
      return ({
        ...state,
        loading,
        backgroundImage,
      })
    default:
      return state;
  }
}

export default HomeReducer;