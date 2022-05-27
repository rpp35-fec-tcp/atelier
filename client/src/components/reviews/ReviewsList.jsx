import axios from 'axios';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReviewsSummary from './ReviewsSummary';
import ReviewTile from './ReviewTile';
import './ReviewsList.css';

function ReviewsList({ productId }) {
  const [displayCount, setDisplayCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchData = async (product_id, sort = 'relevant') => {
    const { data } = await axios.get(
      '/reviews',
      { params: { product_id, sort } },
    );
    setReviewCount(data.length);
    setReviews(data);
  };

  const handleMoreReviewsClick = () => {
    setDisplayCount(Math.min(displayCount + 2, reviewCount));
  };

  const handleSortChange = (e) => {
    fetchData(productId, e.target.value);
  };

  useEffect(() => { fetchData(productId); }, [productId]);

  return (
    <div className="reviews-list">
      {reviewCount
        ? (
          <ReviewsSummary
            handleSortChange={handleSortChange}
            reviewCount={reviewCount}
          />
        )
        : null}
      {reviews.slice(0, displayCount).map((review) => (
        <ReviewTile key={review.review_id} review={review} />
      ))}
      <div className="reviews-buttons">
        {(reviewCount > 2) && (displayCount < reviewCount)
          ? (
            <button onClick={handleMoreReviewsClick} type="button">
              <b>MORE REVIEWS</b>
            </button>
          )
          : null}
        <button type="button">
          <b>ADD A REVIEW&nbsp;&nbsp;&#65291;</b>
        </button>
      </div>
    </div>
  );
}

ReviewsList.defaultProps = { productId: null };
ReviewsList.propTypes = { productId: propTypes.number };

export default ReviewsList;
