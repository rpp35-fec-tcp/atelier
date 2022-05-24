import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductBreakdown from './ProductBreakdown';
import RatingBreakdown from './RatingBreakdown';
import RatingSummary from './RatingSummary';
import './ReviewsBreakdown.css';

const ReviewsBreakdown = (props) => {
  const [characteristics, setCharacteristics] = useState({})
  const [ratings, setRatings] = useState({})
  const [recommended, setRecommended] = useState({})

  const fetchData = async(product_id) => {
    const { data } = await axios.get(
      '/reviews/meta',
      { params: { product_id } }
    );
    setCharacteristics(data.characteristics);
    setRatings(data.ratings);
    setRecommended(data.recommended);
  };

  useEffect(() => {fetchData(props.productId)}, [props.productId]);

  return (
    Object.values(ratings).length
    ? <div className='reviews-breakdown'>
        <RatingSummary ratings={ratings} recommended={recommended}/>
        <RatingBreakdown ratings={ratings}/>
        <ProductBreakdown characteristics={characteristics}/>
      </div>
    : <div className='reviews-breakdown'/>
  )
};

export default ReviewsBreakdown;
