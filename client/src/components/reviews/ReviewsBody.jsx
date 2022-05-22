import React from 'react';
import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import './ReviewsBody.css';

const ReviewsBody = (props) => (
  <div className='reviews-body'>
    <ReviewsBreakdown productId={props.productId}/>
    <ReviewsList productId={props.productId}/>
  </div>
);

export default ReviewsBody;
