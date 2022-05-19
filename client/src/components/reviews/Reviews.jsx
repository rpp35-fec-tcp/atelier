import React from 'react';
import { getReviews } from '../../../../helpers/reviews.js';
import Review from './Review.jsx';
import './Reviews.css'

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
        this.setState({
          reviewCount: data.results.length,
          reviews: data.results,
        });
      })
  }

  render() {
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
            {this.state.reviews.slice(0, this.state.displayed).map((review) => {
              return <Review review={review} key={review.review_id}/>
            })}
            {this.state.reviewCount > 2 ? <button>MORE REVIEWS</button> : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Reviews;