import React, { Component } from 'react';

import { getLocationFromCoordinates } from '../services/getLocationFromCoordinates';

import '../styles/SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      latitude: '',
      longitude: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.getGeoLocation = this.getGeoLocation.bind(this);
  }

  handleSearch({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }))
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.setState(() => ({
        latitude: coords.latitude.toFixed(6),
        longitude: coords.longitude.toFixed(6),
      }))
    })
  }

  componentDidMount() {
    this.getGeoLocation();
    getLocationFromCoordinates(-22.807892,-45.195476)
  }

  render() {
    const { location } = this.state;

    return (
      <div className="location-search-bar">
        <form>
          <input
            name="location"
            placeholder="Digite a cidade"
            type="text"
            value={ location }
            onChange={ this.handleSearch }
          />
          <button
            type="button"
          >
            Buscar
          </button>
        </form>
      </div>
    )
  }
}
