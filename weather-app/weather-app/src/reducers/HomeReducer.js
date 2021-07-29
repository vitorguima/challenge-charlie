import { REQUEST_BACKGROUND, SUBMIT_BACKGROUND } from '../actions';

const INITIAL_STATE = {
  loading: false,
  backgroundImage: '',
  error: '',
};

function HomeReducer(state = INITIAL_STATE, { type, loading, backgroundImage }) {
  switch (type) {
    case REQUEST_BACKGROUND:
      return ({
        ...state,
        loading,
      });
    case SUBMIT_BACKGROUND:
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