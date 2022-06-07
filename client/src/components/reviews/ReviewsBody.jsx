import propTypes from 'prop-types';
import React from 'react';
import ReviewsBreakdown from './ReviewsBreakdown';
import ReviewsList from './ReviewsList';
import './ReviewsBody.css';

function ReviewsBody({ productId }) {
  return (
    <div className="reviews-body">
      <ReviewsBreakdown productId={productId} />
      <ReviewsList productId={productId} />
    </div>
  );
}

ReviewsBody.defaultProps = { productId: null };
ReviewsBody.propTypes = { productId: propTypes.number };

export default ReviewsBody;
