import React from 'react';
import './RatingBar';

const RatingBar = (props) => (
  <div className='rating-bar'>{props.count / props.maxCount}</div>
);

export default RatingBar;
