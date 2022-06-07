import PropTypes from 'prop-types';
import React from 'react';
import './StarRatings.css';

function StarRatings({ numberOfStars, precision, rating }) {
  const roundToNearestQuarter = (value) => (
    Math.trunc(value) + Math.round((value % 1) / precision) * precision
  );

  const ratingPercent = (roundToNearestQuarter(rating) / numberOfStars) * 100;

  return (
    <div className="star-ratings">
      <div
        className="stars-empty"
        data-content={'\u2606'.repeat(numberOfStars)}
      >
        <div
          className="stars-filled"
          data-content={'\u2605'.repeat(numberOfStars)}
          style={{ width: `${ratingPercent}%` }}
        />
      </div>
    </div>
  );
}

StarRatings.defaultProps = {
  numberOfStars: 5,
  precision: 0.25,
  rating: null,
};

StarRatings.propTypes = {
  numberOfStars: PropTypes.number,
  precision: PropTypes.number,
  rating: PropTypes.number,
};

export default StarRatings;
