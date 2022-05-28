import axios from 'axios';
import React from 'react';
import AddToCart from './AddToCart.jsx';
import FillerComponent from './FillerComponent.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import config from '../../../../config.js';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  padding-left: 80px;
`;

const Flexcontainer = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  padding: 0px 80px;
  margin-top: 48px;
`;

const Strong = styled.strong`
  margin-bottom: 4px;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      photos: [],
      currentPicture: 0,
      currentStyle: 0,
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
          photos: results.data.results[this.state.currentStyle].photos,
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
          photoURL: this.state.photos[this.state.currentPicture + 1].url,

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
      <OverviewContainer>
        <Flexcontainer>
          {this.state.photos.length > 0 && (
            <ImageGallery
              photos={this.state.photos}
              currentStyle={this.state.currentStyle}
              changePhoto={this.changePhoto}
            />
          )}
          <FlexColumn>
            {this.state.styles.length > 0 && (
              <StyleSelector
                thumbnails={this.state.styles[this.state.currentStyle].photos}
                changeStyle={this.changeStyle.bind(this)}
                styles={this.state.styles}
              />
            )}
            <Text>
              <Strong>
                <ProductInfo
                  productInfo={this.state.productInfo}
                  styles={this.state.styles}
                  ratings={this.state.ratings}
                  reviewsCount={this.state.reviewsCount}
                />
              </Strong>
            </Text>
            <FillerComponent />

            <AddToCart />
          </FlexColumn>
        </Flexcontainer>
        <ProductDescription productInfo={this.state.productInfo} />
      </OverviewContainer>
    );
  }
}

export default Overview;
