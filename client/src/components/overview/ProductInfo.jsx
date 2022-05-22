import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductInformation(props) {
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
    <div>
      <h4>Product Information</h4>
      <div>Ratings: {props.ratings}</div>
      <div>Read All {props.reviewsCount} Reviews</div>
      {rating()}
    </div>
  );
}

export default ProductInformation;
