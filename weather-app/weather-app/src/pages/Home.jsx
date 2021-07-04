import React, { Component } from 'react'

import WeatherCard from '../components/WeatherCard';

import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <main>
        <WeatherCard />
      </main>
    )
  }
}
