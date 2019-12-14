import React, { Component } from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({ match, history }) => {
  const { id } = match.params;
  return(
    <div className="page">
      <Row  left={<PlanetList onItemSelected={(id) => history.push(id)} />} 
            right={<PlanetDetails itemId={id} />}/>
    </div>
  );
}

export default withRouter(PlanetsPage);