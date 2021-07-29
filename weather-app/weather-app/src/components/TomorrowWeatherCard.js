import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeTemperatureUnit } from '../actions/index';

import '../styles/TomorrowWeatherCard.css';

class TomorrowWeatherCard extends Component {
  setBackgroundColorToCard() {
    const { weatherForecast } = this.props;
    const tomorrowTemperature = Number(weatherForecast.daily[0].temp.day.toFixed(0));
    const hotClimateParam = 35;
    const coldClimateParam = 15;
    if (tomorrowTemperature >= hotClimateParam) {
      return 'tomorrow-hot-climate';
    }

    if (tomorrowTemperature <= coldClimateParam) {
      return 'tomorrow-cold-climate';
    }

    return 'tomorrow-regular-climate';
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
          {`${weatherForecast.daily[0].temp.day.toFixed(0)} ºC`}
        </p>
      )
    }

    if (!temperatureUnit && weatherForecast) {
      const temperatureToFarenheit = (weatherForecast.daily[0].temp.day * 1.8) + 32;
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
    return (
      <div className={ `tomorrow-weather-wrapper ${this.setBackgroundColorToCard()}` }>
        <h2>Amanhã</h2>
        {this.temperatureUnitConvert()}
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

export default connect(mapStateToProps, mapDispatchToProps)(TomorrowWeatherCard);
