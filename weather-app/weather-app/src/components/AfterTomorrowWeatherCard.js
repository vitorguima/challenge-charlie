import React, { Component } from 'react';

import { connect } from 'react-redux';

import '../styles/AfterTomorrowWeatherCard.css';

class AfterTomorrowWeatherCard extends Component {
  componentDidMount() {
    const { weatherForecast } = this.props;
    
    console.log('clima', weatherForecast.daily);
  }

  setBackgroundColorToCard() {
    const { weatherForecast } = this.props;
    const tomorrowTemperature = Number(weatherForecast.daily[0].temp.day.toFixed(0));
    const hotClimateParam = 35;
    const coldClimateParam = 15;
    if (tomorrowTemperature >= hotClimateParam) {
      return 'after-tomorrow-hot-climate';
    }

    if (tomorrowTemperature <= coldClimateParam) {
      return 'after-tomorrow-cold-climate';
    }

    return 'after-tomorrow-regular-climate';
  }

  render() {
    const { weatherForecast } = this.props;
    return (
      <div className={ `after-tomorrow-weather-wrapper ${this.setBackgroundColorToCard()}` }>
        <h2>Depois de amanhã</h2>
        <p>{weatherForecast.daily[1].temp.day.toFixed(0)} ºC</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  weatherForecast: state.WeatherCardReducer.weatherForecast,
});

export default connect(mapStateToProps)(AfterTomorrowWeatherCard);
