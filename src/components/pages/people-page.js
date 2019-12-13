import React, { Component } from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

class PeoplePage extends Component {

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
        <Row  left={<PersonList onItemSelected={this.onItemSelected} />} 
              right={<PersonDetails itemId={selectedItem} />}/>
      </div>
    );
  }
}

export default PeoplePage;