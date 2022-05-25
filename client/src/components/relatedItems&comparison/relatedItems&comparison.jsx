import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleCarousel from './carousel.jsx';
import $ from 'jquery';
import {getOneProductStyle, getOneProduct, getReviews, getRelatedProducts} from './getAndPost.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import './related.css';

class RelatedComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: null,
      relatedProducts: [],
      outfitList: [null]
    };
    getOneProduct(this.props.currentProductId, (data) => {
      this.setState({
        currentProductInfo: data
      })
    })
    this.addToOutfit = this.addToOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
  }
  addToOutfit (id) {
    if (!this.state.outfitList.includes(id)) {
      this.setState({
        outfitList: [null, id, ...this.state.outfitList.slice(1)]
      })
    }
  }
  deleteOutfit (id) {
    this.setState({
      outfitList: this.state.outfitList.filter((item) => item !== id)
    });
  }
  getData(id) {
    getRelatedProducts(id, (data) => {
      this.setState({
        relatedProducts: data
      })
    })
    getOneProduct(id, (data) => {
      this.setState({
        currentProductInfo: data
      }, ()=> {console.log('current id: ', id, 'currentInfo: ', this.state.currentProductInfo)})
    })
  }
  componentDidMount () {
    this.getData(this.props.currentProductId);
  }
  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.getData(this.props.currentProductId);
    }
  }
  render () {
    return (
      <div className='exceptOverview'>

        <p className='list' >RELATED PRODUCT</p>
        <SimpleCarousel
          relatedProducts={this.state.relatedProducts}
          currentProductId={this.props.currentProductId}
          currentProductInfo={this.state.currentProductInfo}
          changeCurrentProductId={this.props.changeCurrentProductId}
        />

        <p className='list'>YOUR OUTFIT</p>
        <SimpleCarousel
          relatedProducts={this.state.outfitList}
          currentProductId={this.props.currentProductId}
          currentProductInfo={this.state.currentProductInfo}
          changeCurrentProductId={this.props.changeCurrentProductId}
          addToOutfit={this.addToOutfit}
          deleteOutfit={this.deleteOutfit}
        />

      </div>
    );
  }
}

export default RelatedComponent;