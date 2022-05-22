import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import './style.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0,
      currentStyle: 0,
      photoURL: '',
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
        this.setState({
          photoURL: results.data.results[this.state.currentStyle].photos[0].url,
        });
        this.setState({ styles: results.data.results });
        this.setState(
          {
            maxLength: results.data.results.map((id) => id.photos).length,
          },
          () => {
            console.log('styles: ', this.state.styles);
          }
        );
      });
    axios
      .get(this.props.url + '/products/' + this.props.currentProduct)
      .then((results) => {
        this.setState({ productInfo: results.data });
      });
  }

  changePhoto(event) {
    let max = this.state.maxLength;
    if (event.target.id === 'forward') {
      if (this.state.currentStyle < this.state.maxLength - 1) {
        this.setState({
          photoURL:
            this.state.styles[this.state.currentStyle].photos[
              this.state.currentPicture + 1
            ].url,
        });

        this.setState({ currentStyle: this.state.currentStyle + 1 });
      } else {
        this.setState({
          photoURL: this.state.styles[0].photos[0].url,
        });
        this.setState({ currentStyle: 0 });
      }
    }
    if (event.target.id === 'back') {
      if (this.state.currentStyle > 0) {
        this.setState({
          photoURL:
            this.state.styles[this.state.currentStyle].photos[
              this.state.currentPicture - 1
            ].url,
        });
        this.setState({ currentPicture: this.state.currentPicture - 1 });
      } else {
        this.setState({
          photoURL:
            this.state.styles[this.state.currentStyle].photos[max - 1].url,
        });
        this.setState({ currentPicture: this.state.styles.length - 1 });
      }
    }
  }

  changeStyle(e) {
    let id = Number.parseInt(e.target.id);
    this.setState({
      photoURL: this.state.styles[this.state.currentStyle].photos[id].url,
    });
  }

  render() {
    return (
      <div>
        <ImageGallery
          photoURL={this.state.photoURL}
          currentProduct={this.state.currentStyle}
          changePhoto={this.changePhoto}
        />
        {this.state.styles.length > 0 && (
          <StyleSelector
            thumbnails={this.state.styles[this.state.currentStyle].photos}
            changeStyle={this.changeStyle.bind(this)}
          />
        )}
        <AddToCart />
        <ProductInformation productInfo={this.state.productInfo} />
      </div>
    );
  }
}

export default Overview;
