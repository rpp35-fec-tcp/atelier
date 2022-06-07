import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductInfo(props) {
  const price = () => {
    if (props.styles[0]?.sale_price) {
      return (
        <div id='productPrice'>
          <s>${props.styles[0].original_price}</s>
          <p>${props.styles[0].sale_price}</p>
        </div>
      );
    } else if (props.styles[0]?.original_price) {
      return (
        <div id='productPrice'>
          {console.log('props styles: ', props.styles[0])}
          <p>Price: {props.styles[0].original_price}</p>
        </div>
      );
    }
  };

  const rating = () => {
    return (
      <Stack spacing={1}>
        <Rating
          name='half-rating-read'
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
    );
  };

  return (
    <div className='POProductInfoContainer'>
      {rating()}
      <div>Ratings: {props.ratings}</div>
      <div>Read All {props.reviewsCount} Reviews</div>
      <div className='POProductCategory'>
        <p>{props.productInfo.category}</p>
      </div>
      <div className='POProductTitle'>
        <h2>{props.productInfo.name}</h2>
      </div>
      {price()}
    </div>
  );
}

export default ProductInfo;
