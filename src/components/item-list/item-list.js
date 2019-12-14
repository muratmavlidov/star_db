import React from 'react';
import './item-list.sass';
import PropTypes from 'prop-types';

const Itemlist = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return(
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        { label }
      </li>
    );
  })

  return(
    <ul className="item-list list-group">
      {items}
    </ul>
  );
} 

Itemlist.defaultProps = {
  onItemSelected: () => {}
};

Itemlist.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default Itemlist;