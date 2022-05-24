import React from 'react';

const ProductDescription = (props) => {
  return (
    <div className='POProductDescription'>
      <h3>{props.productInfo.slogan}</h3>
      <p>{props.productInfo.description}</p>
    </div>
  );
};

export default ProductDescription;
