import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {FaRegStar} from 'react-icons/fa';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      productStyle: null,
      defaultItem: null,
      reviewRating: 0
    }
  }
  getOneProduct (successCB) {
    $.ajax({
      type: 'GET',
      url: '/related/getOneProduct',
      contentType: 'application/json',
      data: {
        id: this.props.id
      },
      success: successCB,
      error: function(err) {
        console.log(err);
      }
    })
  }
  getOneProductStyle (successCB) {
    $.ajax({
      type: 'GET',
      url: '/related/getOneProductStyle',
      data: {
        id: this.props.id
      },
      contentType: 'application/json',
      success: successCB,
      error: function(err) {
        console.log(err);
      }
    })
  }
  getReviews (successCB) {
    $.ajax({
      type: 'GET',
      url: '/related/getReviews',
      data: {
        id: this.props.id
      },
      contentType: 'application/json',
      success: successCB,
      error: function(err) {
        console.log(err);
      }
    })
  }
  componentDidMount () {
    this.getOneProduct((data) => {
      // console.log(data);
      this.setState({
        productInfo: data
      })
    });
    this.getOneProductStyle((data) => {
      // console.log('style data:', data);
      this.setState({
        productStyle: data
      });
      this.getDefaultItem(data.results);
    });
    //unit test for getReviews, to check whether rating is calculated correctly, also check whether rating is hidden is there is no review
    this.getReviews((data) => {
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
    //let results = this.state.productStyle.results;
    var defaultItem = results.filter((result) => result['default?']);
    defaultItem = defaultItem.length === 0 ? results[0] : defaultItem[0];
    console.log('results: ', results)
    console.log('defaultItem: ', defaultItem);
    //console.log(defaultItem);
    this.setState({
      defaultItem: defaultItem
    })
  }
  price (defaultItem) {
    if (defaultItem.sale_price === null) {
      return (
        <p style={{marginBottom: '5px', color:'gray', fontSize:'12px'}}>{defaultItem.original_price}</p>
      )
    } else {
      return (
        <div>
          <p style={{textDecoration: 'line-through', color: 'gray', fontSize:'12px', display: 'inline', marginBottom: '5px'}}>{defaultItem.original_price}</p>
          <p style={{fontSize:'12px', color: 'red', display: 'inline', marginBottom: '5px'}}>{defaultItem.sale_price}</p>
        </div>
      )
    }
  }
  render () {
    return (
      <div className="card" style={{border:'line', borderColor:'black', height:'430px'}}>
        {this.state.defaultItem !== null && <div style={{height:'300px', display:'block', backgroundColor: 'lightgray'}}><img src={this.state.defaultItem.photos[0].thumbnail_url} className="card-img-top" alt={this.state.defaultItem.name}/></div>}
        <div className="card-body" style={{display:"block", height:"130px"}}>
          {this.state.productInfo !== null && <h6 className="card-subtitle mb-2 text-muted" style={{fontSize:"12px"}}>{this.state.productInfo.category}</h6>}
          {this.state.productInfo !== null && <h5 className="card-title" style={{fontSize:"15px"}}>{this.state.productInfo.name}</h5>}
          {this.state.defaultItem !== null && this.price(this.state.defaultItem)}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          {this.rating(this.state.reviewRating)}
        </div>
        <FaRegStar className='star' />
      </div>
    );
  }
}

export default Card;

