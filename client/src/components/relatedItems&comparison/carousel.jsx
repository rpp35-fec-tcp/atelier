import Carousel from 'react-multi-carousel';
import React from 'react';
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

const SimpleCarousel = ({relatedProducts, currentProductId, currentProductInfo, changeCurrentProductId, addToOutfit}) => {
  //console.log(relatedProducts)
  return (
    <Carousel
      ssr
      partialVisibile={true}
      itemClass="image-item"
      autoPlay={false}
      responsive={responsive}
      showArrows={true}
    >
      {(relatedProducts[0] === null) && (relatedProducts = relatedProducts.slice(1)) && <div><AddToOutfit id={currentProductId} key = {currentProductId}  addToOutfit={addToOutfit} draggable={false}/></div>}
      {(relatedProducts[0] !== null) && relatedProducts.map(productId => (
        <div>
          <Card
            id={productId}
            key={productId}
            draggable={false}
            style={{ width: "100%", height: "100%"}}
            currentProductInfo={currentProductInfo}
            changeCurrentProductId={changeCurrentProductId}
          />
        </div>
      ))}
      {/* {(relatedProducts[0] === null) && relatedProducts.map(productId => {
        <AddToOutfit
          id={productId || 0}
          key={productId || 0}
          addToOutfit={addToOutfit}
          draggable={false}
          style={{ width: "100%", height: "100%"}}
        />
      })} */}
    </Carousel>
  );
};

export default SimpleCarousel;



