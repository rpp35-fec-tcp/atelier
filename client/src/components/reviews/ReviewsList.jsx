import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewTile from './ReviewTile';
import ReviewsSummary from './ReviewsSummary';
import './ReviewsList.css';

const ReviewsList = (props) => {
  const [displayCount, setDisplayCount] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchData = async(product_id) => {
    const { data } = await axios.get(
      '/reviews',
      { params: { product_id } }
    );
    setReviewCount(data.length);
    setReviews(data);
  };

  const handleButtonClick = () => {
    setDisplayCount(Math.min(displayCount + 2, reviewCount));
  };

  useEffect(() => {fetchData(props.productId)}, [props.productId]);

  return (
    <div className='reviews-list'>
      {reviewCount ? <ReviewsSummary reviewCount={reviewCount} /> : null}
      {reviews.slice(0, displayCount).map((review) => (
        <ReviewTile key={review.review_id} review={review}/>
      ))}
      <div className='reviews-buttons'>
        {(reviewCount > 2) && (displayCount < reviewCount)
          ? <button onClick={handleButtonClick}>
              <b>MORE REVIEWS</b>
            </button>
          : null}
        <button>
          <b>ADD A REVIEW&nbsp;&nbsp;&#65291;</b>
        </button>
      </div>
    </div>
  );
};

export default ReviewsList;
