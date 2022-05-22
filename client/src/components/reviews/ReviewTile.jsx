import moment from 'moment';
import React from 'react';
import StarRatings from './StarRatings.jsx';
import './ReviewTile.css'

const ReviewTile = ({ review }) => {
  return (
    <div className='review-tile'>
      <StarRatings rating={review.rating} numberOfStars={5}/>
      <div className='review-name-date'>
        {review.reviewer_name}, {moment(review.date).format('MMMM D, YYYY')}
      </div>
      <div className='review-summary'>{review.summary}</div>
      <div className='review-body'>{review.body}</div>
      {/* <div>{review.photos}</div> */}
      {review.recommend
        ? <div className='review-recommend'>
            &#10003; I recommend this product
          </div>
        : null}
      {review.response
        ? <div className='review-response'>
            <p><b>Response:</b></p>
            <p>{review.response}</p>
          </div>
        : null}
      <div className='review-helpfulness'>
        Helpful?&nbsp;&nbsp;Yes ({review.helpfulness})&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Report
      </div>
      <hr className='hr'></hr>
    </div>
  )
};

export default ReviewTile;
