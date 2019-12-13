import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return(
    <ItemDetails {...props}>
      <Record field="name" label="Name" />
      <Record field="costInCredits" label="Cost in Credits" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />        
      <Record field="cargoCapacity" label="Cargo Capacity" />        
    </ItemDetails>
  )
};

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => {
  return {
    getData: getStarship,
    getImageUrl: getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);