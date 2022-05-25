import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {FaRegStar} from 'react-icons/fa';
import {BsXLg} from "react-icons/bs";
import {getOneProduct, getOneProductStyle, getReviews} from './getAndPost.jsx';
import Compare from './compare.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductInfo: null,
      relatedProductStyle: null,
      defaultItem: null,
      reviewRating: 0,
      show: false
    }
    this.starClicked = false;
  }
  changeShow () {
    this.setState({show: false});
  }
  componentDidMount () {
    this.update();
    //unit test for getReviews, to check whether rating is calculated correctly, also check whether rating is hidden is there is no review
    getReviews(this.props.id, (data) => {
      var ratings = data.ratings;
      var keys = Object.keys(ratings);
      var sum = 0;
      var count = 0;
      var rating = 0;
      if (keys.length > 0) {
        for (let key of keys) {
          sum += Number(key) * Number(ratings[key]);
          count += Number(ratings[key]);
        }
        rating = sum / count;
      } else {
        rating = -1;
      }
      this.setState({
        reviewRating: rating
      })
    });
  }
  update () {
    getOneProduct(this.props.id, (data) => {
      this.setState({
        relatedProductInfo: data
      })
    });
    getOneProductStyle(this.props.id, (data) => {
      this.setState({
        relatedProductStyle: data
      });
      this.getDefaultItem(data.results);
    });
  }
  rating (value) {
    if (value !== -1) {
      return (
        <Stack spacing={1}>
          <Rating name="read-only" size="small" value={value} precision={0.1} readOnly />
        </Stack>
      );
    }
  }
  //default is not always the 1st result in results array, so we need to check the defaul? === true
  //unit test for price whether default true is selected for pricing,
  //unit test for price whether sales price is used if it is not null
  getDefaultItem (results) {
    var defaultItem = results.filter((result) => result['default?']);
    defaultItem = defaultItem.length === 0 ? results[0] : defaultItem[0];
    this.setState({
      defaultItem: defaultItem
    })
  }
  price (defaultItem) {
    if (defaultItem.sale_price === null) {
      return (
        <p className="originalPrice" >{defaultItem.original_price}</p>
      )
    } else {
      return (
        <div>
          <p className="crossOutOriginalPrice">{defaultItem.original_price}</p>
          <p className="salePrice" >{defaultItem.sale_price}</p>
        </div>
      )
    }
  }
  render () {
    return (
      <div>
        <div className="card" onClick={() => {
          if (this.starClicked === false) {
            this.props.changeCurrentProductId(this.state.relatedProductInfo.id);
          } else {
            this.starClicked = false;
          }
          }}>
        {this.state.defaultItem !== null && <div className='image-holder'><img src={this.state.defaultItem.photos[0].thumbnail_url} className="card-img-top" alt={this.state.defaultItem.name}/></div>}
        <div className="card-body" >
          {this.state.relatedProductInfo !== null && <h6 className="card-subtitle mb-2 text-muted" >{this.state.relatedProductInfo.category}</h6>}
          {this.state.relatedProductInfo !== null && <h5 className="card-title" >{this.state.relatedProductInfo.name}</h5>}
          {this.state.defaultItem !== null && this.price(this.state.defaultItem)}
          {this.rating(this.state.reviewRating)}
        </div>
        {this.state.show && <Compare show={this.state.show} comparedProductInfo={this.state.relatedProductInfo} currentProductInfo={this.props.currentProductInfo} changeShow={this.changeShow.bind(this)}/>}
      </div>
      {this.props.type === 'related' && <FaRegStar className='icon' onClick={(e) => {this.starClicked = true; this.setState({show: true}); }}/>}
      {this.props.type === 'outfit' && <BsXLg className='icon' onClick={(e) => {this.props.deleteOutfit(this.props.id) }}/>}
      </div>
    );
  }
}

export default Card;

