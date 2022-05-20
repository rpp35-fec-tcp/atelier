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

  const handleButtonClick = () => {
    setDisplayed(Math.min(displayed + 2, reviewCount));
  };

  useEffect(() => {
    fetchData(props.currentProductId);
  }, [props.currentProductId]);

  return (
    <div className='reviews'>
      <div className='reviews header'>
        <p>RATINGS & REVIEWS</p>
      </div>
      <div className='reviews row'>
        <div className='reviews column left'>
          &lt;left-column&gt;
        </div>
        <div className='reviews column right'>
          {reviews.slice(0, displayed).map((review) => {
            return <Review review={review} key={review.review_id}/>
          })}
          {
            (reviewCount > 2) && (displayed < reviewCount)
            ? <button onClick={handleButtonClick}><b>MORE REVIEWS</b></button>
            : null
          }
          <button><b>ADD A REVIEW&nbsp;&nbsp;&#65291;</b></button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;