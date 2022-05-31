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
import StarRating from './StarRating.jsx';

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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 12px;
  height: 32px;
`;

const Stars = styled.div`
  margin-right: 12px;
`;

const SmallLink = styled.p`
  & {
    margin-bottom: 0px;
    text-decoration: underline;
  }
  &:hover {
    color: var(--color-brand-300);
    cursor: pointer;
  }
  &:active {
    color: var(--color-brand-400);
  }
`;

const SalePrice = styled.p`
  color: red;
  margin-right: 12px;
`;

const DiscountedPrice = styled.p`
  text-decoration: line-through;
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
      meta: {},
      originalPrice: 0,
      salePrice: 0,
    };
    this.changePhoto = this.changePhoto.bind(this);
    this.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
    this.changeStyle = this.changeStyle.bind(this);
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
          originalPrice:
            results.data.results[this.state.currentStyle].original_price,
          salePrice: results.data.results[this.state.currentStyle].sale_price,
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
      .then((data) => {
        this.setState({ meta: data.data });
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

  changeStyle(index) {
    console.log('index is: ', index);
    this.setState({
      currentStyle: index,
    });
  }

  render() {
    const {
      category,
      default_price,
      description,
      features,
      id,
      name,
      slogan,
      styleData = [],
    } = this.state.productInfo;

    let price =
      this.state.salePrice === null ? (
        <FlexRow>
          <p>${this.state.originalPrice}</p>
        </FlexRow>
      ) : (
        <FlexRow>
          <SalePrice>${this.state.salePrice}</SalePrice>
          <DiscountedPrice>${this.state.originalPrice}</DiscountedPrice>
        </FlexRow>
      );

    return (
      <OverviewContainer>
        {console.log('originalPrice', this.state.originalPrice)}
        <Flexcontainer>
          {this.state.photos.length > 0 && (
            <ImageGallery
              photos={this.state.photos}
              currentStyle={this.state.currentStyle}
              changePhoto={this.changePhoto}
            />
          )}
          <FlexColumn>
            <FlexRow>
              <Stars>
                <StarRating ratings={this.state.meta.ratings} showAve={false} />
              </Stars>
              <SmallLink
                tabIndex='0'
                onClick={() => {
                  document
                    .getElementById('reviews')
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                onKeyPress={() => {
                  if (event.key === 'Enter') {
                    document
                      .getElementById('reviews')
                      .scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Read all reviews
              </SmallLink>
            </FlexRow>
            <h5>{category}</h5>
            <h2>{name}</h2>
            {price}
            {this.state.styles.length > 0 && (
              <StyleSelector
                changeStylePrice={this.changeStylePrice}
                changeStyle={this.changeStyle}
                currentStyle={this.state.currentStyle}
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
