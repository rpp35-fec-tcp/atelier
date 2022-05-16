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
      currentPhoto: 0,
      currentStyle: 0,
      photo: '',
      productInfo: [],
      maxLength: 0,
    };
    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios
      .get(
        this.props.url + '/products/' + this.props.currentProduct + '/styles'
      )
      .then((results) => {
        this.setState({ photo: results.data.results[0].photos[0].url });
        this.setState({
          maxLength: results.data.results.map((id) => id.photos).length,
        });
        console.log(results.data.results);
      });
    axios
      .get(this.props.url + '/products/' + this.props.currentProduct)
      .then((results) => {
        this.setState({ productInfo: results.data });
      });
  }

  changePhoto(e) {
    let currentPhotoIndex = this.state.currentPhoto;
    if (e.target.id === 'forward') {
      if (this.state.currentPhoto < this.state.maxLength) {
        this.setState({ currentPhoto: currentPhotoIndex + 1 });
      } else {
        this.setState({ currentPhoto: 0 });
      }
    }
  }

  render() {
    return (
      <div>
        <Gallery
          photo={this.state.photo}
          currentStyle={this.state.currentStyle}
          changePhoto={this.changePhoto}
        />
        <Styles />
        <Cart />
        <Description productInfo={this.state.productInfo} />
      </div>
    );
  }
}

export default Overview;