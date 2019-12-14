import React, { Component } from 'react';
import './random-planet.sass';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

class RandomPlanet extends Component {  

  static defaultProps = {
    updateInterval: 3000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  }

  swapiService = new SwapiService();
  
  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*15 + 2);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);
    
    const errorMessage = error ? <ErrorIndicator /> : null; 
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} />: null
    
    return(
      <div className="random-planet jumbotron rounded">
        { spinner }
        { errorMessage }
        { content }
      </div>
    );
  }
}

export default RandomPlanet;