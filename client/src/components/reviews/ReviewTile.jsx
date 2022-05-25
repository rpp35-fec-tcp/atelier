import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';
import StarRatings from './StarRatings';
import './ReviewTile.css';

function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      <StarRatings rating={review.rating} />
      <div className="review-name-date">
        {`${review.reviewer_name}, ${moment(review.date).format('MMMM D, YYYY')}`}
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      {review.photos.length
        ? (
          <div className="review-photo">
            {review.photos.map((photo) => (
              <img alt="clothing" key={photo.id} src={photo.url} />
            ))}
          </div>
        )
        : null}
      {review.recommend
        ? (
          <div className="review-recommend">
            &#10003; I recommend this product
          </div>
        )
        : null}
      {review.response
        ? (
          <div className="review-response">
            <p><b>Response:</b></p>
            <p>{review.response}</p>
          </div>
        )
        : null}
      <div className="review-helpfulness">
        {`Helpful?  Yes (${review.helpfulness})\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0Report`}
      </div>
      <hr className="hr" />
    </div>
  );
}

ReviewTile.defaultProps = {
  review: {},
};
ReviewTile.propTypes = {
  review: propTypes.shape({
    body: propTypes.string,
    date: propTypes.string,
    helpfulness: propTypes.number,
    photos: propTypes.arrayOf(propTypes.shape({})),
    rating: propTypes.number,
    recommend: propTypes.bool,
    response: propTypes.string,
    reviewer_name: propTypes.string,
    summary: propTypes.string,
  }),
};

export default ReviewTile;
