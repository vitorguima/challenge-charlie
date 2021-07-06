import React, { Component } from 'react'

import WeatherCard from '../components/WeatherCard';

import { dispatchGetBackground } from '../actions/index';

import { connect } from 'react-redux';

import '../styles/Home.css';

class Home extends Component {
  componentDidMount() {
    const { dispatchGetBackground } = this.props;

    dispatchGetBackground();
  }

  render() {
    const { loading, backgroundImage } = this.props;
    
    if (!loading && backgroundImage) {
      return (
        <main style={ { backgroundImage: `url(${backgroundImage})` } }>
          <WeatherCard />
        </main>
      )
    } return (
      <main>
        <WeatherCard />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.HomeReducer.loading,
  backgroundImage: state.HomeReducer.backgroundImage,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchGetBackground: () => dispatch(dispatchGetBackground()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
