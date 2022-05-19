import Carousel from 'react-multi-carousel';
import React from 'react';
import Card from './card.jsx';

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

const SimpleCarousel = ({relatedProducts, currentProductInfo, changeCurrentProductId}) => {

  return (
    <Carousel
      ssr
      partialVisibile={true}
      itemClass="image-item"
      autoPlay={false}
      responsive={responsive}
    >
      {relatedProducts.map(productId => {
        return (
          <Card
            id={productId}
            key={productId}
            draggable={false}
            style={{ width: "100%", height: "100%"}}
            currentProductInfo={currentProductInfo}
            changeCurrentProductId={changeCurrentProductId}
          />
        );
      })}
    </Carousel>
  );
};

export default SimpleCarousel;



