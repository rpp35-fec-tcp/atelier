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
      </div>
    );
  }
};

export default Reviews;