import Carousel from 'react-multi-carousel';
import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
import AddToOutfit from './addToOutfit.jsx';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
    paritialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    paritialVisibilityGutter: 30
  }
};

const SimpleCarousel = ({relatedProducts, currentProductId, changeCurrentProductId, addToOutfit, deleteOutfit}) => {
  const [outfit, setOutfit] = useState(relatedProducts);
  var products;
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setOutfit(relatedProducts);
  });
  return (
    <div>
      {(outfit[0] !== null) &&
        <Carousel
          //ssr
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
        >
          {outfit.map(productId => (
            <div>
              <Card
                id={productId}
                key={productId}
                changeCurrentProductId={changeCurrentProductId}
                currentProductId={currentProductId}
                type='related'
                // deleteOutfit={deleteOutfit}
                draggable={false}
                style={{ width: "100%", height: "100%"}}
              />
            </div>
          ))}
      </Carousel>
      }

      {(outfit[0] === null) &&
        <Carousel
          //ssr
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
          arrows={true}
          renderArrowsWhenDisabled={false}
          // extraData={outfit}
          // arrows={true}
        >
          {/* {(products = outfit.slice(1)) && <div><AddToOutfit id={currentProductId} key = {currentProductId}  addToOutfit={addToOutfit} draggable={false}/></div>} */}
          {outfit.map(productId => (
            (productId === null ?
              <div><AddToOutfit id={currentProductId} key = {currentProductId}  addToOutfit={addToOutfit} draggable={false}/></div>
               :
              <div>
                <Card
                  id={productId}
                  key={productId}
                  addToOutfit={addToOutfit}
                  changeCurrentProductId={changeCurrentProductId}
                  currentProductId={currentProductId}
                  type='outfit'
                  deleteOutfit={deleteOutfit}
                  draggable={false}
                  style={{ width: "100%", height: "100%"}}
                />
              </div>
          )))}
      </Carousel>
      }
    </div>
  );
};

export default SimpleCarousel;


// import {Carousel} from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import React, { useState, useEffect, Component } from 'react';
// import Card from './card.jsx';
// import AddToOutfit from './addToOutfit.jsx';

// //relatedProducts, currentProductId, changeCurrentProductId, addToOutfit, deleteOutfit
// class SimpleCarousel extends Component {
//   constructor (props) {
//     super(props);
//     this.products;
//   }
//   // const [outfit, setOutfit] = useState(relatedProducts);
//   // var products;
//   // // Similar to componentDidMount and componentDidUpdate:
//   // useEffect(() => {
//   //   setOutfit(relatedProducts);
//   // });
//   render() {
//     return (
//       <div>
//         {(this.props.relatedProducts[0] !== null) &&
//           <Carousel
//             centerMode
//             centerSlidePercentage='33.33%'
//             autoPlay={false}
//             thumbWidth='30'
//           >
//             {this.props.relatedProducts.map(productId => (
//               <div>
//                 <Card
//                   id={productId}
//                   key={productId}
//                   changeCurrentProductId={this.props.changeCurrentProductId}
//                   currentProductId={this.props.currentProductId}
//                   type='related'
//                   deleteOutfit={this.props.deleteOutfit}
//                   draggable={false}
//                   //style={{ width: "100%", height: "100%"}}
//                 />
//               </div>
//             ))}
//         </Carousel>
//         }

//         {(this.props.relatedProducts[0] === null) &&
//           <Carousel
//             centerMode={true}
//             centerSlidePercentage='33.33%'
//             autoPlay={false}
//             // extraData={outfit}
//           >
//             {(this.products = this.props.relatedProducts.slice(1)) && <div><AddToOutfit id={this.props.currentProductId} key = {this.props.currentProductId}  addToOutfit={this.props.addToOutfit} draggable={false}/></div>}
//             {this.products.map(productId => (
//               <div>
//                 <Card
//                   id={productId}
//                   key={productId}
//                   addToOutfit={this.props.addToOutfit}
//                   changeCurrentProductId={this.props.changeCurrentProductId}
//                   currentProductId={this.props.currentProductId}
//                   type='outfit'
//                   deleteOutfit={this.props.deleteOutfit}
//                   draggable={false}
//                   style={{ width: "100%", height: "100%"}}
//                 />
//               </div>
//             ))}
//         </Carousel>
//         }
//       </div>
//     );
//   }
// };

// export default SimpleCarousel;





