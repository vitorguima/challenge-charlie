import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import WeatherCardReducer from './WeatherCardReducer';

const rootReducer = combineReducers({ 
  HomeReducer,
  WeatherCardReducer,
});

export default rootReducer;