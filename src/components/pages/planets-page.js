import React, { Component } from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

class PlanetsPage extends Component {

  state = {
    selectedItem: undefined
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  
  render() {
    const { selectedItem } = this.state;
    return(
      <div className="page">
        <Row  left={<PlanetList onItemSelected={this.onItemSelected} />} 
              right={<PlanetDetails itemId={selectedItem} />}/>
      </div>
    );
  }
}

export default PlanetsPage;