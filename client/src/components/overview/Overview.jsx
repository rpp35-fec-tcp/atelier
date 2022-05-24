import axios from 'axios';
import React from 'react';
import AddToCart from './AddToCart.jsx';
import FillerComponent from './FillerComponent.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import config from '../../../../config.js';
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
      ratings: 0,
      reviewsCount: 0,
    };
    this.changePhoto = this.changePhoto.bind(this);
    this.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
  }

  getProductStyles() {
    axios.defaults.headers.common['Authorization'] = config.TOKEN;
    axios
      .get(
        this.props.url + '/products/' + this.props.currentProductId + '/styles'
      )
      .then((results) => {
        this.setState({
          styles: results.data.results,
          maxLength: results.data.results.map((id) => id.photos).length,
          photoURL: results.data.results[this.state.currentStyle].photos[0].url,
        });
      });
  }

  getProductInfo() {
    axios
      .get(this.props.url + '/products/' + this.props.currentProductId)
      .then((results) => {
        this.setState({ productInfo: results.data }, () => {
          console.log('product Info: ', this.state.productInfo);
        });
      });
  }

  getReviews() {
    axios
      .get(
        this.props.url +
          '/reviews/meta/?product_id=' +
          this.props.currentProductId
      )
      .then((res) => {
        // console.log('get product ratings: ', res.data.ratings['1']);
        const reviewsCount =
          Number(res.data.ratings['1'] || 0) +
          Number(res.data.ratings['2'] || 0) +
          Number(res.data.ratings['3'] || 0) +
          Number(res.data.ratings['4'] || 0) +
          Number(res.data.ratings['5'] || 0);
        const ratings = (
          (Number(res.data.ratings['1'] || 0) * 1 +
            Number(res.data.ratings['2'] || 0) * 2 +
            Number(res.data.ratings['3'] || 0) * 3 +
            Number(res.data.ratings['4'] || 0) * 4 +
            Number(res.data.ratings['5'] || 0) * 5) /
          reviewsCount
        ).toFixed(2);
        console.log('ratings: ', ratings);
        this.setState({ ratings, reviewsCount });
      })
      .catch((err) => console.error('get product rating error: ', err));
  }

  componentDidMount() {
    this.getProductStyles();
    this.getProductInfo();
    this.getReviews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      this.getProductStyles();
      this.getProductInfo();
      this.getReviews();
    }
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

          currentPicture: this.state.currentPicture + 1,
        });
      } else {
        this.setState({
          photoURL: this.state.styles[0].photos[0].url,
          currentStyle: 0,
        });
      }
    }
    if (event.target.id === 'back') {
      if (this.state.currentStyle > 0) {
        this.setState({
          photoURL:
            this.state.styles[this.state.currentStyle].photos[
              this.state.currentPicture - 1
            ].url,
          currentPicture: this.state.currentPicture - 1,
        });
      } else {
        this.setState({
          photoURL:
            this.state.styles[this.state.currentStyle].photos[max - 1].url,
          currentPicture: this.state.styles.length - 1,
        });
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
      <div className='product-overview'>
        <div className='image-view'>
          <ImageGallery
            photoURL={this.state.photoURL}
            currentProduct={this.state.currentStyle}
            changePhoto={this.changePhoto}
          />
        </div>
        <div className='product-info'>
          <ProductInfo
            productInfo={this.state.productInfo}
            styles={this.state.styles}
            ratings={this.state.ratings}
            reviewsCount={this.state.reviewsCount}
          />
          <ProductDescription productInfo={this.state.productInfo} />
          <FillerComponent />
        </div>
        <div className='style-selector'>
          {this.state.styles.length > 0 && (
            <StyleSelector
              thumbnails={this.state.styles[this.state.currentStyle].photos}
              changeStyle={this.changeStyle.bind(this)}
              styles={this.state.styles}
            />
          )}
        </div>
        <div className='add-to-cart'>
          <AddToCart />
        </div>
      </div>
    );
  }
}

export default Overview;
