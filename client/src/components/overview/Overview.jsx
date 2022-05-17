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
      styles: [],
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
        this.setState({ styles: results.data.results });
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

  changePhoto(event) {
    let currentPhotoIndex = this.state.currentPhoto;
    let max = this.state.maxLength;
    if (event.target.id === 'forward') {
      if (this.state.currentPhoto < this.state.maxLength - 1) {
        this.setState({
          photo:
            this.state.styles[this.state.currentStyle].photos[
              currentPhotoIndex + 1
            ].url,
        });

        this.setState({ currentPhoto: currentPhotoIndex + 1 });
      } else {
        this.setState({
          photo: this.state.styles[0].photos[0].url,
        });
        this.setState({ currentPhoto: 0 });
      }
    }
    if (event.target.id === 'back') {
      if (this.state.currentPhoto > 0) {
        this.setState({
          photo:
            this.state.styles[this.state.currentStyle].photos[
              currentPhotoIndex - 1
            ].url,
        });
        this.setState({ currentPhoto: currentPhotoIndex - 1 });
      } else {
        this.setState({
          photo: this.state.styles[this.state.currentStyle].photos[max - 1].url,
        });
        this.setState({ currentPhoto: this.state.styles.length - 1 });
      }
    }
  }

  changeStyle(e) {
    let id = Number.parseInt(e.target.id);
    this.setState({ currentStyle: id });
    this.setState({ photo: this.state.styles[id].photos[0].url });
  }

  render() {
    return (
      <div>
        <Gallery
          photo={this.state.photo}
          currentStyle={this.state.currentStyle}
          changePhoto={this.changePhoto}
        />
        <Styles
          thumbnails={this.state.styles
            .map((style) => style.photos)
            .map((arr) => arr[0].thumbnail_url)}
          changeStyle={this.changeStyle.bind(this)}
        />
        <Cart />
        <Description productInfo={this.state.productInfo} />
      </div>
    );
  }
}

export default Overview;
