import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-details.sass';
import Spinner from '../spinner';
import ItemDetailsView from './item-details-view';

const Record = ({ item, field, label }) => {
  return (
    <li className="info-list-item">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

export {
  Record
};

class Itemdetails extends Component {

  static defaultProps = {
    itemId: 12
  }

  swapiService = new SwapiService();
  recieveData = new Map();

  state = {
    item: {},
    loading: true,
    image: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      this.setState({ loading: false });
      return;
    }

    if (this.recieveData.has(itemId)) {
      this.setState(() => {
        const { item, image } = this.recieveData.get(itemId);
        return {
          item,
          image
        }
      })
      return;
    }

    this.setState({loading: true});
    getData(itemId)
      .then(item => {
        this.recieveData.set(itemId, {
          item,
          image: getImageUrl(item)
        });
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        });
      });
  }

  render() {
    const { item, loading, image } = this.state;
      
    const content = loading 
      ? <Spinner /> 
      : <ItemDetailsView  item={item} 
                          image={image} 
                          contentDetails={this.props.children}/>

    return(
      <div className="jumbotron item-details-wrap">
        { content }
      </div>
    );
  }
}
export default Itemdetails;