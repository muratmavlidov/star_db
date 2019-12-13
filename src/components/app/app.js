import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.sass';

class App extends Component {

  swapiService = new SwapiService();

  render() {

    return(
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app container">
          <Header />
          <RandomPlanet />

          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />

        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;