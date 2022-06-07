import React from 'react';

const ProductDescription = (props) => {
  return (
    <div className='product-description'>
      <h3>{props.productInfo.slogan}</h3>
      <p>{props.productInfo.description}</p>
    </div>
  );
};

export default ProductDescription;
