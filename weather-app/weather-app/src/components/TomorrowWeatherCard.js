import React, { Component } from 'react';

import { connect } from 'react-redux';

import '../styles/TomorrowWeatherCard.css';

class TomorrowWeatherCard extends Component {
  componentDidMount() {
    const { weatherForecast } = this.props;
    
    console.log('clima', weatherForecast.daily[0].temp.day);
  }

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

  render() {
    const { weatherForecast } = this.props;
    return (
      <div className={ `tomorrow-weather-wrapper ${this.setBackgroundColorToCard()}` }>
        <h2>Amanhã</h2>
        <p>{ weatherForecast.daily[0].temp.day.toFixed(0) } ºC</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(TomorrowWeatherCard);
