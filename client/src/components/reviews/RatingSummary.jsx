import React from 'react';
import StarRatings from './StarRatings.jsx';
import './RatingSummary.css';

const RatingSummary = (props) => {
  const getAverageRating = (ratings) => {
    let ratingCount = 0;
    let sumRating = 0;
    for (let [rating, count] of Object.entries(ratings)) {
      ratingCount += Number(count)
      sumRating += Number(rating) * Number(count);
    }

    return sumRating / (ratingCount || 1);
  };

  const getProportionPositive = (
    { 'true': positive = '0', 'false': negative = '1'}
    ) => Number(positive) / (Number(positive) + Number(negative));

  const averageRating = getAverageRating(props.ratings);
  const proportionPositive = getProportionPositive(props.recommended);

  return (
    <div className='rating-summary'>
      <div className='average-rating'>{averageRating.toFixed(1)}</div>
      <StarRatings rating={averageRating} numberOfStars={5} />
      <div className='percent-recommend'>
        {Math.trunc(proportionPositive * 100)}&#37; of reviews recommend this product
      </div>
    </div>
  );
};

export default RatingSummary;
