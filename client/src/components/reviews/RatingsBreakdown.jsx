import propTypes from 'prop-types';
import React from 'react';
import RatingBar from './RatingBar';
import './RatingsBreakdown.css';

function RatingsBreakdown({ ratings }) {
  const maxCount = Object.values(ratings).reduce((maxCountSoFar, count) => (
    Math.max(Number(maxCountSoFar), Number(count))
  ), 1);

  return (
    <div className="ratings-breakdown">
      {['5', '4', '3', '2', '1'].map((rating) => (
        <div className="rating" key={rating}>
          <div>{`${rating} stars`}</div>
          <RatingBar count={Number(ratings[rating]) || 0} maxCount={maxCount} />
        </div>
      ))}
    </div>
  );
}

RatingsBreakdown.defaultProps = { ratings: {} };
RatingsBreakdown.propTypes = { ratings: propTypes.shape({}) };

export default RatingsBreakdown;
