import React from 'react';
import RatingBar from './RatingBar';
import './RatingBreakdown.css';

const RatingBreakdown = (props) => {
  const maxCount = Object.values(props.ratings).reduce((maxCount, count) => (
    Math.max(Number(maxCount), Number(count))
  ), 1);

  return (
    <div className='rating-breakdown'>
      {['5', '4', '3', '2', '1'].map((rating) => (
          <div className='rating' key={rating}>
            <div>{rating} stars</div>
            <RatingBar count={props.ratings[rating] || 0} maxCount={maxCount}/>
          </div>
      ))}
    </div>
  )
};

export default RatingBreakdown;
