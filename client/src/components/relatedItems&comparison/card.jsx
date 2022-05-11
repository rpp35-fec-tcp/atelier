import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';

const Card = () => {
  return (
    <div className="card" style={{width: '20%'}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Category</h6>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Price</p>
         <Icon icon="fa:star" />
         <Icon icon="fa:star-half-empty" />
         <Icon icon="fa:star-o" />
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;

