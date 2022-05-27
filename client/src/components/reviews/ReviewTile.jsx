import axios from 'axios';
import moment from 'moment';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import StarRatings from './StarRatings';
import './ReviewTile.css';

function ReviewTile({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  const [helpfulnessClicked, setHelpfulnessClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const handleHelpfulClick = async () => {
    try {
      await axios.put(
        `/reviews/${review.review_id}/helpful`,
      );
      setHelpfulness(helpfulness + 1);
      setHelpfulnessClicked(true);
    } catch ({ response }) {
      console.error(response.data);
    }
  };

  const handleReportClick = async () => {
    try {
      await axios.put(
        `/reviews/${review.review_id}/report`,
      );
      setReportClicked(true);
    } catch ({ response }) {
      console.error(response.data);
    }
  };

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
              <img
                alt="clothing"
                className="review-img"
                key={photo.id}
                src={photo.url}
              />
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
        Helpful?
        <button
          disabled={helpfulnessClicked}
          onClick={handleHelpfulClick}
          type="button"
        >
          Yes
        </button>
        {`(${helpfulness})`}
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          disabled={reportClicked}
          onClick={handleReportClick}
          type="button"
        >
          {reportClicked ? 'Reported' : 'Report'}
        </button>
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
