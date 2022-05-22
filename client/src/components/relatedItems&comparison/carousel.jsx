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
          ssr
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
                deleteOutfit={deleteOutfit}
                draggable={false}
                style={{ width: "100%", height: "100%"}}
              />
            </div>
          ))}
      </Carousel>
      }

      {(outfit[0] === null) &&
        <Carousel
          ssr
          partialVisibile={true}
          itemClass="image-item"
          autoPlay={false}
          responsive={responsive}
          extraData={outfit}
        >
          {(products = outfit.slice(1)) && <div><AddToOutfit id={currentProductId} key = {currentProductId}  addToOutfit={addToOutfit} draggable={false}/></div>}
          {products.map(productId => (
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
          ))}
      </Carousel>
      }
    </div>
  );
};

export default SimpleCarousel;



