import React from 'react';
import './ReviewsSummary.css';

const ReviewsSummary = (props) => (
  <div className='reviews-summary'>
    <span>{props.reviewCount} reviews, sorted by </span>
    <select name='sort'>
      <option value='relevant'>relevance</option>
      <option value='helpful'>helpfulness</option>
      <option value='newest'>newest</option>
    </select>
  </div>
);

export default ReviewsSummary;
