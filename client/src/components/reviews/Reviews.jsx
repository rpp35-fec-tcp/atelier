import React from 'react';
import Review from './Review.jsx';
import './Reviews.css'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: 2,
      reviewCount: 0,
      reviews: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(product_id) {
    fetch(`/reviews/?product_id=${product_id}`)
    .then((response) => response.json())
    .then((results) => {
      this.setState({
        reviewCount: results.length,
        reviews: results,
      });
    })
  }

  componentDidMount() {
    this.fetchData(this.props.currentProductId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      this.fetchData(this.props.currentProductId);
    }
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