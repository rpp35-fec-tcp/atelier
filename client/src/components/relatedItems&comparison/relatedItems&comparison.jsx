// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleCarousel from './carousel.jsx';
import $ from 'jquery';
import {getOneProductStyle, getReviews, getRelatedProducts} from './getAndPost.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import './related.css';

class RelatedComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: this.props.currentProductId,
      relatedProducts: [],
      // outfitList:[null, 71699, 71698, 71697]
      outfitList: [null]
    };
    this.addToOutfit = this.addToOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    //this.renderOutfit = this.renderOutfit.bind(this);
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
  componentDidMount () {
    getRelatedProducts(this.state.currentProductId, (data) => {
      this.setState({
        relatedProducts: data
      })
    })
    //this.renderOutfit();
  }
  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      getRelatedProducts(this.props.currentProductId, (data) => {
        this.setState({
          relatedProducts: data
        })
      })
      this.setState({currentProductId: this.props.currentProductId})
    }
  }
  // renderOutfit () {
  //   var $list = `<SimpleCarousel relatedProducts=${this.state.outfitList} currentProductId=${this.state.currentProductId} changeCurrentProductId=${this.props.changeCurrentProductId} addToOutfit=${this.addToOutfit} deleteOutfit=${this.deleteOutfit} />`
  //   $('#outfit').empty();
  //   $('#outfit').append($list);
  // }
  render () {
    return (
      <div className='exceptOverview'>

        <p className='list' >RELATED PRODUCT</p>
        <SimpleCarousel
          relatedProducts={this.state.relatedProducts}
          currentProductId={this.state.currentProductId}
          changeCurrentProductId={this.props.changeCurrentProductId}
        />

        <p className='list'>YOUR OUTFIT</p>
        <SimpleCarousel
          relatedProducts={this.state.outfitList}
          currentProductId={this.state.currentProductId}
          changeCurrentProductId={this.props.changeCurrentProductId}
          addToOutfit={this.addToOutfit}
          deleteOutfit={this.deleteOutfit}
        />

      </div>
    );
  }
}

// class RelatedComponent extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentProductInfo: null,
//       relatedProducts: [],
//       outfitList:[null, 71709, 71698, 71699, 71702]
//     };
//     this.addToOutfit = this.addToOutfit.bind(this);
//     this.deleteOutfit = this.deleteOutfit.bind(this);
//   }
//   addToOutfit (id) {
//     if (!this.state.outfitList.includes(id)) {
//       this.setState({
//         outfitList: [...this.state.outfitList, id]
//       });
//     }
//   }
//   deleteOutfit (id) {
//     this.setState({
//       outfitList: this.state.outfitList.filter((item) => item !== id)
//     });
//   }
//   componentDidMount () {
//     getRelatedProducts(this.props.currentProductId, (data) => {
//       this.setState({
//         relatedProducts: data
//       })
//     })
//     getOneProduct(this.props.currentProductId, (data) => {this.setState({currentProductInfo: data})})
//   }
//   componentDidUpdate (prevProps) {
//     if (prevProps.currentProductId !== this.props.currentProductId) {
//       getRelatedProducts(this.props.currentProductId, (data) => {
//         this.setState({
//           relatedProducts: data
//         })
//       })
//       getOneProduct(this.props.currentProductId, (data) => {this.setState({currentProductInfo: data})})
//     }
//   }
//   render () {
//     return (
//       <div className='exceptOverview'>

//         <p className='list' >RELATED PRODUCT</p>
//         <SimpleCarousel
//           relatedProducts={this.state.relatedProducts}
//           currentProductId={this.props.currentProductId}
//           currentProductInfo={this.state.currentProductInfo}
//           changeCurrentProductId={this.props.changeCurrentProductId}
//           addToOutfit={this.addToOutfit}
//           deleteOutfit={this.deleteOutfit}
//         />

//         <p className='list'>YOUR OUTFIT</p>
//         <SimpleCarousel
//           relatedProducts={this.state.outfitList}
//           currentProductId={this.props.currentProductId}
//           currentProductInfo={this.state.currentProductInfo}
//           changeCurrentProductId={this.props.changeCurrentProductId}
//           addToOutfit={this.addToOutfit}
//           deleteOutfit={this.deleteOutfit}
//         />

//       </div>
//     );
//   }
// }

export default RelatedComponent;