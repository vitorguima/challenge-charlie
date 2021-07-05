import React, { Component } from 'react';

import '../styles/SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      location: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    const  { location } = this.state;

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
