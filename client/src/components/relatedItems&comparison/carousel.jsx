
import Carousel from 'react-multi-carousel';
// import { Image } from 'semantic-ui-react';
import React from 'react';
// import './related.css';
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

const SimpleCarousel = ({relatedProducts, currentProductInfo}) => {

  return (
    <Carousel
      ssr
      partialVisibile={true}
      itemClass="image-item"
      autoPlay={false}
      responsive={responsive}
    >
      {relatedProducts.map(product => {
        return (
          <Card
            id={product}
            key={product}
            draggable={false}
            style={{ width: "100%", height: "100%"}}
            currentProductInfo={currentProductInfo}
          />
        );
      })}
    </Carousel>
  );
};

export default SimpleCarousel;



//bootstrap
// const Carousel = () => {
//   return (
//   <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
//     <div className="carousel-inner">

//         <div className="carousel-item active">
//             <div className="card">
//                 <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..." /></div>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title 1</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                         card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <div className="card">
//                 <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..." /></div>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title 2</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                         card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <div className="card">
//                 <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..." /></div>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title 9</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                         card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//     </button>
//   </div>
//   );
// }

// export default Carousel;
