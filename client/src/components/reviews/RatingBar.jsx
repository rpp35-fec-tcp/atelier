import propTypes from 'prop-types';
import React from 'react';
import './RatingBar.css';

function RatingBar({ count, maxCount }) {
  return <progress className="rating-bar" max={maxCount} value={count} />;
}

RatingBar.defaultProps = {
  count: 0,
  maxCount: 1,
};

RatingBar.propTypes = {
  count: propTypes.number,
  maxCount: propTypes.number,
};

export default RatingBar;
