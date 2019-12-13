import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => (
    <Wrapped {...props}>
      {fn}
    </Wrapped>
  )
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const renderName = ({name, birthYear}) => <span>{name} ({birthYear})</span>;
const renderModelName = ({ model, name }) => <span>{name} ({model})</span>
const renderPlanet = ({name, diameter}) => <span>{name} ({diameter})</span>

const compose = (mapMethodsToProps, render) => {
  return withSwapiService(mapMethodsToProps)(
    withData(
      withChildFunction(render)(ItemList)
    )
  )
}

const PersonList = compose(mapPersonMethodsToProps, renderName);

const PlanetList = compose(mapPlanetMethodsToProps, renderPlanet);

const StarshipList = compose(mapStarshipMethodsToProps, renderModelName);

export {
  PersonList,
  PlanetList,
  StarshipList
};