import React, { Component } from 'react';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';

class StarshipsPage extends Component {

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
        <Row  left={<StarshipList onItemSelected={this.onItemSelected} />} 
              right={<StarshipDetails itemId={selectedItem} />}/>
      </div>
    );
  }
}

export default StarshipsPage;