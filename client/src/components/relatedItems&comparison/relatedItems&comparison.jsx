import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import Simple from './carousel.jsx';
import './related.css';

const RelatedComponent = () => {
  return (
    <div className='exceptOverview'>
      <h1>Related Product</h1>
      <Simple />
    </div>
  );
}

export default RelatedComponent;