import propTypes from 'prop-types';
import React from 'react';
import ReviewsBody from './ReviewsBody';
import ReviewsHeader from './ReviewsHeader';
import './Reviews.css';

function Reviews({ currentProductId }) {
  return (
    <div className="reviews">
      <ReviewsHeader />
      <ReviewsBody productId={currentProductId} />
    </div>
  );
}

Reviews.defaultProps = { currentProductId: null };
Reviews.propTypes = { currentProductId: propTypes.number };

export default Reviews;
