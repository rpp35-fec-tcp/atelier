import React from 'react';
import CharacteristicBar from './CharacteristicBar';
import './ProductBreakdown.css';

const ProductBreakdown = (props) => (
  <div className='product-breakdown'>
    {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
      (characteristic) => (
        props.characteristics[characteristic]
        && typeof props.characteristics[characteristic].value === 'string'
        ? <div
            className='characteristic'
            key={props.characteristics[characteristic].id}
          >
            <div>{characteristic}</div>
            <CharacteristicBar
              characteristic={characteristic}
              value={Number(props.characteristics[characteristic].value)}
            />
          </div>
        : null)
    )}
  </div>
);

export default ProductBreakdown;
