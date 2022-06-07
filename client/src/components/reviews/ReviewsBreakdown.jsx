import axios from 'axios';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductBreakdown from './ProductBreakdown';
import RatingsBreakdown from './RatingsBreakdown';
import RatingsSummary from './RatingsSummary';
import './ReviewsBreakdown.css';

function ReviewsBreakdown({ productId }) {
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});

  const fetchData = async (id) => {
    const { data } = await axios.get(
      '/reviews/meta',
      { params: { product_id: id } },
    );
    setCharacteristics(data.characteristics);
    setRatings(data.ratings);
    setRecommended(data.recommended);
  };

  useEffect(() => { fetchData(productId); }, [productId]);

  return (
    Object.values(ratings).length
      ? (
        <div className="reviews-breakdown">
          <RatingsSummary ratings={ratings} recommended={recommended} />
          <RatingsBreakdown ratings={ratings} />
          <ProductBreakdown characteristics={characteristics} />
        </div>
      )
      : <div className="reviews-breakdown" />
  );
}

ReviewsBreakdown.defaultProps = { productId: null };
ReviewsBreakdown.propTypes = { productId: propTypes.number };

export default ReviewsBreakdown;
