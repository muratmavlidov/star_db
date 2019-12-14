import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';

import { 
  PeoplePage, 
  PlanetsPage, 
  StarshipsPage, 
  SecretPage, 
  LoginPage 
} from '../pages';

import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router 
} from 'react-router-dom';

import './app.sass';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {

    const { isLoggedIn } = this.state;

    return(
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="app container">

            <Header />
            <RandomPlanet />
            
            <Switch>
              <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route path="/starships/:id" 
                    render={({ match }) => {
                      const { id } = match.params;
                      return <StarshipDetails itemId={id} />
                    }} />

              <Route 
                path="/login"
                render={() => (
                  <LoginPage 
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />
                )} />
              
              <Route 
                path="/secret"
                render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

              <Route render={() => <h2>Page not found</h2>} />
            </Switch>

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;