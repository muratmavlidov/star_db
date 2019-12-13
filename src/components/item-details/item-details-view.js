import React from 'react';

const itemdetailsview = ({ item, image, contentDetails }) => {
  const {name} = item;
  return(
    <ul className="item-details">
      <img  className="item-details-image" 
        src={image}
        alt="" />
      <div className="item-details-info">
        <h4>{name}</h4>
        <ul className="info-list">
          { React.Children.map(contentDetails, (child) => {
            return React.cloneElement(child, { item });
          }) }
        </ul>
      </div>
    </ul>
  );
}

export default itemdetailsview;