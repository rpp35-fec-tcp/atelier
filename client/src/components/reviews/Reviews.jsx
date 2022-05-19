import React from 'react';
import { getReviews } from '../../../../helpers/reviews.js';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    getReviews()
    // getReviews(this.props.currentProductId)
      .then(({ data }) => {
        this.setState({ reviews: data.results });
      })
  }

  render() {
    return (
      <div>
        <h1>Ratings & Reviews</h1>
        {this.state.reviews.map((review) => {
          return <Review review={review} key={review.review_id}/>
        })}
      </div>
    );
  }
};

export default Reviews;