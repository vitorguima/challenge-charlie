import React, { Component } from 'react';

import '../styles/WeatherCard.css';

import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import TodayWeatherCard from './TodayWeatherCard';
import TomorrowWeatherCard from './TomorrowWeatherCard';
import AfterTomorrowWeatherCard from './AfterTomorrowWeatherCard';

// criar componente para cada container: today, tomorrow, after-tomorrow;

class WeatherCard extends Component {
  render() {
    const { weatherForecast } = this.props;
    return (
      <div className="weather-card-wrapper">
        <SearchBar />
        { weatherForecast ? <TodayWeatherCard /> : null }
        { weatherForecast ? <TomorrowWeatherCard /> : null }
        { weatherForecast ? <AfterTomorrowWeatherCard /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(WeatherCard)
