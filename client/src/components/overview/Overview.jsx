import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: 0,
      currentProduct: 0,
      photoURL: '',
      products: [],
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
        this.setState({ photoURL: results.data.results[0].photos[0].url });
        this.setState({ products: results.data.results });
        this.setState(
          {
            maxLength: results.data.results.map((id) => id.photos).length,
          },
          () => {
            console.log('products 1: ', this.state.products);
          }
        );
        console.log('results: ', results.data.results);
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
      console.log('products: ', this.state.products);
      if (this.state.currentStyle < this.state.maxLength - 1) {
        this.setState({
          photoURL:
            this.state.products[this.state.currentProduct].photos[
              this.state.currentStyle + 1
            ].url,
        });

        this.setState({ currentStyle: this.state.currentStyle + 1 });
      } else {
        this.setState({
          photoURL: this.state.products[0].photos[0].url,
        });
        this.setState({ currentStyle: 0 });
      }
    }
    if (event.target.id === 'back') {
      if (this.state.currentStyle > 0) {
        this.setState({
          photoURL:
            this.state.products[this.state.currentProduct].photos[
              this.state.currentStyle - 1
            ].url,
        });
        this.setState({ currentStyle: this.state.currentStyle - 1 });
      } else {
        this.setState({
          photoURL:
            this.state.products[this.state.currentProduct].photos[max - 1].url,
        });
        this.setState({ currentStyle: this.state.styles.length - 1 });
      }
    }
  }

  changeStyle(e) {
    let id = Number.parseInt(e.target.id);
    this.setState({
      photoURL: this.state.products[this.state.currentProduct].photos[id].url,
    });
  }

  render() {
    return (
      <div>
        <ImageGallery
          photoURL={this.state.photoURL}
          currentProduct={this.state.currentProduct}
          changePhoto={this.changePhoto}
        />
        {this.state.products.length > 0 && (
          <StyleSelector
            thumbnails={this.state.products[this.state.currentProduct].photos}
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
