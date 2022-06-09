import PropTypes from 'prop-types';
import React from 'react';
import './ReviewsSummary.css';

function ReviewsSummary({ handleSortChange, reviewCount }) {
  return (
    <div className="reviews-summary" onChange={handleSortChange}>
      <span>{`${reviewCount} reviews, sorted by `}</span>
      <select name="sort">
        <option value="relevant">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}

ReviewsSummary.defaultProps = {
  reviewCount: 0,
};
ReviewsSummary.propTypes = {
  handleSortChange: PropTypes.func.isRequired,
  reviewCount: PropTypes.number,
};

export default ReviewsSummary;
