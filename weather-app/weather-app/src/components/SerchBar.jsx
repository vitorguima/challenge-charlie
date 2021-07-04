import React, { Component } from 'react';

import '../styles/SearchBar.css';

export default class SerchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      location: '',
    }
  }
  
  render() {
    const  { location } = this.state;

    return (
      <div className="location-search-bar">
        <form>
            <input
              placeholder="Digite a cidade"
              type="text"
              value={ location }
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
