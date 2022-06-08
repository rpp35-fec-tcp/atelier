/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import StarRating from './starRating';
import Price from './price';
import Compare from './compare';
import Interaction from './interactions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparedProductInfo: this.props.productInfo,
      show: false,
    };
    this.starClicked = false;
    this.changeShow = this.changeShow.bind(this);
    this.cardClicked = this.cardClicked.bind(this);
  }

  changeShow() {
    this.setState({ show: false });
  }

  cardClicked(e) {
    if (this.starClicked === false) {
      this.props.changeCurrentProductId(this.state.comparedProductInfo.id);
      Interaction(e.target.getAttribute('element'), 'related');
    } else {
      this.starClicked = false;
    }
  }

  render() {
    return (
      <div>
        <div className="card" role="button" tabIndex="0" onClick={(e) => this.cardClicked(e)}>

          <div className="image-holder"><img src={this.state.comparedProductInfo.defaultItem.photos[0].thumbnail_url} element="changeCardClicked" className="card-image" alt={this.state.comparedProductInfo.defaultItem.name}/></div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{this.state.comparedProductInfo.category}</h6>
            <h5 className="card-title">{this.state.comparedProductInfo.name}</h5>
            <Price defaultItem={this.state.comparedProductInfo.defaultItem} />
            {this.state.comparedProductInfo.reviewRating !== -1 && <StarRating value={this.state.comparedProductInfo.reviewRating} />}
          </div>
          {this.state.show && (
            <Compare
              show={this.state.show}
              comparedProductInfo={this.state.comparedProductInfo}
              currentProductInfo={this.props.currentProductInfo}
              changeShow={this.changeShow}
            />
          )}
        </div>
        {this.props.type === 'related' && <FaRegStar title="star" className="iconTop" onClick={() => { this.starClicked = true; this.setState({ show: true }); }} />}
        {this.props.type === 'outfit' && <BsXLg className="iconTop" element="comparison" onClick={() => { this.props.deleteOutfit(this.props.productInfo.id); }} />}
      </div>
    );
  }
}

export default Card;
