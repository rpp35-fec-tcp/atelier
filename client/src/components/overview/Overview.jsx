import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import Description from './Description.jsx';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';
import Gallery from './Gallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      productInfo: [],
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios
      .get(this.props.url + '/products/' + this.props.currentProduct + '/styles')
      .then((results) => {
        this.setState({ styles: results.data.results });
        console.log(results.data.results);
      });
    axios
      .get(this.props.url + '/products/' + this.props.currentProduct)
      .then((results) => {
        this.setState({ productInfo: results.data });
      });
  }

  render() {
    return (
      <div>
        <Gallery />
        <Styles />
        <Cart />
        <Description productInfo={this.state.productInfo}/>
      </div>
    );
  }
}

export default Overview;