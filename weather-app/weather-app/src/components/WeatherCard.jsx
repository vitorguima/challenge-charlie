import React, { Component } from 'react';

import '../styles/WeatherCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import SerchBar from './SerchBar';

export default class WeatherCard extends Component {
  async componentDidMount() {
    const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
    const url_api = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';
    const url_bing = 'https://www.bing.com';

    const request = await fetch(`${cors_anywhere}${url_api}`);
    const response = await request.json();
    console.log(url_bing + response.images[0].url);
  }
  
  render() {
    return (
      <div className="weather-card-wrapper">
        <SerchBar />
        <div className="today-weather-wrapper">
          <div className="today-icon-wrapper">
          <FontAwesomeIcon icon={ faSun } />
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
          <h2>Depois de amanhã</h2>
          <p>32ºC</p>
        </div>
      </div>
    )
  }
}
