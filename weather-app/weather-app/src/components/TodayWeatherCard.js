import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import '../styles/TodayWeatherCard.css';

class TodayWeatherCard extends Component {
  setBackgroundColorToCard() {
    const { weatherForecast } = this.props;
    const currentTemperature = Number(weatherForecast.current.temp.toFixed(0));
    const hotClimateParam = 35;
    const coldClimateParam = 15;
    if (currentTemperature >= hotClimateParam) {
      return 'today-hot-climate';
    }

    if (currentTemperature <= coldClimateParam) {
      return 'today-cold-climate';
    }

    return 'today-regular-climate';
  }

  climateToUpperCase() {
    const { weatherForecast } = this.props;
    const climateName = weatherForecast.current.weather[0].description;
    return climateName.charAt(0).toUpperCase() + climateName.slice(1)
  }

  windCardinalDirection() {
    const { weatherForecast } = this.props;
    const windAngle = weatherForecast.current.wind_deg;
    const directions = ['↑ N', '↗ NE', '→ L', '↘ SE', '↓ S', '↙ SO', '← O', '↖ NO'];
    return directions[Math.round(windAngle / 45) % 8];
  }

  convertWindSpeed() {
    const { weatherForecast } = this.props;
    const conversionRate = 3.6;
    const windSpeedInMeters = weatherForecast.current.wind_speed;
    const windSpeedInKilometers = windSpeedInMeters * conversionRate;
    return `${windSpeedInKilometers.toFixed(2)} Km/h`;
  }

  render() {
    const { weatherForecast } = this.props;
    const { current } = weatherForecast;
    return (
      <div className={ `today-weather-wrapper ${this.setBackgroundColorToCard()}` }>
        <div className="today-icon-wrapper">
        <img
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt={`climate-${weatherForecast.current.weather[0].main}`}
        />
        </div>
        <div className="today-infos-wrapper">
          <h2>HOJE</h2>
          { <p>{ `${current.temp.toFixed(0)} ºC` }</p> }
          { <p>{ this.climateToUpperCase() }</p> }
          <p>Vento: { `${this.windCardinalDirection()} ${this.convertWindSpeed()}` }</p>
          <p>Humidadade: { current.humidity }%</p>
          <p>Pressão: { current.pressure } hPA</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(TodayWeatherCard);
