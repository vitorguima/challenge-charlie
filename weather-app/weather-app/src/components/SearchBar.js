import React, { Component } from 'react';

import { getLocationFromCoordinates } from '../services/getLocationFromCoordinates';

import { getCoordinatesFromLocation } from '../services/getCoordinatesFromLocation';

import '../styles/SearchBar.css';

import { dispatchGetForecast } from '../actions/index';

import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      latitude: '',
      longitude: '',
      forecast: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.getGeoLocationFromUser = this.getGeoLocationFromUser.bind(this);
    this.submitCitySearch = this.submitCitySearch.bind(this);
  }

  handleSearch({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }))
  }

  // const geolocation = await getGeoLocation();
  // const location = await getCoordinates(geolocation);

  // dividir getGeoLocationFromUser em 2 partes: primeira "get coordenadas pelo browser" / 2a getLocationFromCoordinates + setState + dispatchForecast;

  getGeoLocationFromUser() {
    const { dispatchForecast } = this.props
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.setState(() => ({
        latitude: coords.latitude.toFixed(6),
        longitude: coords.longitude.toFixed(6),
      }), async () => {
        const { latitude, longitude } = this.state;
        const currentLocation = await getLocationFromCoordinates(latitude, longitude);
        this.setState(() => ({
          location: currentLocation,
        }), () => dispatchForecast(latitude, longitude))
      })
    })
  }

  async submitCitySearch() {
    const { location } = this.state;
    const { dispatchForecast } = this.props;
    const coordinates = await getCoordinatesFromLocation(location);
    const { lat, lng } = coordinates;
    
    dispatchForecast(lat, lng);
  }

  async componentDidMount() {
    await this.getGeoLocationFromUser();
  }

  render() {
    const { location } = this.state;

    return (
      <div className="location-search-bar">
        <form onSubmit={ (e) => {e.preventDefault(); this.submitCitySearch()} }>
          <input
            name="location"
            placeholder="Digite a cidade"
            type="text"
            value={ location }
            onChange={ this.handleSearch }
            className="city-search-bar"
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchForecast: (latitude, longitude) => dispatch(dispatchGetForecast(latitude, longitude))
});

export default connect(null, mapDispatchToProps)(SearchBar)
