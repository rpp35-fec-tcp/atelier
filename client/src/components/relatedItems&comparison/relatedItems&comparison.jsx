import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import SimpleCarousel from './carousel.jsx';
import './related.css';
import $ from 'jquery';
import {getOneProduct, getOneProductStyle, getReviews} from './getAndPost.jsx';

class RelatedComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      //this id needs to to lift up a state to the index.jsx, so all 4 widgets could interact with it
      // currentProductId: 71704,
      currentProductInfo: null,
      relatedProducts: []
    };
  }
  getRelatedProducts (successCB) {
    $.ajax({
      type: 'GET',
      url: '/related/getRelatedProducts',
      contentType: 'application/json',
      data: {
        id: this.props.currentProductId
      },
      success: successCB,
      error: function(err) {
        console.log(err);
      }
    })
  }
  componentDidMount () {
    this.getRelatedProducts((data) => {
      //console.log(data);
      this.setState({
        relatedProducts: data
      })
    })
    getOneProduct(this.props.currentProductId, (data) => {this.setState({currentProductInfo: data})})
  }
  render () {
    return (
      <div className='exceptOverview'>
        <p style={{color: 'gray', marginLeft: '2%', fontSize:'20px'}}>Related Product</p>
        <SimpleCarousel relatedProducts={this.state.relatedProducts} currentProductInfo={this.state.currentProductInfo}/>
      </div>
    );
  }
}

export default RelatedComponent;