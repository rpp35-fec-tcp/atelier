/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import { getOneProduct, getOneProductStyle, getReviews } from './getAndPost';
import calculateRating from './calculateRating';
import StarRating from './starRating';
import Price from './price';
import Compare from './compare';
import Interaction from './interactions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparedProducInfo: null,
      defaultItem: null,
      reviewRating: 0,
      show: false,
    };
    this.starClicked = false;
    this.changeShow = this.changeShow.bind(this);
    this.cardClicked = this.cardClicked.bind(this);
  }

  componentDidMount() {
    this.update();
    getReviews(this.props.id, (data) => {
      this.setState({
        reviewRating: calculateRating(data.ratings),
      });
    });
  }

  getDefaultItem(results) {
    let defaultItem = results.filter((result) => result['default?']);
    defaultItem = defaultItem.length === 0 ? results[0] : defaultItem[0];
    this.setState({
      defaultItem,
    });
  }

  update() {
    getOneProduct(this.props.id, (data) => {
      this.setState({
        comparedProducInfo: data,
      });
    });
    getOneProductStyle(this.props.id, (data) => {
      this.getDefaultItem(data.results);
    });
  }

  changeShow() {
    this.setState({ show: false });
  }

  cardClicked(e) {
    if (this.starClicked === false) {
      this.props.changeCurrentProductId(this.state.comparedProducInfo.id);
      Interaction(e, 'related');
    } else {
      this.starClicked = false;
    }
  }

  render() {
    return (
      <div>
        <div className="card" role="button" tabIndex="0" onClick={(e) => this.cardClicked(e)}>
          {this.state.defaultItem !== null && <div className="image-holder"><img src={this.state.defaultItem.photos[0].thumbnail_url} element="changeCardClicked" className='card-image' alt={this.state.defaultItem.name}/></div>}
          <div className="card-body">
            {this.state.comparedProducInfo !== null && <h6 className="card-subtitle mb-2 text-muted">{this.state.comparedProducInfo.category}</h6>}
            {this.state.comparedProducInfo !== null && <h5 className="card-title">{this.state.comparedProducInfo.name}</h5>}
            {this.state.defaultItem !== null && <Price defaultItem={this.state.defaultItem} />}
            {this.state.reviewRating !== -1 && <StarRating value={this.state.reviewRating} />}
          </div>
          {this.state.show && (
            <Compare
              show={this.state.show}
              comparedProductInfo={this.state.comparedProducInfo}
              currentProductInfo={this.props.currentProductInfo}
              changeShow={this.changeShow}
            />
          )}
        </div>
        {this.props.type === 'related' && <FaRegStar title="star" className="iconTop" onClick={() => { this.starClicked = true; this.setState({ show: true }); }} />}
        {this.props.type === 'outfit' && <BsXLg className="iconTop" element="comparison" onClick={() => { this.props.deleteOutfit(this.props.id); }} />}
      </div>
    );
  }
}

export default Card;

