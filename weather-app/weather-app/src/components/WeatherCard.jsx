import React, { Component } from 'react';

import SerchBar from './SerchBar';

import '../styles/WeatherCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class WeatherCard extends Component {
  render() {
    return (
      <div className="weather-card-wrapper">
        <div className="today-weather-wrapper">
          <div className="today-icon-wrapper">
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          </div>
          <div className="today-infos-wrapper">
            <h2>HOJE</h2>
            <p>32ºC</p>
            <h2>Ensolarado</h2>
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
          <h2>Amanhã</h2>
          <p>32ºC</p>
        </div>
      </div>
    )
  }
}
