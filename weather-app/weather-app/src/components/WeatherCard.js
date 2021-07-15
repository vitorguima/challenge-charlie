import React, { Component } from 'react';

import '../styles/WeatherCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

// criar componente para cada container: today, tomorrow, after-tomorrow;

class WeatherCard extends Component {
  componentDidMount() {
    const { weatherForecast } = this.props;

    console.log('tempratura', weatherForecast.current.temp);
    console.log(weatherForecast.current);
  }

  render() {
    const { weatherForecast } = this.props;
    return (
      <div className="weather-card-wrapper cold-weather">
        <SearchBar />
        <div className="today-weather-wrapper">
          <div className="today-icon-wrapper">
          <FontAwesomeIcon icon={ faSun } />
          </div>
          <div className="today-infos-wrapper">
            <h2>HOJE</h2>
            <p>{`${weatherForecast.current.temp.toFixed(0)} ºC`}</p>
            <p>Ensolarado</p>
            <p>Ventro: x y z</p>
            <p>Humidadae: x%</p>
            <p>Pressão: x PA</p>
          </div>
        </div>
        <div className="tomorrow-weather-wrapper">
          <h2>Amanhã</h2>
          <p>32ºC</p>
        </div>
        <div className="after-tomorrow-weather-wrapper">
          <h2>Depois de amanhã</h2>
          <p>32ºC</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(WeatherCard)
