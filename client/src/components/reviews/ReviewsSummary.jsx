import PropTypes from 'prop-types';
import React from 'react';
import './ReviewsSummary.css';

function ReviewsSummary({ reviewCount }) {
  return (
    <div className="reviews-summary">
      <span>{`${reviewCount} reviews, sorted by `}</span>
      <select name="sort">
        <option value="relevant">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}

ReviewsSummary.defaultProps = { reviewCount: 0 };
ReviewsSummary.propTypes = { reviewCount: PropTypes.number };

export default ReviewsSummary;
