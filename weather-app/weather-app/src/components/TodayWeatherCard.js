import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

class TodayWeatherCard extends Component {
  componentDidMount() {
    const { weatherForecast } = this.props;
    
    console.log('tempratura', weatherForecast.current.temp);
    console.log('clima', weatherForecast.current.weather[0].description);
    console.log(this.getCardinalDirection(weatherForecast.current.wind_deg));
  }

  getCardinalDirection(angle) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
  }

  render() {
    const { weatherForecast } = this.props;
    return (
      <div className="today-weather-wrapper">
      <div className="today-icon-wrapper">
      <FontAwesomeIcon icon={ faSun } />
      </div>
      <div className="today-infos-wrapper">
        <h2>HOJE</h2>
        {weatherForecast ? <p>{`${weatherForecast.current.temp.toFixed(0)} ºC`}</p> : null}
        {weatherForecast ? <p>{weatherForecast.current.weather[0].description}</p> : null}
        <p>Vento: x y z</p>
        <p>Humidadade: x%</p>
        <p>Pressão: x PA</p>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(TodayWeatherCard);
