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
          showArrows={true}
        >
          {relatedProducts.map(productId => (
            <div>
              <Card
                id={productId}
                key={productId}
                draggable={false}
                style={{ width: "100%", height: "100%"}}
                currentProductInfo={currentProductInfo}
                changeCurrentProductId={changeCurrentProductId}
                type='related'
                deleteOutfit={deleteOutfit}
              />
            </div>
          ))}
      </Carousel>
      }

      {(relatedProducts[0] === null) &&
        <Carousel
          ssr
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
          showArrows={true}
        >
          {(relatedProducts = relatedProducts.slice(1)) && <div><AddToOutfit id={currentProductId} key = {currentProductId}  addToOutfit={addToOutfit} draggable={false}/></div>}
          {relatedProducts.map(productId => (
            <div>
              <Card
                id={productId || 0}
                key={productId || 0}
                addToOutfit={addToOutfit}
                draggable={false}
                style={{ width: "100%", height: "100%"}}
                currentProductInfo={currentProductInfo}
                changeCurrentProductId={changeCurrentProductId}
                type='outfit'
                deleteOutfit={deleteOutfit}
              />
            </div>
          ))}
      </Carousel>
      }
    </div>
  );
};

export default SimpleCarousel;



