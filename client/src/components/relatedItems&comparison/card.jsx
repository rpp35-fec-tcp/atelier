import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      productStyle: null,
      reviews: null
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
      url: '/related/reviews/meta',
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
      })
    });
    this.getReviews((data) => {
      console.log('Reviews data:', data);
      this.setState({
        reviews: data
      })
    })
  }
  rating () {
    return (
      <Stack spacing={1}>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      </Stack>
    );
  }
  //default is not always the 1st result in results array, so we need to check the defaul? === true
  price () {
    let results = this.state.productStyle.results;
    var defaultItem = results.filter((result) => result['default?']);
    defaultItem = defaultItem.length === 0 ? results[0] : defaultItem[0];
    console.log(defaultItem);
    if (defaultItem.sale_price === null) {
      return (
        <p>{defaultItem.original_price}</p>
      )
    } else {
      return (
        <div>
          <p style={{textDecoration: 'line-through', display: 'inline'}}>{defaultItem.original_price}</p>
          <p style={{color: 'red', display: 'inline'}}>{defaultItem.sale_price}</p>
        </div>
      )
    }
  }
  render () {
    return (
      <div className="card" style={{border:'line', borderColor: 'black'}}>
        {this.state.productStyle && <img src={this.state.productStyle.results[0].photos[0].thumbnail_url} className="card-img-top" style={{width: '300px', height:'300px'}} alt="image" />}
        <div className="card-body">
          {this.state.productInfo !== null && <h6 className="card-subtitle mb-2 text-muted">{this.state.productInfo.category}</h6>}
          {this.state.productInfo !== null && <h5 className="card-title">{this.state.productInfo.name}</h5>}
          {this.state.productStyle !== null && this.price()}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          {this.rating()}
        </div>
      </div>
    );
  }
}

export default Card;

