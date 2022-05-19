import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import SimpleCarousel from './carousel.jsx';
// import './related.css';
import $ from 'jquery';
import {getOneProduct, getOneProductStyle, getReviews} from './getAndPost.jsx';

class RelatedComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      //this id needs to to lift up a state to the index.jsx, so all 4 widgets could interact with it
      //currentProductId: null,
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
    //console.log('id in related:', this.state.currentProductId)
    this.getRelatedProducts((data) => {
      //console.log(data);
      this.setState({
        relatedProducts: data
      })
    })
    getOneProduct(this.props.currentProductId, (data) => {this.setState({currentProductInfo: data})})
  }
  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.getRelatedProducts((data) => {
        //console.log(data);
        this.setState({
          relatedProducts: data
        })
      })
      getOneProduct(this.props.currentProductId, (data) => {this.setState({currentProductInfo: data})})
    }
    // this.prevProductId = this.props.currentProductId
    //console.log('id in related:', this.state.currentProductInfo.id, this.props.currentProductId)
  }
  render () {
    return (
      <div className='exceptOverview'>
        <p style={{color: 'gray', marginLeft: '2%', fontSize:'20px'}}>Related Product</p>
        <SimpleCarousel relatedProducts={this.state.relatedProducts} currentProductInfo={this.state.currentProductInfo} changeCurrentProductId={this.props.changeCurrentProductId}/>
      </div>
    );
  }
}

export default RelatedComponent;