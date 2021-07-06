import getBackground from '../services/getBackground';

export const REQUEST_API_START = 'REQUEST_API';
export const GET_RESPONSE = 'GET_RESPONSE';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';

const requestAPI = () => ({ 
  type: REQUEST_API_START,
  loading: true,
});

const getResponse = (response) => ({
  type: GET_RESPONSE,
  loading: false,
  backgroundImage: response,
})

export const dispatchGetBackground = () => {
  return (dispatch) => {
    dispatch(requestAPI());
    return (getBackground()
      .then((background) => dispatch(getResponse(background))))
  }
}