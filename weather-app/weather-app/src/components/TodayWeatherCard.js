import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeTemperatureUnit } from '../actions/index';

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

  temperatureUnitConvert() {
    const {
      temperatureUnit,
      weatherForecast,
      changeUnit
    } = this.props;

    if (temperatureUnit && weatherForecast) {
      return(
        <p
          onClick={() => changeUnit(!temperatureUnit)}
        >
          {`${weatherForecast.current.temp.toFixed(0)} ºC`}
        </p>
      )
    }

    if (!temperatureUnit && weatherForecast) {
      const temperatureToFarenheit = (weatherForecast.current.temp * 1.8) + 32;
      return (
        <p
          onClick={() => changeUnit(!temperatureUnit)}
        >
          {`${temperatureToFarenheit.toFixed(0)} º F`}
        </p>
      )
    }
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
          { this.temperatureUnitConvert() }
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
  temperatureUnit: state.WeatherCardReducer.temperatureUnit,
});

const mapDispatchToProps = (dispatch) => ({
  changeUnit: (unit) => dispatch(changeTemperatureUnit(unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayWeatherCard);
