import React from 'react';
import ReviewsBody from './ReviewsBody.jsx';
import ReviewsHeader from './ReviewsHeader.jsx';
import './Reviews.css'

const Reviews = (props) => (
  <div className='reviews'>
    <ReviewsHeader />
    <ReviewsBody productId={props.currentProductId}/>
  </div>
);

export default Reviews;
