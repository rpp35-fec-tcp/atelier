import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import SimpleCarousel from './carousel.jsx';
// import './related.css';
import $ from 'jquery';
import {getOneProduct, getOneProductStyle, getReviews} from './getAndPost.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class RelatedComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: null,
      relatedProducts: [],
      outfitList:[null, 71709, 71698, 71699, 71702]
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
  addToOutfit (id) {
    console.log(id);
    if (!this.state.outfitList.includes(id)) {
      this.setState({
        outfitList: [...this.state.outfitList, id]
      });
    }
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
        <p style={{color: 'gray', marginLeft: '2%', marginTop:'5%', fontSize:'20px'}}>Related Product</p>
        <SimpleCarousel relatedProducts={this.state.relatedProducts} currentProductId={this.props.currentProductId} currentProductInfo={this.state.currentProductInfo} changeCurrentProductId={this.props.changeCurrentProductId} addToOutfit={this.addToOutfit.bind(this)}/>
        <p style={{color: 'gray', marginLeft: '2%', marginTop:'5%', fontSize:'20px'}}>Related Product</p>
        <SimpleCarousel relatedProducts={this.state.outfitList} currentProductId={this.props.currentProductId} currentProductInfo={this.state.currentProductInfo} changeCurrentProductId={this.props.changeCurrentProductId} addToOutfit={this.addToOutfit.bind(this)}/>
      </div>
    );
  }
}

export default RelatedComponent;