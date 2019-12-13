import React, { Fragment } from 'react';

const PlanetView = ({ planet }) => {
  const {id, population, rotationPeriod, 
    diameter, name} = planet;

  return(
    <Fragment>
      <img  className="planet-image" 
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="" />
      <div className="planet-info">
        <h4>{name}</h4>
        <ul className="planet-info-list">
          <li className="list-item">
            Population
            <span>{population}</span>
          </li>
          <li className="list-item">
            <span>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-item">
            <span>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default PlanetView;