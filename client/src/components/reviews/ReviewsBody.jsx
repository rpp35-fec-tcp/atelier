import React from 'react';
import ReviewsBreakdown from './ReviewsBreakdown';
import ReviewsList from './ReviewsList';
import './ReviewsBody.css';

const ReviewsBody = (props) => (
  <div className='reviews-body'>
    <ReviewsBreakdown productId={props.productId}/>
    <ReviewsList productId={props.productId}/>
  </div>
);

export default ReviewsBody;
