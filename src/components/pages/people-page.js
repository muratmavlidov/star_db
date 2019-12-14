import React from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return(
    <div className="page">
      <Row  left={<PersonList onItemSelected={(id) => history.push(id)} />} 
            right={<PersonDetails itemId={id} />}/>
    </div>
  );
}

export default withRouter(PeoplePage);