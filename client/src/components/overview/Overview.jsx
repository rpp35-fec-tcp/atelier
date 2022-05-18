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
      currentStyle: 0,
      currentProduct: 0,
      photo: '',
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
        this.setState({ photo: results.data.results[0].photos[0].url });
        this.setState({ products: results.data.results });
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
    let max = this.state.maxLength;
    if (event.target.id === 'forward') {
      if (this.state.currentStyle < this.state.maxLength - 1) {
        this.setState({
          photo:
            this.state.products[this.state.currentProduct].photos[
              this.state.currentStyle + 1
            ].url,
        });

        this.setState({ currentStyle: this.state.currentStyle + 1 });
      } else {
        this.setState({
          photo: this.state.products[0].photos[0].url,
        });
        this.setState({ currentStyle: 0 });
      }
    }
    if (event.target.id === 'back') {
      if (this.state.currentStyle > 0) {
        this.setState({
          photo:
            this.state.products[this.state.currentProduct].photos[
              this.state.currentStyle - 1
            ].url,
        });
        this.setState({ currentStyle: this.state.currentStyle - 1 });
      } else {
        this.setState({
          photo:
            this.state.products[this.state.currentProduct].photos[max - 1].url,
        });
        this.setState({ currentStyle: this.state.styles.length - 1 });
      }
    }
  }

  changeStyle(e) {
    let id = Number.parseInt(e.target.id);
    this.setState({ currentProduct: id });
    this.setState({ photo: this.state.products[id].photos[0].url });
  }

  render() {
    return (
      <div>
        <Gallery
          photo={this.state.photo}
          currentProduct={this.state.currentProduct}
          changePhoto={this.changePhoto}
          styles={this.state.products}
        />
        <Styles
          thumbnails={this.state.products
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
