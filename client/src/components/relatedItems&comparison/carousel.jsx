import Carousel from 'react-multi-carousel';
import React from 'react';
import Card from './card';
import AddToOutfit from './addToOutfit';

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
    paritialVisibilityGutter: 30,
  },
};

const SimpleCarousel = ({relatedProducts, currentProductId, currentProductInfo, changeCurrentProductId, addToOutfit, deleteOutfit}) => {
  return (
    <div>
      {(relatedProducts[0] !== null) &&
        <Carousel
          ssr
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
        >
          {relatedProducts.map(productInfo => (
            <div key={productInfo.id}>
              <Card
                productInfo={productInfo}
                changeCurrentProductId={changeCurrentProductId}
                currentProductInfo={currentProductInfo}
                type='related'
                draggable={false}
                style={{ width: "100%", height: "100%"}}
              />
            </div>
          ))}
      </Carousel>
      }

      {(relatedProducts[0] === null) &&
        <Carousel
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
          renderArrowsWhenDisabled={false}
        >
          {relatedProducts.map(productInfo => (
            (productInfo === null ?
              <div key={currentProductId}><AddToOutfit id={currentProductId} addToOutfit={addToOutfit} draggable={false}/></div>
               :
              <div key={productInfo.id}>
                <Card
                  productInfo={productInfo}
                  addToOutfit={addToOutfit}
                  changeCurrentProductId={changeCurrentProductId}
                  currentProductInfo={currentProductInfo}
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

