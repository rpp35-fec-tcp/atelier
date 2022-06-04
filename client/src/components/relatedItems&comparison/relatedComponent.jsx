import React from 'react';
// const SimpleCarousel = React.lazy(() => import('./carousel.jsx'));
import $ from 'jquery';
import { getOneProduct, getRelatedProductsCombinedInfo } from './getAndPost.jsx';
import SimpleCarousel from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import './related.css';

class RelatedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: null,
      relatedProductsAllInfo: [],
      outfitListAllInfo: [null],
    };
    this.getAllRelatedInfo = this.getAllRelatedInfo.bind(this);
    this.getOneProductInfo = this.getOneProductInfo.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
  }

  addToOutfit(id) {
    if (this.state.outfitListAllInfo.length !== 1) {
      for (const item of this.state.outfitListAllInfo.slice(1)) {
        if (item.id === id) {
          return;
        }
      }
    }
    this.setState({
      outfitListAllInfo: [null, this.state.currentProductInfo, ...this.state.outfitListAllInfo.slice(1)],
    });
  }

  deleteOutfit(id) {
    this.setState({
      outfitListAllInfo: this.state.outfitListAllInfo.filter((item) => ((item === null) || (item.id !== id))),
    });
  }

  getAllRelatedInfo(id) {
    getRelatedProductsCombinedInfo(id, (data) => {
      this.setState({
        relatedProductsAllInfo: data,
      });
    });
  }

  getOneProductInfo(id) {
    getOneProduct(id, (data) => this.setState({
      currentProductInfo: data,
    }));
  }

  componentDidMount() {
    this.getAllRelatedInfo(this.props.currentProductId);
    this.getOneProductInfo(this.props.currentProductId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.getAllRelatedInfo(this.props.currentProductId);
      this.getOneProductInfo(this.props.currentProductId);
    }
  }

  render() {
    return (
      <div className="exceptOverview">

        <p className="list">RELATED PRODUCT</p>
        <SimpleCarousel
          relatedProducts={this.state.relatedProductsAllInfo}
          currentProductId={this.props.currentProductId}
          currentProductInfo={this.state.currentProductInfo}
          changeCurrentProductId={this.props.changeCurrentProductId}
        />

        <p className="list">YOUR OUTFIT</p>
        <SimpleCarousel
          relatedProducts={this.state.outfitListAllInfo}
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
