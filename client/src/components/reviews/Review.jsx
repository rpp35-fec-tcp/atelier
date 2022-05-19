import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <div>{review.body}</div>
      <div>{review.date}</div>
      <div>{review.helpfulness}</div>
      <div>{review.photos}</div>
      <div>{review.rating}</div>
      <div>{review.recommend}</div>
      <div>{review.response}</div>
      <div>{review.review_id}</div>
      <div>{review.reviewer_name}</div>
      <div>{review.summary}</div>
    </div>
  )
};

export default Review;
