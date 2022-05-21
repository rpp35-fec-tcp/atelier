import React from 'react';
import './Review.css'

const Review = ({ review }) => {
  return (
    <div className='review'>
      <div>{review.rating}</div>
      <div>{review.reviewer_name}</div>
      <div>{review.date}</div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      {/* <div>{review.photos}</div> */}
      <div>{review.recommend}</div>
      <div>{review.response}</div>
      {/* <div>{review.review_id}</div> */}
      <div>{review.helpfulness}</div>
      <hr></hr>
    </div>
  )
};

export default Review;
