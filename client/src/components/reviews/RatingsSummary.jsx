import propTypes from 'prop-types';
import React from 'react';
import StarRatings from './StarRatings';
import './RatingsSummary.css';

function RatingsSummary({ ratings, recommended }) {
  const getAverageRating = (ratingsObj) => {
    let ratingCount = 0;
    let sumRating = 0;
    Object.entries(ratingsObj).forEach(([rating, count]) => {
      ratingCount += Number(count);
      sumRating += Number(rating) * Number(count);
    });

    return sumRating / (ratingCount || 1);
  };

  const getProportionPositive = ({
    false: negative = '1',
    true: positive = '0',
  }) => Number(positive) / (Number(positive) + Number(negative));

  const averageRating = getAverageRating(ratings);
  const percentPositive = getProportionPositive(recommended) * 100;

  return (
    <div className="ratings-summary">
      <div className="average-rating">{averageRating.toFixed(1)}</div>
      <StarRatings rating={averageRating} />
      <div className="percent-recommend">
        {`${Math.trunc(percentPositive)}% of reviews recommend this product`}
      </div>
    </div>
  );
}

RatingsSummary.defaultProps = {
  ratings: {},
  recommended: {},
};

RatingsSummary.propTypes = {
  ratings: propTypes.shape({}),
  recommended: propTypes.shape({}),
};

export default RatingsSummary;
