import React, { useEffect, useCallback, useState } from 'react';
import Review from './Review.jsx';
import './Reviews.css'

const Reviews = (props) => {
  const [displayed, setDisplayed] = useState(2);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchData = useCallback(
    async(product_id) => {
      const response = await fetch(`/reviews/?product_id=${product_id}`);
      const results = await response.json();
      setReviewCount(results.length);
      setReviews(results);
    },
    []
  );

  useEffect(() => {
    fetchData(props.currentProductId);
  }, [props.currentProductId]);

  return (
    <div className='reviews'>
      <div className='reviews header'>
        <h6>RATINGS & REVIEWS</h6>
      </div>
      <div className='reviews row'>
        <div className='reviews column left'>
          &lt;left-column&gt;
        </div>
        <div className='reviews column right'>
          {reviews.slice(0, displayed).map((review) => {
            return <Review review={review} key={review.review_id}/>
          })}
          {reviewCount > 2 ? <button>MORE REVIEWS</button> : null}
        </div>
      </div>
    </div>
  );
};

export default Reviews;