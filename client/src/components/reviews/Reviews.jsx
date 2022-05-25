import React from 'react';
import ReviewsBody from './ReviewsBody';
import ReviewsHeader from './ReviewsHeader';
import './Reviews.css'

const Reviews = (props) => (
  <div className='reviews'>
    <ReviewsHeader />
    <ReviewsBody productId={props.currentProductId}/>
  </div>
);

export default Reviews;
