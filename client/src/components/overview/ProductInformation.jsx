import React from 'react';

function ProductInformation(props) {
  return (
    <div>
      <h4>Product Information</h4>
      <div>Ratings: {props.ratings}</div>
      <div>Read All {props.reviewsCount} Reviews</div>
      <div>Category: {props.productInfo.category}</div>
    </div>
  );
}

export default ProductInformation;
