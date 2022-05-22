import React from 'react';
import './StarRatings.css';

const StarRatings = (props) => (
  <div className='star-ratings'>
    {props.rating.toFixed(2)} stars out of {props.numberOfStars}
  </div>
);

export default StarRatings;
